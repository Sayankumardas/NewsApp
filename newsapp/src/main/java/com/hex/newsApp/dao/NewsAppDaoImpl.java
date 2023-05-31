package com.hex.newsApp.dao;
import java.sql.SQLException;
//CHECKSTYLE:OFF 
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import com.hex.newsApp.model.News;

@Repository
public class NewsAppDaoImpl implements NewsAppDao {

    @Autowired
    private HibernateTemplate template;

    public HibernateTemplate getTemplate() {
        return template;
    }

    public void setTemplate(HibernateTemplate template) {
        this.template = template;
    }
@Override
	public List<News> findAll() {
       //To-Do
		SessionFactory factory=template.getSessionFactory();
		Session session=factory.openSession();
		CriteriaBuilder criteriaBuilder= session.getCriteriaBuilder();
		CriteriaQuery<News> criteriaQuery = criteriaBuilder.createQuery(News.class);
		Root<News> root= criteriaQuery.from(News.class);
		
		CriteriaQuery<News> criteriaQuery2=criteriaQuery.select(root);
		Query<News> query=session.createQuery(criteriaQuery2);
		List<News> newsList=query.getResultList();
		return newsList;

    }

@Override
public News findById(int id) {
	// TODO Auto-generated method stub
	SessionFactory factory=template.getSessionFactory();
	Session session = factory.openSession();
	News news=session.get(News.class, id);
	return news;
}

@Override
public News updateNews(News n,int id) {
	// TODO Auto-generated method stub
	SessionFactory factory=template.getSessionFactory();
	Session session =factory.openSession();
	News news=session.get(News.class,id);
	if(news != null) {
		Transaction tx;
		try {
			tx=session.beginTransaction();
			news.setAuthor(n.getAuthor());
			news.setCategory(n.getCategory());
			news.setDate(n.getDate());
			news.setDescription(n.getDescription());
			news.setSubcategory(n.getSubcategory());
			news.setTitle(n.getTitle());
			session.saveOrUpdate(news);
			tx.commit();
		}
		catch(Exception e) {
			throw e;
		}
		
	}
	return n;
}

@Override
public News addNews(News news) {
	// TODO Auto-generated method stub
	SessionFactory factory=template.getSessionFactory();
	Session session=factory.openSession();
	Transaction tx;
	try {
		tx=session.beginTransaction();
		int id=(int)session.save(news);
		tx.commit();
	}
	catch(Exception e) {
		throw e;
	}
	
	return news;
}

@Override
public News deleteNews(int id) {
	// TODO Auto-generated method stub
	SessionFactory factory=template.getSessionFactory();
	Session session=factory.openSession();
	News news=session.get(News.class,id);
	if(news != null) {
		Transaction tx;
		try {
			tx=session.beginTransaction();
			session.delete(news);
			tx.commit();
		}
		catch(Exception e) {
			throw e;
		}
	}
	return news;
}

@Override
public List<News> getNewsByCat(String category, String subcategory) {
	// TODO Auto-generated method stub
	SessionFactory factory=template.getSessionFactory();
	Session session=factory.openSession();	
	Transaction tx=session.beginTransaction();
	String hql = "FROM News where category = "
			+ ":category And subcategory = :subcategory";
	Query query = session.createQuery(hql);
	query.setParameter("category", category);
	query.setParameter("subcategory", subcategory);
	List<News> resultNews = query.list();
	tx.commit();
	return resultNews;
}
}