DROP DATABASE IF EXISTS earworm_db;
CREATE DATABASE earworm_db;

\c earworm_db;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE
);

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre_name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  img_url VARCHAR,
  user_id INT REFERENCES users(id),
  genre_id INT REFERENCES genres(id)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  song_id INT REFERENCES songs(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_body TEXT NOT NULL,
  user_id INT REFERENCES users(id),
  song_id INT REFERENCES songs(id)
);

INSERT INTO users (username) VALUES ('doge'), ('80srockie'), ('k-indie'), ('carl123'), ('djmusik'), ('music247'), ('hipgal'), ('joe123'), ('airmusic'), ('rhymesguy');
INSERT INTO genres (genre_name) VALUES ('rock'), ('indie'), ('pop'), ('hip-hop'), ('rap');
INSERT INTO songs (title, img_url, user_id, genre_id) VALUES ('Bohemian Rhapsody', 'https://www.nova.ie/wp-content/uploads/2018/12/Bohemian-Rhapsody-COVER.jpg', 1, 1), ('La Leyenda del Hada y el Mago', 'https://pm1.narvii.com/6699/4437b8d1e848761999d452bd8f30b91718cf45b9_hq.jpg', 1, 1), ('Livin On A Prayer', 'https://img.cdandlp.com/2013/09/imgL/116176124.jpg', 2, 1), ('Numb', 'https://i.ytimg.com/vi/W5JD9svyq5A/maxresdefault.jpg', 2, 2), ('Lalala', 'https://i.ytimg.com/vi/GpfJlGr3O4k/maxresdefault.jpg', 3, 2), ('Just the Two of Us', 'http://3.bp.blogspot.com/-e7l2RYgRbMY/UW54XJsBrYI/AAAAAAAABeI/8XHs-yuz1Bg/s1600/URBAN+ZAKAPA+-+JUST+A+LITTLE+BIT.jpg', 3, 2), ('Mirrors', 'http://4.bp.blogspot.com/-2GH2QxFN8TM/Us1RfdnJO0I/AAAAAAAAAIc/wFiEQrc4DRY/s1600/justin-timberlake-Mirrors.jpg', 4, 3), ('She Will Be Loved', 'https://m.media-amazon.com/images/M/MV5BMzAwNzY5MGYtZDM1NC00OTE0LWJjNzItMmNjNjE2N2M0ZWZjXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg', 5, 3), ('How to Save a Life', 'https://images.genius.com/c3b6376b4285eee7451c117eb00da34c.1000x1000x1.jpg', 6, 3), ('All I Wanna Do', 'https://vignette.wikia.nocookie.net/kpop/images/2/25/Jay_Park_All_I_Wanna_Do_cover.png/revision/latest?cb=20170402221933', 7, 4), ('All Falls Down', 'https://djbooth.net/.image/t_share/MTUzNDg2MDMzMzU3Nzc2MDcw/kanye-west-all-falls-downjpg.jpg', 7, 4), ('In my Feelings', 'http://urban96.fm/wp-content/uploads/2018/07/drake-in-my-feelings.jpg', 8, 4), ('I can', 'https://i.ytimg.com/vi/eowzyZ_v9zI/maxresdefault.jpg', 9, 5), ('Eureka', 'https://i0.wp.com/kultscene.com/wp-content/uploads/2016/02/Untitled-design-1.png', 10, 5), ('Life Goes On', 'https://i.ytimg.com/vi/EA6GVXLwWQQ/maxresdefault.jpg', 10, 5);
INSERT INTO favorites (user_id, song_id) VALUES (1, 15), (1, 14), (1, 13), (1, 12), (2, 15), (2, 14), (2, 13), (2, 12), (3, 15), (3, 14), (3, 13), (3, 12), (4, 11), (4, 10), (4, 9), (4, 8), (5, 11), (5, 10), (5, 9), (5, 8), (6, 7), (6, 6), (6, 5), (6, 4), (7, 7), (7, 6), (7, 5), (7, 4), (8, 3), (8, 2), (8, 1), (8, 3), (9, 2), (9, 1), (9, 3), (9, 2), (10, 1), (10, 4), (10, 8), (10, 7);
INSERT INTO comments (comment_body, user_id, song_id) VALUES
('Great vibes!', 10, 1), ('Who is the artist?', 10, 2), ('Loving the guitar', 9, 2), ('Take me back to my childhood', 9, 3), ('Love the song', 8, 4),
('Just my style', 8, 4), ('Listening to this in 2019', 7, 5), ('Helps me do my hw XD', 7, 6), ('@doge You will like this', 6, 8), ('This has been my song for years', 5, 7),
('Here for the artist', 5, 9), ('Passing by. Sup peeps!', 4, 9), ('Who came here because of that new show that no one cares about? Me too.', 4, 10), ('Song to get through the day', 3, 11), ('Feeling the beat', 3, 12),
('Not my type of music but so addictive', 2, 13), ('Get this song out of my head', 2, 12), ('Oldies are the goodies', 1, 14), ('RIP my friend', 1, 15), ('@music247 thanks man!', 1, 8);
