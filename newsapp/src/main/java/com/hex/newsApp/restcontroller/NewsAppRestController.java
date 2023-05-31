package com.hex.newsApp.restcontroller;
//CHECKSTYLE:OFF 
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hex.newsApp.model.News;
import com.hex.newsApp.service.NewsAppService;

@RestController
public class NewsAppRestController {

	@Autowired
	private NewsAppService NewsService;
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value="/news/addNews",method=RequestMethod.POST)
	public News addNews(@RequestBody News news) {
		News n=NewsService.addNews(news);
		return n;
	}
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value = "/news", method = RequestMethod.GET, headers = "Accept=application/json")
	public List<News> getAllNews() {
//To-Do
		List<News> newsList=NewsService.getAll();
  		return newsList;
	}
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value="/viewNews/{id}",method= RequestMethod.POST)
	public News getNewsById(@PathVariable("id") int id){
		News newsList=NewsService.getById(id);
		return newsList;
	}
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value="/updateNews/{id}",method=RequestMethod.POST)
	public News updateNewsById(@RequestBody News news,@PathVariable("id") int id) {
		return NewsService.updateNews(news,id);
	}
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value="/DeleteNews/{id}",method=RequestMethod.POST)
	public News deleteNewsById(@PathVariable("id") int id) {
		return NewsService.deleteNewsById(id);
	}
	@CrossOrigin(origins ="http://localhost:3000")
	@RequestMapping(value="/getNews/{category}/{subcategory}",method=RequestMethod.POST)
	public List<News> getNewsByCat(@PathVariable("category") String category,@PathVariable("subcategory") String subcategory) {
		return NewsService.getNewsByCat(category,subcategory);
	}
}
