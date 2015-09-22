define([
          'jquery',
          'handlebars',
          'bootstrap',
          'jquery.ui.widget',
          'jquery.iframe-transport',
          'jquery.fileupload',
          'canvas-to-blob',
          'load-image',
          'jquery.fileupload-process',
          'jquery.fileupload-image',
          'jquery.fileupload-audio',
          'jquery.fileupload-video',
          'jquery.fileupload-validate',
          'app/common'
       ], function($, handlebars){
  var currPageNo = 1;
  var pageSize = 3;
  
  return {
    listBoard: function(pageNo, pageSize) {
      var moduleObj = this;
      $.getJSON(contextRoot + '/json/member/list.do', 
        {
          pageNo: pageNo,
          pageSize: pageSize,
        }, 
        function(result) {
          currPageNo = result.pageNo;
          $('#pageNo').text(currPageNo);
          
          var tbody = $('#listTable tbody');
          $('.data-row').remove();
          
          // handlebars 라이브러리를 이용하여 테이블 tr 태그 생성 
          var source = $('#template1').html();
          var template = handlebars.compile(source);
          var content = template(result);
          $('#listTable tbody').html(content);
          
          // 이전, 다음 버튼 처리
          if (result.pageNo > 1) {
            $('#prevBtn').removeAttr('disabled');
          } else {
            $('#prevBtn').attr('disabled', 'disabled');
          }
          
          if (result.isNextPage) {
            $('#nextBtn').removeAttr('disabled');
          } else {
            $('#nextBtn').attr('disabled', 'disabled');
          }
          
          $('.nameLink').click(function(event){
            event.preventDefault();
            moduleObj.detailBoard(this.getAttribute('no'));
            $('.my-view').css('display', '');
            $('.my-new').css('display', 'none');
          });
      });
    }, //listBoard()

    detailBoard: function(no) {
      $.getJSON(contextRoot + '/json/member/detail.do?no=' + no, function(result) {
        var data = result.data;
        $('#fNo').val(data.no);
        $('#fName').val(data.name);
        $('#fEmail').val(data.email);
        $('#fTel').val(data.tel);
        $('#fCreateDate').text(data.yyyyMMdd);
        $('#fPhoto').val(data.photo);
        $('#photoImg')
          .attr('src', contextRoot + '/files/' + data.photo);
      });
    }, //detailBoard()

    deleteBoard: function(no) {
      var moduleObj = this;
      $.getJSON(contextRoot + '/json/member/delete.do?no=' + no, function(result) {
        if (result.data == 'success') {
          alert('삭제 성공입니다.');
          moduleObj.listBoard(currPageNo, pageSize);
          $('#cancelBtn').click();
        } else {
          alert('삭제할 수 없습니다.');
        }
      });
    }, //deleteBoard()

    updateBoard: function() {
      var moduleObj = this;
      $.ajax(contextRoot + '/json/member/update.do',
        {
          method: 'POST',
          dataType: 'json',
          data: {
            no: $('#fNo').val(),
            name: $('#fName').val(),
            email: $('#fEmail').val(),
            tel: $('#fTel').val(),
            password: $('#fPassword').val(),
            photo: $('#fPhoto').val()
          },
          success: function(result) {
            if (result.data == 'success') {
              alert('변경 성공입니다.');
              moduleObj.listBoard(currPageNo, pageSize);
              $('#cancelBtn').click();
            } else {
              alert('변경할 수 없습니다.');
            }
          }
        });
    }, //updateBoard()

    insertBoard: function() {
      var moduleObj = this;
      $.ajax(contextRoot + '/json/member/insert.do',
        {
          method: 'POST',
          dataType: 'json',
          data: {
            name: $('#fName').val(),
            email: $('#fEmail').val(),
            tel: $('#fTel').val(),
            password: $('#fPassword').val(),
            photo: $('#fPhoto').val()
          },
          success: function(result) {
            if (result.data == 'success') {
              alert('입력 성공입니다.');
              moduleObj.listBoard(1, pageSize);
              $('#cancelBtn').click();
            } else {
              alert('입력할 수 없습니다.');
            }
          }
        });
    }, //insertBoard()
    init: function() {
      var moduleObj = this;
      
      $('.my-view').css('display', 'none');
      $('.my-new').css('display', '');

      $('#prevBtn').click(function(event) {
        event.preventDefault();
        if ($(this).attr('disabled') == 'disabled') {
          return;
        }
        moduleObj.listBoard(currPageNo - 1, pageSize);
      });

      $('#nextBtn').click(function(event) {
        event.preventDefault();
        if ($(this).attr('disabled') == 'disabled') {
          return;
        }
        moduleObj.listBoard(currPageNo + 1, pageSize);
      });

      $('#deleteBtn').click(function(event) {
        event.preventDefault();
        moduleObj.deleteBoard($('#fNo').val());
      });

      $('#updateBtn').click(function(event) {
        event.preventDefault();
        moduleObj.updateBoard();
      });

      $('#insertBtn').click(function(event) {
        event.preventDefault();
        moduleObj.insertBoard();
      });

      $('#cancelBtn').click(function(event) {
        $('.my-view').css('display', 'none');
        $('.my-new').css('display', '');
        $('#files').html('');
        $('#progress .progress-bar').css('width', '0%');
      });
      
      $('#fEmail').keyup(function(event) {
        $.getJSON(
            contextRoot + '/json/member/existEmail.do',
            {
              email: $(this).val()
            },
            function(result) {
              if (result.data == 'no') {
                $('#message')
                  .removeClass('my-message-warning')
                  .addClass('my-message-success')
                  .html('사용 가능합니다.');
              } else {
                $('#message')
                  .removeClass('my-message-success')
                  .addClass('my-message-warning')
                  .html('이미 등록된 이메일입니다.');
              }
        });
      });
      
      
      $('#fileupload').fileupload({
        url: contextRoot + '/json/file/upload.do',
        dataType: 'json',
        maxFileSize: 10000000,
        disableImageResize: /Android(?!.*Chrome)|Opera/
          .test(window.navigator.userAgent),
        previewMaxWidth: 100,
        previewMaxHeight: 100,
        previewCrop: true
      }).on('fileuploadsubmit', function(e, data) {
        // 서버에 일반 폼 데이터도 보내고 싶으면, submit 하기 전에
        // 다음과 같이 formData 프로퍼티에 값을 설정하라!
        /*
        data.formData = {
          data1: 'okok',
          data2: 'nono'
        };
        */
      }).on('fileuploaddone', function(e, data) {
        console.log(data.result);
        $('#files').html('');
        $.each(data.result.data, function (index, file) {
            $('<img>')
              .attr('src', file.url)
              .css('width', '100px')
              .appendTo('#files');
            $('<span/>')
            .text(file.name 
                + '(' + file.originName + ')'
                + ', ' + file.size)
                .appendTo('#files');
            $('#fPhoto').val(file.name);
        });
      }).on('fileuploadprogressall', function (e, data) {
        var progress = parseInt(
            data.loaded / data.total * 100, 10);
        $('#progress .progress-bar').css(
            'width',
            progress + '%'
        );
      });
      
    } //init()
  };
});









  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  




