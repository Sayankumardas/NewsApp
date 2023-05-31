package com.hex.newsApp.service;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hex.newsApp.model.News;
import com.hex.newsApp.dao.NewsAppDao;

@Service
public class NewsAppServiceImpl implements NewsAppService {

	@Autowired
	private NewsAppDao NewsDao;

	@Override
	public List<News> getAll() {
		// TODO Auto-generated method stub
		return NewsDao.findAll();
	}

	@Override
	public News getById(int id) {
		// TODO Auto-generated method stub
		return NewsDao.findById(id);
	}

	@Override
	public News updateNews(News n,int id) {
		// TODO Auto-generated method stub
		return NewsDao.updateNews(n,id);
	}

	@Override
	public News addNews(News news) {
		// TODO Auto-generated method stub
		return NewsDao.addNews(news);
	}

	@Override
	public News deleteNewsById(int id) {
		// TODO Auto-generated method stub
		return NewsDao.deleteNews(id);
	}

	@Override
	public List<News> getNewsByCat(String category, String subcategory) {
		// TODO Auto-generated method stub
		return NewsDao.getNewsByCat(category,subcategory);
	}

}
