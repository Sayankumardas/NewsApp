package com.hex.newsApp.dao;
//CHECKSTYLE:OFF 
import java.util.List;

import com.hex.newsApp.model.News;

public interface NewsAppDao {
  //To-Do
	public List<News> findAll();
	public News findById(int id);
	public News updateNews(News n, int id);
	public News addNews(News news);
	public News deleteNews(int id);
	public List<News> getNewsByCat(String category, String subcategory);
}
