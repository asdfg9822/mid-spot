package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.RcmdCompCate;
import net.bitacademy.java72.domain.Start;

public interface StartDao {
    int insert(Start start);
    List<Start> partiMembList(Start start);
    List<Start> start(Map<String, Object> paramMap);
    List<Start> list(Start start);
    List<RcmdCompCate> partiCateList(int meetNo);
    int update(Start start);
}











