package net.bitacademy.java72.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bitacademy.java72.dao.MeetDao;
import net.bitacademy.java72.domain.Meet;
import net.bitacademy.java72.domain.PartiMemb;
import net.bitacademy.java72.service.MeetService;

@Service
public class MeetServiceImpl implements MeetService {
	@Autowired
	MeetDao meetDao;

	@Override
	public List<Meet> list(int pageNo, int pageSize) {
		int startIndex = (pageNo - 1) * pageSize;
		if (startIndex < 0) {
			startIndex = 0;
		}

		Map<String, Object> paramMap = new HashMap<String, Object>();
		paramMap.put("startIndex", startIndex);
		paramMap.put("pageSize", pageSize);
		return meetDao.list(paramMap);

	}

	@Override
	public int delete(int no) {
		return meetDao.delete(no);
	}

	@Override
	public int update(Meet meet) {
		return meetDao.update(meet);
	}

	@Override
	public int insert(Meet meet) {
		return meetDao.insert(meet);
	}

	@Override
	public Meet get(int meetNo) {
		return meetDao.get(meetNo);
	}

	@Override
	public int countAll() {
		return meetDao.countAll();
	}

	@Override
	public List<PartiMemb> partiMembList(int partiNo) {
		// TODO Auto-generated method stub
		return meetDao.partiMembList(partiNo);
	}
}
