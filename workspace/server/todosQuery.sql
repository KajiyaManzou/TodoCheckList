
-- データ作成
insert into todos values('aaaa1111', 'todo1', 'todo1 read books', NOW(), CAST('1900-01-01' as date), 0);
insert into todos values('aaaa1112', 'todo2', 'todo2 ride bike', NOW(), CAST('1900-01-01' as date), 0);
insert into todos values('aaaa1113', 'todo3', 'todo3 create program', NOW(), CAST('1900-01-01' as date), 0);

insert into tags values('bbbb1111', 'private', NOW(), CAST('1900-01-01' as date), 0);
insert into tags values('bbbb1112', 'work', NOW(), CAST('1900-01-01' as date), 0);

insert into tag_maps values('cccc1111', 'aaaa1111', 'bbbb1111');
insert into tag_maps values('cccc1113', 'aaaa1113', 'bbbb1112');

-- todo一覧
select t.*, ifnull(g.tag, '') as tag from todos as t left outer join tag_maps as m on t.id = m.todoid left outer join tags as g on m.tagId = g.id;

--　todo削除
delete from todos where id = '*******';

-- todo更新
update todos set title = '******', todo = '*******' where id = '********';

-- todo抽出
select t.*, ifnull(g.tag, '') as tag from todos as t left outer join tag_maps as m on t.id = m.todoid left outer join tags as g on m.tagId = g.id where t.id = '******';

-- tag一覧
select * from tags;

-- tag削除
delete from tags where id = '*******';

-- tag更新
update tags set tag = '******' where id = '*********';

-- tag_maps削除
delete tag_maps where id = '********';