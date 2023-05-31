package com.hex.newsApp.service;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.stereotype.Service;

import com.hex.newsApp.model.News;

@Service
public interface NewsAppService {
	
	public List<News> getAll();
	public News getById(int id);
	public News updateNews(News n,int id);
	public News addNews(News news);
	public News deleteNewsById(int id);
	public List<News> getNewsByCat(String category, String subcategory);
}
