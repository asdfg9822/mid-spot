package net.bitacademy.java72.dao;

import java.util.List;
import java.util.Map;

import net.bitacademy.java72.domain.Pick;


public interface PickDao {

	List<Pick> pickList(int meetNo);

	List<Pick> pickGet();
}











