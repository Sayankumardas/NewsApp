create database restdb_78287;
use restdb_78287;

create table news(id int(11) AUTO_INCREMENT, author varchar(255), category varchar(255), date datetime DEFAULT CURRENT_TIMESTAMP, description varchar(255), subcategory varchar(255), title varchar(255), PRIMARY KEY(id));

insert into news (author, category, date, subcategory, title, description) 
values('William Mougayar', 'National', '2018-03-13', 'Entertainment',
'Viral: Priyanka Chopra And Nick Jonas Mumbai Reception Invite. Details Inside - NDTV News', 
'The reception invite has been sent out by actress mother Madhu Chopra on behalf of Priyanka Chopra and Nick Jonas');

insert into news (author, category, date, subcategory, title, description) 
values('Tony Spilotro','National', '2017-09-12', 'Entertainment', 'Anushka Sharma, Virat Kohli, Akshay Kumar were behind Instagram’s ‘most loved’ pics of 2018. See them here - Hindustan Times', 
'Celebrity couple Virat Kohli and Anushka Sharma’s Instagram posts for each other were the most loved pictures of 2018 on the photo sharing app.');

insert into news (author, category, date, subcategory, title, description) 
values('Maren Estrada','National', '2018-12-11', 'Entertainment', 
'Alia Bhatts Reply When Asked If She Can Be Called Alia Kapoor Will Stump You - NDTV News', 
'Check out the Twitter conversation Alia Bhatt had with a fan');

insert into news (author, category, date, subcategory, title, description) 
values('Ankit Subarno','National', '2018-12-18', 'Entertainment', 
'Sushant Singh Rajput Reviews Ankita Lokhandes Look As Jhalkari Bai From Manikarnika - NDTV News', 
'New Delhi: The official look of Ankita Lokhande as Jhalkari Bai from Manikarnika: The Queen Of Jhansi was unveiled on Thursday and guess who was one of the first ones to review her look from the film? Well,');

insert into news (author, category, date, subcategory, title, description) 
values('Ro', 'International', '2019-01-19', 'Technology',
'Huawei P30 Pro to come with a notch and curved display - GSMArena.com news - GSMArena.com', 
'Because Samsung keeps its Infinity-O panels for itself.');

insert into news (author, category, date, subcategory, title, description) 
values('Adrian Diaconescu', 'International', '2019-01-11', 'Technology',
'Both the refurbished Pixel 2 and Pixel 2 XL are available for $390 and up today only - Phone Aren', 
'You can buy a refurbished 64GB Pixel 2 or Pixel 2 XL for only $390 today from Woot, while a 128 gig Pixel 2 XL configuration costs $429.99 for an extremely limited time....');

insert into news (author, category, date, subcategory, title, description) 
values('Nate Oh', 'International', '2019-01-10', 'Technology',
'AMD Releases Radeon Software Adrenalin 2019 Edition: Streaming for Videos, Games, & VR - AnandTech', 
'As 2018 winds down, once again it’s time for AMD’s annual major feature update for their graphics drivers, Radeon Software. Going by the unassuming title of ‘Radeon Software Adrenalin 2019 Edition’,');

insert into news (author, category, date, subcategory, title, description) 
values('Shruti Dhapola', 'International', '2019-01-17', 'Technology',
'Super Smash Bros. Ultimate DLC Characters We Want To See - GameSpot', 
'Super Smash Bros. Ultimate brings every single character from the series past to Nintendo Switch, plus a few new ones. Theres also a handful of DLC coming');

insert into news (author, category, date, subcategory, title, description) 
values('Ciara Linnane', 'International', '2018-12-29', 'Business',
'GE shares on track for biggest one-day rise in 3 years as long-term bear turns slightly less bearish - MarketWatch', 
'General Electric Co. shares got a double boost Thursday, when a long-time bear upgraded the stock and it announced the launch of an industrial Internet of Things unit that will be run independently of the main company.');

insert into news (author, category, date, subcategory, title, description) 
values('Jackie Wattles', 'International', '2019-01-01','Business',
'Virgin Galactics supersonic plane reaches space - CNN', 
'Virgin Galactics supersonic space plane soared into the upper reaches of Earths atmosphere Thursday for a milestone flight.  The successful flight indicates the company is not far off from sending tourists to space.');

insert into news (author, category, date, subcategory, title, description) 
values('Investing.com', 'International', '2019-01-03', 'Business',
'Delta Spooks Investors; Airlines Slump Midday By - Investing.com', 
'Delta Spooks Investors; Airlines Slump Midday');

insert into news (author, category, date, subcategory, title, description) 
values('Nathaniel Meyersohn', 'International', '2019-01-13', 'Business',
'Costco: Retails overlooked holiday winner - CNN', 
'Retailers are trying to draw holiday shoppers with splashy perks like free shipping, convenient new ways to shop, and mobile checkout in stores.');
