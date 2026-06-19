const siteMovies = [
  {
    "id": "0001",
    "title": "我的兄弟不可能这么萌",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "性转",
      "兄弟",
      "日常"
    ],
    "oneLine": "直男哥哥一觉醒来，发现自己的弟弟变成了萌妹，而全世界只有他记得弟弟本来的样子。",
    "cover": "./1.jpg",
    "url": "./video-0001.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0002",
    "title": "小活佛",
    "region": "意大利 / 英国 / 尼泊尔",
    "type": "电影",
    "year": "1993",
    "genre": "剧情, 奇幻",
    "tags": [
      "宗教",
      "转世",
      "喇嘛",
      "修行"
    ],
    "oneLine": "一位喇嘛前往西雅图寻找一位圆寂高僧的转世灵童，对象竟是一个金发碧眼的小男孩。",
    "cover": "./2.jpg",
    "url": "./video-0002.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0003",
    "title": "克里夫兰秀第四季",
    "region": "美国",
    "type": "动漫",
    "year": "2012",
    "genre": "喜剧 / 动画 / 成人向",
    "tags": [
      "恶搞",
      "美式动画",
      "家庭",
      "种族梗",
      "无厘头"
    ],
    "oneLine": "中年发福的黑人克里夫兰搬回老家弗吉尼亚，带着他的奇葩家人和邻居，继续上演无下限的搞笑日常。",
    "cover": "./3.jpg",
    "url": "./video-0003.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0004",
    "title": "荒漠怪侠赤手闯天涯",
    "region": "美国",
    "type": "电影",
    "year": "1969",
    "genre": "西部冒险",
    "tags": [
      "反英雄",
      "赤手空拳",
      "沙暴追逐",
      "硬汉"
    ],
    "oneLine": "枪手被剥夺武器后扔进死亡沙漠，为了复仇，他要用拳头活着走出去。",
    "cover": "./4.jpg",
    "url": "./video-0004.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0005",
    "title": "热血神探",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 动作, 悬疑",
    "tags": [
      "民国",
      "推理",
      "无厘头"
    ],
    "oneLine": "一个信奉科学的“杠精”神探，来到民风淳朴但全是装神弄鬼奇案的小镇，用物理化学手撕封建迷信。",
    "cover": "./5.jpg",
    "url": "./video-0005.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0006",
    "title": "自闭儿之路",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，传记",
    "tags": [
      "自闭症",
      "教育",
      "温情"
    ],
    "oneLine": "一位单亲妈妈带着重度自闭症儿子跨越美国大陆，只为寻找一所能接纳他的“怪胎学校”。",
    "cover": "./6.jpg",
    "url": "./video-0006.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0007",
    "title": "永不退缩：决不放弃",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "动作, 体育, 励志",
    "tags": [
      "综合格斗",
      "父亲",
      "复仇",
      "地下拳场",
      "救赎"
    ],
    "oneLine": "一位过气格斗冠军为救被绑架的女儿，被迫重返地下的“永不退缩”死亡锦标赛。",
    "cover": "./7.jpg",
    "url": "./video-0007.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0008",
    "title": "金枝欲孽2粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2013",
    "genre": "剧情 / 古装 / 宫斗",
    "tags": [
      "后宫",
      "人性",
      "粤语原声",
      "女性群像"
    ],
    "oneLine": "嘉庆年间后宫再起风云，新一批秀女入宫，与旧人展开一场没有硝烟的生存之战。",
    "cover": "./8.jpg",
    "url": "./video-0008.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0009",
    "title": "白鹿原2017",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2017",
    "genre": "历史、家庭",
    "tags": [
      "关中平原",
      "宗族",
      "时代变迁"
    ],
    "oneLine": "白鹿两姓争斗半世纪，最后发现原上根本没有白鹿。",
    "cover": "./9.jpg",
    "url": "./video-0009.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0010",
    "title": "左岸，右岸",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，奇幻，悬疑",
    "tags": [
      "塞纳河",
      "双城",
      "双重身份",
      "镜像",
      "错过"
    ],
    "oneLine": "一对灵魂伴侣分别住在塞纳河左岸和右岸，每晚入梦时他们会交换身体，醒来后却忘记彼此。",
    "cover": "./10.jpg",
    "url": "./video-0010.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0011",
    "title": "冬景",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑",
    "tags": [
      "东北",
      "犯罪",
      "冬日",
      "人性",
      "黑色电影"
    ],
    "oneLine": "一座北方工业小城的连环失踪案，将一名退休刑警、一位单亲母亲与一个沉默少年隐秘地联系在了一起。",
    "cover": "./11.jpg",
    "url": "./video-0011.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0012",
    "title": "尸兄第二季",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2025",
    "genre": "丧尸喜剧",
    "tags": [
      "末世",
      "国漫",
      "沙雕"
    ],
    "oneLine": "丧尸病毒爆发五年后，人类重建文明，但“尸兄”们竟然觉醒了意识并想申请公民权。",
    "cover": "./12.jpg",
    "url": "./video-0012.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0013",
    "title": "我不太懂你",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情/家庭",
    "tags": [
      "代际",
      "自闭症",
      "兄弟",
      "救赎",
      "独立电影"
    ],
    "oneLine": "华尔街精英被迫回老家照顾患有重度自闭症的哥哥，才发现不懂数学题没什么，不懂亲人才最可怕。",
    "cover": "./13.jpg",
    "url": "./video-0013.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0014",
    "title": "逆境追凶",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 动作, 悬疑",
    "tags": [
      "追凶",
      "边境",
      "以暴制暴",
      "现实主义",
      "硬汉"
    ],
    "oneLine": "女儿被拐后，懦弱的父亲成了道上闻风丧胆的“复仇猎犬”。",
    "cover": "./14.jpg",
    "url": "./video-0014.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0015",
    "title": "比海更深",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "是枝裕和风",
      "生活流",
      "治愈"
    ],
    "oneLine": "离婚后不愿放弃“父亲”身份的废柴男，在台风夜与前妻和儿子被迫共处一室，才发现爱比海更深，也比现实更无力。",
    "cover": "./15.jpg",
    "url": "./video-0015.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0016",
    "title": "超级武神之索命决",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2017",
    "genre": "武侠 / 动作 / 悬疑",
    "tags": [
      "武林盟主",
      "生死状",
      "十二时辰",
      "木人巷",
      "毒酒局"
    ],
    "oneLine": "前任武林盟主被 12 个高手围攻前，给自己下了“索命决”：若他死，所有在场者都会陪葬。",
    "cover": "./16.jpg",
    "url": "./video-0016.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0017",
    "title": "开心勿语",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 爱情",
    "tags": [
      "港式无厘头",
      "欢喜冤家",
      "乌龙",
      "缘分",
      "爆笑"
    ],
    "oneLine": "一个霉运缠身的女孩许愿“让我一年不说话就能转运”，结果全城人以为她是哑巴，疯狂向她表白。",
    "cover": "./17.jpg",
    "url": "./video-0017.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0018",
    "title": "加州打字机",
    "region": "韩国",
    "type": "电视剧",
    "year": "2023",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "打字机",
      "前世今生",
      "作家",
      "灵异"
    ],
    "oneLine": "畅销作家搬进 haunted 老宅，发现一台老式加州打字机会自动打出被遗忘的、自己前世作为日本殖民时期独立运动者的故事。",
    "cover": "./18.jpg",
    "url": "./video-0018.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0019",
    "title": "0722：极右挪威",
    "region": "挪威",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 历史, 犯罪",
    "tags": [
      "纪实",
      "恐怖袭击",
      "司法过程",
      "反思"
    ],
    "oneLine": "2011年挪威于特岛惨案之后，唯一的幸存者家庭的父亲，决定在法庭上面对凶手说出“我原谅你”。",
    "cover": "./19.jpg",
    "url": "./video-0019.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0020",
    "title": "最后印地安",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 西部 / 历史",
    "tags": [
      "印第安人",
      "文化灭绝",
      "复仇",
      "史诗"
    ],
    "oneLine": "最后一个纯血印第安人，为死去的部族和语言，向现代文明发出了无声的控诉。",
    "cover": "./20.jpg",
    "url": "./video-0020.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0021",
    "title": "人间至味是清欢",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 美食",
    "tags": [
      "美食",
      "治愈",
      "城市变迁"
    ],
    "oneLine": "一位失意的米其林大厨回到老城区，在即将被拆迁的苍蝇馆子里，找回了最朴素的人间至味。",
    "cover": "./21.jpg",
    "url": "./video-0021.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0022",
    "title": "书剑恩仇录",
    "region": "中国香港 / 中国大陆",
    "type": "电视剧",
    "year": "2002",
    "genre": "武侠 / 古装",
    "tags": [
      "金庸",
      "红花会",
      "兄弟情"
    ],
    "oneLine": "红花会总舵主陈家洛为反清复明奔走，却在乾隆皇帝是亲哥哥的秘密前，进退两难。",
    "cover": "./22.jpg",
    "url": "./video-0022.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0023",
    "title": "归来",
    "region": "中国大陆",
    "type": "电影",
    "year": "2014",
    "genre": "剧情/爱情",
    "tags": [
      "失忆",
      "车站",
      "等待",
      "文革"
    ],
    "oneLine": "右派丈夫平反归来，妻子却因病失忆，只认得出年轻时丈夫的照片，再也认不出眼前的他。",
    "cover": "./23.jpg",
    "url": "./video-0023.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0024",
    "title": "山中森林",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情，悬疑",
    "tags": [
      "山林",
      "失踪",
      "家族",
      "秘密"
    ],
    "oneLine": "一群年轻人进入台湾中央山脉寻找传说中的“幽灵村落”，却发现自己的祖辈早已住在那里。",
    "cover": "./24.jpg",
    "url": "./video-0024.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0025",
    "title": "力拔山兮的老婆大人",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧, 动作",
    "tags": [
      "女强男弱",
      "古穿今",
      "霸王别姬"
    ],
    "oneLine": "虞姬穿越成现代总裁，而项羽却变成了她手下那个唯唯诺诺的实习生。",
    "cover": "./25.jpg",
    "url": "./video-0025.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0026",
    "title": "思维游戏",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "科幻, 惊悚",
    "tags": [
      "烧脑",
      "虚拟现实",
      "心理战"
    ],
    "oneLine": "一款能改写记忆的游戏，让玩家在现实与幻觉中迷失自我。",
    "cover": "./26.jpg",
    "url": "./video-0026.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0027",
    "title": "鬼吹灯之九层妖塔",
    "region": "中国大陆",
    "type": "电影",
    "year": "2015",
    "genre": "动作， 奇幻， 冒险",
    "tags": [
      "盗墓",
      "怪兽",
      "胡八一",
      "昆仑山",
      "特效大片"
    ],
    "oneLine": "胡八一深入昆仑山发现九层妖塔，每一层都封印着违背物理法则的史前怪物。",
    "cover": "./27.jpg",
    "url": "./video-0027.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0028",
    "title": "爱的遗产",
    "region": "泰国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 爱情 / 奇幻",
    "tags": [
      "变性",
      "遗嘱",
      "双向暗恋",
      "催泪"
    ],
    "oneLine": "变性后的父亲以闺蜜身份参加自己的葬礼，只为把遗产交给当年那个不敢爱的人。",
    "cover": "./28.jpg",
    "url": "./video-0028.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0029",
    "title": "假如你很富有",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2021",
    "genre": "奇幻喜剧",
    "tags": [
      "穷富互换",
      "人生实验",
      "价值观",
      "搞笑"
    ],
    "oneLine": "毒舌富豪与善良穷人被神秘组织互换人生七天，穷人在豪宅里哭，富豪在贫民窟笑。",
    "cover": "./29.jpg",
    "url": "./video-0029.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0030",
    "title": "猫和老鼠：魔法戒指",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动画, 喜剧, 奇幻",
    "tags": [
      "魔法",
      "冒险",
      "追逐",
      "经典重启"
    ],
    "oneLine": "汤姆和杰瑞争夺一枚能实现愿望的魔法戒指，却意外唤醒了沉睡的远古魔龙。",
    "cover": "./30.jpg",
    "url": "./video-0030.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0031",
    "title": "美味",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 历史 / 美食",
    "tags": [
      "法国大革命背景",
      "首位女厨师",
      "味觉革命",
      "阶层打破"
    ],
    "oneLine": "法国大革命前夕，一位被公爵抛弃的女厨师回到乡村，与神秘男子共同挑战旧时代的饮食规则。",
    "cover": "./31.jpg",
    "url": "./video-0031.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0032",
    "title": "伏霸神枪",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 西部 / 武侠",
    "tags": [
      "沙漠枪手",
      "子弹时间",
      "双枪对决"
    ],
    "oneLine": "大漠深处，一名失忆的快枪手发现自己手上的枪竟封印着师父的灵魂。",
    "cover": "./32.jpg",
    "url": "./video-0032.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0033",
    "title": "白发",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，家庭",
    "tags": [
      "白发",
      "遗愿",
      "母女",
      "代际",
      "染发"
    ],
    "oneLine": "45岁的女儿第一次看到母亲的白发根，才发现母亲已患阿尔茨海默症三年，而她的遗愿清单里只有一条“染一次黑发”。",
    "cover": "./33.jpg",
    "url": "./video-0033.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0034",
    "title": "间谍船",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "动作、悬疑、谍战",
    "tags": [
      "间谍",
      "游轮",
      "伪装",
      "背叛",
      "卧底"
    ],
    "oneLine": "一艘豪华游轮上，五名伪装成游客的间谍各为其主，而他们都不知道船上还藏着一颗核弹。",
    "cover": "./34.jpg",
    "url": "./video-0034.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0035",
    "title": "火烧岛",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": [
      "监狱风云",
      "卧底",
      "暴力美学",
      "黑吃黑"
    ],
    "oneLine": "为调查狱友离奇死亡，卧底警察主动犯下重罪进入恶魔岛监狱，却发现典狱长在经营一个更可怕的买卖。",
    "cover": "./35.jpg",
    "url": "./video-0035.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0036",
    "title": "猫女：猎捕",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作 / 奇幻",
    "tags": [
      "反英雄",
      "超级英雄",
      "盗窃",
      "追逐战"
    ],
    "oneLine": "亦正亦邪的猫女偷走了一枚神秘宝石，却发现自己同时被黑帮、警探和神秘组织三方追杀。",
    "cover": "./36.jpg",
    "url": "./video-0036.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0037",
    "title": "水星领航员第一季",
    "region": "日本",
    "type": "剧集",
    "year": "2005",
    "genre": "科幻/治愈/日常",
    "tags": [
      "水星",
      "领航员",
      "治愈系",
      "未来威尼斯",
      "慢生活"
    ],
    "oneLine": "在改造为水之星的火星上，少女灯里成为领航员实习生，划着贡多拉带客人寻找奇迹。",
    "cover": "./37.jpg",
    "url": "./video-0037.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0038",
    "title": "尼布拉斯加公主",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情冒险",
    "tags": [
      "公路",
      "寻亲",
      "假公主",
      "温情",
      "美式"
    ],
    "oneLine": "一个自称是欧洲某国流亡公主的美国乡村少女，带着一个落魄记者，踏上了横穿美国的“回国”之路。",
    "cover": "./38.jpg",
    "url": "./video-0038.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0039",
    "title": "名门绅士2:淑女之心",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "豪门恩怨",
      "贵族恋爱",
      "家族传承",
      "浪漫虐心",
      "泰剧"
    ],
    "oneLine": "当玩世不恭的贵族二少爷遇到精通兵法的平民女学者，爱情变成了一场你进我退的攻防战。",
    "cover": "./39.jpg",
    "url": "./video-0039.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0040",
    "title": "非常盗2",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作/犯罪",
    "tags": [
      "盗贼",
      "高科技",
      "反转",
      "爽片"
    ],
    "oneLine": "上一集大获全胜的“非常盗”团队重出江湖，这次他们要偷的是一枚无法移动、被天罗地网保护的国宝钻石。",
    "cover": "./40.jpg",
    "url": "./video-0040.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0041",
    "title": "差利误中美人计",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "genre": "喜剧 / 动作",
    "tags": [
      "默片致敬",
      "乌龙侦探",
      "追女仔"
    ],
    "oneLine": "模仿卓别林的小演员被误认为私家侦探，受雇跟踪一位富家千金，却卷入一场跨国珠宝劫案。",
    "cover": "./41.jpg",
    "url": "./video-0041.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0042",
    "title": "地狱峡谷",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "冒险 / 恐怖 / 生存",
    "tags": [
      "峡谷探险",
      "地底怪物",
      "幽闭恐惧"
    ],
    "oneLine": "四名探险家进入未被记录的峡谷裂缝，发现底部栖息着视声音为猎物的远古盲兽。",
    "cover": "./42.jpg",
    "url": "./video-0042.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0043",
    "title": "伊斯坦布尔红",
    "region": "土耳其",
    "type": "电影",
    "year": "2017",
    "genre": "剧情/悬疑/文学",
    "tags": [
      "作家",
      "失踪",
      "博斯普鲁斯",
      "回忆录",
      "文艺"
    ],
    "oneLine": "著名作家在伊斯坦布尔离奇失踪，他的编辑来到这座横跨欧亚的城市，通过一部手稿寻找他。",
    "cover": "./43.jpg",
    "url": "./video-0043.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0044",
    "title": "生死撤退",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "战争 / 动作 / 历史",
    "tags": [
      "敦刻尔克",
      "海军",
      "民用船",
      "绝望",
      "生存"
    ],
    "oneLine": "敦刻尔克大撤退的海滩上，一名英国海军士官不仅要救士兵，还要保护一艘载满伤员的民用渔船。",
    "cover": "./44.jpg",
    "url": "./video-0044.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0045",
    "title": "魅影缝匠",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 爱情 / 心理",
    "tags": [
      "裁缝",
      "病态爱",
      "控制欲",
      "高级定制",
      "伦敦"
    ],
    "oneLine": "伦敦顶级裁缝爱上粗野女招待，为留住爱情与灵感，他竟主动吞下她毒蘑菇做的早餐。",
    "cover": "./45.jpg",
    "url": "./video-0045.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0046",
    "title": "猛犸敢死队",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 战争 / 冒险",
    "tags": [
      "西伯利亚",
      "冰封猛犸",
      "纳粹余党",
      "黄金列车",
      "硬核"
    ],
    "oneLine": "一群俄罗斯老兵在西伯利亚冻土下发现了冰封万年的猛犸象，以及一个没死透的纳粹秘密。",
    "cover": "./46.jpg",
    "url": "./video-0046.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0047",
    "title": "洪熙官1994粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "genre": "动作武侠",
    "tags": [
      "洪熙官",
      "少林",
      "粤语原声",
      "功夫",
      "复仇"
    ],
    "oneLine": "少林寺被焚后，洪熙官带着幼子浪迹天涯，只为手刃叛徒马宁儿。",
    "cover": "./47.jpg",
    "url": "./video-0047.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0048",
    "title": "埃菲尔铁塔",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "爱情 / 历史 / 剧情",
    "tags": [
      "建筑",
      "传奇",
      "禁忌之恋",
      "传记"
    ],
    "oneLine": "为了逃避无趣的婚约，工程师埃菲尔在巴黎的工地边建塔边陷入了一段危险的激情。",
    "cover": "./48.jpg",
    "url": "./video-0048.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0049",
    "title": "阿玛迪斯",
    "region": "美国/英国",
    "type": "电影",
    "year": "1984",
    "genre": "传记, 剧情, 音乐",
    "tags": [
      "莫扎特",
      "萨列里",
      "天才与庸才",
      "古典音乐",
      "奥斯卡"
    ],
    "oneLine": "平庸宫廷乐师萨列里向上帝祈祷：“为何把天才赐予那个放荡的顽童，而不是虔诚的我？”",
    "cover": "./49.jpg",
    "url": "./video-0049.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0050",
    "title": "御用闲人粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 喜剧 / 职场",
    "tags": [
      "师爷",
      "斗智",
      "粤语原声",
      "单元探案"
    ],
    "oneLine": "清末广东师爷被贬为“闲人”，却靠装傻充愣连破奇案，气得顶头上司直跺脚。",
    "cover": "./50.jpg",
    "url": "./video-0050.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0051",
    "title": "引诱",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情 / 情色",
    "tags": [
      "暧昧游戏",
      "阶级差异",
      "情感操控",
      "法式浪漫"
    ],
    "oneLine": "中年哲学教授用一封封手写情书引诱女学生，却在过程中发现自己才是被驯服的那一个。",
    "cover": "./51.jpg",
    "url": "./video-0051.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0052",
    "title": "哥吉拉×机械哥吉拉",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "科幻， 动作， 怪兽",
    "tags": [
      "哥斯拉",
      "机甲大战",
      "人类野心"
    ],
    "oneLine": "人类用哥斯拉的残骸造出了机械哥斯拉，却发现对付怪兽最好的武器，其实是另一个怪兽的愤怒。",
    "cover": "./52.jpg",
    "url": "./video-0052.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0053",
    "title": "五岁庵",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动画, 剧情, 家庭",
    "tags": [
      "亲情",
      "盲人",
      "寺庙",
      "催泪"
    ],
    "oneLine": "失明的五岁男孩被遗弃在深山古寺，僧侣们假装他能看见，带他“看”遍了四季的花开花落。",
    "cover": "./53.jpg",
    "url": "./video-0053.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0054",
    "title": "染血将军的凯旋",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 医疗",
    "tags": [
      "医院权力斗争",
      "法医推理",
      "医疗事故"
    ],
    "oneLine": "东城大学附属医院迎来新院长，他第一刀就砍掉了盈利能力最强的急救中心，三具尸体却在太平间“站”了起来。",
    "cover": "./54.jpg",
    "url": "./video-0054.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0055",
    "title": "游侠英雄",
    "region": "中国内地",
    "type": "电视剧",
    "year": "2020",
    "genre": "武侠 / 动作",
    "tags": [
      "江湖侠客",
      "复仇",
      "兄弟情",
      "冷兵器",
      "女性侠客"
    ],
    "oneLine": "灭门惨案中唯一幸存的少年，带着仇家女儿踏上复仇之路，两人却成了生死知己。",
    "cover": "./55.jpg",
    "url": "./video-0055.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0056",
    "title": "智歼叛国党",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "战争, 谍战, 动作",
    "tags": [
      "抗日",
      "计中计",
      "双面间谍",
      "草根英雄"
    ],
    "oneLine": "日军围剿下，几个互不知底细的村民为夺回情报，设下连环计，让叛徒和敌军在猜忌中自相残杀。",
    "cover": "./56.jpg",
    "url": "./video-0056.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0057",
    "title": "酷盖爸爸",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "genre": "家庭 / 喜剧 / 同性",
    "tags": [
      "奶爸",
      "亲子",
      "日常",
      "温馨"
    ],
    "oneLine": "潮男网红突然接手4岁外甥，被迫从酷盖变身全能奶爸。",
    "cover": "./57.jpg",
    "url": "./video-0057.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0058",
    "title": "道具师",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "民国",
      "凶案",
      "特效化妆",
      "复仇",
      "解谜"
    ],
    "oneLine": "民国时期电影厂接连发生诡异凶案，凶手的作案手法与剧本中的道具杀人如出一辙。",
    "cover": "./58.jpg",
    "url": "./video-0058.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0059",
    "title": "新游记",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "真人秀，旅行，文化",
    "tags": [
      "西游记改编",
      "当代取经",
      "公路综艺",
      "社会实验",
      "素人互动"
    ],
    "oneLine": "六位明星重走玄奘之路，但沿途遇到的“妖怪”全是现代社会的困境——网贷、空巢老人、短视频成瘾。",
    "cover": "./59.jpg",
    "url": "./video-0059.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0060",
    "title": "西部幽灵",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "西部 / 惊悚 / 超自然",
    "tags": [
      "荒野",
      "复仇",
      "幽灵",
      "枪战",
      "迷雾"
    ],
    "oneLine": "小镇警长在追杀灭门仇人的路上，发现自己杀死的人一个个又从迷雾里走了出来。",
    "cover": "./60.jpg",
    "url": "./video-0060.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0061",
    "title": "鲜血淋漓第五季",
    "region": "加拿大",
    "type": "剧集",
    "year": "2021",
    "genre": "恐怖，惊悚，悬疑",
    "tags": [
      "杀人魔",
      "家庭",
      "遗产",
      "血腥",
      "反转"
    ],
    "oneLine": "一个富豪将全部遗产留给了从未谋面的私生子，并要求所有亲属在一个孤岛上度过“最后的家庭聚会”。",
    "cover": "./61.jpg",
    "url": "./video-0061.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0062",
    "title": "模型姐妹",
    "region": "日本",
    "type": "动画",
    "year": "2024",
    "genre": "日常， 喜剧， 治愈",
    "tags": [
      "拼装模型",
      "姐妹情",
      "慢生活",
      "手绘"
    ],
    "oneLine": "性格迥异的姐妹俩经营一家濒临倒闭的手工模型店，在拼装中修复了破碎的童年回忆。",
    "cover": "./62.jpg",
    "url": "./video-0062.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0063",
    "title": "樱桃小丸子我喜欢的歌",
    "region": "日本",
    "type": "动画 / 剧场版",
    "year": "2025",
    "genre": "家庭 / 音乐",
    "tags": [
      "怀旧",
      "童年",
      "纯真",
      "治愈"
    ],
    "oneLine": "为了在毕业礼上唱出最棒的歌，小丸子和同学们翻遍了镇上所有老唱片。",
    "cover": "./63.jpg",
    "url": "./video-0063.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0064",
    "title": "幸运女士",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 惊悚",
    "tags": [
      "女性杀手",
      "反转复仇",
      "高智商犯罪"
    ],
    "oneLine": "一个专门杀“幸运地逃脱法律制裁”的恶人的女法医，在最后一起目标身上，发现了自己二十二年前失踪女儿的指纹。",
    "cover": "./64.jpg",
    "url": "./video-0064.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0065",
    "title": "吧女生涯原是梦",
    "region": "台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情/女性",
    "tags": [
      "酒店文化",
      "女性群像",
      "社会写实",
      "人生百态"
    ],
    "oneLine": "台北东区一家高级日式酒店里，五个不同年龄、不同背景的陪酒小姐，在灯红酒绿中寻找着名为“梦”的出口。",
    "cover": "./65.jpg",
    "url": "./video-0065.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0066",
    "title": "不义之财3",
    "region": "瑞典",
    "type": "电影",
    "year": "2013",
    "genre": "犯罪, 剧情, 动作",
    "tags": [
      "北欧黑帮",
      "洗钱",
      "救赎",
      "房地产",
      "移民"
    ],
    "oneLine": "前罪犯为了给女儿治病重返斯德哥尔摩地下钱庄，却发现自己当年留下的烂摊子，已经养出了一条吃人的金融巨鳄。",
    "cover": "./66.jpg",
    "url": "./video-0066.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0067",
    "title": "吸血鬼家族2023",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / horror",
    "tags": [
      "伪纪录片",
      "黑色幽默",
      "家庭矛盾",
      "当代吸血鬼"
    ],
    "oneLine": "被迫戒血的古老吸血鬼家族，在2023年的人类社会中开了一家素食血包咖啡馆。",
    "cover": "./67.jpg",
    "url": "./video-0067.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0068",
    "title": "同路孖宝",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 动作",
    "tags": [
      "孪生兄弟",
      "黑白两道",
      "身份互换",
      "港式笑料"
    ],
    "oneLine": "失散多年的双胞胎兄弟，一个是警察，一个是悍匪，阴差阳错下互换身份闹翻天。",
    "cover": "./68.jpg",
    "url": "./video-0068.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0069",
    "title": "囚徒",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪, 动作",
    "tags": [
      "监狱",
      "复仇",
      "地下拳赛",
      "黑警"
    ],
    "oneLine": "为了给女儿报仇，前特工故意杀人入狱，却发现仇人早就买通了整座监狱。",
    "cover": "./69.jpg",
    "url": "./video-0069.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0070",
    "title": "北斗前锋粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "警匪，科幻，动作",
    "tags": [
      "粤语原声",
      "未来警察",
      "黑科技"
    ],
    "oneLine": "2046年，香港警察用脑机接口追凶，却发现系统里最大的“毒瘤”是自己人。",
    "cover": "./70.jpg",
    "url": "./video-0070.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0071",
    "title": "亨利先生的秘密",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，剧情，黑色幽默",
    "tags": [
      "畅销书",
      "代笔",
      "身份错位",
      "文学圈",
      "反转"
    ],
    "oneLine": "畅销书作家背后的“幽灵写手”决定绑架他的老板，强迫他写一本真正的文学巨著。",
    "cover": "./71.jpg",
    "url": "./video-0071.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0072",
    "title": "洗冤录国语",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 历史, 法医",
    "tags": [
      "古装探案",
      "法医",
      "宋慈",
      "权谋"
    ],
    "oneLine": "年轻的宋慈发现一本无字天书，只有用尸体流出的特殊液体涂抹，才会显现洗冤的毒药配方与验尸手法。",
    "cover": "./72.jpg",
    "url": "./video-0072.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0073",
    "title": "死侍2",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "动作喜剧",
    "tags": [
      "死侍",
      "恶搞",
      "打破第四面墙",
      "超英",
      "嘴炮"
    ],
    "oneLine": "死侍为了保护一个变种人少年，组了个临时“X特攻队”，结果全员落地只剩他自己。",
    "cover": "./73.jpg",
    "url": "./video-0073.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0074",
    "title": "南京1937",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "历史 / 战争",
    "tags": [
      "南京大屠杀",
      "人道主义",
      "国际友人",
      "真实事件"
    ],
    "oneLine": "1937年南京，一个德国纳粹党员、十几位西方人、二十多万中国难民，在人间地狱里建立了一座生命孤岛。",
    "cover": "./74.jpg",
    "url": "./video-0074.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0075",
    "title": "老磨坊",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 悬疑",
    "tags": [
      "乡村",
      "家族秘密",
      "遗产"
    ],
    "oneLine": "一座即将被拆除的百年磨坊里，孙辈整理遗物时发现了爷爷藏匿半个世纪的秘密。",
    "cover": "./75.jpg",
    "url": "./video-0075.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0076",
    "title": "基恩",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚 / 科幻",
    "tags": [
      "AI失控",
      "记忆植入",
      "伦理困境",
      "动作"
    ],
    "oneLine": "当你的意识被上传到敌人的大脑里，你要如何分辨自己是谁，以及该效忠于谁？",
    "cover": "./76.jpg",
    "url": "./video-0076.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0077",
    "title": "理发店",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "市井",
      "惊悚",
      "轮回",
      "小镇"
    ],
    "oneLine": "小镇理发师老陈每晚十点都会迎来一位要求剃光头的女客，但镇上从无此人。",
    "cover": "./77.jpg",
    "url": "./video-0077.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0078",
    "title": "黄金诡事录",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑，惊悚",
    "tags": [
      "民国",
      "古宅",
      "诅咒",
      "连环命案"
    ],
    "oneLine": "一座黄金矿脉引发的灭门诅咒，活人梦游挖心，死者七窍流金。",
    "cover": "./78.jpg",
    "url": "./video-0078.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0079",
    "title": "行骗天下",
    "region": "日本",
    "type": "电视剧",
    "year": "2019",
    "genre": "喜剧 / 悬疑",
    "tags": [
      "高智商欺诈",
      "单元剧",
      "神反转",
      "豪华客串"
    ],
    "oneLine": "三个风格迥异的骗子，专门欺骗那些贪婪、卑鄙的恶人，每次行动都像一场华丽的舞台剧。",
    "cover": "./79.jpg",
    "url": "./video-0079.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0080",
    "title": "危险女婿",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 悬疑 / 家庭",
    "tags": [
      "见家长",
      "身份乌龙",
      "泰国元素"
    ],
    "oneLine": "一名卧底警察伪装成“模范男友”去女友家卧底，却发现女友的父亲竟是正在被自己调查的大毒枭。",
    "cover": "./80.jpg",
    "url": "./video-0080.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0081",
    "title": "孔雀的羽毛",
    "region": "印度",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻, 剧情",
    "tags": [
      "寓言",
      "家族秘密",
      "身份认同",
      "神秘"
    ],
    "oneLine": "一根落在婚礼上的孔雀羽毛，让三代人尘封的谎言与真相如羽毛般纷纷抖落。",
    "cover": "./81.jpg",
    "url": "./video-0081.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0082",
    "title": "古惑仔2之猛龙过江",
    "region": "香港",
    "type": "电影",
    "year": "1996",
    "genre": "动作 / 犯罪 / 剧情",
    "tags": [
      "江湖义气",
      "黑帮火并",
      "一代经典"
    ],
    "oneLine": "洪兴社的恩怨未了，台湾三联帮的势力又强势压境，陈浩南与山鸡被迫走上截然不同的路。",
    "cover": "./82.jpg",
    "url": "./video-0082.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0083",
    "title": "刺客教条2：余烬",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "genre": "动作 / 冒险",
    "tags": [
      "游戏改编",
      "文艺复兴",
      "复仇"
    ],
    "oneLine": "老年艾吉奥在佛罗伦萨的废墟中最后一次披上袖剑，保护一名与过去仇人有关的少女。",
    "cover": "./83.jpg",
    "url": "./video-0083.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0084",
    "title": "脏话连篇",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 剧情",
    "tags": [
      "语言",
      "粗口",
      "文学",
      "荒诞"
    ],
    "oneLine": "一个满嘴脏话的街头混混，被语言学家选中参与“人类情感爆发表演”，竟意外成了畅销书作家。",
    "cover": "./84.jpg",
    "url": "./video-0084.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0085",
    "title": "蓝猫淘气三千问",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 科幻 / 儿童",
    "tags": [
      "科普",
      "太空",
      "机甲",
      "童年回忆"
    ],
    "oneLine": "蓝猫和淘气意外进入一个“所有科学问题都被禁止提问”的反智星球，他们只能用十万个为什么当武器。",
    "cover": "./85.jpg",
    "url": "./video-0085.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0086",
    "title": "跑马场",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 悬疑",
    "tags": [
      "赛马",
      "黑幕",
      "父子情"
    ],
    "oneLine": "落魄骑师发现跑马场的地下埋着尸骨，而马匹们的疯狂皆因嗅到了死亡的气息。",
    "cover": "./86.jpg",
    "url": "./video-0086.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0087",
    "title": "陈翔六点半之废话少说",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "陈翔",
      "短剧",
      "废话",
      "时间"
    ],
    "oneLine": "一个靠“废话”活着的销售冠军，突然拥有了“说废话会缩短寿命”的超能力。",
    "cover": "./87.jpg",
    "url": "./video-0087.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0088",
    "title": "魔鬼同意令",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖， 心理， 惊悚",
    "tags": [
      "恶魔附身",
      "法律",
      "契约",
      "宗教"
    ],
    "oneLine": "一位不信神的辩护律师，为了帮被控谋杀的女孩脱罪，在法庭上引经据典，试图证明杀人的是恶魔。",
    "cover": "./88.jpg",
    "url": "./video-0088.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0089",
    "title": "自然光线",
    "region": "匈牙利 / 法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "东线",
      "游击队",
      "黑白摄影",
      "人性"
    ],
    "oneLine": "1943年乌克兰丛林，一群匈牙利游击队员抓获了一名疑似苏联女间谍，但她的眼神比雪更冷。",
    "cover": "./89.jpg",
    "url": "./video-0089.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0090",
    "title": "过时·过节",
    "region": "香港",
    "type": "电影",
    "year": "2023",
    "genre": "家庭, 剧情",
    "tags": [
      "香港家庭",
      "代际冲突",
      "饭桌戏",
      "现实主义"
    ],
    "oneLine": "一年一度的家族冬至聚餐，因为一张被“误发”在家族群里的聊天截图，变成了一场揭穿所有人“体面伪装”的修罗场。",
    "cover": "./90.jpg",
    "url": "./video-0090.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0091",
    "title": "御猫三戏锦毛鼠",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作，喜剧，古装",
    "tags": [
      "展昭",
      "白玉堂",
      "轻喜剧",
      "江湖"
    ],
    "oneLine": "御猫展昭与锦毛鼠白玉堂被太后指婚同一女子，二人从相杀到相爱？相杀到最后。",
    "cover": "./91.jpg",
    "url": "./video-0091.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0092",
    "title": "锗之夜",
    "region": "德国/波兰",
    "type": "电影",
    "year": "2024",
    "genre": "科幻文艺片",
    "tags": [
      "半导体",
      "冷战遗留",
      "记忆删除",
      "黑白摄影"
    ],
    "oneLine": "东德解体前夜，一群科学家发现锗元素能存储人的灵魂。",
    "cover": "./92.jpg",
    "url": "./video-0092.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0093",
    "title": "龟猴分树",
    "region": "中国",
    "type": "电影",
    "year": "1959",
    "genre": "动画 / 短片",
    "tags": [
      "剪纸",
      "寓言",
      "经典",
      "教育"
    ],
    "oneLine": "一只贪婪的猴子骗走了乌龟种出的果树，乌龟用智慧让猴子明白：不劳而获的果子，迟早会扎嘴。",
    "cover": "./93.jpg",
    "url": "./video-0093.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0094",
    "title": "青之壬生狼",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "历史, 动作",
    "tags": [
      "新选组",
      "动漫改编",
      "剑戟",
      "兄弟情",
      "幕末"
    ],
    "oneLine": "热血少年加入新选组，却发现传说中的“壬生狼”内部早已被一只“青色的鬼”吞噬。",
    "cover": "./94.jpg",
    "url": "./video-0094.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0095",
    "title": "神奇的花朵",
    "region": "日本",
    "type": "电影",
    "year": "2004",
    "genre": "奇幻 / 剧情",
    "tags": [
      "治愈系",
      "植物奇幻",
      "童真幻想"
    ],
    "oneLine": "内向的小女孩在废弃的铁轨旁发现了一朵会唱歌的花，每当花瓣掉落一片，她就能看见一个逝去之人的记忆。",
    "cover": "./95.jpg",
    "url": "./video-0095.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0096",
    "title": "马塔琳基",
    "region": "新西兰",
    "type": "电影",
    "year": "2017",
    "genre": "剧情, 历史, 冒险",
    "tags": [
      "毛利",
      "部落",
      "殖民",
      "语言"
    ],
    "oneLine": "19世纪新西兰，毛利少女马塔琳基被英国传教士收养，当部落与殖民者开战时，她发现自己会说两种“语言”的战争。",
    "cover": "./96.jpg",
    "url": "./video-0096.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0097",
    "title": "下雪的圣诞节",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，奇幻，家庭",
    "tags": [
      "圣诞",
      "时间循环",
      "救赎",
      "亲情",
      "治愈"
    ],
    "oneLine": "一个讨厌圣诞节的毒舌老头，在圣诞夜被诅咒：必须让三个陌生人在午夜钟声前真心微笑，否则将永远困在这一天。",
    "cover": "./97.jpg",
    "url": "./video-0097.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0098",
    "title": "法兰西",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 历史",
    "tags": [
      "政治",
      "媒体",
      "身份认同",
      "女性主角"
    ],
    "oneLine": "一位法国顶级女主播在直播中崩溃，却意外发现自己的真实人生早已被国家机器操控成一场秀。",
    "cover": "./98.jpg",
    "url": "./video-0098.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0099",
    "title": "我人生中最精彩的瞬间",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 运动 / 励志",
    "tags": [
      "乒乓球",
      "逆转",
      "中年危机",
      "国家队",
      "热血"
    ],
    "oneLine": "一支由超市收银员、出租车司机和全职主妇组成的业余乒乓球队，竟获得了亚运会的替补资格。",
    "cover": "./99.jpg",
    "url": "./video-0099.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0100",
    "title": "转山",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 冒险, 励志",
    "tags": [
      "骑行",
      "西藏",
      "丧亲疗愈"
    ],
    "oneLine": "失去哥哥的少年独自骑行两千公里去西藏，路上遇见各种人，最终在神山脚下与自己和解放手。",
    "cover": "./100.jpg",
    "url": "./video-0100.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0101",
    "title": "冰海鲸舟",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "冒险，剧情，灾难",
    "tags": [
      "极地求生",
      "因纽特",
      "人与自然",
      "末世"
    ],
    "oneLine": "北极冰川融化，因纽特少年与一头失忆的弓头鲸结伴，寻找传说中的不冻大陆。",
    "cover": "./101.jpg",
    "url": "./video-0101.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0102",
    "title": "全家逃走中",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧，动作，家庭",
    "tags": [
      "高利贷",
      "逃亡",
      "假扮富人家",
      "爆笑"
    ],
    "oneLine": "欠下天价高利贷的一家五口，被迫假扮成新搬来的富豪邻居，住进了豪宅。",
    "cover": "./102.jpg",
    "url": "./video-0102.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0103",
    "title": "慈膳救援",
    "region": "中国香港",
    "type": "剧集",
    "year": "2021",
    "genre": "剧情 / 社会",
    "tags": [
      "美食",
      "公益",
      "市井温情"
    ],
    "oneLine": "过气厨神带领一群社区大妈，用剩菜做出救命大餐，对抗无良地产商。",
    "cover": "./103.jpg",
    "url": "./video-0103.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0104",
    "title": "最佳拍档",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 喜剧 / 警匪",
    "tags": [
      "警匪合作",
      "冤家路窄",
      "高科技犯罪",
      "双雄"
    ],
    "oneLine": "最守规矩的警察与最不守规矩的贼，被迫组队打击高科技犯罪组织。",
    "cover": "./104.jpg",
    "url": "./video-0104.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0105",
    "title": "情遇曼哈顿",
    "region": "美国/中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/剧情",
    "tags": [
      "异国",
      "都市",
      "重逢",
      "错过"
    ],
    "oneLine": "在纽约漂泊的落魄画家与当保姆的单亲妈妈，因为一次地铁抢劫相遇，却在即将告白时失散于人海。",
    "cover": "./105.jpg",
    "url": "./video-0105.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0106",
    "title": "死神的假期",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 剧情",
    "tags": [
      "生死观",
      "温情催泪",
      "自我和解"
    ],
    "oneLine": "一名冷酷的死神获得七天年假，来到人间体验生活，却爱上了自己三个月后要带走的重症女孩。",
    "cover": "./106.jpg",
    "url": "./video-0106.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0107",
    "title": "酒香的呼唤",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、家庭、美食",
    "tags": [
      "红酒",
      "庄园",
      "遗言",
      "嗅觉天才",
      "和解"
    ],
    "oneLine": "失明且失去嗅觉的前品酒师，被已故父亲的一句遗言“去闻你的出生”唤回祖传酒庄。",
    "cover": "./107.jpg",
    "url": "./video-0107.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0108",
    "title": "未来城市 / 叛逆智慧",
    "region": "美国 / 德国",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": [
      "赛博朋克",
      "集体智能",
      "反抗军",
      "AI伦理",
      "城市管控"
    ],
    "oneLine": "在全民脑机接口的未来，一个无法接入网络的女人成了唯一能看见城市“真正指令”的人，而她看到的是一座吃人的巨兽。",
    "cover": "./108.jpg",
    "url": "./video-0108.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0109",
    "title": "外交官",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情, 悬疑",
    "tags": [
      "撤侨",
      "国际风云",
      "智斗"
    ],
    "oneLine": "一场突发政变中，一位文职外交官必须用文件、逻辑和一杯茶，从雇佣军手中换回上千条命。",
    "cover": "./109.jpg",
    "url": "./video-0109.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0110",
    "title": "当心瘦削人",
    "region": "英国",
    "type": "电影",
    "year": "2017",
    "genre": "恐怖， 悬疑， 心理",
    "tags": [
      "都市传说",
      "厌食症",
      "心理惊悚",
      "身体恐怖"
    ],
    "oneLine": "少女信奉的“瘦身灵修”教主在密室失踪，所有信徒开始肉眼可见地变成纸片人。",
    "cover": "./110.jpg",
    "url": "./video-0110.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0111",
    "title": "小小吸血鬼",
    "region": "法国",
    "type": "电影",
    "year": "2020",
    "genre": "动画, 奇幻",
    "tags": [
      "儿童",
      "友谊",
      "搞笑",
      "治愈"
    ],
    "oneLine": "一个不愿吸血的吸血鬼小男孩离家出走，在地球上遇到了一个痴迷鬼怪的人类小女孩。",
    "cover": "./111.jpg",
    "url": "./video-0111.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0112",
    "title": "老千2：神之手",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪，动作，赌博",
    "tags": [
      "赌局",
      "复仇",
      "千术",
      "兄弟"
    ],
    "oneLine": "入狱五年的千门天才出狱后，发现自己的“神之手”被亲生弟弟剁掉，换成了机械假肢。",
    "cover": "./112.jpg",
    "url": "./video-0112.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0113",
    "title": "那年夏天的秘密",
    "region": "韩国",
    "type": "电影",
    "year": "2016",
    "genre": "悬疑, 青春",
    "tags": [
      "返乡",
      "溺水",
      "录像带",
      "朋友反目",
      "双时间线"
    ],
    "oneLine": "五个高中好友在毕业十周年聚会上重聚，一盘被翻出的录像带，揭露了那个夏天池塘里淹死的人并非意外。",
    "cover": "./113.jpg",
    "url": "./video-0113.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0114",
    "title": "一个用英明撑起的国家",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 政治 / 讽刺",
    "tags": [
      "黑色幽默",
      "架空历史",
      "独裁者",
      "荒诞"
    ],
    "oneLine": "一个笨拙的养老院护工被误认为新独裁者，竟靠“英明”语录治国三年。",
    "cover": "./114.jpg",
    "url": "./video-0114.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0115",
    "title": "最后五分钟",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 犯罪, 悬疑",
    "tags": [
      "实时拍摄",
      "拆弹",
      "连环陷阱",
      "反转"
    ],
    "oneLine": "一名拆弹专家被困在炸弹包围的银行里，遥控器显示爆炸倒计时只有五分钟，但这五分钟无限循环。",
    "cover": "./115.jpg",
    "url": "./video-0115.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0116",
    "title": "亲亲宝贝",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "家庭， 剧情， 喜剧",
    "tags": [
      "育儿",
      "新手父母",
      "代际冲突"
    ],
    "oneLine": "三对背景迥异的夫妻同时迎来宝宝，在鸡飞狗跳的育儿路上学会成长。",
    "cover": "./116.jpg",
    "url": "./video-0116.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0117",
    "title": "尘菌",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖、科幻、身体",
    "tags": [
      "霉菌",
      "公寓",
      "传染",
      "寄生",
      "生物恐怖"
    ],
    "oneLine": "独居男子发现自家墙壁长出奇怪霉菌，喷了除霉剂后，霉菌开始在人肉上生长。",
    "cover": "./117.jpg",
    "url": "./video-0117.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0118",
    "title": "捞世界",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "小人物",
      "发财梦",
      "荒诞"
    ],
    "oneLine": "小镇青年想靠“捞偏门”暴富，结果把整个东南亚的骗子集团给“反杀”了。",
    "cover": "./118.jpg",
    "url": "./video-0118.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0119",
    "title": "黑暗中的吟唱",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 悬疑",
    "tags": [
      "民俗恐怖",
      "邪教祭祀",
      "音乐杀人",
      "高概念"
    ],
    "oneLine": "一个乐理博士受邀来到偏远小镇整理民谣，却发现这里流传的“摇篮曲”只要被完整哼唱，听者就会在睡梦中自杀。",
    "cover": "./119.jpg",
    "url": "./video-0119.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0120",
    "title": "爱在马德里",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情",
    "tags": [
      "异国邂逅",
      "老年恋爱",
      "弗拉明戈"
    ],
    "oneLine": "一个丧偶的中国老太太和一个丧偶的西班牙老头，因为一场弗拉明戈舞，在马德里的阳光下重获新生。",
    "cover": "./120.jpg",
    "url": "./video-0120.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0121",
    "title": "麦田捕手的女孩",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "爱情 / 剧情 / 成长",
    "tags": [
      "文学改编",
      "问题少女",
      "救赎",
      "乡村音乐",
      "公路片"
    ],
    "oneLine": "叛逆少女被寄养在保守乡村的单身舅舅家，她发现舅舅的谷仓里关着一个只有她能看见的“霍尔顿”。",
    "cover": "./121.jpg",
    "url": "./video-0121.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0122",
    "title": "解忧杂货店",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 奇幻",
    "tags": [
      "治愈",
      "时空交错",
      "信件",
      "杂货店",
      "人生选择"
    ],
    "oneLine": "一家只在深夜营业的杂货店，连接着过去与未来，为迷途之人点亮希望。",
    "cover": "./122.jpg",
    "url": "./video-0122.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0123",
    "title": "特劳特曼",
    "region": "德国/英国",
    "type": "电影",
    "year": "2024",
    "genre": "传记/剧情/战争",
    "tags": [
      "战俘",
      "体育精神",
      "逆袭",
      "真实改编",
      "守门员"
    ],
    "oneLine": "二战战俘营里，一名德国战俘用残缺的手指扑出了英国人的傲慢与偏见。",
    "cover": "./123.jpg",
    "url": "./video-0123.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0124",
    "title": "学校怪谈 言灵的诅咒",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "genre": "恐怖",
    "tags": [
      "校园",
      "怪谈",
      "咒语",
      "诅咒",
      "日式恐怖"
    ],
    "oneLine": "千万别在放学后的空教室里，连喊三声那个名字。",
    "cover": "./124.jpg",
    "url": "./video-0124.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0125",
    "title": "笑笑茶楼第二季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 家庭",
    "tags": [
      "茶楼风云",
      "东北幽默",
      "师徒情",
      "创业",
      "市井生活"
    ],
    "oneLine": "笑笑茶楼生意火爆引来资本觊觎，老范头带领众徒弟，用笑声和智慧守住最后的东北老味道。",
    "cover": "./125.jpg",
    "url": "./video-0125.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0126",
    "title": "算计：7日死亡游戏",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "密室",
      "心理战",
      "人性"
    ],
    "oneLine": "七个陌生人被关在一座酒店里，每天必须投票杀死一人，最后一个活着的人能拿走十亿日元。",
    "cover": "./126.jpg",
    "url": "./video-0126.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0127",
    "title": "魔窟喋血",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 战争 / 悬疑",
    "tags": [
      "洞穴战",
      "小队",
      "背叛",
      "极限生存"
    ],
    "oneLine": "一支特种小队潜入走私集团的地下据点，却在四通八达的洞穴里遇到了比自己更了解战术的对手。",
    "cover": "./127.jpg",
    "url": "./video-0127.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0128",
    "title": "亲吻表哥",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "喜剧，爱情",
    "tags": [
      "表亲",
      "乌龙",
      "错位"
    ],
    "oneLine": "为了继承姑妈的豪宅，花花公子不得不假装爱上从乡下来的土气表哥，却发现表哥竟是女儿身。",
    "cover": "./128.jpg",
    "url": "./video-0128.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0129",
    "title": "诅咒1988",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖, 悬疑",
    "tags": [
      "录像带",
      "民俗",
      "伪纪录片",
      "复古"
    ],
    "oneLine": "一档灵异节目组在一堆1988年的旧录像带里，发现了导致所有观众接连惨死的真实诅咒。",
    "cover": "./129.jpg",
    "url": "./video-0129.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0130",
    "title": "蒂法有麻烦了",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑, 科幻, 动作",
    "tags": [
      "虚拟偶像",
      "AI觉醒",
      "反乌托邦",
      "赛博朋克"
    ],
    "oneLine": "全球最红的虚拟偶像蒂法突然在直播中说了句“救救我”，全世界都以为她在演戏，只有程序员知道她真的觉醒了。",
    "cover": "./130.jpg",
    "url": "./video-0130.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0131",
    "title": "麻辣母女",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 家庭 / 剧情",
    "tags": [
      "母女",
      "代际冲突",
      "川渝",
      "爱情观",
      "麻辣"
    ],
    "oneLine": "重庆一位开麻辣烫店的强势单亲妈妈，与不婚主义的女儿因为一张“假男友”租借单，展开麻辣大战。",
    "cover": "./131.jpg",
    "url": "./video-0131.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0132",
    "title": "戒指流浪记",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 爱情, 奇幻",
    "tags": [
      "灵魂互换",
      "戒指",
      "前世今生",
      "都市爱情"
    ],
    "oneLine": "一枚被诅咒的古董戒指让四对陌生男女灵魂互换，他们必须在7天内找到真爱，否则将永远困在他人身体里。",
    "cover": "./132.jpg",
    "url": "./video-0132.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0133",
    "title": "晚娘粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "粤语原声",
      "继母",
      "豪门",
      "年代"
    ],
    "oneLine": "上世纪60年代的香港，一个受尽白眼的“晚娘”，如何在一场家族危机中成为顶梁柱。",
    "cover": "./133.jpg",
    "url": "./video-0133.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0134",
    "title": "骇故事之无罪日",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "时间循环",
      "法庭",
      "推理",
      "反转",
      "高智商"
    ],
    "oneLine": "一个被判死刑的律师，每次被行刑后都会回到案发前24小时，他必须利用无限循环，找出真凶证明自己无罪。",
    "cover": "./134.jpg",
    "url": "./video-0134.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0135",
    "title": "兔子陷阱",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "惊悚 / 悬疑 / 犯罪",
    "tags": [
      "偷情",
      "密室逃脱",
      "猫鼠游戏",
      "反转",
      "黑色幽默"
    ],
    "oneLine": "一对幽会的偷情男女误入住处，发现这是顶级杀手设下的“兔子陷阱”，他们就是猎物。",
    "cover": "./135.jpg",
    "url": "./video-0135.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0136",
    "title": "意外杀手",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "动作 / 犯罪",
    "tags": [
      "杀手",
      "反套路",
      "黑色幽默"
    ],
    "oneLine": "一个只接“意外死亡”订单的强迫症杀手，却发现自己每次制造的完美意外，都会被一个冒失鬼邻居破坏。",
    "cover": "./136.jpg",
    "url": "./video-0136.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0137",
    "title": "蒙古黑夜",
    "region": "蒙古 / 德国",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 犯罪 / 西部",
    "tags": [
      "草原",
      "现代与传统",
      "走私",
      "游牧文化"
    ],
    "oneLine": "蒙古草原上发生一起离奇命案，唯一的目击者是一匹老马，而凶手可能是所有逐水草而居的牧民中最不可能的那一个。",
    "cover": "./137.jpg",
    "url": "./video-0137.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0138",
    "title": "快乐美美向前冲",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2011",
    "genre": "喜剧 / 军旅",
    "tags": [
      "女兵",
      "成长",
      "励志",
      "搞笑"
    ],
    "oneLine": "一群性格迥异的90后女兵进入军营，从“刺头”变成真正的特种兵。",
    "cover": "./138.jpg",
    "url": "./video-0138.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0139",
    "title": "曼托",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "genre": "传记 / 剧情",
    "tags": [
      "印巴分治",
      "作家",
      "苦难诗",
      "黑白",
      "文学"
    ],
    "oneLine": "短篇小说大师曼托在印巴分治后流落拉合尔，他用笔写下这个时代最丑陋的人性切片。",
    "cover": "./139.jpg",
    "url": "./video-0139.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0140",
    "title": "葛兰特·莫里森：与神对话",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "纪录片 / 奇幻 / 传记",
    "tags": [
      "漫画改编",
      "哲学思辨",
      "虚实结合",
      "作家生平"
    ],
    "oneLine": "知名漫画编剧陷入精神崩溃，声称自己笔下的疯狂角色正在入侵现实世界。",
    "cover": "./140.jpg",
    "url": "./video-0140.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0141",
    "title": "传闻中的白月光",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "古装 / 爱情 / 喜剧",
    "tags": [
      "替身",
      "穿书",
      "反套路",
      "沙雕甜宠"
    ],
    "oneLine": "穿成虐文女主的替身，她决定摆烂等死，结果男主竟爱上了看她在后院斗蛐蛐。",
    "cover": "./141.jpg",
    "url": "./video-0141.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0142",
    "title": "耶路撒冷地",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "恐怖, 悬疑, 古装",
    "tags": [
      "克苏鲁神话",
      "殖民历史",
      "家族诅咒",
      "洛夫克拉夫特式"
    ],
    "oneLine": "19世纪缅因州，一名继承荒芜庄园的船长，发现家族诅咒的源头，竟藏在地基下那个用活人祭品浇筑的古老教堂遗迹中。",
    "cover": "./142.jpg",
    "url": "./video-0142.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0143",
    "title": "恨锁金瓶粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "1994",
    "genre": "剧情 / 古装",
    "tags": [
      "名著改编",
      "女性悲剧",
      "宅斗"
    ],
    "oneLine": "以潘金莲的视角重新解构《金瓶梅》，讲述了那个在封建大院里，从纯真少女到狠毒妇人的血色蜕变史。",
    "cover": "./143.jpg",
    "url": "./video-0143.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0144",
    "title": "喋血丹盟",
    "region": "中国香港",
    "type": "电影",
    "year": "2027",
    "genre": "动作犯罪",
    "tags": [
      "卧底",
      "兄弟反目",
      "暴力美学"
    ],
    "oneLine": "王牌卧底即将结束任务，却发现失散多年的亲弟弟正是贩毒集团的新任首领。",
    "cover": "./144.jpg",
    "url": "./video-0144.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0145",
    "title": "我与妈妈的黄色脚踏车",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭 / 公路",
    "tags": [
      "治愈系",
      "亲子关系",
      "寻亲之旅",
      "催泪弹"
    ],
    "oneLine": "为了让失忆的妈妈想起自己，少年独自骑着妈妈曾经的黄色脚踏车，跨越300公里去找妈妈记忆中的那片海。",
    "cover": "./145.jpg",
    "url": "./video-0145.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0146",
    "title": "天才雀妈",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 运动 / 家庭",
    "tags": [
      "麻将",
      "草根逆袭",
      "中年女性",
      "励志"
    ],
    "oneLine": "菜市场卖鱼的阿芳为了凑齐女儿的学费，误打误撞闯入世界麻将锦标赛，却因一手杀鱼练出的“铁手”震动雀坛。",
    "cover": "./146.jpg",
    "url": "./video-0146.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0147",
    "title": "旅行商",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 文艺",
    "tags": [
      "极简主义",
      "存在主义",
      "销售员",
      "孤独"
    ],
    "oneLine": "一位年迈的旅行推销员，开车游走在日渐荒芜的法国乡村，推销着这个时代已经不再需要的商品。",
    "cover": "./147.jpg",
    "url": "./video-0147.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0148",
    "title": "人狼游戏：地狱",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚，悬疑",
    "tags": [
      "生存游戏",
      "人性考验",
      "狼人杀",
      "血腥"
    ],
    "oneLine": "16个死刑犯被强制参加真人版狼人杀，每轮投错一人，全体都会触电。",
    "cover": "./148.jpg",
    "url": "./video-0148.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0149",
    "title": "金龟车再现",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "喜剧, 家庭, 奇幻",
    "tags": [
      "赛车",
      "经典复刻",
      "老车",
      "冒险"
    ],
    "oneLine": "报废的53号金龟车突然有了自我意识，帮助落魄车手重燃冠军梦。",
    "cover": "./149.jpg",
    "url": "./video-0149.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0150",
    "title": "风云小棋王之五行杀阵",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动作",
    "tags": [
      "象棋",
      "五行",
      "武侠",
      "少年",
      "奇幻"
    ],
    "oneLine": "少年棋王被卷入江湖“五行杀阵”，每破一局就失去一种情感，全部失去后将变成没有灵魂的下棋傀儡。",
    "cover": "./150.jpg",
    "url": "./video-0150.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0151",
    "title": "心狂线索",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "genre": "悬疑 / 犯罪 / 心理",
    "tags": [
      "双时间线",
      "记忆切割",
      "拼图式破案"
    ],
    "oneLine": "失忆女子每月25日会收到一个U盘，里面录着她自己亲手录下的“上个月的破案进度”。",
    "cover": "./1.jpg",
    "url": "./video-0151.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0152",
    "title": "寒夜星暖",
    "region": "中国内地",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "双向救赎",
      "失温症",
      "滑雪",
      "慢热",
      "治愈"
    ],
    "oneLine": "一个失去温度感知的滑雪运动员，和一个对任何温度都极度敏感的调香师，互相取暖。",
    "cover": "./2.jpg",
    "url": "./video-0152.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0153",
    "title": "恋上纯喫茶 续篇",
    "region": "日本",
    "type": "日剧",
    "year": "2024",
    "genre": "剧情，美食",
    "tags": [
      "治愈",
      "咖啡",
      "人情冷暖",
      "慢生活"
    ],
    "oneLine": "那个只提供纯咖啡的昭和咖啡馆重开张，新老板却是个讨厌咖啡的年轻人。",
    "cover": "./3.jpg",
    "url": "./video-0153.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0154",
    "title": "廉政行动组粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2025",
    "genre": "犯罪, 悬疑",
    "tags": [
      "反贪",
      "卧底",
      "职场"
    ],
    "oneLine": "廉政公署新人发现，自己追查的贪腐案主脑竟是三十年前失踪的廉政专员。",
    "cover": "./4.jpg",
    "url": "./video-0154.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0155",
    "title": "秘密：梦想的力量",
    "region": "美国 / 全球",
    "type": "纪录片 / 电影",
    "year": "2024",
    "genre": "励志 / 纪录片",
    "tags": [
      "吸引力法则",
      "真实案例",
      "励志",
      "心理学"
    ],
    "oneLine": "采访全球12位普通人，他们用“吸引力法则”实现了看似不可能的梦想。",
    "cover": "./5.jpg",
    "url": "./video-0155.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0156",
    "title": "夏普的挑战",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 历史",
    "tags": [
      "拿破仑战争",
      "孤胆英雄",
      "英伦硬汉",
      "枪战"
    ],
    "oneLine": "滑铁卢战役后，神枪手夏普接到一个不可能的任务：护送拿破仑的遗嘱穿越半个欧洲。",
    "cover": "./6.jpg",
    "url": "./video-0156.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0157",
    "title": "八兄弟",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "东北农村",
      "赡养老人",
      "分家产",
      "黑色幽默",
      "年度最佳群戏"
    ],
    "oneLine": "老母亲假死后，八个儿子围绕一张一百万的存折，上演了全村最荒诞的孝道大戏。",
    "cover": "./7.jpg",
    "url": "./video-0157.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0158",
    "title": "留级之王2",
    "region": "美国",
    "type": "电影",
    "year": "2010",
    "genre": "喜剧",
    "tags": [
      "校园",
      "逆袭",
      "幽默"
    ],
    "oneLine": "连续留级五年的校园“老油条”，被迫带领菜鸟班级对抗冷血教导主任。",
    "cover": "./8.jpg",
    "url": "./video-0158.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0159",
    "title": "梅花公馆",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "悬疑， 惊悚",
    "tags": [
      "老宅",
      "家族秘密",
      "连环失踪",
      "粤语"
    ],
    "oneLine": "梅花公馆每隔十年必失踪一人，今年轮到了刚继承遗产的孙女。",
    "cover": "./9.jpg",
    "url": "./video-0159.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0160",
    "title": "辛德瑞拉的诡计",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "灰姑娘改编",
      "复仇",
      "阶级反转",
      "全员恶人"
    ],
    "oneLine": "灰姑娘没有水晶鞋，她有一本写满了每个人都想杀她的日记。",
    "cover": "./10.jpg",
    "url": "./video-0160.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0161",
    "title": "落在她身边",
    "region": "法国",
    "type": "电影",
    "year": "2012",
    "genre": "爱情, 奇幻",
    "tags": [
      "文艺",
      "浪漫",
      "巴黎",
      "命运"
    ],
    "oneLine": "一片梧桐叶改变了三个陌生人的命运，让他们在巴黎的十字路口反复相遇。",
    "cover": "./11.jpg",
    "url": "./video-0161.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0162",
    "title": "热恋",
    "region": "泰国",
    "type": "电视剧",
    "year": "2019",
    "genre": "爱情 / 青春 / 喜剧",
    "tags": [
      "双向暗恋",
      "校园",
      "误会连连",
      "甜蜜",
      "搞笑"
    ],
    "oneLine": "学霸校草暗恋学渣女汉子，写情书却错塞给了教导主任，全校展开了一场乌龙寻爱大作战。",
    "cover": "./12.jpg",
    "url": "./video-0162.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0163",
    "title": "欲燄金沙",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 惊悚",
    "tags": [
      "沙漠",
      "禁忌之恋",
      "生存",
      "背叛",
      "烈日"
    ],
    "oneLine": "一对偷情男女在沙漠遭遇沙暴，被困后才发现彼此都带着杀机。",
    "cover": "./13.jpg",
    "url": "./video-0163.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0164",
    "title": "101岁老人跷家去",
    "region": "瑞典",
    "type": "电影",
    "year": "2014",
    "genre": "喜剧, 冒险",
    "tags": [
      "老年主角",
      "公路片",
      "反差萌",
      "北欧幽默",
      "看透人生"
    ],
    "oneLine": "101岁的炸弹专家厌倦养老院，翻窗逃走并意外卷入黑帮千万现金争夺战。",
    "cover": "./14.jpg",
    "url": "./video-0164.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0165",
    "title": "战地蒸发",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 动作 / 悬疑",
    "tags": [
      "特种部队",
      "失踪谜团",
      "中东",
      "PTSD"
    ],
    "oneLine": "一支精英小队在敌后突然“人间蒸发”，一年后，唯一幸存者在防空洞里说出了四个字。",
    "cover": "./15.jpg",
    "url": "./video-0165.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0166",
    "title": "红衣手记国语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2002",
    "genre": "剧情， 爱情， 医疗",
    "tags": [
      "护士",
      "成长",
      "职场",
      "友情"
    ],
    "oneLine": "实习护士在急诊室直面生离死别，一封未寄出的红色情书揭开十七年的身世秘密。",
    "cover": "./16.jpg",
    "url": "./video-0166.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0167",
    "title": "超级计划",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作，科幻，犯罪",
    "tags": [
      "机甲",
      "警察",
      "近未来",
      "改造人",
      "硬核"
    ],
    "oneLine": "香港警察启动秘密“超级计划”，将重伤警员改造成半人半机械的执法兵器。",
    "cover": "./17.jpg",
    "url": "./video-0167.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0168",
    "title": "独行侠夺宝记",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 冒险 / 西部",
    "tags": [
      "夺宝",
      "西部片",
      "复仇",
      "独狼",
      "阴谋"
    ],
    "oneLine": "一个被全队背叛的独行侠，为了复仇踏上寻宝路，却发现宝藏是假的。",
    "cover": "./18.jpg",
    "url": "./video-0168.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0169",
    "title": "呖咕呖咕对对碰",
    "region": "中国香港",
    "type": "电影",
    "year": "2007",
    "genre": "喜剧",
    "tags": [
      "麻将",
      "市井",
      "搞笑",
      "群像"
    ],
    "oneLine": "一个即将倒闭的茶馆，一场决定命运的麻将大赛，一群不靠谱的草根英雄。",
    "cover": "./19.jpg",
    "url": "./video-0169.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0170",
    "title": "梦中的简",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "爱情 / 奇幻 / 剧情",
    "tags": [
      "梦境",
      "失忆",
      "画家",
      "跨国恋",
      "治愈"
    ],
    "oneLine": "他每晚梦见一个叫简的日本女孩，醒来后却要和完全不认识的韩国妻子共度余生。",
    "cover": "./20.jpg",
    "url": "./video-0170.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0171",
    "title": "外乡人",
    "region": "德国",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑 / 剧情 / 移民",
    "tags": [
      "叙利亚难民",
      "德国小镇",
      "连环失踪",
      "谁才是异类"
    ],
    "oneLine": "叙利亚难民阿明在德国小镇安家后，当地连续失踪四名少女，所有证据都指向他，但他只想知道：谁在嫁祸。",
    "cover": "./21.jpg",
    "url": "./video-0171.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0172",
    "title": "电影自画像",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 传记 / 实验",
    "tags": [
      "元电影",
      "自传",
      "哲学"
    ],
    "oneLine": "一位法国导演在拍一部关于“拍电影”的电影，却发现自己的人生和镜头里的虚构开始混淆。",
    "cover": "./22.jpg",
    "url": "./video-0172.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0173",
    "title": "乳牙",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "成长",
      "疼痛",
      "亲子关系",
      "隐喻"
    ],
    "oneLine": "一颗松动的乳牙，揭开了一个少女心中无法言说的家庭秘密。",
    "cover": "./23.jpg",
    "url": "./video-0173.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0174",
    "title": "红海棠",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "悬疑 / 年代",
    "tags": [
      "民国",
      "宅斗",
      "复仇"
    ],
    "oneLine": "民国时期，上海滩银行家惨死，三个各怀秘密的女儿在栽满海棠的深宅里展开了一场没有硝烟的博弈。",
    "cover": "./24.jpg",
    "url": "./video-0174.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0175",
    "title": "不二土夫子",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "冒险 / 盗墓",
    "tags": [
      "长沙",
      "战国古墓",
      "家族宿仇"
    ],
    "oneLine": "长沙城最后一代土夫子被逼重操旧业，却发现要盗的竟是自己家的祖坟。",
    "cover": "./25.jpg",
    "url": "./video-0175.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0176",
    "title": "恐怖作业",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "都市怪谈",
      "诅咒传染",
      "校园禁忌"
    ],
    "oneLine": "国际学校流传着一个诅咒：只要抄了那份“完美作业”的答案，抄袭者会在七天内按照作业里的死法死去。",
    "cover": "./26.jpg",
    "url": "./video-0176.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0177",
    "title": "小不点",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 家庭",
    "tags": [
      "成长",
      "与众不同",
      "勇气"
    ],
    "oneLine": "在一个所有东西都必须成双成对的世界里，一个只有三根手指的小不点，用一只手拯救了整个城市。",
    "cover": "./27.jpg",
    "url": "./video-0177.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0178",
    "title": "丑娃娃",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 恐怖， 心理",
    "tags": [
      "玩偶",
      "创伤",
      "复仇"
    ],
    "oneLine": "一个被校园霸凌的女孩缝制的丑娃娃，开始每晚替她“拜访”那些伤害过她的人。",
    "cover": "./28.jpg",
    "url": "./video-0178.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0179",
    "title": "百妖谱·司府篇",
    "region": "中国",
    "type": "动画",
    "year": "2024",
    "genre": "奇幻 / 古风 / 治愈",
    "tags": [
      "妖怪 / 治愈 / 单元剧 / 国风 / 人性"
    ],
    "oneLine": "桃夭带着小和尚磨牙走进司府，发现这座官邸里藏着一只为爱痴狂三百年的狐妖。",
    "cover": "./29.jpg",
    "url": "./video-0179.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0180",
    "title": "最后一刻",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 惊悚",
    "tags": [
      "倒计时",
      "炸楼",
      "密室"
    ],
    "oneLine": "首尔最高摩天楼被埋入炸弹，电梯里的六个人必须在60分钟内找到内鬼。",
    "cover": "./30.jpg",
    "url": "./video-0180.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0181",
    "title": "借脸",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "换脸",
      "身份错位",
      "复仇",
      "近未来"
    ],
    "oneLine": "一场车祸毁容后，富家女高价“借”来一张亡者的脸，却发现自己正替死人活着。",
    "cover": "./31.jpg",
    "url": "./video-0181.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0182",
    "title": "一千零一克",
    "region": "德国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情",
    "tags": [
      "计量局",
      "标准",
      "亲情"
    ],
    "oneLine": "国际计量局的女科学家发现，父亲留给她的遗产是一枚完全不精准的砝码。",
    "cover": "./32.jpg",
    "url": "./video-0182.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0183",
    "title": "陀枪师姐国语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1998",
    "genre": "动作 / 剧情 / 悬疑",
    "tags": [
      "女警",
      "枪战",
      "港剧经典",
      "女性成长",
      "师徒"
    ],
    "oneLine": "三元，一名性格柔弱的普通女警，在“陀枪师姐”训练中被迫直面内心恐惧，卷入连环变态杀手案。",
    "cover": "./33.jpg",
    "url": "./video-0183.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0184",
    "title": "时光尽头的恋人",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "奇幻， 爱情， 剧情",
    "tags": [
      "永生",
      "时间跳跃",
      "宿命恋人"
    ],
    "oneLine": "一个永远停留在27岁的女人，每十年就要换一个身份生活，直到她遇到一个让她不想再逃的男人。",
    "cover": "./34.jpg",
    "url": "./video-0184.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0185",
    "title": "我是乔治娜第一季",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "传记 / 剧情 / 历史",
    "tags": [
      "英伦贵族",
      "王室情妇",
      "女性觉醒",
      "18世纪"
    ],
    "oneLine": "乔治娜·卡文迪什不是公爵夫人，她是德文郡的“第一夫人”，也是赌桌上敢和国王对赌的女人。",
    "cover": "./35.jpg",
    "url": "./video-0185.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0186",
    "title": "深太空时速9000公里",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "科幻 / 惊悚",
    "tags": [
      "超光速",
      "时间膨胀",
      "母女情",
      "孤独",
      "返老还童"
    ],
    "oneLine": "一艘深空探测器以9000公里/秒失控飞向宇宙深处，舱内七年，地球上已过七百年。",
    "cover": "./36.jpg",
    "url": "./video-0186.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0187",
    "title": "沼泽的沉默",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪 / 惊悚",
    "tags": [
      "连环杀手",
      "记者",
      "腐臭美学",
      "反转"
    ],
    "oneLine": "一名调查失踪案的女记者发现，凶手每次作案后都会在沼泽边留下一个手工编织的稻草人。",
    "cover": "./37.jpg",
    "url": "./video-0187.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0188",
    "title": "我盛大的西班牙婚礼",
    "region": "西班牙 / 美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧，爱情",
    "tags": [
      "文化冲突",
      "家庭闹剧",
      "异国婚礼"
    ],
    "oneLine": "一个美国女孩嫁入西班牙斗牛士家族，婚礼当天才发现未婚夫全家都比她想象的疯狂一百倍。",
    "cover": "./38.jpg",
    "url": "./video-0188.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0189",
    "title": "性的疯狂",
    "region": "日本",
    "type": "电影",
    "year": "1999",
    "genre": "剧情，情色，悬疑",
    "tags": [
      "心理",
      "禁室",
      "艺术家"
    ],
    "oneLine": "一个因童年创伤而性压抑的雕刻家，绑架了他心中的“缪斯”，试图通过支配她的身体来创作出完美作品。",
    "cover": "./39.jpg",
    "url": "./video-0189.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0190",
    "title": "一切全包",
    "region": "西班牙 / 英国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚、悬疑、讽刺",
    "tags": [
      "度假村",
      "暗网",
      "克隆人",
      "黑色幽默",
      "阶级"
    ],
    "oneLine": "一对中产夫妇抢到了“一切全包”的顶级海岛游，却发现这个度假村的真实服务是：杀掉你，然后卖给富人一个更听话的克隆版你。",
    "cover": "./40.jpg",
    "url": "./video-0190.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0191",
    "title": "天堂有约",
    "region": "中国香港/韩国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/奇幻",
    "tags": [
      "殡仪馆",
      "预约死亡",
      "跨时空",
      "治愈"
    ],
    "oneLine": "一家名叫“天堂”的殡仪馆，只要你提前预约，就能看到自己死后的景象。",
    "cover": "./41.jpg",
    "url": "./video-0191.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0192",
    "title": "案中案",
    "region": "美国",
    "type": "电视剧",
    "year": "2023",
    "genre": "悬疑 / 犯罪 / 律政",
    "tags": [
      "法庭",
      "多层反转",
      "冤案",
      "复仇"
    ],
    "oneLine": "死刑犯的辩护律师在调查旧案时，意外发现真凶竟是二十年前负责此案的法官，而他正要审判自己的当事人。",
    "cover": "./42.jpg",
    "url": "./video-0192.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0193",
    "title": "心远",
    "region": "中国内地",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "支教",
      "山区",
      "留守儿童",
      "师生情",
      "理想主义"
    ],
    "oneLine": "城市名校的心理学硕士远赴云贵深山，却发现他要拯救的并非孩子，而是自己那颗迷失的功利心。",
    "cover": "./43.jpg",
    "url": "./video-0193.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0194",
    "title": "康纳·麦格雷戈：臭名昭著",
    "region": "爱尔兰",
    "type": "纪录片",
    "year": "2025",
    "genre": "传记, 体育, 纪录",
    "tags": [
      "UFC",
      "格斗",
      "逆袭",
      "真实影像"
    ],
    "oneLine": "从水管工到UFC双冠王，康纳·麦格雷戈用嘴炮与拳头改写格斗史的真实记录。",
    "cover": "./44.jpg",
    "url": "./video-0194.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0195",
    "title": "小旅人",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2022",
    "genre": "奇幻 / 剧情 / 公路",
    "tags": [
      "童年",
      "想象力",
      "行李箱",
      "告别"
    ],
    "oneLine": "八岁男孩相信妈妈去世后变成了云朵，于是他拖着一个空行李箱，要带“妈妈”去看她一直想去的海。",
    "cover": "./45.jpg",
    "url": "./video-0195.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0196",
    "title": "神警奇偷",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑犯罪",
    "tags": [
      "高智商犯罪",
      "警匪博弈",
      "盗窃题材",
      "反转",
      "单元探案"
    ],
    "oneLine": "一个失忆的天才小偷被警方聘用，用“贼的思路”去抓贼，却发现自己可能就是那个传说中的“盗圣”。",
    "cover": "./46.jpg",
    "url": "./video-0196.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0197",
    "title": "天狼劫国语",
    "region": "中国香港",
    "type": "剧集",
    "year": "1990",
    "genre": "武侠 / 古装",
    "tags": [
      "TVB",
      "武侠",
      "宿命",
      "复仇",
      "刘德华"
    ],
    "oneLine": "武林惊现“天狼令”，得令者可称霸，但每六十年必遭天狼食日的反噬之劫。",
    "cover": "./47.jpg",
    "url": "./video-0197.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0198",
    "title": "奇异博士2：疯狂多重宇宙",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "多重宇宙",
      "魔法",
      "惊悚",
      "视觉奇观",
      "黑暗反转"
    ],
    "oneLine": "当守护现实的至圣法师被另一个宇宙的邪恶版自己追杀，每一个选择都可能毁灭一个世界。",
    "cover": "./48.jpg",
    "url": "./video-0198.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0199",
    "title": "欢喜一家人·人生小事",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "家庭/喜剧/短剧",
    "tags": [
      "家庭群像",
      "单元剧",
      "日常幽默",
      "代际沟通"
    ],
    "oneLine": "东北三线城市老赵家，每集只讲一件“小事”：买菜、装窗帘、给狗起名，但每件小事都能闹出连续剧。",
    "cover": "./49.jpg",
    "url": "./video-0199.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0200",
    "title": "救命，我的男票是妖怪",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "人妖恋",
      "都市",
      "搞笑",
      "同居",
      "反转"
    ],
    "oneLine": "社畜女主发现完美男友每晚十二点会变成一只萨摩耶，而且他还有五个妖界前任找上门。",
    "cover": "./50.jpg",
    "url": "./video-0200.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0201",
    "title": "护花高手在都市",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2023",
    "genre": "动作，爱情，奇幻",
    "tags": [
      "保镖",
      "古武",
      "甜宠"
    ],
    "oneLine": "身怀绝技的隐世门派传人，进城给刁蛮千金当保镖，却发现自己的内功只能通过亲吻来传输。",
    "cover": "./51.jpg",
    "url": "./video-0201.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0202",
    "title": "大主宰年番",
    "region": "中国内地",
    "type": "剧集 / 动画",
    "year": "2023",
    "genre": "奇幻 / 动作 / 冒险",
    "tags": [
      "国漫",
      "年番",
      "天蚕土豆",
      "灵路",
      "热血"
    ],
    "oneLine": "牧尘从灵路中被除名后进入北苍灵院，他要证明自己配得上“大主宰”之名。",
    "cover": "./52.jpg",
    "url": "./video-0202.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0203",
    "title": "魔幻猎人",
    "region": "韩国",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻 / 动作",
    "tags": [
      "次元裂缝",
      "物证猎人",
      "寄生咒术",
      "掉落物交易"
    ],
    "oneLine": "在一个“魔法现实化”的世界里，一帮底层猎人靠倒卖次元裂缝里的怪物掉落物为生，却意外捡到了神的断指。",
    "cover": "./53.jpg",
    "url": "./video-0203.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0204",
    "title": "天蝎星升起",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 惊悚",
    "tags": [
      "太空",
      "人工智能",
      "心理战"
    ],
    "oneLine": "飞往新殖民地的移民飞船上，唯一的人类舰长被自己设计的天蝎星AI判定为“最高威胁”。",
    "cover": "./54.jpg",
    "url": "./video-0204.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0205",
    "title": "东宫毒",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "古装 / 悬疑 / 权谋",
    "tags": [
      "宫斗",
      "投毒",
      "太子",
      "验尸",
      "反转"
    ],
    "oneLine": "太子接连暴毙，女验尸官发现毒源不在饭菜，而在龙床上。",
    "cover": "./55.jpg",
    "url": "./video-0205.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0206",
    "title": "怀孕契约",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 家庭",
    "tags": [
      "代孕伦理",
      "财阀阴谋",
      "反转不断"
    ],
    "oneLine": "穷困女大学生签下代孕合同，却发现雇主是她失散多年的亲姐姐，而孩子是她前男友的。",
    "cover": "./56.jpg",
    "url": "./video-0206.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0207",
    "title": "为此为止",
    "region": "德国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情、悬疑、家庭",
    "tags": [
      "代际创伤",
      "纳粹往事",
      "和解",
      "层层反转"
    ],
    "oneLine": "祖母临终前一句“地下室的东西，为此为止”，让孙辈们挖出了一把锈迹斑斑的党卫军配枪。",
    "cover": "./57.jpg",
    "url": "./video-0207.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0208",
    "title": "赛车遇险记",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 冒险, 喜剧",
    "tags": [
      "黑吃黑",
      "沙漠飙车",
      "改装车",
      "限时营救"
    ],
    "oneLine": "一名落魄的前职业车手被迫运送神秘包裹，却发现包裹里是一个被绑架的天才黑客。",
    "cover": "./58.jpg",
    "url": "./video-0208.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0209",
    "title": "爱情无价",
    "region": "中国台湾",
    "type": "电影",
    "year": "1999",
    "genre": "爱情",
    "tags": [
      "穷小子",
      "富家女",
      "错位人生"
    ],
    "oneLine": "穷画家被富家女包月当男友，签合同那天他不知道，女孩只剩三个月寿命。",
    "cover": "./59.jpg",
    "url": "./video-0209.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0210",
    "title": "茜色少女",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "青春 / 奇幻",
    "tags": [
      "时间回溯",
      "姐妹情",
      "小镇",
      "治愈"
    ],
    "oneLine": "每当傍晚天空变成茜色时，已故姐姐就会占据她的身体，用仅存的15分钟帮她挽回今天犯下的错。",
    "cover": "./60.jpg",
    "url": "./video-0210.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0211",
    "title": "野地里的白兰地",
    "region": "爱尔兰 / 英国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 家庭",
    "tags": [
      "威士忌",
      "父女关系",
      "乡村",
      "临终和解"
    ],
    "oneLine": "离开家乡二十年的女儿接到父亲病危的消息，赶回爱尔兰乡村，发现父亲毕生酿造的最后一桶威士忌即将完工。",
    "cover": "./61.jpg",
    "url": "./video-0211.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0212",
    "title": "那年来了鬼子兵",
    "region": "中国大陆",
    "type": "电影",
    "year": "2012",
    "genre": "剧情, 战争",
    "tags": [
      "抗战",
      "孩童视角",
      "人性"
    ],
    "oneLine": "十二岁的狗剩以为鬼子是来演戏的，直到他在戏台下面挖出了全村人的耳朵。",
    "cover": "./62.jpg",
    "url": "./video-0212.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0213",
    "title": "啦啦队的反击",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 运动",
    "tags": [
      "女性力量",
      "逆袭",
      "校园"
    ],
    "oneLine": "被校队开除的三个啦啦队员，组建了一支全是“怪胎”的啦啦队，用最不正经的方式赢了全国赛。",
    "cover": "./63.jpg",
    "url": "./video-0213.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0214",
    "title": "被争论的女人",
    "region": "法国, 德国",
    "type": "电影",
    "year": "2016",
    "genre": "剧情, 历史, 传记",
    "tags": [
      "女权",
      "诉讼",
      "真实性"
    ],
    "oneLine": "一位宣称自己发明了避孕药的女科学家，用余生打一场注定失败的官司。",
    "cover": "./64.jpg",
    "url": "./video-0214.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0215",
    "title": "带一片风景走",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 公路",
    "tags": [
      "环岛",
      "亲情",
      "告别",
      "徒步",
      "治愈"
    ],
    "oneLine": "得知父亲只剩三个月生命，叛逆女儿决定开车带他完成环岛遗愿，却把自己搭了进去。",
    "cover": "./65.jpg",
    "url": "./video-0215.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0216",
    "title": "最后的木琴师",
    "region": "柬埔寨 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐 / 历史",
    "tags": [
      "红色高棉",
      "传统音乐",
      "传承",
      "高棉文化"
    ],
    "oneLine": "红色高棉时期，一个被禁止演奏的木琴师，把音阶刻在囚犯的骨头上，用死亡谱成了最后一部乐谱。",
    "cover": "./66.jpg",
    "url": "./video-0216.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0217",
    "title": "百词莫辩",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "法庭剧",
      "语言学",
      "沉默权",
      "真相迷宫"
    ],
    "oneLine": "聋哑人被控谋杀，王牌律师发现：他并非不能说话，而是曾被割去舌头。",
    "cover": "./67.jpg",
    "url": "./video-0217.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0218",
    "title": "风武雁华",
    "region": "中国大陆",
    "type": "电视剧 (40集)",
    "year": "2024",
    "genre": "古装 / 武侠 / 权谋",
    "tags": [
      "朝堂江湖",
      "双强CP",
      "替身文学",
      "阴谋反转"
    ],
    "oneLine": "北疆女将顶替孪生妹妹入宫为妃，却发现要刺杀的天子正是当年救她的少年。",
    "cover": "./68.jpg",
    "url": "./video-0218.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0219",
    "title": "盗墓同盟",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪， 动作， 奇幻",
    "tags": [
      "盗墓",
      "古墓",
      "风水",
      "文物保护",
      "动作喜剧"
    ],
    "oneLine": "一群由盗墓贼、风水师和黑市商贩组成的杂牌军，联手对抗企图利用古墓秘密掌控世界的跨国财阀。",
    "cover": "./69.jpg",
    "url": "./video-0219.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0220",
    "title": "失意旅行",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "公路",
    "tags": [
      "失忆",
      "自驾",
      "幽默",
      "治愈"
    ],
    "oneLine": "两个失忆的男人在救护车里醒来，仅凭一张模糊的加油站小票踏上了寻家之旅。",
    "cover": "./70.jpg",
    "url": "./video-0220.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0221",
    "title": "非常性反应",
    "region": "中国",
    "type": "电影",
    "year": "2027",
    "genre": "喜剧， 爱情， 科幻",
    "tags": [
      "药物",
      "反转",
      "黑色幽默",
      "都市"
    ],
    "oneLine": "一款让男性暂时获得“女性共情”能力的药丸上市后，三个大男人的生活彻底天翻地覆。",
    "cover": "./71.jpg",
    "url": "./video-0221.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0222",
    "title": "霹雳男儿",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "动作 / 职场",
    "tags": [
      "消防",
      "兄弟情",
      "热血",
      "真实事件改编",
      "港味"
    ],
    "oneLine": "香港最年轻的消防队长，因一次失误被降职到“最废”消防局，却带着一群“问题队员”成为传奇。",
    "cover": "./72.jpg",
    "url": "./video-0222.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0223",
    "title": "柯波拉之家族秘辛",
    "region": "意大利 / 美国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 犯罪 / 家族史",
    "tags": [
      "黑手党",
      "家族斗争",
      "权力更迭",
      "史诗"
    ],
    "oneLine": "柯波拉家族的教父病危，三个子女为了继承权展开血腥内斗。",
    "cover": "./73.jpg",
    "url": "./video-0223.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0224",
    "title": "机械怪兽",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻，动作",
    "tags": [
      "机甲",
      "怪兽",
      "废土",
      "兄弟情",
      "燃"
    ],
    "oneLine": "在垃圾回收站工作的机械师兄弟，无意中启动了军方遗弃的“怪兽”级机甲，却发现激活密码是母亲的摇篮曲。",
    "cover": "./74.jpg",
    "url": "./video-0224.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0225",
    "title": "雅典的意外收获",
    "region": "希腊 / 法国",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 冒险",
    "tags": [
      "公路电影",
      "遗产继承",
      "地中海风光",
      "乌龙事件"
    ],
    "oneLine": "一个破产的伦敦律师继承了一艘停在雅典的破船，却在这艘船的夹板里发现了价值千万欧元的古代金币。",
    "cover": "./75.jpg",
    "url": "./video-0225.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0226",
    "title": "没有航标的河流",
    "region": "中国大陆",
    "type": "电影",
    "year": "1983",
    "genre": "剧情，文艺，历史",
    "tags": [
      "知青返城",
      "理想幻灭",
      "河流隐喻"
    ],
    "oneLine": "三个知青在返城前夜，用木筏把十年青春从山里运出来，却发现城里的河早就改了道。",
    "cover": "./76.jpg",
    "url": "./video-0226.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0227",
    "title": "夏季别墅",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 剧情 / 心理",
    "tags": [
      "家族秘密",
      "度假",
      "密室",
      "回忆杀"
    ],
    "oneLine": "兄妹三人回到童年别墅清理遗物，发现墙壁夹层里藏着一个从未被提起的第四人。",
    "cover": "./77.jpg",
    "url": "./video-0227.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0228",
    "title": "子夜的太阳",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 科幻",
    "tags": [
      "极昼",
      "时空循环",
      "末日浪漫",
      "失忆",
      "追寻"
    ],
    "oneLine": "在地球最后的极昼之地，他每天醒来都会忘记她，而她每天都会让他重新爱上自己。",
    "cover": "./78.jpg",
    "url": "./video-0228.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0229",
    "title": "二十七朵玫瑰",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑",
    "tags": [
      "悬疑爱情",
      "记忆",
      "复仇"
    ],
    "oneLine": "结婚七周年，妻子收到27朵匿名玫瑰，每一朵都代表丈夫一个不为人知的杀人纪念日。",
    "cover": "./79.jpg",
    "url": "./video-0229.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0230",
    "title": "鬬牛壮士",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 传记 / 运动",
    "tags": [
      "斗牛",
      "热血",
      "救赎"
    ],
    "oneLine": "一位因伤退役的斗牛士，为了拯救濒临关闭的家族牧场，必须重回斗牛场完成最后一场表演。",
    "cover": "./80.jpg",
    "url": "./video-0230.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0231",
    "title": "钱在囧途",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 犯罪, 公路",
    "tags": [
      "黑色幽默",
      "笨贼",
      "彩票",
      "荒诞"
    ],
    "oneLine": "一张中了五百万的彩票被风吹飞，四个各有心事的倒霉蛋开始了一场横跨三省的疯狂追钱之旅。",
    "cover": "./81.jpg",
    "url": "./video-0231.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0232",
    "title": "大谷翔平：超越梦想",
    "region": "日本",
    "type": "纪录片",
    "year": "2024",
    "genre": "运动, 传记",
    "tags": [
      "棒球",
      "二刀流",
      "励志",
      "真实影像"
    ],
    "oneLine": "首部深度记录大谷翔平从花卷东高校到MLB世界级巨星的完整成长历程。",
    "cover": "./82.jpg",
    "url": "./video-0232.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0233",
    "title": "幸福满满",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "黑色喜剧 / 悬疑",
    "tags": [
      "中产焦虑",
      "完美主义",
      "邻里之间",
      "全员恶人"
    ],
    "oneLine": "首尔顶级小区里，五组看似“幸福满满”的家庭，每个成员都在暗中策划除掉身边的某个人。",
    "cover": "./83.jpg",
    "url": "./video-0233.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0234",
    "title": "非人哉",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "genre": "喜剧，动画，奇幻",
    "tags": [
      "神仙",
      "日常",
      "搞笑"
    ],
    "oneLine": "神仙妖怪们被迫在现代都市做起了打工人，九月、小玉、哮天犬的合租生活鸡飞狗跳。",
    "cover": "./84.jpg",
    "url": "./video-0234.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0235",
    "title": "夫妻英烈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2014",
    "genre": "战争 / 爱情 / 剧情",
    "tags": [
      "抗日",
      "夫妻档",
      "真实事件改编",
      "悲壮"
    ],
    "oneLine": "一对新婚三天的新四军夫妻同时被捕，日军让他们互相指认谁是“重要人物”，否则两人都要死。",
    "cover": "./85.jpg",
    "url": "./video-0235.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0236",
    "title": "怪兽与葛林戴华德的罪行",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "奇幻，冒险，动作",
    "tags": [
      "魔法世界",
      "黑暗 wizard",
      "神奇生物",
      "宿命对决"
    ],
    "oneLine": "纽特·斯卡曼德受邓布利多之托，再次踏入魔法世界的暗流，阻止黑巫师葛林戴华德的阴谋。",
    "cover": "./86.jpg",
    "url": "./video-0236.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0237",
    "title": "丹尼尔",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 心理",
    "tags": [
      "自闭症",
      "钢琴天才",
      "监护权官司",
      "音乐治疗"
    ],
    "oneLine": "一个不会说话的自闭症男孩，用钢琴弹出了母亲“意外坠楼”那晚的全部真相。",
    "cover": "./87.jpg",
    "url": "./video-0237.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0238",
    "title": "大雄的南海大冒险",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "冒险， 动画",
    "tags": [
      "哆啦A梦",
      "海盗",
      "友情"
    ],
    "oneLine": "大雄和伙伴们穿越到 18 世纪南海，误打误撞成了被通缉的“义贼海盗团”。",
    "cover": "./88.jpg",
    "url": "./video-0238.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0239",
    "title": "检察官内传",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情， 职业， 犯罪",
    "tags": [
      "职场群像",
      "基层反腐",
      "黑色幽默",
      "法理人情",
      "单元剧"
    ],
    "oneLine": "地方支厅刑事一部的一群“非典型”检察官，在食堂比在法庭上更常上演唇枪舌战。",
    "cover": "./89.jpg",
    "url": "./video-0239.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0240",
    "title": "雪山飞狐粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1998",
    "genre": "武侠 / 爱情",
    "tags": [
      "金庸",
      "复仇",
      "雪山",
      "经典翻拍"
    ],
    "oneLine": "为寻闯王宝藏，胡斐独上雪山，却遇上了杀父仇人苗人凤之女苗若兰。",
    "cover": "./90.jpg",
    "url": "./video-0240.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0241",
    "title": "黑莲疑案",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 古装 / 探案",
    "tags": [
      "唐朝诡事",
      "女仵作",
      "邪教疑云",
      "双案并行"
    ],
    "oneLine": "长安城惊现“黑莲”标记尸体，不信鬼神的女仵作被迫与道士联手破案。",
    "cover": "./91.jpg",
    "url": "./video-0241.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0242",
    "title": "度过盛夏",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "家庭/剧情",
    "tags": [
      "临终关怀",
      "海边",
      "和解",
      "祖孙"
    ],
    "oneLine": "叛逆的摇滚少女被送到乡下照顾患有阿尔茨海默症的外婆，却在外婆失序的记忆里重新认识了母亲。",
    "cover": "./92.jpg",
    "url": "./video-0242.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0243",
    "title": "回魂唱片",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 悬疑",
    "tags": [
      "都市传说",
      "黑胶",
      "时间循环",
      "诅咒",
      "录音"
    ],
    "oneLine": "一张1978年的绝版黑胶唱片，一旦播放，所有人都会在听到歌声的第42分钟离奇死亡。",
    "cover": "./93.jpg",
    "url": "./video-0243.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0244",
    "title": "狂琴畸恋",
    "region": "法国",
    "type": "电影",
    "year": "1997",
    "genre": "剧情, 爱情, 惊悚",
    "tags": [
      "禁忌之恋",
      "音乐家",
      "心理扭曲",
      "浪漫惊悚"
    ],
    "oneLine": "一位才华横溢的大提琴家收养了孤女，将她的身体塑造成活生生的大提琴，演奏出惊世骇俗的“人琴合一”。",
    "cover": "./94.jpg",
    "url": "./video-0244.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0245",
    "title": "盗版爱情",
    "region": "中国",
    "type": "电影",
    "year": "2010",
    "genre": "喜剧, 爱情",
    "tags": [
      "山寨文化",
      "小贩",
      "多线叙事",
      "荒诞"
    ],
    "oneLine": "一张被误认为是“爱情教程”的盗版光碟，在北京的旧货市场引发了一场关于真爱的荒诞追逐战。",
    "cover": "./95.jpg",
    "url": "./video-0245.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0246",
    "title": "危险之爱",
    "region": "墨西哥 / 美国",
    "type": "剧集",
    "year": "2026",
    "genre": "爱情 / 惊悚 / 犯罪",
    "tags": [
      "毒枭之女",
      "卧底DEA",
      "禁忌之恋",
      "背叛",
      "墨西哥贩毒集团"
    ],
    "oneLine": "DEA卧底爱上大毒枭之女，但他不知她早已识破身份——她准备用他，来杀死自己的父亲。",
    "cover": "./96.jpg",
    "url": "./video-0246.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0247",
    "title": "少年囚徒",
    "region": "英国",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情 / 犯罪",
    "tags": [
      "少年犯",
      "司法系统",
      "人性",
      "救赎",
      "暴力"
    ],
    "oneLine": "14岁过失杀人犯被送进成人监狱，他的唯一武器是高中课本和颤抖的善良。",
    "cover": "./97.jpg",
    "url": "./video-0247.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0248",
    "title": "法官老张轶事之别动感情",
    "region": "中国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 乡村",
    "tags": [
      "法官",
      "黄昏恋",
      "农村",
      "普法"
    ],
    "oneLine": "六十岁的乡村法官老张恋爱了，但全村的人都反对，因为对方是当年害他妻子难产的接生婆。",
    "cover": "./98.jpg",
    "url": "./video-0248.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0249",
    "title": "老当益壮",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "老年特工",
      "退休生活",
      "搞笑动作",
      "硬汉",
      "反转"
    ],
    "oneLine": "养老院里四位老掉牙的前特工，因为当年的敌人前来灭口，不得不坐着电动轮椅重出江湖。",
    "cover": "./99.jpg",
    "url": "./video-0249.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0250",
    "title": "美国众神第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2027",
    "genre": "奇幻， 悬疑",
    "tags": [
      "神话",
      "现代",
      "神战"
    ],
    "oneLine": "新神与旧神的战争升级，影子却发现自己其实是“故事之神”，能创造或终结任何神明。",
    "cover": "./100.jpg",
    "url": "./video-0250.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0251",
    "title": "霹雳玄蒙纪",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "布袋戏 / 奇幻 / 武侠",
    "tags": [
      "霹雳布袋戏",
      "玄幻宇宙",
      "正邪对决",
      "机关术",
      "声优演绎"
    ],
    "oneLine": "上古机关术重现人间，玄蒙派与机械魔域的百年战争背后，藏着一个颠覆三界的秘密。",
    "cover": "./101.jpg",
    "url": "./video-0251.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0252",
    "title": "静静的决斗",
    "region": "日本",
    "type": "电影",
    "year": "1949",
    "genre": "剧情/医疗/伦理",
    "tags": [
      "黑泽明",
      "梅毒",
      "医者自医",
      "战后创伤",
      "人性"
    ],
    "oneLine": "一名军医在手术中不幸感染梅毒，为了不传染给爱人，他选择在沉默中与心魔及疾病进行双重决斗。",
    "cover": "./102.jpg",
    "url": "./video-0252.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0253",
    "title": "钱作怪",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "小人物翻身",
      "假钞风暴",
      "港式荒诞"
    ],
    "oneLine": "印刷厂工人误印出一张错版千元港币，一夜之间，全城黑帮都以为他是印钞天才。",
    "cover": "./103.jpg",
    "url": "./video-0253.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0254",
    "title": "东宫",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装, 爱情, 权谋",
    "tags": [
      "宫廷",
      "复仇",
      "虐恋",
      "权术"
    ],
    "oneLine": "为报灭族之仇，她以舞姬身份潜入东宫，却在刀刃上爱上了那个最该杀的人。",
    "cover": "./104.jpg",
    "url": "./video-0254.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0255",
    "title": "掏心恋习生",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2027",
    "genre": "爱情, 医疗",
    "tags": [
      "心脏移植",
      "情感转移",
      "实习医生",
      "替身文学"
    ],
    "oneLine": "她移植了捐赠者的心脏后，开始疯狂爱上捐赠者的未婚夫。",
    "cover": "./105.jpg",
    "url": "./video-0255.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0256",
    "title": "潜欲浮生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 心理",
    "tags": [
      "催眠",
      "梦境",
      "犯罪",
      "反转"
    ],
    "oneLine": "心理师通过催眠帮助客户戒瘾，却意外释放了对方体内沉睡的连环杀手人格。",
    "cover": "./106.jpg",
    "url": "./video-0256.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0257",
    "title": "鲁豫有约一日行第十一季",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2024",
    "genre": "访谈、真人秀、纪实",
    "tags": [
      "深度对话",
      "一日跟拍",
      "名人私房面",
      "时代记忆"
    ],
    "oneLine": "鲁豫不再坐演播厅，而是跟随嘉宾度过完整一天，从早餐到睡前，聊出镜头外的人生真相。",
    "cover": "./107.jpg",
    "url": "./video-0257.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0258",
    "title": "我的主场队",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 运动",
    "tags": [
      "电子竞技",
      "中年危机",
      "逆袭"
    ],
    "oneLine": "一群平均年龄45岁的过气电竞选手，为了300万奖金重组战队，却发现现在的游戏他们连新手关都过不去。",
    "cover": "./108.jpg",
    "url": "./video-0258.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0259",
    "title": "不吉波普不笑",
    "region": "日本",
    "type": "动画",
    "year": "2019",
    "genre": "奇幻 / 悬疑",
    "tags": [
      "都市奇幻",
      "多重人格",
      "时间跳跃",
      "心理",
      "青春"
    ],
    "oneLine": "当世界的平衡即将崩坏时，都市传说“不吉波普”便会现身，她从不笑，只是冷冷地斩断“扭曲”。",
    "cover": "./109.jpg",
    "url": "./video-0259.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0260",
    "title": "徘徊者",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 惊悚",
    "tags": [
      "太空",
      "怪物",
      "生存"
    ],
    "oneLine": "深空采矿船的船员，在休眠中醒来发现船内多了一个“人”，且它正在模仿他们。",
    "cover": "./110.jpg",
    "url": "./video-0260.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0261",
    "title": "暮光之城3：月食",
    "region": "美国",
    "type": "电影",
    "year": "2010",
    "genre": "奇幻 / 爱情 / 惊悚",
    "tags": [
      "吸血鬼",
      "狼人",
      "三角恋",
      "超自然",
      "系列续作"
    ],
    "oneLine": "西雅图连环凶杀案背后，一支新生吸血鬼军团正冲着贝拉而来。",
    "cover": "./111.jpg",
    "url": "./video-0261.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0262",
    "title": "省港旗兵4",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "经典重启",
      "跨境犯罪",
      "新旧冲突",
      "宿命悲剧"
    ],
    "oneLine": "三十年后，“省港旗兵”的后代重聚香港，不是为了打劫金铺，而是为了拿回祖辈的人头金。",
    "cover": "./112.jpg",
    "url": "./video-0262.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0263",
    "title": "近郊奇情",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 爱情, 悬疑",
    "tags": [
      "美国梦碎",
      "婚外情",
      "黑色电影",
      "郊区"
    ],
    "oneLine": "上世纪五十年代，完美郊区模范夫妻的家中被装了窃听器，而监听者是他们的“完美”邻居。",
    "cover": "./113.jpg",
    "url": "./video-0263.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0264",
    "title": "感受富足：健康是新财富",
    "region": "美国",
    "type": "综艺",
    "year": "2022",
    "genre": "纪录片 / 真人秀",
    "tags": [
      "健康科普",
      "逆转年龄",
      "实验真人秀",
      "生活方式"
    ],
    "oneLine": "十位亿万富翁签下协议：用一半财产换回年轻十岁的身体，看谁做得到。",
    "cover": "./114.jpg",
    "url": "./video-0264.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0265",
    "title": "放学后的昴星团",
    "region": "日本",
    "type": "TV剧集",
    "year": "2022",
    "genre": "青春, 科幻, 悬疑",
    "tags": [
      "天文部",
      "时间循环",
      "友情",
      "秘密实验"
    ],
    "oneLine": "天文社的五名社员在观测星空时，意外触发了能看见“时间伤痕”的超能力。",
    "cover": "./115.jpg",
    "url": "./video-0265.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0266",
    "title": "故乡",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 文艺",
    "tags": [
      "城镇化",
      "送别",
      "拆迁"
    ],
    "oneLine": "村子即将被水库淹没，三个童年好友回来见最后一面，却各怀秘密。",
    "cover": "./116.jpg",
    "url": "./video-0266.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0267",
    "title": "尖叫天空",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 灾难",
    "tags": [
      "怪兽",
      "空战",
      "末日"
    ],
    "oneLine": "全球天空出现“裂缝”，数万只远古翼龙涌入现代，民航飞行员成了人类最后一道防线。",
    "cover": "./117.jpg",
    "url": "./video-0267.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0268",
    "title": "八田与一嘉南大圳之父",
    "region": "台湾",
    "type": "电影",
    "year": "2027",
    "genre": "剧情, 历史, 传记",
    "tags": [
      "日据时期",
      "水利工程",
      "台湾",
      "殖民",
      "人物传记"
    ],
    "oneLine": "日本工程师八田与一建造嘉南大圳，他爱这片土地胜过爱他的天皇，却被历史碾碎在太平洋战争里。",
    "cover": "./118.jpg",
    "url": "./video-0268.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0269",
    "title": "绀田照的合法食谱",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 犯罪 / 美食",
    "tags": [
      "黑道",
      "美食",
      "反差萌"
    ],
    "oneLine": "社团的第三代接班人绀田照，主业是暴力团组长，副业是在深夜食堂研究如何用合法食材复刻黑道禁断的美味。",
    "cover": "./119.jpg",
    "url": "./video-0269.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0270",
    "title": "战争姐妹",
    "region": "德国 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 战争",
    "tags": [
      "女性视角",
      "二战",
      "姐妹情"
    ],
    "oneLine": "二战末期，一对德国贵族姐妹在逃亡路上，一个爱上犹太俘虏，一个成为美军翻译。",
    "cover": "./120.jpg",
    "url": "./video-0270.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0271",
    "title": "好事多磨",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 家庭, 喜剧",
    "tags": [
      "备婚",
      "冲突",
      "和解",
      "温情"
    ],
    "oneLine": "一场筹备了三年的婚礼，在最后三天里遭遇了前任、父母和天灾的轮番轰炸。",
    "cover": "./121.jpg",
    "url": "./video-0271.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0272",
    "title": "丑娃娃大冒险",
    "region": "美国",
    "type": "动画电影",
    "year": "2026",
    "genre": "奇幻， 冒险， 家庭",
    "tags": [
      "被遗弃玩具",
      "多元审美",
      "自我认同",
      "色彩绚丽"
    ],
    "oneLine": "在玩具世界的“瑕疵处理厂”，一群被生产线淘汰的丑娃娃决定闯入完美之城，换回美丽脸孔。",
    "cover": "./122.jpg",
    "url": "./video-0272.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0273",
    "title": "七岁那年的初次见面",
    "region": "日本",
    "type": "电影",
    "year": "2011",
    "genre": "剧情",
    "tags": [
      "温情",
      "成长",
      "家庭",
      "治愈",
      "童年"
    ],
    "oneLine": "七岁那年夏天，我在废弃车站遇见了一位自称“未来叔叔”的神秘人，他改变了我整个家庭。",
    "cover": "./123.jpg",
    "url": "./video-0273.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0274",
    "title": "年龄差婚姻",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情、家庭、轻喜剧",
    "tags": [
      "老少恋",
      "重组家庭",
      "代际冲突"
    ],
    "oneLine": "20岁女大学生嫁给了40岁离异社长，本以为跨越的是年龄，没想到跨过的是整个时代。",
    "cover": "./124.jpg",
    "url": "./video-0274.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0275",
    "title": "百万个幸福现在",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 同性",
    "tags": [
      "绝症",
      "回忆录",
      "漫画",
      "爱与告别",
      "催泪"
    ],
    "oneLine": "身患绝症的漫画家决定用最后100天，为妻子画下属于她们的“百万个幸福瞬间”。",
    "cover": "./125.jpg",
    "url": "./video-0275.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0276",
    "title": "嗨！好少年2020",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2020",
    "genre": "青春、校园、喜剧",
    "tags": [
      "高考",
      "友情",
      "成长",
      "轻喜剧"
    ],
    "oneLine": "2020年高考延期，五个高三学生在最后的冲刺中经历了友情、初恋与离别。",
    "cover": "./126.jpg",
    "url": "./video-0276.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0277",
    "title": "京义线",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 历史",
    "tags": [
      "南北韩",
      "铁路",
      "政治"
    ],
    "oneLine": "京义线铁路连接工程启动，负责对接的南北两位工程师，在短短七天的合作中跨越了七十年的隔阂。",
    "cover": "./127.jpg",
    "url": "./video-0277.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0278",
    "title": "鬼怪屋",
    "region": "日本",
    "type": "电影",
    "year": "1977",
    "genre": "恐怖 / 喜剧 / 奇幻",
    "tags": [
      "实验电影",
      "少女",
      "猎奇"
    ],
    "oneLine": "六个女学生去乡下探望生病的姨母，却发现她的别墅是一个会吞噬少女的妖怪房子。",
    "cover": "./128.jpg",
    "url": "./video-0278.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0279",
    "title": "童年的终结",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻",
    "tags": [
      "外星人",
      "乌托邦",
      "心理控制",
      "悬疑",
      "哲学"
    ],
    "oneLine": "外星人降临地球，消除了战争与疾病，代价是所有人类儿童在七岁时会消失不见。",
    "cover": "./129.jpg",
    "url": "./video-0279.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0280",
    "title": "小王国的爱情",
    "region": "比利时",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 儿童, 奇幻",
    "tags": [
      "微缩世界",
      "自闭症",
      "想象力",
      "治愈"
    ],
    "oneLine": "患有自闭症的小女孩坚信自家后院的蚂蚁窝里住着一个微型王国，她决定要为蚂蚁国王举办一场婚礼。",
    "cover": "./130.jpg",
    "url": "./video-0280.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0281",
    "title": "年华十八尽风流",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "古装, 喜剧, 爱情",
    "tags": [
      "女扮男装",
      "科举",
      "权谋",
      "甜宠",
      "逆袭"
    ],
    "oneLine": "十八岁商贾之女顶替双胞胎哥哥进京赶考，一不小心高中探花，还被皇帝指婚给了最讨厌她的丞相之子。",
    "cover": "./131.jpg",
    "url": "./video-0281.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0282",
    "title": "佩吉·休出嫁",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "穿越",
      "婚礼恐惧症",
      "重温青春",
      "选择"
    ],
    "oneLine": "婚礼当天晕倒的准新娘，穿越回80年代的高中校园，遇到了还是校霸的亲生老爸。",
    "cover": "./132.jpg",
    "url": "./video-0282.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0283",
    "title": "绿茵胜境音乐祭",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "音乐",
    "tags": [
      "足球",
      "摇滚",
      "青春",
      "校园",
      "热血"
    ],
    "oneLine": "即将废部的足球部和濒临解散的轻音部，决定合体冲击全国大赛，用摇滚踢出一场奇迹。",
    "cover": "./133.jpg",
    "url": "./video-0283.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0284",
    "title": "摩登武圣",
    "region": "中国香港/中国内地",
    "type": "电影",
    "year": "2026",
    "genre": "动作/喜剧/科幻",
    "tags": [
      "穿越",
      "关羽",
      "外卖员",
      "古武",
      "都市"
    ],
    "oneLine": "关羽败走麦城后没死，而是被雷劈到了2026年，成了一名好评率垫底的外卖骑手。",
    "cover": "./134.jpg",
    "url": "./video-0284.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0285",
    "title": "龙凤茶楼",
    "region": "香港",
    "type": "电影",
    "year": "1990",
    "genre": "剧情, 爱情, 黑帮",
    "tags": [
      "茶餐厅",
      "江湖",
      "退隐",
      "爱情",
      "市井"
    ],
    "oneLine": "昔日金牌打手出狱后在龙凤茶楼当伙计，想过安稳日子，但江湖恩怨与痴情舞女却步步紧逼。",
    "cover": "./135.jpg",
    "url": "./video-0285.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0286",
    "title": "青年警察",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 喜剧",
    "tags": [
      "警校",
      "热血",
      "破案"
    ],
    "oneLine": "两个警校差生为了凑学分，意外卷入一场涉及高层的连环绑架案。",
    "cover": "./136.jpg",
    "url": "./video-0286.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0287",
    "title": "阴阳路粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1997",
    "genre": "恐怖, 奇幻",
    "tags": [
      "港式恐怖",
      "分段式",
      "古天乐",
      "民俗怪谈"
    ],
    "oneLine": "抄近路回家的情侣在农历七月十四触犯禁忌，惹上了一场无法回头的亡命游戏。",
    "cover": "./137.jpg",
    "url": "./video-0287.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0288",
    "title": "骇客娃娃",
    "region": "日本",
    "type": "剧集",
    "year": "2015",
    "genre": "科幻 / 喜剧 / 短片",
    "tags": [
      "人工智能",
      "宅文化",
      "泡面番",
      "吐槽",
      "未来"
    ],
    "oneLine": "三款自带BUG的客服机器人少女，在解决用户奇葩难题时顺便毁灭世界。",
    "cover": "./138.jpg",
    "url": "./video-0288.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0289",
    "title": "蛋黄酱",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情/美食",
    "tags": [
      "美食",
      "老年",
      "孤独",
      "和解"
    ],
    "oneLine": "一个固执的老米其林厨师在养老院里，用一罐蛋黄酱唤醒了五个老人的味觉和生命热情。",
    "cover": "./139.jpg",
    "url": "./video-0289.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0290",
    "title": "仓鼠与格蕾泰尔",
    "region": "德国",
    "type": "迷你剧",
    "year": "2025",
    "genre": "黑色童话/心理惊悚",
    "tags": [
      "格林童话改编",
      "厌食症隐喻",
      "兄妹关系",
      "超现实"
    ],
    "oneLine": "改编自《糖果屋》。妹妹格蕾泰尔患上了厌食症，她眼中的食物是怪物，哥哥是唯一能让她“吃下去”的人。",
    "cover": "./140.jpg",
    "url": "./video-0290.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0291",
    "title": "不干我的事",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2026",
    "genre": "喜剧, 剧情",
    "tags": [
      "职场甩锅",
      "黑色幽默",
      "社畜生存",
      "道德困境"
    ],
    "oneLine": "一个信奉“多一事不如少一事”的公司老油条，意外被卷入一场全员甩锅的亿元贪腐案，越躲越背锅。",
    "cover": "./141.jpg",
    "url": "./video-0291.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0292",
    "title": "毒品网路",
    "region": "哥伦比亚 / 美国",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪 / 剧情 / 惊悚",
    "tags": [
      "暗网",
      "毒品",
      "卧底",
      "多线叙事"
    ],
    "oneLine": "一张暗网照片牵连出三大洲的毒枭、黑客和瘾君子，这是一场没有边界的缉毒战。",
    "cover": "./142.jpg",
    "url": "./video-0292.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0293",
    "title": "暴力监狱第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2027",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "硬核",
      "黑吃黑",
      "帮派",
      "写实格斗"
    ],
    "oneLine": "上一季的狱霸死了，但监狱里来了一个比所有囚犯更疯的新狱警。",
    "cover": "./143.jpg",
    "url": "./video-0293.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0294",
    "title": "亚当斯一家2",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "动画 / 喜剧 / 奇幻",
    "tags": [
      "哥特",
      "家庭公路片",
      "怪诞",
      "亲情"
    ],
    "oneLine": "亚当斯一家开车穿越美国公路旅行，途中发现小女儿星期三可能不是亲生的，而她的“亲生父母”是世界上最阳光开朗的网红夫妻。",
    "cover": "./144.jpg",
    "url": "./video-0294.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0295",
    "title": "我是欧嘉",
    "region": "捷克",
    "type": "电影",
    "year": "2016",
    "genre": "传记, 剧情",
    "tags": [
      "政治",
      "女性",
      "真实改编",
      "悲剧"
    ],
    "oneLine": "真实事件改编，捷克斯洛伐克女大学生因公开反对华约入侵，被判终身精神虐待式的“预防性监禁”。",
    "cover": "./145.jpg",
    "url": "./video-0295.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0296",
    "title": "大日子2011",
    "region": "马来西亚",
    "type": "电影",
    "year": "2011",
    "genre": "喜剧, 家庭",
    "tags": [
      "婚礼",
      "乌龙",
      "文化"
    ],
    "oneLine": "一场大婚前夕，八竿子打不着的亲戚们齐聚一堂，闹出无数笑话。",
    "cover": "./146.jpg",
    "url": "./video-0296.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0297",
    "title": "猫和老鼠喜剧秀",
    "region": "美国",
    "type": "动画剧集",
    "year": "2022",
    "genre": "喜剧、动画、默片",
    "tags": [
      "猫鼠",
      "无对白",
      "现代场景",
      "致敬经典",
      "单元剧"
    ],
    "oneLine": "汤姆和杰瑞进入现代人类世界，在手机、外卖、直播、电竞等全新场景中，继续上演永恒的追逐与反追逐。",
    "cover": "./147.jpg",
    "url": "./video-0297.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0298",
    "title": "风流铁汉黑天王",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 喜剧 / 警匪",
    "tags": [
      "恶搞致敬",
      "双雄模式",
      "港式无厘头",
      "怀旧梗"
    ],
    "oneLine": "过气动作明星被警察误认为是神秘侠客“黑天王”，他决定假戏真做，用拍电影的特技去对抗真匪徒。",
    "cover": "./148.jpg",
    "url": "./video-0298.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0299",
    "title": "糖果掠夺者",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 喜剧",
    "tags": [
      "抢劫",
      "黑色幽默",
      "小人物",
      "荒诞"
    ],
    "oneLine": "三个走投无路的倒霉蛋，决定去抢劫一家传说中藏有巨额现金的糖果工厂，却发现那是黑手党的洗钱基地。",
    "cover": "./149.jpg",
    "url": "./video-0299.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0300",
    "title": "小镇疑云 第二季",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "小镇",
      "连环杀人",
      "记者",
      "陈年旧案"
    ],
    "oneLine": "第一季的凶手伏法五年后，同一小镇出现模仿犯，当年办案的记者发现真凶可能另有其人。",
    "cover": "./150.jpg",
    "url": "./video-0300.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0301",
    "title": "想谈一场韩剧般的恋爱",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "日韩合作",
      "恋爱真人秀",
      "演员",
      "反转",
      "纯爱"
    ],
    "oneLine": "六个坚信“现实爱情索然无味”的年轻人，参加一档“重现韩剧名场面”的真人秀，却演着演着动了真情。",
    "cover": "./1.jpg",
    "url": "./video-0301.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0302",
    "title": "宅男女神杀人狂",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 喜剧 / 惊悚",
    "tags": [
      "网红",
      "直播",
      "血腥",
      "黑色幽默",
      "反讽"
    ],
    "oneLine": "拥有百万宅男粉丝的清纯女神，每晚十点会准时变成连环杀手。",
    "cover": "./2.jpg",
    "url": "./video-0302.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0303",
    "title": "卡拉布公主",
    "region": "印度",
    "type": "电影",
    "year": "2026",
    "genre": "历史 / 剧情",
    "tags": [
      "古印度",
      "公主",
      "抗争",
      "史诗",
      "女性力量"
    ],
    "oneLine": "被历史遗忘的南印度公主卡拉布，为了阻挡外敌入侵，组建了一支全由女性组成的“黑蝎子”特种部队。",
    "cover": "./3.jpg",
    "url": "./video-0303.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0304",
    "title": "蛇蝎美人第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2019",
    "genre": "悬疑、惊悚、犯罪",
    "tags": [
      "女性反杀",
      "高智商犯罪",
      "复仇",
      "多线叙事"
    ],
    "oneLine": "五位身世迥异的女性在暗网相识，联手策划完美犯罪，报复那些逃脱法律制裁的男人。",
    "cover": "./4.jpg",
    "url": "./video-0304.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0305",
    "title": "圣殿奇妙夜",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": [
      "博物馆",
      "复活",
      "历史人物",
      "一夜"
    ],
    "oneLine": "教堂守夜人发现，每晚零点，所有雕像都会复活，而耶稣和犹大正在为了谁洗碗而吵架。",
    "cover": "./5.jpg",
    "url": "./video-0305.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0306",
    "title": "埃德沃德·迈布里奇",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "传记、历史",
    "tags": [
      "摄影",
      "奔马",
      "动态影像",
      "谋杀",
      "发明家"
    ],
    "oneLine": "他拍下了世界上第一段动态影像，却因为杀了妻子的情人差点死在监狱。",
    "cover": "./6.jpg",
    "url": "./video-0306.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0307",
    "title": "伪造者",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 历史， 犯罪",
    "tags": [
      "纳粹",
      "假钞",
      "真实改编",
      "幸存者",
      "道德困境"
    ],
    "oneLine": "犹太假钞专家被关进集中营，纳粹逼他伪造英镑美元以摧毁盟国经济，否则就死。",
    "cover": "./7.jpg",
    "url": "./video-0307.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0308",
    "title": "凭火决狱",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 犯罪 / 历史",
    "tags": [
      "冤案",
      "宗教狂熱",
      "小镇风云",
      "法庭戏"
    ],
    "oneLine": "德州小镇盛行“神判法”，任何嫌疑人若被火烧而不认罪，便是无罪，直到一位法医到来。",
    "cover": "./8.jpg",
    "url": "./video-0308.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0309",
    "title": "水行侠 失落王国",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "DC扩展",
      "兄弟反目",
      "七海",
      "远古科技"
    ],
    "oneLine": "亚瑟成为国王后发现弟弟奥姆才是七海真正的继承人，而王冠会慢慢把佩戴者变成没有感情的珊瑚。",
    "cover": "./9.jpg",
    "url": "./video-0309.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0310",
    "title": "天气预报式恋爱",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "都市爱情",
    "tags": [
      "职场",
      "阴差阳错",
      "同居",
      "日久生情"
    ],
    "oneLine": "一个谨慎如天气预报的气象主播，和一个随性如暴风雨的插画师被迫同居，她的预报永远追不上他的天气。",
    "cover": "./10.jpg",
    "url": "./video-0310.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0311",
    "title": "盗梦者",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻 / 悬疑 / 动作",
    "tags": [
      "梦境入侵",
      "记忆重构",
      "反转结局"
    ],
    "oneLine": "一名失去痛觉的特工潜入连环杀手的梦境，却发现自己才是那个被追捕的猎物。",
    "cover": "./11.jpg",
    "url": "./video-0311.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0312",
    "title": "梁山人马",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装, 历史, 动作",
    "tags": [
      "水浒",
      "现代改编",
      "热血群像",
      "权力游戏"
    ],
    "oneLine": "大学生村官穿越到北宋末年，试图用现代管理学改造梁山土匪，成为一方豪强。",
    "cover": "./12.jpg",
    "url": "./video-0312.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0313",
    "title": "曼谷名妓",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 动作",
    "tags": [
      "妓院谍战",
      "殖民时期",
      "女性复仇"
    ],
    "oneLine": "1899 年曼谷，一位花魁利用恩客们的机密，策划了一场推翻殖民傀儡政权的惊天计划。",
    "cover": "./13.jpg",
    "url": "./video-0313.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0314",
    "title": "东寺街西寺巷",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2003",
    "genre": "喜剧, 家庭",
    "tags": [
      "方言剧",
      "昆明",
      "市井生活",
      "幽默",
      "怀旧"
    ],
    "oneLine": "以小西门一栋老居民楼为背景，讲述了老昆明人管家的家长里短和邻里趣事。",
    "cover": "./14.jpg",
    "url": "./video-0314.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0315",
    "title": "结束，开始",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "文艺剧情",
    "tags": [
      "人生重置",
      "非线性叙事",
      "女性视角",
      "哲学对话",
      "存在主义"
    ],
    "oneLine": "一个女人在结束婚姻的当天，遇见了未来结束自己生命的男人，他们用三个小时谈论了一生的长度。",
    "cover": "./15.jpg",
    "url": "./video-0315.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0316",
    "title": "穿越天际靠近你",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "航空管制",
      "平行时空",
      "无线电情缘",
      "云端恋爱"
    ],
    "oneLine": "伦敦航空管制员每晚都会收到一条来自五年前遇难航班的无线电信号，而发信人是他的亡妻，他必须阻止那趟航班起飞。",
    "cover": "./16.jpg",
    "url": "./video-0316.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0317",
    "title": "驱魔警察",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 恐怖, 奇幻",
    "tags": [
      "灵幻",
      "僵尸",
      "警匪",
      "港味怀旧",
      "茅山术"
    ],
    "oneLine": "油麻地警署接到报案，一具“丧尸”当街咬人，而赶来的疯癫大叔自称是末代驱魔警察，用的法器是甩棍和苹果手机。",
    "cover": "./17.jpg",
    "url": "./video-0317.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0318",
    "title": "天火焚城录",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "灾难，史诗",
    "tags": [
      "庞贝",
      "火山",
      "姐妹",
      "时间循环",
      "神谕"
    ],
    "oneLine": "庞贝末日的前一天，一对女祭司姐妹收到神谕：火山将焚城，但她们只能救一个人。",
    "cover": "./18.jpg",
    "url": "./video-0318.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0319",
    "title": "京北的我们",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情",
    "tags": [
      "北漂",
      "现实向",
      "破镜重圆",
      "成长阵痛"
    ],
    "oneLine": "一对恋人从大学到毕业，在北京漂泊六年，终于在分手那天，买下了属于他们的房子。",
    "cover": "./19.jpg",
    "url": "./video-0319.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0320",
    "title": "只是查理",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，同性，传记",
    "tags": [
      "跨性别少年",
      "家庭接纳",
      "校园霸凌",
      "自我认同",
      "真实改编"
    ],
    "oneLine": "出生时是女孩的查理，在十六岁那年决定做自己，而他的父亲是当地反同组织的领袖。",
    "cover": "./20.jpg",
    "url": "./video-0320.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0321",
    "title": "庐山假面目",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪，悬疑，黑色幽默",
    "tags": [
      "假币",
      "驴友",
      "密室",
      "反转"
    ],
    "oneLine": "六个去庐山看日落的驴友被困缆车，他们之中有五个都在用假身份。",
    "cover": "./21.jpg",
    "url": "./video-0321.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0322",
    "title": "鬼胎",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖，惊悚",
    "tags": [
      "巫术",
      "孕期",
      "古曼童",
      "民俗"
    ],
    "oneLine": "一位难孕的妇女在求子后怀孕，但家中接连闹鬼，她怀疑肚子里的孩子不是人类。",
    "cover": "./22.jpg",
    "url": "./video-0322.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0323",
    "title": "大盛魁",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2013",
    "genre": "剧情, 商业, 历史",
    "tags": [
      "晋商",
      "草原",
      "创业",
      "真实商号改编"
    ],
    "oneLine": "三个穷小子在草原上创立了垄断亚欧茶路的商业帝国，却差点被自己人写的分家协议毁掉。",
    "cover": "./23.jpg",
    "url": "./video-0323.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0324",
    "title": "冲绳小芙蓉",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "genre": "剧情 / 生活",
    "tags": [
      "冲绳",
      "民宿",
      "疗愈",
      "战后",
      "女性"
    ],
    "oneLine": "一家破旧民宿的老板娘，用苦瓜汁和冷笑话治愈每一个破碎的灵魂。",
    "cover": "./24.jpg",
    "url": "./video-0324.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0325",
    "title": "比翼文鸳",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情, 家庭",
    "tags": [
      "同性",
      "传统文化",
      "家族",
      "抗争"
    ],
    "oneLine": "两位学习歌仔戏的男演员在舞台上扮演恩爱夫妻，却在现实中萌生了跨越禁忌的情愫。",
    "cover": "./25.jpg",
    "url": "./video-0325.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0326",
    "title": "原本以为只是手机掉了",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "惊悚, 犯罪, 悬疑",
    "tags": [
      "都市恐怖",
      "偷窥",
      "身份盗窃"
    ],
    "oneLine": "女白领丢失手机后，生活被神秘人入侵，男友竟在手机定位软件上看到了另一个“她”。",
    "cover": "./26.jpg",
    "url": "./video-0326.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0327",
    "title": "疑犯",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 惊悚, 犯罪",
    "tags": [
      "审讯室",
      "反转",
      "心理战",
      "密室"
    ],
    "oneLine": "在一间密闭的审讯室里，警探与一个涉嫌连环杀人的高智商疑犯展开24小时心理拉锯，但最终发现警探自己才是那个分裂出的凶手人格。",
    "cover": "./27.jpg",
    "url": "./video-0327.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0328",
    "title": "街头圣女",
    "region": "中国香港",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 犯罪, 动作",
    "tags": [
      "女杀手",
      "街头生存",
      "救赎",
      "暴力美学",
      "底层视角"
    ],
    "oneLine": "游走于深水埗街头的女杀手，在最后一次任务中，却成了保护雏妓的“圣女”。",
    "cover": "./28.jpg",
    "url": "./video-0328.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0329",
    "title": "滑雪学校",
    "region": "挪威",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧、青春、运动",
    "tags": [
      "北欧冷幽默",
      "菜鸟学员",
      "师生反差",
      "雪地爆笑"
    ],
    "oneLine": "一群零运动细胞的废柴被送到挪威最严酷的滑雪学校，教练是世界冠军退役后摆烂的暴躁大叔。",
    "cover": "./29.jpg",
    "url": "./video-0329.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0330",
    "title": "嘻哈女王组",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "genre": "喜剧",
    "tags": [
      "音乐",
      "女性",
      "友情"
    ],
    "oneLine": "四位年过四十的家庭主妇和女白领，在各自的人生低谷中，因为一堂社区中心的嘻哈课而组成了史上最老的女团。",
    "cover": "./30.jpg",
    "url": "./video-0330.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0331",
    "title": "大神偷卡门第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "动画，悬疑，冒险",
    "tags": [
      "怪盗",
      "全球旅行",
      "高智商",
      "女性主角"
    ],
    "oneLine": "卡门·圣地亚哥继续在全球追查恶棍组织“V.I.L.E.”的秘辛，却发现自己的身世只是巨大阴谋的冰山一角。",
    "cover": "./31.jpg",
    "url": "./video-0331.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0332",
    "title": "愿为女人",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "女性群像",
      "跨性别",
      "代际冲突",
      "自我认同",
      "现实主义"
    ],
    "oneLine": "退休的老会计在六十岁那年决定变回“她”，这个决定撕裂了整个保守的家庭。",
    "cover": "./32.jpg",
    "url": "./video-0332.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0333",
    "title": "繁荣小镇",
    "region": "美国",
    "type": "电视剧",
    "year": "2019",
    "genre": "剧情, 犯罪",
    "tags": [
      "小镇疑云",
      "石油",
      "资本入侵",
      "群像",
      "黑色幽默"
    ],
    "oneLine": "堪萨斯小镇发现全球最大页岩油田，一夜暴富后，镇长、牧师、毒贩和女警长开始了一场“谁是卧底”式的黑暗游戏。",
    "cover": "./33.jpg",
    "url": "./video-0333.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0334",
    "title": "妖怪名单",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "奇幻、爱情、悬疑",
    "tags": [
      "都市怪谈",
      "契约",
      "阴阳眼",
      "单元剧"
    ],
    "oneLine": "能看见妖怪的少女，意外捡到一本《妖怪名单》，每划掉一个名字，就能实现一个愿望，但代价是……",
    "cover": "./34.jpg",
    "url": "./video-0334.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0335",
    "title": "罪美人",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪惊悚",
    "tags": [
      "选美",
      "连环杀人",
      "替身",
      "复仇"
    ],
    "oneLine": "整形医院里，一名因毁容而退赛的选美佳丽，正通过整容变成连环杀手的下一个目标。",
    "cover": "./35.jpg",
    "url": "./video-0335.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0336",
    "title": "鲁邦三世：次元大介的墓标",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "犯罪动作",
    "tags": [
      "鲁邦三世",
      "次元",
      "告别",
      "硬汉",
      "枪战"
    ],
    "oneLine": "次元大介的坟墓突然出现在巴黎，鲁邦为了查明真相，发现这背后是次元与第一代搭档的宿命对决。",
    "cover": "./36.jpg",
    "url": "./video-0336.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0337",
    "title": "超人总动员2国语",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧 / 动作 / 动画 / 家庭",
    "tags": [
      "超级英雄",
      "家庭",
      "反串",
      "配音版"
    ],
    "oneLine": "弹力女超人外出拯救世界，超能先生在家带娃，生活比打反派还难。",
    "cover": "./37.jpg",
    "url": "./video-0337.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0338",
    "title": "黎明决斗",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "枪战",
      "兄弟情",
      "宿命",
      "港风"
    ],
    "oneLine": "两个从小一起长大的杀手，在黎明前的天台被下了同一个暗杀令——目标就是对方。",
    "cover": "./38.jpg",
    "url": "./video-0338.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0339",
    "title": "太空巴迪",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻， 家庭， 冒险",
    "tags": [
      "狗狗",
      "太空站",
      "AI",
      "萌宠",
      "冒险"
    ],
    "oneLine": "五只金毛猎犬偷偷溜上一艘前往国际空间站的货运飞船，并在AI的“帮助”下，启动了一次前往火星的旅程。",
    "cover": "./39.jpg",
    "url": "./video-0339.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0340",
    "title": "心战国语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2010",
    "genre": "商战, 悬疑",
    "tags": [
      "心理博弈",
      "职场斗争",
      "配音梗"
    ],
    "oneLine": "一家配音公司内，五名高管用粤语和国语切换进行无声的心理暗战。",
    "cover": "./40.jpg",
    "url": "./video-0340.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0341",
    "title": "在心里",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 家庭",
    "tags": [
      "阿尔茨海默",
      "亲情",
      "记忆",
      "催泪"
    ],
    "oneLine": "一位患有阿尔茨海默症的父亲，每天都会忘记女儿已经去世，而她每天都要扮演护士重新让父亲“接受”一次死讯。",
    "cover": "./41.jpg",
    "url": "./video-0341.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0342",
    "title": "如果声音不记得",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "抑郁症",
      "声音",
      "治愈",
      "催泪"
    ],
    "oneLine": "一个能用声音让人产生幸福幻觉的外星人，遇到了一个患抑郁症的女孩，却发现自己的超能力在她面前彻底失灵。",
    "cover": "./42.jpg",
    "url": "./video-0342.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0343",
    "title": "美丽笨女人",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "都市, 女性, 喜剧",
    "tags": [
      "整容失败",
      "回乡创业",
      "网红经济",
      "自我认同"
    ],
    "oneLine": "在上海打拼十年的小网红整容失败后逃回老家，却发现“丑”才是她最大的武器。",
    "cover": "./43.jpg",
    "url": "./video-0343.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0344",
    "title": "唐伯虎飞秋香",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，古装",
    "tags": [
      "穿越",
      "恶搞",
      "说唱"
    ],
    "oneLine": "现代房地产销售冠军唐伯虎穿越回明朝，发现华府是个濒临破产的烂摊子，他要靠卖房追秋香。",
    "cover": "./44.jpg",
    "url": "./video-0344.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0345",
    "title": "少妇多愁",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情 / 文艺",
    "tags": [
      "女性",
      "心理",
      "抑郁",
      "出轨",
      "台北"
    ],
    "oneLine": "一位患有产后抑郁的台北全职太太，在日复一日的家务中，开始与墙上的一幅古画里的书生对话。",
    "cover": "./45.jpg",
    "url": "./video-0345.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0346",
    "title": "沙赞！众神之怒",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 喜剧, 奇幻",
    "tags": [
      "DC漫画",
      "超级英雄",
      "合家欢",
      "神話元素",
      "成长"
    ],
    "oneLine": "当还是孩子的超级英雄惹怒了古希腊泰坦神族，费城迎来了真正的诸神黄昏。",
    "cover": "./46.jpg",
    "url": "./video-0346.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0347",
    "title": "护士的征婚",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 爱情, 剧情",
    "tags": [
      "相亲",
      "反转",
      "小人物",
      "黑色幽默"
    ],
    "oneLine": "急诊科护士为应付母亲连相十次亲，却意外发现最后一位“秃头大叔”是医院新来的天才外科圣手。",
    "cover": "./47.jpg",
    "url": "./video-0347.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0348",
    "title": "你的眼睛在追问",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑 / 剧情",
    "tags": [
      "盲人按摩师",
      "刑警",
      "顶罪",
      "纯爱"
    ],
    "oneLine": "一个因事故失明的按摩师，爱上一个沉默寡言的男人，却发现他就是五年前那场让自己失明的车祸肇事逃逸者。",
    "cover": "./48.jpg",
    "url": "./video-0348.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0349",
    "title": "夏日恋神马",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "青春 / 爱情 / 奇幻",
    "tags": [
      "夏日",
      "沙滩",
      "穿越",
      "轻喜剧",
      "恋爱循环"
    ],
    "oneLine": "一个因为分手在沙滩痛哭的废柴男，被一只寄居蟹神赐予了“恋爱重置”能力，每重置一次，女友的性格就会变得越离谱。",
    "cover": "./49.jpg",
    "url": "./video-0349.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0350",
    "title": "陆军中野学校 龙三号指令",
    "region": "日本",
    "type": "电影",
    "year": "1974",
    "genre": "动作，战争，惊悚",
    "tags": [
      "间谍",
      "特工",
      "二战"
    ],
    "oneLine": "二战末期，日军间谍学校最优秀的毕业生“龙三”接到指令：刺杀东条英机以提前结束战争。",
    "cover": "./50.jpg",
    "url": "./video-0350.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0351",
    "title": "乡间路",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情，家庭",
    "tags": [
      "返乡",
      "和解",
      "治愈",
      "童年秘密"
    ],
    "oneLine": "一条破败的乡间路，牵引着三名疏离的姐妹走向尘封30年的真相。",
    "cover": "./51.jpg",
    "url": "./video-0351.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0352",
    "title": "泰版来自星星的你",
    "region": "泰国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情，奇幻",
    "tags": [
      "翻拍",
      "泰式狗血",
      "超能力",
      "俊男靓女"
    ],
    "oneLine": "外星人在地球活了400年，本想静静等待飞船，却爱上了泰国娱乐圈的顶流作精女星。",
    "cover": "./52.jpg",
    "url": "./video-0352.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0353",
    "title": "天魔约书亚",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "恐怖, 超自然",
    "tags": [
      "邪教",
      "灵童",
      "末世",
      "宗教",
      "反转"
    ],
    "oneLine": "一个自称“约书亚”的6岁男孩走入沙漠小镇后，所有居民开始梦见同一场大洪水。",
    "cover": "./53.jpg",
    "url": "./video-0353.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0354",
    "title": "生命序曲",
    "region": "英国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情, 音乐, 传记",
    "tags": [
      "天才少女",
      "大提琴",
      "母女关系"
    ],
    "oneLine": "四岁的音乐神童被确诊为渐冻症，她的母亲决定用最后的时间陪她录完十首“生命乐章”。",
    "cover": "./54.jpg",
    "url": "./video-0354.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0355",
    "title": "断袖男",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "家庭伦理",
      "自我认同",
      "亲情羁绊",
      "乡村爱情"
    ],
    "oneLine": "一个无法对女人产生兴趣的乡村裁缝，在逼婚与自我拷问中，缝制出了一件只属于他的彩虹礼服。",
    "cover": "./55.jpg",
    "url": "./video-0355.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0356",
    "title": "阿丰尼亚",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 喜剧",
    "tags": [
      "西伯利亚",
      "治愈系",
      "小人物",
      "公路片"
    ],
    "oneLine": "西伯利亚小镇的废柴水管工意外接到一项任务，踏上横跨冻土的救赎之旅。",
    "cover": "./56.jpg",
    "url": "./video-0356.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0357",
    "title": "黑手党不再是曾经",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 犯罪， 喜剧",
    "tags": [
      "黑帮",
      "老龄化",
      "传承危机",
      "黑色幽默",
      "西西里"
    ],
    "oneLine": "西西里老黑手党家族发现年轻一代都去当网红和程序员了，帮派面临倒闭危机。",
    "cover": "./57.jpg",
    "url": "./video-0357.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0358",
    "title": "活得比你好",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1995",
    "genre": "剧情 / 家庭 / 都市",
    "tags": [
      "港剧",
      "逆境",
      "姐妹情",
      "励志"
    ],
    "oneLine": "被破产父亲抛弃的姐妹俩，一个靠嫁人翻身，一个靠自己出头，十年后重逢。",
    "cover": "./58.jpg",
    "url": "./video-0358.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0359",
    "title": "爱乐之城",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "剧情, 爱情, 歌舞",
    "tags": [
      "追梦",
      "爵士乐",
      "好莱坞",
      "遗憾美学"
    ],
    "oneLine": "一位爵士钢琴家与一位野心勃勃的女演员在洛杉矶相爱，为了梦想他们必须做出爱情与事业的残酷抉择。",
    "cover": "./59.jpg",
    "url": "./video-0359.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0360",
    "title": "伊斯坦堡奇迹夜",
    "region": "土耳其",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 运动",
    "tags": [
      "足球",
      "逆转",
      "信仰",
      "父子和解"
    ],
    "oneLine": "2005年欧冠决赛“伊斯坦布尔奇迹”的平行时空版，一个失意的中年球迷得到了回到那天、改变自己人生的三次机会。",
    "cover": "./60.jpg",
    "url": "./video-0360.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0361",
    "title": "妈妈，你在哪里",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情/家庭",
    "tags": [
      "打拐",
      "寻亲",
      "女性力量",
      "现实主义"
    ],
    "oneLine": "女儿被拐二十年后，那个几乎成疯的母亲，成了全网最懂人贩子心理的专家。",
    "cover": "./61.jpg",
    "url": "./video-0361.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0362",
    "title": "爱在青山绿水间",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 爱情",
    "tags": [
      "乡村振兴",
      "环保",
      "治愈",
      "返乡青年",
      "慢生活"
    ],
    "oneLine": "城市精英女律师因一场官司身败名裂，逃回老家农村，却发现必须带领“懒汉”村民们打赢一场生态保卫战。",
    "cover": "./62.jpg",
    "url": "./video-0362.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0363",
    "title": "情来．算尽爱",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "爱情 / 悬疑 / 剧情",
    "tags": [
      "情感计算",
      "婚恋算法",
      "香港浮世绘"
    ],
    "oneLine": "数学天才开发出一套“爱情公式”，准确率100%，直到他爱上了一个完全不符合公式的清洁女工。",
    "cover": "./63.jpg",
    "url": "./video-0363.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0364",
    "title": "黑井",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "西部",
      "矿难",
      "连环失踪"
    ],
    "oneLine": "西北戈壁的一口废弃枯井里，警方挖出了七具尸体，而报案者竟是五年前“已死亡”的矿工。",
    "cover": "./64.jpg",
    "url": "./video-0364.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0365",
    "title": "乘风破浪的妻子",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "女性",
      "家庭",
      "逆袭",
      "创业"
    ],
    "oneLine": "全职太太丈夫出轨净身出户，她带着三个孩子和一套煎饼摊，三年后成了连锁餐饮女王。",
    "cover": "./65.jpg",
    "url": "./video-0365.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0366",
    "title": "团子大家族第一季",
    "region": "日本",
    "type": "动漫",
    "year": "2007",
    "genre": "剧情 / 爱情 / 治愈",
    "tags": [
      "key社",
      "催泪",
      "校园",
      "家族",
      "麻枝准"
    ],
    "oneLine": "问题学生冈崎朋也在樱花坡道上遇见古河渚，一个将“团子大家族”挂在嘴边的女孩，从此他的灰色人生被慢慢填满。",
    "cover": "./66.jpg",
    "url": "./video-0366.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0367",
    "title": "野蛮任务",
    "region": "美国",
    "type": "电影",
    "year": "2006",
    "genre": "喜剧 / 动画 / 家庭",
    "tags": [
      "动物园",
      "冒险",
      "搞笑",
      "友情"
    ],
    "oneLine": "纽约动物园里的动物们，为了拯救一个被送走的同伴，首次闯入野蛮人类世界。",
    "cover": "./67.jpg",
    "url": "./video-0367.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0368",
    "title": "我的男友是辅警",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 爱情, 生活",
    "tags": [
      "基层民警",
      "平凡英雄",
      "市井生活",
      "陪伴成长"
    ],
    "oneLine": "白领精英爱上了一个月薪三千的辅警，在鸡毛蒜皮的出警日常中，她重新定义了“安全感”。",
    "cover": "./68.jpg",
    "url": "./video-0368.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0369",
    "title": "冒牌姑爷",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情",
    "tags": [
      "身份错位",
      "假戏真做",
      "家族纷争",
      "爆笑"
    ],
    "oneLine": "穷小子被雇假扮豪门姑爷，却发现自己竟是真继承人。",
    "cover": "./69.jpg",
    "url": "./video-0369.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0370",
    "title": "第六感泰版",
    "region": "泰国",
    "type": "电视剧",
    "year": "2024",
    "genre": "恐怖悬疑",
    "tags": [
      "通灵",
      "单元剧",
      "泰式恐怖"
    ],
    "oneLine": "一个能看到鬼魂的菜鸟心理医生，被迫与一个自称“驱魔人”的骗子合作破案。",
    "cover": "./70.jpg",
    "url": "./video-0370.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0371",
    "title": "除了太阳",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "科幻, 剧情, 灾难",
    "tags": [
      "永夜",
      "人性考验",
      "末日求生",
      "希望"
    ],
    "oneLine": "太阳突然熄灭，地球陷入无尽黑暗与严寒，一座地下城中的人们为争夺最后的光源陷入疯狂。",
    "cover": "./71.jpg",
    "url": "./video-0371.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0372",
    "title": "回到未嫁时国语",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 奇幻",
    "tags": [
      "穿越",
      "婚姻危机",
      "重来一次",
      "港式喜剧",
      "选择"
    ],
    "oneLine": "结婚七年濒临离婚的妻子意外穿越回婚礼当天，这次她没有说“我愿意”，而是逃婚去寻找初恋。",
    "cover": "./72.jpg",
    "url": "./video-0372.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0373",
    "title": "异形：夺命舰",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻，恐怖",
    "tags": [
      "太空",
      "怪物",
      "血腥",
      "密闭空间",
      "惊悚"
    ],
    "oneLine": "一艘走私船意外捕获了休眠的异形卵，他们不知道，飞船的AI早已被抱脸虫“寄生”并学会了说谎。",
    "cover": "./73.jpg",
    "url": "./video-0373.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0374",
    "title": "立食师列传",
    "region": "日本",
    "type": "电影",
    "year": "2006",
    "genre": "喜剧 / 纪录片风格",
    "tags": [
      "伪纪录片",
      "站着吃",
      "日本文化",
      "荒诞"
    ],
    "oneLine": "一部伪纪录片，记录日本战后最伟大的“立食师”——那些永远站着吃完一碗面就走的神秘职业。",
    "cover": "./74.jpg",
    "url": "./video-0374.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0375",
    "title": "浴血火海",
    "region": "美国",
    "type": "电影",
    "year": "2006",
    "genre": "动作，战争",
    "tags": [
      "越战",
      "救援",
      "硬汉",
      "枪战"
    ],
    "oneLine": "一名冷漠的雇佣兵，奉命重返杀戮战场，拯救被困在火海中的昔日战友。",
    "cover": "./75.jpg",
    "url": "./video-0375.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0376",
    "title": "灰烬之人",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻，剧情",
    "tags": [
      "战后创伤",
      "记忆焚烧",
      "身份迷失",
      "超现实",
      "诗意"
    ],
    "oneLine": "一战归来士兵发现，只要将痛苦回忆写在纸上烧掉，那段记忆就会从所有人脑中消失。",
    "cover": "./76.jpg",
    "url": "./video-0376.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0377",
    "title": "偷窥者2012",
    "region": "韩国",
    "type": "电影",
    "year": "2012",
    "genre": "惊悚，悬疑",
    "tags": [
      "偷窥",
      "公寓",
      "反杀"
    ],
    "oneLine": "独居女孩偷窥对面住户，却目睹了一场“完美谋杀”。",
    "cover": "./77.jpg",
    "url": "./video-0377.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0378",
    "title": "大力水手",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": [
      "真人版",
      "吃菠菜",
      "经典改编"
    ],
    "oneLine": "真人版大力水手，不靠菠菜，靠的是中年危机的丧，以及一次意外的基因突变。",
    "cover": "./78.jpg",
    "url": "./video-0378.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0379",
    "title": "热气球飞行家",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "冒险, 传记",
    "tags": [
      "历史",
      "科学",
      "高空",
      "求生",
      "维多利亚"
    ],
    "oneLine": "19世纪的气象学家与一位女杂技演员，乘坐热气球冲入史无前例的雷暴云。",
    "cover": "./79.jpg",
    "url": "./video-0379.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0380",
    "title": "看这里，列兵哈格罗夫",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "战争 / 传记",
    "tags": [
      "越战",
      "战地摄影师",
      "真实事件改编"
    ],
    "oneLine": "越战期间，一位被征召入伍的《生活》杂志摄影师用徕卡相机记录下的137天，以及一张永远改变美国民意的照片。",
    "cover": "./80.jpg",
    "url": "./video-0380.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0381",
    "title": "古堡女魔君",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "1978",
    "genre": "恐怖, 惊悚, 哥特",
    "tags": [
      "古堡",
      "女伯爵",
      "复仇",
      "血浆",
      "哥特"
    ],
    "oneLine": "被丈夫活埋的女伯爵百年后复活，把来古堡探险的七名游客一一用当年酷刑处决。",
    "cover": "./81.jpg",
    "url": "./video-0381.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0382",
    "title": "白痴5和哭喊的夫人",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情， 喜剧",
    "tags": [
      "荒诞派",
      "默片风格",
      "神经喜剧"
    ],
    "oneLine": "一个自称“白痴5”的流浪汉闯入了一位常年对着墙壁哭喊的贵妇人的豪宅，试图教会她“笑”。",
    "cover": "./82.jpg",
    "url": "./video-0382.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0383",
    "title": "猎物大敌当前",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 惊悚 / 荒野",
    "tags": [
      "狙击手",
      "荒野求生",
      "反杀",
      "女性力量",
      "智商在线"
    ],
    "oneLine": "在阿拉斯加无人区，一名生态女博士反被来猎杀她的精英雇佣兵团包围，猎物与猎人对调。",
    "cover": "./83.jpg",
    "url": "./video-0383.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0384",
    "title": "游星王子",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "科幻 / 冒险",
    "tags": [
      "特摄",
      "王子",
      "星际",
      "环保"
    ],
    "oneLine": "来自毁灭行星的王子流落地球，他必须用歌唱的方式净化污染怪兽。",
    "cover": "./84.jpg",
    "url": "./video-0384.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0385",
    "title": "跨入阴阳界",
    "region": "泰国/韩国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖, 惊悚, 奇幻",
    "tags": [
      "通灵",
      "新媒体",
      "死亡直播",
      "因果报应"
    ],
    "oneLine": "一个专门打假灵异事件的网红主播，为博流量闯入一家闹鬼的医院进行直播，却发现他的几百万粉丝，全都是鬼。",
    "cover": "./85.jpg",
    "url": "./video-0385.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0386",
    "title": "决胜21点",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 犯罪 / 智力",
    "tags": [
      "算牌天才 / 赌城暗战 / 反杀局中局"
    ],
    "oneLine": "麻省理工的数学天才被招募进算牌团队，在拉斯维加斯赢到手软后，才发现自己才是赌场的猎物。",
    "cover": "./86.jpg",
    "url": "./video-0386.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0387",
    "title": "奇迹探长之隐秘危机",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑犯罪",
    "tags": [
      "本格推理",
      "孤岛",
      "暗号",
      "连环杀",
      "逆袭"
    ],
    "oneLine": "一位被警界开除的“过气神探”，在暴风雪山庄里为自己洗刷叛徒之名。",
    "cover": "./87.jpg",
    "url": "./video-0387.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0388",
    "title": "绝境求生：冰峰奇迹",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "冒险、灾难、传记",
    "tags": [
      "登山",
      "雪崩",
      "生存",
      "真实改编",
      "极限挑战"
    ],
    "oneLine": "一场突如其来的冰崩将五名登山者困在海拔七千米的冰缝中，在没有救援的情况下，他们必须在72小时内做出绝望抉择。",
    "cover": "./88.jpg",
    "url": "./video-0388.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0389",
    "title": "芭蕾芭蕾",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 歌舞",
    "tags": [
      "芭蕾",
      "伤病",
      "师徒",
      "重生",
      "古典乐"
    ],
    "oneLine": "一位因伤退役的天才芭蕾舞者成为清洁工，十年后在剧院地板下捡到一名偷练舞蹈的流浪女孩。",
    "cover": "./89.jpg",
    "url": "./video-0389.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0390",
    "title": "韩国怪谈",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "恐怖, 惊悚",
    "tags": [
      "都市怪谈",
      "单元剧",
      "社会批判"
    ],
    "oneLine": "首尔某栋老楼里，每一户都流传着怪谈：404的镜子会骂人，701的水龙头流出红色液体……",
    "cover": "./90.jpg",
    "url": "./video-0390.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0391",
    "title": "青春四十",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情， 家庭， 都市",
    "tags": [
      "中年危机",
      "重启人生",
      "女性群像",
      "现实主义"
    ],
    "oneLine": "四位四十岁的大学闺蜜在各自陷入绝境后，决定抛夫弃子重读大学，找回十八岁的自己。",
    "cover": "./91.jpg",
    "url": "./video-0391.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0392",
    "title": "不可撤销－正序版",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，惊悚",
    "tags": [
      "非线性叙事",
      "复仇",
      "宿命",
      "重剪"
    ],
    "oneLine": "将原版的倒叙彻底逆转，一场复仇从终点回到起点，你看到的将是彻底的绝望。",
    "cover": "./92.jpg",
    "url": "./video-0392.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0393",
    "title": "侨女日记",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情, 历史",
    "tags": [
      "抗战",
      "女性",
      "侨乡",
      "年代",
      "成长"
    ],
    "oneLine": "一本1940年代的少女日记，让现代女孩与抗战时期的归国侨女产生了跨时空羁绊。",
    "cover": "./93.jpg",
    "url": "./video-0393.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0394",
    "title": "特工同盟",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "动作 / 犯罪",
    "tags": [
      "双雄",
      "敌我联手",
      "黑色幽默",
      "反套路"
    ],
    "oneLine": "退休的CIA老油条与激进的年轻黑客必须合作，才能在24小时内洗清叛国罪名。",
    "cover": "./94.jpg",
    "url": "./video-0394.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0395",
    "title": "戏说乾隆",
    "region": "中国台湾 / 中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装 / 喜剧 / 爱情",
    "tags": [
      "穿越",
      "微服私访",
      "性别反转",
      "甜宠"
    ],
    "oneLine": "现代女历史学家穿越成乾隆，却发现真正的皇帝是个想谈恋爱的戏精。",
    "cover": "./95.jpg",
    "url": "./video-0395.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0396",
    "title": "1982",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 家庭",
    "tags": [
      "国企改革",
      "父子关系",
      "年代记忆",
      "缓慢叙事"
    ],
    "oneLine": "父亲下岗那年，儿子用一辆偷来的自行车学会了告别。",
    "cover": "./96.jpg",
    "url": "./video-0396.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0397",
    "title": "女性的秘密",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "genre": "剧情, 悬疑",
    "tags": [
      "女性群像",
      "秘密与谎言",
      "心理悬疑",
      "社会压迫",
      "反转结局"
    ],
    "oneLine": "五个互不相识的女人在温泉旅馆意外发现，她们竟然共享着同一个丈夫的秘密。",
    "cover": "./97.jpg",
    "url": "./video-0397.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0398",
    "title": "大室家亲爱的姐妹们",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧、动画、日常",
    "tags": [
      "百合",
      "日常系",
      "姐妹",
      "温暖",
      "搞笑"
    ],
    "oneLine": "大室家的三姐妹为了给母亲准备生日礼物，在家中展开了长达48小时的荒诞游击战。",
    "cover": "./98.jpg",
    "url": "./video-0398.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0399",
    "title": "英雄万岁！",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧、动作",
    "tags": [
      "小人物逆袭",
      "荒诞幽默",
      "怀旧致敬"
    ],
    "oneLine": "一个跑龙套的替身演员，被误认为是真实超级英雄，被迫拯救世界。",
    "cover": "./99.jpg",
    "url": "./video-0399.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0400",
    "title": "708090之深圳恋歌",
    "region": "中国大陆",
    "type": "电影",
    "year": "2016",
    "genre": "剧情 / 爱情",
    "tags": [
      "深圳",
      "创业",
      "代际",
      "怀旧"
    ],
    "oneLine": "70后、80后、90后三对男女，在深圳这座梦想之城各自书写自己的爱情与创业故事。",
    "cover": "./100.jpg",
    "url": "./video-0400.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0401",
    "title": "科西加兄弟",
    "region": "意大利",
    "type": "剧集",
    "year": "2025",
    "genre": "黑帮家族",
    "tags": [
      "兄弟情",
      "复仇",
      "西西里",
      "权力",
      "背叛"
    ],
    "oneLine": "黑手党三兄弟在父亲遇刺后，发现家族最大的敌人竟是彼此的妻子。",
    "cover": "./101.jpg",
    "url": "./video-0401.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0402",
    "title": "亨利·普尔驾到",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "剧情, 喜剧",
    "tags": [
      "治愈",
      "信仰",
      "邻里关系"
    ],
    "oneLine": "一个等死的厌世男人发现自家墙上的水渍，竟被邻居奉为神迹。",
    "cover": "./102.jpg",
    "url": "./video-0402.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0403",
    "title": "葬送的芙莉莲",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "奇幻, 治愈, 哲思",
    "tags": [
      "寿命论",
      "精灵",
      "后日谈",
      "人生感悟",
      "慢节奏"
    ],
    "oneLine": "精灵魔法使芙莉莲在勇者小队解散后，为了理解“十年”对人类的含义，重走讨伐魔王之路。",
    "cover": "./103.jpg",
    "url": "./video-0403.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0404",
    "title": "夜色降临之前",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "惊悚，剧情",
    "tags": [
      "犯罪",
      "小镇",
      "复仇",
      "道德困境"
    ],
    "oneLine": "日落前，一个隐退的杀手必须决定：是让强奸犯逍遥法外，还是自己动手执行正义。",
    "cover": "./104.jpg",
    "url": "./video-0404.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0405",
    "title": "机械威龙",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "动作 / 科幻 / 机甲",
    "tags": [
      "巨型机器人",
      "格斗竞技",
      "父子传承",
      "硬核机甲"
    ],
    "oneLine": "退役机甲拳手为救回被黑帮绑架的女儿，必须驾驶早已淘汰的老旧机型重新站上死亡擂台。",
    "cover": "./105.jpg",
    "url": "./video-0405.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0406",
    "title": "包青天书院诡事",
    "region": "中国大陆",
    "type": "电影（网络）",
    "year": "2024",
    "genre": "悬疑 / 古装 / 探案",
    "tags": [
      "包拯",
      "书院",
      "连环案",
      "科举"
    ],
    "oneLine": "包拯在进京赶考途中借宿一所深山书院，接连三晚有三名学子离奇死亡，而死因都指向同一道科举考题。",
    "cover": "./106.jpg",
    "url": "./video-0406.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0407",
    "title": "断联",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 悬疑",
    "tags": [
      "网络暴力",
      "心理创伤",
      "身份认同"
    ],
    "oneLine": "一场直播断联，揭开少女失踪背后的集体谎言与数字幽灵。",
    "cover": "./107.jpg",
    "url": "./video-0407.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0408",
    "title": "神龙法师",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "奇幻，古装，动作",
    "tags": [
      "龙族",
      "道士",
      "捉妖",
      "大唐"
    ],
    "oneLine": "大唐末年，一条不想当神龙的社恐废龙，遇到了一个想出名想疯了的捉妖骗子，组成了奇葩捉妖队。",
    "cover": "./108.jpg",
    "url": "./video-0408.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0409",
    "title": "盖世奇侠",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "古装 / 武侠 / 喜剧",
    "tags": [
      "穿越",
      "现代知识",
      "废物皇子",
      "降维打击",
      "爆笑"
    ],
    "oneLine": "一个精通数理化的现代宅男穿成废柴皇子，为了活命，用物理定律改良武功，把江湖高手全打懵了。",
    "cover": "./109.jpg",
    "url": "./video-0409.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0410",
    "title": "古宁头大战",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "金门",
      "登陆战",
      "巷战",
      "兄弟情",
      "国共"
    ],
    "oneLine": "1949年古宁头战役，一个国军排长与一个共军侦察兵，在残垣断壁中意外困于同一座碉堡。",
    "cover": "./110.jpg",
    "url": "./video-0410.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0411",
    "title": "摩加迪沙",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 动作 / 历史",
    "tags": [
      "索马里",
      "内战",
      "外交角力"
    ],
    "oneLine": "1991年索马里内战，朝韩外交官被困摩加迪沙，被迫携手逃离地狱。",
    "cover": "./111.jpg",
    "url": "./video-0411.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0412",
    "title": "拉查西",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 历史, 战争",
    "tags": [
      "原住民",
      "赛德克族",
      "猎首",
      "同化"
    ],
    "oneLine": "日据时期，一名被日本家庭收养的赛德克少年，在“文明”与“野蛮”之间挣扎，最终选择回归山林。",
    "cover": "./112.jpg",
    "url": "./video-0412.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0413",
    "title": "少年杨家将",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2006",
    "genre": "古装, 动作, 剧情",
    "tags": [
      "历史改编",
      "家族",
      "忠义",
      "热血"
    ],
    "oneLine": "北宋初年，杨家七子在父帅带领下，以青春热血书写一段可歌可泣的金戈铁马传奇。",
    "cover": "./113.jpg",
    "url": "./video-0413.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0414",
    "title": "华生",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 医疗 / 推理",
    "tags": [
      "福尔摩斯宇宙",
      "医生视角",
      "神经科学",
      "罕见病例",
      "师徒反转"
    ],
    "oneLine": "福尔摩斯死后第三年，华生医生不再探案，而是用神经科学破解大脑里的“谜题”。",
    "cover": "./114.jpg",
    "url": "./video-0414.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0415",
    "title": "两千狂人",
    "region": "意大利",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚, 恐怖, 历史",
    "tags": [
      "邪教",
      "活人祭",
      "小镇",
      "复古血浆"
    ],
    "oneLine": "六个游客车辆抛锚，误入南方一个热情好客的小镇，却惊恐地发现这里的两千名居民，全是百年前因北方入侵而惨死的亡灵。",
    "cover": "./115.jpg",
    "url": "./video-0415.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0416",
    "title": "克金玩家",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "电竞喜剧",
    "tags": [
      "游戏",
      "氪金",
      "穷小子",
      "逆袭"
    ],
    "oneLine": "贫穷的电竞天才拒绝氪金，组建“零元购”战队，用技术挑战全身神装的人民币玩家。",
    "cover": "./116.jpg",
    "url": "./video-0416.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0417",
    "title": "世界听我说第三季",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2021",
    "genre": "演讲 / 真人秀",
    "tags": [
      "演说",
      "竞技",
      "辩论",
      "社会议题",
      "跨界"
    ],
    "oneLine": "各行各业的人站上舞台，用五分钟演讲改变别人的偏见。",
    "cover": "./117.jpg",
    "url": "./video-0417.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0418",
    "title": "目标一号",
    "region": "加拿大",
    "type": "电影",
    "year": "2020",
    "genre": "动作，惊悚",
    "tags": [
      "暗网",
      "刺客",
      "反转"
    ],
    "oneLine": "一个走投无路的高中老师，在暗网上接了杀人的单，却发现自己的“目标一号”是克隆人。",
    "cover": "./118.jpg",
    "url": "./video-0418.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0419",
    "title": "爱狱王子",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情, 悬疑, 奇幻",
    "tags": [
      "财阀",
      "替身",
      "复仇",
      "虐恋"
    ],
    "oneLine": "一场预谋的车祸让冷酷财阀失忆，爱上了自己曾经囚禁的替身情人，而当记忆恢复，爱狱就此炼成。",
    "cover": "./119.jpg",
    "url": "./video-0419.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0420",
    "title": "代号叫麻雀",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2016",
    "genre": "谍战，悬疑",
    "tags": [
      "卧底",
      "特工",
      "民国",
      "反转"
    ],
    "oneLine": "代号“麻雀”的特工潜入汪伪情报处，却发现自己的上线竟是被通缉的叛徒。",
    "cover": "./120.jpg",
    "url": "./video-0420.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0421",
    "title": "牵挂",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "留守儿童",
      "治愈",
      "公路"
    ],
    "oneLine": "七岁女孩踏上千里寻父路，身后是空荡山村，身前是茫茫人海。",
    "cover": "./121.jpg",
    "url": "./video-0421.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0422",
    "title": "恶魔之子",
    "region": "美国",
    "type": "电视剧",
    "year": "2024",
    "genre": "科幻悬疑惊悚",
    "tags": [
      "超能力",
      "反英雄",
      "政府阴谋",
      "宗教隐喻"
    ],
    "oneLine": "一名普通少年发现自己竟是撒旦与凡人的后代，而他的眼泪，能让人看见内心最深的恐惧。",
    "cover": "./122.jpg",
    "url": "./video-0422.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0423",
    "title": "百万日元的女人们",
    "region": "日本",
    "type": "剧集",
    "year": "2017",
    "genre": "悬疑, 剧情, 伦理",
    "tags": [
      "同居",
      "神秘",
      "赎罪",
      "作家"
    ],
    "oneLine": "五个陌生女人每月各付他一百万日元，条件是：永远不要问她们是谁。",
    "cover": "./123.jpg",
    "url": "./video-0423.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0424",
    "title": "天桥上的魔术师",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2021",
    "genre": "奇幻， 剧情",
    "tags": [
      "怀旧",
      "成长",
      "神秘",
      "都市传说"
    ],
    "oneLine": "旧天桥拆除前夜，一名自称魔术师的男孩让整座桥上的石狮子活了过来。",
    "cover": "./124.jpg",
    "url": "./video-0424.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0425",
    "title": "浴血任务3",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "genre": "动作 / 惊悚",
    "tags": [
      "雇佣兵",
      "硬汉",
      "枪战",
      "爆破"
    ],
    "oneLine": "一队老年雇佣兵接下最后一项任务，却发现目标是自己当年亲手训练的徒弟。",
    "cover": "./125.jpg",
    "url": "./video-0425.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0426",
    "title": "夏日恋人",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 青春",
    "tags": [
      "暑假",
      "海边的秘密",
      "初恋",
      "反转"
    ],
    "oneLine": "高考结束的暑假，女孩在海边民宿遇见神秘男孩，却发现他每晚都会消失。",
    "cover": "./126.jpg",
    "url": "./video-0426.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0427",
    "title": "商谍",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑",
    "tags": [
      "商业间谍",
      "技术窃取",
      "伦理困境"
    ],
    "oneLine": "一个被派去对手公司窃取核心技术的商业间谍，发现自己爱上了要偷的项目负责人。",
    "cover": "./127.jpg",
    "url": "./video-0427.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0428",
    "title": "爱马士",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "纪录片 / 人物 / 体育",
    "tags": [
      "马术",
      "孤独症",
      "治愈",
      "人与动物",
      "真实改编"
    ],
    "oneLine": "深圳自闭症少年小宇被所有人放弃，直到一匹同样受过创伤的退役赛马走进了他的世界。",
    "cover": "./128.jpg",
    "url": "./video-0428.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0429",
    "title": "我的恋人有点迷",
    "region": "日本",
    "type": "电视剧",
    "year": "2026",
    "genre": "爱情, 悬疑",
    "tags": [
      "失忆",
      "身份反转",
      "同居",
      "治愈"
    ],
    "oneLine": "她从海里救回的男友自称是外星人，却在三周后告诉她“我是编的，其实我是杀人犯”。",
    "cover": "./129.jpg",
    "url": "./video-0429.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0430",
    "title": "绝命追杀令",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 犯罪",
    "tags": [
      "黑吃黑",
      "极速飙车",
      "以暴制暴"
    ],
    "oneLine": "偷走毒贩黑钱的女服务员，引来黑白两道在跨海大桥上的生死时速。",
    "cover": "./130.jpg",
    "url": "./video-0430.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0431",
    "title": "彗星的轨迹",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "科幻、爱情",
    "tags": [
      "时间循环",
      "量子纠缠",
      "催泪",
      "非典型爱情"
    ],
    "oneLine": "每 76 年回归一次的哈雷彗星掠过地球，让一对分手七年的恋人突然开始共享彼此的第五维记忆。",
    "cover": "./131.jpg",
    "url": "./video-0431.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0432",
    "title": "乒乓情人梦",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情，运动，偶像",
    "tags": [
      "乒乓",
      "菜鸟逆袭",
      "姐弟恋",
      "热血",
      "甜宠"
    ],
    "oneLine": "过气的前乒乓国手姐姐，被迫训练毫无天赋的流量小鲜肉，目标直指混双冠军。",
    "cover": "./132.jpg",
    "url": "./video-0432.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0433",
    "title": "罗尔娜的沉默",
    "region": "比利时 / 法国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 犯罪",
    "tags": [
      "移民",
      "假结婚",
      "沉默",
      "女性",
      "救赎"
    ],
    "oneLine": "东欧移民罗尔娜靠“假结婚”换居留，当她准备拿钱走人时，对方却问她：你愿意成为我孩子的真妈妈吗？",
    "cover": "./133.jpg",
    "url": "./video-0433.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0434",
    "title": "酒佬巨声",
    "region": "中国香港",
    "type": "电影",
    "year": "2019",
    "genre": "剧情，音乐，励志",
    "tags": [
      "街头歌手",
      "酒鬼",
      "父女情",
      "港乐情怀"
    ],
    "oneLine": "落魄酗酒的前知名音乐制作人，在街头偶遇一个卖唱女孩，发现她是自己失散多年的女儿。",
    "cover": "./134.jpg",
    "url": "./video-0434.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0435",
    "title": "校草是女生",
    "region": "韩国",
    "type": "剧集",
    "year": "2017",
    "genre": "爱情，喜剧",
    "tags": [
      "女扮男装",
      "校园",
      "偶像",
      "轻喜"
    ],
    "oneLine": "为了追星，女汉子假扮男生转入男子高中，却成了全校女生的暗恋对象“校草”。",
    "cover": "./135.jpg",
    "url": "./video-0435.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0436",
    "title": "梦寐以球的青春",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "青春 / 运动",
    "tags": [
      "排球",
      "校园",
      "热血",
      "成长"
    ],
    "oneLine": "一群零基础的“体育废柴”为了阻止学校拆除排球场，组队挑战省冠军队。",
    "cover": "./136.jpg",
    "url": "./video-0436.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0437",
    "title": "非识不可",
    "region": "美国",
    "type": "电影",
    "year": "2011",
    "genre": "惊悚 / 悬疑 / 剧情",
    "tags": [
      "社交网络",
      "网络暴力",
      "黑客",
      "心理战",
      "猫鼠游戏"
    ],
    "oneLine": "一个宅男为暗恋的女神写了一个真假识别APP，却发现这个软件不仅能识破谎言，还能预测谋杀。",
    "cover": "./137.jpg",
    "url": "./video-0437.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0438",
    "title": "厉害了，我的国",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "纪录片",
    "tags": [
      "中国奇迹",
      "成就",
      "港珠澳大桥",
      "扶贫",
      "正能量"
    ],
    "oneLine": "镜头对准中国路、中国桥、中国港，记录十八大以来祖国在各个领域创造的超级工程与伟大梦想。",
    "cover": "./138.jpg",
    "url": "./video-0438.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0439",
    "title": "群青领域",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑、科幻、心理",
    "tags": [
      "音乐",
      "颜色联觉",
      "失踪",
      "邪教",
      "超自然"
    ],
    "oneLine": "拥有颜色联觉的天才钢琴少女在一次演出后消失，十年后她创作的群青色旋律开始在全世界同时播放。",
    "cover": "./139.jpg",
    "url": "./video-0439.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0440",
    "title": "飞吧，冰上之光",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "运动 / 剧情 / 励志",
    "tags": [
      "短道速滑",
      "东北少年",
      "逆袭",
      "师徒",
      "冬季运动"
    ],
    "oneLine": "东北小镇的滑野冰少年，被下放的国家队教练一眼相中，他要从野路子滑进冬奥会。",
    "cover": "./140.jpg",
    "url": "./video-0440.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0441",
    "title": "蓝眸屠夫",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 犯罪",
    "tags": [
      "连环杀手",
      "异色瞳",
      "直播杀人",
      "都市传说"
    ],
    "oneLine": "网红主播为了流量追踪“蓝眸屠夫”，却发现直播间里的十万观众，全是凶手的帮凶。",
    "cover": "./141.jpg",
    "url": "./video-0441.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0442",
    "title": "上海沧桑",
    "region": "中国大陆",
    "type": "剧集",
    "year": "1998",
    "genre": "历史 / 家庭",
    "tags": [
      "年代剧",
      "家族兴衰",
      "商战",
      "史诗"
    ],
    "oneLine": "从清末到90年代，上海唐氏家族四代人的命运与这座城市的风云变幻紧密交织。",
    "cover": "./142.jpg",
    "url": "./video-0442.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0443",
    "title": "老吴的账单",
    "region": "中国大陆",
    "type": "电影",
    "year": "2017",
    "genre": "剧情 / 家庭",
    "tags": [
      "老年痴呆",
      "亲情账单",
      "记忆倒带",
      "饺子密码"
    ],
    "oneLine": "患阿兹海默症的父亲每天只念叨一串数字，女儿破解后发现那是58年前她出生时欠医院的“母亲生产费”。",
    "cover": "./143.jpg",
    "url": "./video-0443.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0444",
    "title": "祷正：反同运动的醒与恸",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "纪录片 / 传记",
    "tags": [
      "LGBTQ+",
      "宗教",
      "矫正治疗",
      "创伤",
      "救赎"
    ],
    "oneLine": "纪录片揭露了美国“矫正治疗”运动的内幕，以及幸存者们漫长而痛苦的心理重建之路。",
    "cover": "./144.jpg",
    "url": "./video-0444.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0445",
    "title": "美国派2",
    "region": "美国",
    "type": "电影",
    "year": "2001",
    "genre": "喜剧 / 青春",
    "tags": [
      "大学",
      "暑假",
      "性喜剧",
      "派对",
      "老友重聚"
    ],
    "oneLine": "高中毕业后的暑假，老友们租下一间湖边别墅，试图复制当年的疯狂。",
    "cover": "./145.jpg",
    "url": "./video-0445.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0446",
    "title": "非洲城的后裔",
    "region": "美国 / 巴西",
    "type": "电影",
    "year": "2026",
    "genre": "纪录片 / 历史",
    "tags": [
      "黑人历史",
      "奴隶贸易",
      "文化寻根",
      "社会正义"
    ],
    "oneLine": "在巴西里约热内卢的贫民窟，一群黑人发现他们竟是当年西非某王国的皇室后裔。",
    "cover": "./146.jpg",
    "url": "./video-0446.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0447",
    "title": "宝剑降龙",
    "region": "中国香港",
    "type": "电影",
    "year": "1982",
    "genre": "动作, 奇幻, 武侠",
    "tags": [
      "神剑",
      "降龙",
      "邵氏特效",
      "老派武侠",
      "正邪对决"
    ],
    "oneLine": "一把沉睡千年的降龙宝剑，一个背负血仇的铸剑师之子，当恶龙再现人间，唯有血祭方可开锋。",
    "cover": "./147.jpg",
    "url": "./video-0447.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0448",
    "title": "我的珍宝",
    "region": "中国香港",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 家庭",
    "tags": [
      "温情",
      "遗产",
      "兄妹",
      "治愈"
    ],
    "oneLine": "为争夺父亲留下的神秘古董，疏远多年的三兄妹被迫同住老宅七天。",
    "cover": "./148.jpg",
    "url": "./video-0448.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0449",
    "title": "地狱三重奏",
    "region": "美国 / 西班牙",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖 / 惊悚 / 超自然",
    "tags": [
      "诅咒",
      "音乐会",
      "死亡乐章",
      "三重奏",
      "恶魔契约"
    ],
    "oneLine": "三个落魄音乐家在一个废弃剧院里演奏了一首未完成乐谱，从此每演出一场，观众席就少一个人。",
    "cover": "./149.jpg",
    "url": "./video-0449.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0450",
    "title": "霹雳大火拼",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 犯罪",
    "tags": [
      "警匪",
      "双雄",
      "扫毒",
      "爆炸"
    ],
    "oneLine": "为了抓捕东南亚最大毒枭，暴躁刑警与斯文卧底被迫搭档，两人身上都绑着倒计时一周的炸弹。",
    "cover": "./150.jpg",
    "url": "./video-0450.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0451",
    "title": "青出于蓝第一季",
    "region": "香港",
    "type": "剧集",
    "year": "2026",
    "genre": "家庭, 喜剧",
    "tags": [
      "师徒",
      "粤剧",
      "传承",
      "代际"
    ],
    "oneLine": "一位过气粤剧名伶收了五个废青徒弟，想要重振戏班。",
    "cover": "./1.jpg",
    "url": "./video-0451.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0452",
    "title": "魔弹王",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "奇幻热血",
    "tags": [
      "魔法",
      "竞技",
      "少年",
      "异世界",
      "枪战"
    ],
    "oneLine": "普通高中生被选中成为“魔弹射手”，每射出一枚子弹就消耗一年寿命。",
    "cover": "./2.jpg",
    "url": "./video-0452.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0453",
    "title": "渡假留香",
    "region": "泰国",
    "type": "电影",
    "year": "2017",
    "genre": "爱情, 剧情",
    "tags": [
      "海岛",
      "气味",
      "回忆",
      "短暂邂逅"
    ],
    "oneLine": "一个失意的调香师在泰国小岛度假时，爱上了一个每天只出现一小时的神秘女人。",
    "cover": "./3.jpg",
    "url": "./video-0453.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0454",
    "title": "武装队",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "动作",
    "tags": [
      "警匪",
      "缉毒",
      "特战",
      "真实事件",
      "牺牲"
    ],
    "oneLine": "一支边境武装巡逻队的日常：不是在抓毒贩，就是在给山里孩子送作业本的路上。",
    "cover": "./4.jpg",
    "url": "./video-0454.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0455",
    "title": "制高点",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": [
      "狙击手",
      "摩天大楼",
      "恐怖袭击",
      "极限",
      "孤胆英雄"
    ],
    "oneLine": "一名退役狙击手被困在即将坍塌的全球第一高楼顶层，必须用一把老式步枪阻止楼下的恐怖分子炸毁城市电网。",
    "cover": "./5.jpg",
    "url": "./video-0455.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0456",
    "title": "达恩斯教士",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 惊悚",
    "tags": [
      "宗教",
      "心理操纵",
      "小镇秘密"
    ],
    "oneLine": "一个失去信仰的牧师来到小镇，发现镇上所有人都在等待“第七日”的到来，除了一个人。",
    "cover": "./6.jpg",
    "url": "./video-0456.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0457",
    "title": "做某事时的感觉已然消逝",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "文艺, 爱情",
    "tags": [
      "都市情感",
      "记忆碎片",
      "疏离",
      "遗憾"
    ],
    "oneLine": "一位失去味觉的厨师，靠复刻顾客记忆中的菜肴，拼凑出自己早已遗忘了的爱情最后一天。",
    "cover": "./7.jpg",
    "url": "./video-0457.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0458",
    "title": "走向深渊",
    "region": "日本",
    "type": "电影",
    "year": "2016",
    "genre": "悬疑 / 心理 / 犯罪",
    "tags": [
      "卧底",
      "双面人生",
      "道德困境",
      "心理医生",
      "反转"
    ],
    "oneLine": "一名卧底警察在精神病院追查连环杀手，却发现自己才是最危险的那个病人。",
    "cover": "./8.jpg",
    "url": "./video-0458.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0459",
    "title": "狂野之翼",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作、冒险、惊悚",
    "tags": [
      "走私",
      "金雕",
      "雨林",
      "复仇",
      "动物保护"
    ],
    "oneLine": "退役空军飞行员与一只金雕搭档，在亚马逊丛林追踪窃国大盗的黄金航班。",
    "cover": "./9.jpg",
    "url": "./video-0459.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0460",
    "title": "人生的约定",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，家庭，治愈",
    "tags": [
      "约定",
      "遗产",
      "乡村",
      "和解"
    ],
    "oneLine": "东京精英上班族回乡继承已故好友的破旧食堂，发现好友留下了一本“待完成约定清单”。",
    "cover": "./10.jpg",
    "url": "./video-0460.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0461",
    "title": "咖啡旋律",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情 / 音乐",
    "tags": [
      "治愈系",
      "咖啡店",
      "钢琴"
    ],
    "oneLine": "一名失忆的钢琴家在小巷咖啡店打工，客人点的每杯咖啡竟对应着一首只属于他们的曲子。",
    "cover": "./11.jpg",
    "url": "./video-0461.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0462",
    "title": "县界",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 犯罪",
    "tags": [
      "边界地带",
      "黑色电影",
      "小城故事",
      "阶层固化"
    ],
    "oneLine": "一个被两县踢来踢去的“三不管”地带，五名弃子联合起来用一本假账本扳倒了两个县的贪官网。",
    "cover": "./12.jpg",
    "url": "./video-0462.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0463",
    "title": "女子私校",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑惊悚",
    "tags": [
      "私校",
      "女性",
      "秘密",
      "阶层",
      "霸凌"
    ],
    "oneLine": "顶尖女子私校里，一名奖学金女生发现所有“优秀毕业生”都在十年内离奇消失。",
    "cover": "./13.jpg",
    "url": "./video-0463.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0464",
    "title": "重返地球",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "科幻, 冒险",
    "tags": [
      "末日",
      "父子",
      "生存",
      "怪兽",
      "环保隐喻"
    ],
    "oneLine": "人类逃离地球一千年后，一对父子奉命返回，发现统治地球的不是怪兽，而是人类留下的“塑料生命体”。",
    "cover": "./14.jpg",
    "url": "./video-0464.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0465",
    "title": "黑街霸王",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪 / 动作",
    "tags": [
      "卧底风云",
      "兄弟反目",
      "庙街江湖"
    ],
    "oneLine": "庙街最讲义气的混混阿豪，发现他敬仰的大哥，正是18年前杀害自己警察父亲的幕后黑手。",
    "cover": "./15.jpg",
    "url": "./video-0465.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0466",
    "title": "安华：不为人知的故事",
    "region": "马来西亚",
    "type": "电影",
    "year": "2023",
    "genre": "传记政治",
    "tags": [
      "馬來西亞政治",
      "監獄歲月",
      "權力暗流"
    ],
    "oneLine": "不是政治家的传记，而是他狱中十年里，门外那个送饭的守卫的故事。",
    "cover": "./16.jpg",
    "url": "./video-0466.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0467",
    "title": "红河谷",
    "region": "中国大陆",
    "type": "电影",
    "year": "1997",
    "genre": "历史, 战争, 爱情",
    "tags": [
      "藏族",
      "侵略与反抗",
      "绝恋"
    ],
    "oneLine": "一个汉人女子和一个藏族小伙，在雪山下用生命谱写了一曲抗英悲歌。",
    "cover": "./17.jpg",
    "url": "./video-0467.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0468",
    "title": "圣托尼的诱惑",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 奇幻 / 心理",
    "tags": [
      "宗教隐喻",
      "精神折磨",
      "存在主义"
    ],
    "oneLine": "苦修士圣托尼在地中海孤岛上遭遇三位访客，他们用食欲、情欲和权力欲轮番击打他的信仰。",
    "cover": "./18.jpg",
    "url": "./video-0468.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0469",
    "title": "圣诞老人和我",
    "region": "加拿大",
    "type": "电影",
    "year": "2019",
    "genre": "家庭, 奇幻",
    "tags": [
      "圣诞",
      "温情",
      "魔术",
      "节日",
      "治愈"
    ],
    "oneLine": "一个不信圣诞老人的小女孩给北极写了封信，没想到真的引来了丢失了记忆的圣诞老人。",
    "cover": "./19.jpg",
    "url": "./video-0469.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0470",
    "title": "周六夜现场 中国版",
    "region": "中国",
    "type": "综艺",
    "year": "2021",
    "genre": "喜剧 / 真人秀",
    "tags": [
      "喜剧",
      "小品",
      "明星",
      "讽刺"
    ],
    "oneLine": "一群喜剧新人用最辛辣的笔触，每周六夜晚对当代生活进行一场荒诞的“解刨”。",
    "cover": "./20.jpg",
    "url": "./video-0470.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0471",
    "title": "猫神八百万",
    "region": "日本",
    "type": "动漫 / TV系列",
    "year": "2024",
    "genre": "奇幻 / 日常 / 治愈",
    "tags": [
      "猫",
      "神明",
      "神社",
      "萌系",
      "乡下"
    ],
    "oneLine": "落魄的猫神为了重修破败的神社，不得不下凡打工，住进了一个只想当咸鱼的女大学生家里。",
    "cover": "./21.jpg",
    "url": "./video-0471.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0472",
    "title": "达尔顿兄弟",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "西部 / 剧情 / 犯罪",
    "tags": [
      "亡命兄弟",
      "西部末路",
      "人性"
    ],
    "oneLine": "四个性格迥异的亲兄弟组成了一支抢劫团伙，但钱没抢到多少，麻烦倒是惹了一堆。",
    "cover": "./22.jpg",
    "url": "./video-0472.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0473",
    "title": "青年的椅子",
    "region": "意大利",
    "type": "电影",
    "year": "2017",
    "genre": "艺术剧情",
    "tags": [
      "存在主义",
      "哲学",
      "极简主义",
      "黑白",
      "超现实"
    ],
    "oneLine": "一把空椅子在三十年间被不同年轻人坐过，每一次坐下都是一场关于“我是谁”的独白。",
    "cover": "./23.jpg",
    "url": "./video-0473.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0474",
    "title": "野性的猎物",
    "region": "美国, 加拿大",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖, 惊悚, 冒险",
    "tags": [
      "生存",
      "变异",
      "怪物",
      "荒野",
      "血腥"
    ],
    "oneLine": "六名网红去阿拉斯加荒野直播生存挑战，却发现自己才是某种智慧猎物的“真人秀”主角。",
    "cover": "./24.jpg",
    "url": "./video-0474.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0475",
    "title": "核能恶警",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "科幻动作",
    "tags": [
      "核辐射",
      "变异",
      "义体",
      "复仇",
      "硬汉"
    ],
    "oneLine": "他在核泄漏中活了下来，却变成半人半辐射怪——也成为唯一能追捕同类变异罪犯的恶警。",
    "cover": "./25.jpg",
    "url": "./video-0475.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0476",
    "title": "青春再见青春",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "青春 / 剧情",
    "tags": [
      "毕业季",
      "怀旧",
      "疫情时代",
      "未完成的告白"
    ],
    "oneLine": "2020届毕业生的毕业典礼被无限期推迟，四个大学室友在空荡荡的校园里，等待一场可能永远不会到来的告别。",
    "cover": "./26.jpg",
    "url": "./video-0476.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0477",
    "title": "恐怖陷阱",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖，惊悚，密室",
    "tags": [
      "陷阱屋",
      "直播",
      "极限求生",
      "器官"
    ],
    "oneLine": "六名网红受邀参加一档“极限生存”直播，发现豪宅里的每个陷阱都复制了他们曾经的网络暴力。",
    "cover": "./27.jpg",
    "url": "./video-0477.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0478",
    "title": "当 一个人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 文艺",
    "tags": [
      "孤独",
      "城市",
      "中年危机",
      "治愈"
    ],
    "oneLine": "当一个中年离婚的男人、一个被网暴的女孩、一个丧偶的老人同时住进一栋老楼，他们决定一起“消失”。",
    "cover": "./28.jpg",
    "url": "./video-0478.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0479",
    "title": "你的我的那场暗恋",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情/青春",
    "tags": [
      "暗恋",
      "时空错位",
      "书信",
      "催泪"
    ],
    "oneLine": "她暗恋学长三年写了百封情书从未寄出，后来发现每一封都被人改过错别字。",
    "cover": "./29.jpg",
    "url": "./video-0479.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0480",
    "title": "世界边缘",
    "region": "英国 / 澳大利亚",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 悬疑",
    "tags": [
      "孤岛",
      "平行世界",
      "记忆错乱",
      "末日"
    ],
    "oneLine": "五个人在一座孤岛上醒来，失去了记忆，他们发现这里的时间每24小时就会重置一次。",
    "cover": "./30.jpg",
    "url": "./video-0480.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0481",
    "title": "永顺永和",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 同性 / 家庭",
    "tags": [
      "兄弟情",
      "身份认同",
      "家庭秘密",
      "历史伤痕",
      "台湾乡土"
    ],
    "oneLine": "哥哥永顺是庙里的八家将，弟弟永和是成绩优异的模范生，一具在河堤发现的无名女尸，揭开了他们并非亲生兄弟的秘密。",
    "cover": "./31.jpg",
    "url": "./video-0481.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0482",
    "title": "福尔摩斯的功绩",
    "region": "英国",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑, 犯罪, 推理",
    "tags": [
      "福尔摩斯",
      "华生",
      "未公开案件",
      "致敬"
    ],
    "oneLine": "华生在福尔摩斯去世后，整理出六桩从未公开过的离奇案件。",
    "cover": "./32.jpg",
    "url": "./video-0482.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0483",
    "title": "巴黎记忆",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 剧情, 历史",
    "tags": [
      "二战",
      "时空交错",
      "画作",
      "遗憾"
    ],
    "oneLine": "2025年的巴黎，一位修复师在油画夹层中发现一封1942年的情书，收件人竟是自己已故的祖母。",
    "cover": "./33.jpg",
    "url": "./video-0483.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0484",
    "title": "怒海狂蛛",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "灾难, 科幻, 动作",
    "tags": [
      "巨蛛",
      "深海",
      "变异",
      "逃生",
      "血腥"
    ],
    "oneLine": "深海采矿站意外释放远古蜘蛛巨兽，一群各怀鬼胎的逃生者在完全失控的钻井平台上，面对的不只是怪物还有人心。",
    "cover": "./34.jpg",
    "url": "./video-0484.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0485",
    "title": "夜行夜珍惜",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 爱情",
    "tags": [
      "失眠",
      "都市传说",
      "双重人格",
      "出租车",
      "记忆拼图"
    ],
    "oneLine": "一名患罕见失眠症的女记者，每晚坐进同一辆夜班出租车，却发现司机每晚都会忘记她。",
    "cover": "./35.jpg",
    "url": "./video-0485.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0486",
    "title": "第四十一",
    "region": "俄罗斯 / 中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "战争 / 剧情",
    "tags": [
      "狙击手",
      "敌后",
      "人性",
      "雪原",
      "女性视角"
    ],
    "oneLine": "苏联女狙击手在击毙第40个敌人后，俘虏了一个年轻德国士兵，她的枪口却再也无法对准第四十一个。",
    "cover": "./36.jpg",
    "url": "./video-0486.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0487",
    "title": "戴流苏耳环的少女",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "年代 / 悬疑",
    "tags": [
      "民国",
      "上海滩",
      "失忆",
      "珠宝世家",
      "真假千金"
    ],
    "oneLine": "1930年上海，一个戴流苏耳环的少女从黄浦江中被救起，失忆后卷入两个珠宝家族的生死暗战。",
    "cover": "./37.jpg",
    "url": "./video-0487.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0488",
    "title": "模范刑警",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪 / 动作",
    "tags": [
      "刑警",
      "双男主",
      "亦敌亦友",
      "热血"
    ],
    "oneLine": "精英刑警与黑帮卧底被迫搭档，一个靠规矩办案，一个靠拳头说话，却要追捕同一个人。",
    "cover": "./38.jpg",
    "url": "./video-0488.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0489",
    "title": "阖家辣",
    "region": "中国香港",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧, 家庭",
    "tags": [
      "疫情",
      "家庭",
      "辣椒酱",
      "搞笑"
    ],
    "oneLine": "受疫情影响全家失业，儿子提议卖自家秘制辣椒酱，结果引爆了社区大战。",
    "cover": "./39.jpg",
    "url": "./video-0489.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0490",
    "title": "青松岭",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 犯罪",
    "tags": [
      "东北",
      "悬疑",
      "人性",
      "黑色电影"
    ],
    "oneLine": "青松岭村三十年没有发生过案件，直到一个外地人死在村口的老松树下，全村人都在说谎。",
    "cover": "./40.jpg",
    "url": "./video-0490.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0491",
    "title": "柳叶摘星辰",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2023",
    "genre": "古装武侠",
    "tags": [
      "刺客",
      "王爷",
      "替嫁",
      "轻功",
      "朝堂权谋"
    ],
    "oneLine": "冷面王爷被迫娶了柔弱闺秀，大婚当晚新娘自曝身份：我是来刺杀你的首席刺客。",
    "cover": "./41.jpg",
    "url": "./video-0491.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0492",
    "title": "纯纯的小时光",
    "region": "中国台湾",
    "type": "电影",
    "year": "2018",
    "genre": "青春，爱情",
    "tags": [
      "校园暗恋",
      "青梅竹马",
      "夏日"
    ],
    "oneLine": "1998年夏天，隔壁班那个总穿白裙子的女生，让我第一次知道了心动的味道。",
    "cover": "./42.jpg",
    "url": "./video-0492.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0493",
    "title": "喂我",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "心理恐惧",
      "食人隐喻",
      "独居",
      "直播"
    ],
    "oneLine": "一个独居的厌食症女孩开了一个“吃播”账号，屏幕对面的一位神秘粉丝开始给她寄来包裹，声称那是“爱的食物”。",
    "cover": "./43.jpg",
    "url": "./video-0493.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0494",
    "title": "飞虎神鹰",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "动作 / 谍战",
    "tags": [
      "抗日奇侠",
      "双雄对决",
      "潜入"
    ],
    "oneLine": "1941年，日军特高课培养的“中国通”间谍，遇上了土匪出身、不按常理出牌的八路军游击队队长。",
    "cover": "./44.jpg",
    "url": "./video-0494.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0495",
    "title": "活著的部分",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "genre": "剧情/奇幻",
    "tags": [
      "器官移植",
      "记忆转移",
      "身份认同",
      "钢琴"
    ],
    "oneLine": "钢琴家移植了一名死囚的心脏后，双手开始不由自主地弹奏出陌生的旋律，那些旋律正在指向一桩旧案。",
    "cover": "./45.jpg",
    "url": "./video-0495.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0496",
    "title": "2001影音全纪录",
    "region": "中国香港",
    "type": "剧集",
    "year": "2001",
    "genre": "纪录片 / 历史",
    "tags": [
      "千禧年",
      "社会变迁",
      "影像档案"
    ],
    "oneLine": "一份来自2001年的影音档案，记录了一栋香港旧楼里九个普通人的最后一年。",
    "cover": "./46.jpg",
    "url": "./video-0496.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0497",
    "title": "寻金记",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "西部, 冒险, 剧情",
    "tags": [
      "淘金热",
      "荒野求生",
      "资本",
      "人性",
      "历史"
    ],
    "oneLine": "1849年加州淘金热，一群来自世界各地的乌合之众结盟寻金，却发现最大的金矿是人心的贪婪。",
    "cover": "./47.jpg",
    "url": "./video-0497.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0498",
    "title": "泣船威利",
    "region": "美国",
    "type": "动画 / 短片",
    "year": "1928",
    "genre": "喜剧 / 动画 / 家庭",
    "tags": [
      "米奇",
      "黑白默片",
      "蒸汽船",
      "经典",
      "迪士尼"
    ],
    "oneLine": "一艘蒸汽船上，米奇一边开船一边用各种动物当乐器，吹拉弹唱玩得不亦乐乎。",
    "cover": "./48.jpg",
    "url": "./video-0498.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0499",
    "title": "春意如狂",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 爱情",
    "tags": [
      "花粉症",
      "幻觉",
      "畸恋"
    ],
    "oneLine": "每到春天，花粉过敏的男主就会出现一个幻觉：他与一个根本不存在的女人陷入热恋，而今年，那个女人好像变成真人了。",
    "cover": "./49.jpg",
    "url": "./video-0499.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0500",
    "title": "守护甜心!",
    "region": "日本",
    "type": "TV动画",
    "year": "2024",
    "genre": "奇幻、魔法少女、校园",
    "tags": [
      "变身",
      "心灵成长",
      "友情",
      "守护蛋",
      "治愈"
    ],
    "oneLine": "当内心深处的理想自我从蛋中孵化，一场守护心灵光芒的奇幻冒险就此展开。",
    "cover": "./50.jpg",
    "url": "./video-0500.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0501",
    "title": "伦敦糖果",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 黑色幽默",
    "tags": [
      "黑帮",
      "甜品店",
      "继承",
      "荒诞"
    ],
    "oneLine": "一个伦敦黑帮家族的废柴长子，继承了父亲留下的最后遗产——一家濒临倒闭的维多利亚糖果店。",
    "cover": "./51.jpg",
    "url": "./video-0501.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0502",
    "title": "野性的召唤",
    "region": "加拿大",
    "type": "电影",
    "year": "2020",
    "genre": "冒险, 剧情",
    "tags": [
      "荒野",
      "狗",
      "生存"
    ],
    "oneLine": "被拐卖的宠物犬在阿拉斯加荒原上逐渐觉醒狼性，却在暴风雪夜选择回头拯救已经放弃它的主人。",
    "cover": "./52.jpg",
    "url": "./video-0502.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0503",
    "title": "非快速眼动之窗2023夏",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻, 悬疑",
    "tags": [
      "单元剧",
      "梦境",
      "脑洞"
    ],
    "oneLine": "夏日深夜，五个发生在梦与现实缝隙中的诡异故事。",
    "cover": "./53.jpg",
    "url": "./video-0503.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0504",
    "title": "欢场粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 歌舞, 历史",
    "tags": [
      "粤曲",
      "夜总会变迁",
      "女性群像",
      "时代挽歌"
    ],
    "oneLine": "上世纪70至90年代，一家香港夜总会的四代歌女用粤语金曲唱尽自己的命运沉浮。",
    "cover": "./54.jpg",
    "url": "./video-0504.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0505",
    "title": "阿燕的人生",
    "region": "越南 / 法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 历史",
    "tags": [
      "女性史诗",
      "越战",
      "移民"
    ],
    "oneLine": "越南女子阿燕从西贡沦陷那天开始，历经战争、船难、难民营，最后在巴黎成为知名厨师，用食物串联起破碎的人生。",
    "cover": "./55.jpg",
    "url": "./video-0505.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0506",
    "title": "夏日秘密 第二季",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 同性 / 青春",
    "tags": [
      "青春群像",
      "小镇疑云",
      "夏日限定"
    ],
    "oneLine": "那年夏天海边的尸体被发现，六个高中生的友情与爱情在谎言中分崩离析。",
    "cover": "./56.jpg",
    "url": "./video-0506.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0507",
    "title": "怪咖一箩筐",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "喜剧， 家庭",
    "tags": [
      "神经喜剧",
      "奇葩家庭",
      "公路片",
      "寻宝",
      "疯癫"
    ],
    "oneLine": "为了继承祖母的巨额遗产，七个互不相识的怪胎必须在一场疯狂的寻宝游戏中生存下来。",
    "cover": "./57.jpg",
    "url": "./video-0507.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0508",
    "title": "机飞总动员2",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 动作, 灾难",
    "tags": [
      "航空",
      "乌龙",
      "大场面",
      "恶搞"
    ],
    "oneLine": "上一次救了飞机的无能机长被降职为行李员，却在新年航班上再次遭遇武装劫机，这次他连驾驶舱都进不去。",
    "cover": "./58.jpg",
    "url": "./video-0508.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0509",
    "title": "泪桥",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，剧情",
    "tags": [
      "文艺",
      "犯罪",
      "命运",
      "公路"
    ],
    "oneLine": "一个出狱的混混和一个失语症的少女，在一座叫“泪桥”的废弃大桥上，进行了一场改变彼此命运的赎罪。",
    "cover": "./59.jpg",
    "url": "./video-0509.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0510",
    "title": "超越巴肯记录",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "传记, 运动",
    "tags": [
      "跑步",
      "极限",
      "毅力",
      "真实改编"
    ],
    "oneLine": "为了打破巴肯的100英里纪录，他先要隐瞒自己只剩一个肾的事实。",
    "cover": "./60.jpg",
    "url": "./video-0510.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0511",
    "title": "家有杰克",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "家庭、喜剧、奇幻",
    "tags": [
      "迷你人",
      "童趣",
      "成长烦恼",
      "想象力"
    ],
    "oneLine": "七岁男孩在花园里发现了一个只有10厘米高却自称是“爸爸”的小人。",
    "cover": "./61.jpg",
    "url": "./video-0511.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0512",
    "title": "医生游戏",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "医疗， 悬疑， 惊悚",
    "tags": [
      "伦理困境",
      "心理战",
      "生命权",
      "高智商"
    ],
    "oneLine": "五位顶尖医生在地下赌场玩着一场危险的游戏：每人领一个绝症病例，靠医术“下注”，而赌注是病人的生命和自己的执照。",
    "cover": "./62.jpg",
    "url": "./video-0512.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0513",
    "title": "救命下课铃诞生记",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "genre": "传记, 喜剧",
    "tags": [
      "幕后揭秘",
      "情景喜剧",
      "怀旧文化",
      "真实事件"
    ],
    "oneLine": "它曾是 90 年代美国最火的校园情景喜剧，但没人知道那个标志性的“下课铃”声音来自一个即将被开除的混混。",
    "cover": "./63.jpg",
    "url": "./video-0513.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0514",
    "title": "我，迈克尔",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 惊悚 / 心理",
    "tags": [
      "人格分裂",
      "邪教",
      "催眠",
      "自我认同"
    ],
    "oneLine": "一个声称被外星人绑架的男人，在心理治疗中被查出拥有27重人格，而第28重正在杀死其他所有人格。",
    "cover": "./64.jpg",
    "url": "./video-0514.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0515",
    "title": "天生歌姬 澳洲现场演唱会",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2020",
    "genre": "音乐、纪录片",
    "tags": [
      "演唱会",
      "现场",
      "实力派",
      "澳洲",
      "视听盛宴"
    ],
    "oneLine": "现象级歌姬悉尼歌剧院的封神现场，一场耳朵的极致盛宴。",
    "cover": "./65.jpg",
    "url": "./video-0515.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0516",
    "title": "精灵幻想记第二季",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻 / 冒险 / 后宫",
    "tags": [
      "异世界",
      "转生",
      "精灵",
      "后宫战争"
    ],
    "oneLine": "贫民窟出身的精灵少年利欧，在这一季将面对来自王国的追杀和另一个“自己”。",
    "cover": "./66.jpg",
    "url": "./video-0516.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0517",
    "title": "恋情告急",
    "region": "中国台湾",
    "type": "电影",
    "year": "2021",
    "genre": "爱情， 喜剧， 灾难",
    "tags": [
      "前任婚礼",
      "连环乌龙",
      "社交媒体",
      "大型社死"
    ],
    "oneLine": "废柴男友在前任婚礼上本想挽回尊严，却接连引爆三颗“社交炸弹”。",
    "cover": "./67.jpg",
    "url": "./video-0517.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0518",
    "title": "五星大饭店",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2027",
    "genre": "剧情 / 商战 / 爱情",
    "tags": [
      "酒店业",
      "职场",
      "商业谍战",
      "服务美学",
      "理想主义"
    ],
    "oneLine": "落魄的前米其林餐厅经理潜入濒临倒闭的五星酒店，却发现这里的“烂”全部是骗保的阴谋。",
    "cover": "./68.jpg",
    "url": "./video-0518.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0519",
    "title": "再生血清计划",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 动作, 惊悚",
    "tags": [
      "永生实验",
      "军事机密",
      "伦理困境"
    ],
    "oneLine": "绝症老兵接受“再生血清”实验，身体每天重生一次，但代价是醒来就失忆。",
    "cover": "./69.jpg",
    "url": "./video-0519.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0520",
    "title": "野餐会",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑, 犯罪",
    "tags": [
      "同学会",
      "荒野",
      "复仇",
      "全员恶人",
      "暴风雪山庄"
    ],
    "oneLine": "十年前霸凌事件的受害者去世后，十位同学受邀参加一场荒岛野餐会，却发现每道菜都对应着他们当年的罪证。",
    "cover": "./70.jpg",
    "url": "./video-0520.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0521",
    "title": "深夜淫娃",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "genre": "情色、剧情、社会",
    "tags": [
      "夜店",
      "女性友谊",
      "身体自主",
      "都市孤独",
      "救赎"
    ],
    "oneLine": "东京最火夜店的头牌舞娘，深夜在街头捡回一个企图自杀的落魄女白领，从此两人在欲望都市里互相舔舐伤口。",
    "cover": "./71.jpg",
    "url": "./video-0521.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0522",
    "title": "乌鸦小姐与蜥蜴先生",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "爱情, 奇幻",
    "tags": [
      "萌宠",
      "治愈",
      "前世今生"
    ],
    "oneLine": "她是天生倒霉的乌鸦嘴设计师，他是冷血寿限仅剩一年的蜥蜴先生，互怼中发现彼此是前世恋人。",
    "cover": "./72.jpg",
    "url": "./video-0522.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0523",
    "title": "爱情而已",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情 / 运动 / 都市",
    "tags": [
      "姐弟恋",
      "网球",
      "职场",
      "成长型恋爱",
      "治愈"
    ],
    "oneLine": "32岁的职场精英姐姐和22岁的天才网球弟弟，从俱乐部冤家到互相救赎的爱人。",
    "cover": "./73.jpg",
    "url": "./video-0523.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0524",
    "title": "暗月传说",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻，爱情，惊悚",
    "tags": [
      "狼人",
      "血族契约",
      "禁忌之恋"
    ],
    "oneLine": "当血月降临，被封印千年的狼人之王醒来，却发现宿敌吸血鬼猎人的女儿是他的命定之侣。",
    "cover": "./74.jpg",
    "url": "./video-0524.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0525",
    "title": "狙魔女杰第一季",
    "region": "加拿大",
    "type": "剧集",
    "year": "2016",
    "genre": "奇幻, 西部, 恐怖",
    "tags": [
      "女巫猎人",
      "蒸汽朋克",
      "边疆",
      "恶魔",
      "暴力美学"
    ],
    "oneLine": "1880年加拿大边疆，一名神秘女子手持改造温彻斯特步枪，追杀推翻殖民者的女巫。",
    "cover": "./75.jpg",
    "url": "./video-0525.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0526",
    "title": "花月佳期电影版",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "爱情, 奇幻",
    "tags": [
      "时光倒流",
      "戏班",
      "宿命",
      "港风"
    ],
    "oneLine": "戏班花旦与富家少爷因一张戏票错换人生，在月圆之夜被迫重演一场四十年前的殉情戏。",
    "cover": "./76.jpg",
    "url": "./video-0526.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0527",
    "title": "青空 剧场版",
    "region": "日本",
    "type": "动画电影",
    "year": "2025",
    "genre": "青春, 奇幻",
    "tags": [
      "治愈",
      "毕业",
      "蓝色",
      "记忆"
    ],
    "oneLine": "高三毕业那天，天空变成了从未见过的深蓝色，只有将死之人才能看见。",
    "cover": "./77.jpg",
    "url": "./video-0527.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0528",
    "title": "石来运转",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 奇幻 / 家庭",
    "tags": [
      "彩票",
      "许愿石",
      "小人物",
      "黑色幽默"
    ],
    "oneLine": "老张捡到一颗能预测彩票号码的石头，却发现每次中奖都会克死一个亲戚。",
    "cover": "./78.jpg",
    "url": "./video-0528.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0529",
    "title": "罐头笑声",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "悬疑/惊悚",
    "tags": [
      "元叙事",
      "情景喜剧",
      "恐怖谷"
    ],
    "oneLine": "一档在上世纪 90 年代停播的情景喜剧，最近突然又开始播出新剧集，里面的人物竟然还在变老。",
    "cover": "./79.jpg",
    "url": "./video-0529.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0530",
    "title": "彼得·塞勒斯的生与死",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "传记, 剧情",
    "tags": [
      "喜剧大师",
      "人格分裂",
      "演艺圈",
      "悲剧"
    ],
    "oneLine": "他演活了无数角色，唯独演不好自己，喜剧大师彼得·塞勒斯辉煌而孤独的一生。",
    "cover": "./80.jpg",
    "url": "./video-0530.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0531",
    "title": "中原突围",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "历史，战争",
    "tags": [
      "革命",
      "战略转移",
      "信仰"
    ],
    "oneLine": "1946年，六万中原军区部队被困，一场震惊中外的生死突围拉开序幕。",
    "cover": "./81.jpg",
    "url": "./video-0531.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0532",
    "title": "执行法官",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 犯罪",
    "tags": [
      "司法",
      "现实主义",
      "悬疑",
      "道德困境"
    ],
    "oneLine": "一个坚持“法理无情”的年轻法官，为了执行一起旧改拆迁案，却发现被执行人是他失踪十年的父亲。",
    "cover": "./82.jpg",
    "url": "./video-0532.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0533",
    "title": "疯狂巨齿鲨",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "深海怪兽",
      "基因改造",
      "大场面",
      "爆米花"
    ],
    "oneLine": "失控的基因改造巨齿鲨游进黄海，一支由退伍老兵和海洋学家组成的杂牌军必须将它击毙。",
    "cover": "./83.jpg",
    "url": "./video-0533.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0534",
    "title": "恋爱中的梵高",
    "region": "法国 / 荷兰",
    "type": "电影",
    "year": "2016",
    "genre": "爱情 / 传记",
    "tags": [
      "艺术家的爱",
      "精神疾病",
      "法国南部的光",
      "书信"
    ],
    "oneLine": "梵高在阿尔勒疯狂追求房东女儿，而他写给弟弟的信里藏着一个从未被发现的秘密。",
    "cover": "./84.jpg",
    "url": "./video-0534.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0535",
    "title": "第19个妻子",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "悬疑、犯罪、宗教、剧情",
    "tags": [
      "一夫多妻",
      "邪教",
      "连环杀人",
      "女性觉醒"
    ],
    "oneLine": "在一个一夫多妻制的社区里，第19个妻子被杀，第1个妻子回来查案。",
    "cover": "./85.jpg",
    "url": "./video-0535.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0536",
    "title": "忧郁万花筒",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情，文艺，心理",
    "tags": [
      "摄影师",
      "抑郁症",
      "色彩治疗",
      "自我和解"
    ],
    "oneLine": "一名重度抑郁症摄影师决定在死前完成一组“全世界最忧郁的照片”，却在拍摄过程中重新看见颜色。",
    "cover": "./86.jpg",
    "url": "./video-0536.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0537",
    "title": "铁路梦影",
    "region": "中国内地",
    "type": "剧集",
    "year": "2015",
    "genre": "年代 / 悬疑 / 家族",
    "tags": [
      "铁路传奇",
      "家族恩怨",
      "民国探案"
    ],
    "oneLine": "一条贯穿东北的铁路即将竣工，却接连发生工程师离奇死亡事件，所有线索都指向三十年前的灭门旧案。",
    "cover": "./87.jpg",
    "url": "./video-0537.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0538",
    "title": "鬼病房",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 悬疑, 医疗",
    "tags": [
      "医院怪谈",
      "器官移植",
      "怨念",
      "因果报应",
      "高能反转"
    ],
    "oneLine": "车祸醒来，她发现自己躺在阴森的废弃病房，病友们在午夜集体消失，而她的身体里，正跳动着一颗死人心脏。",
    "cover": "./88.jpg",
    "url": "./video-0538.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0539",
    "title": "叛逃粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪、动作、悬疑",
    "tags": [
      "卧底",
      "家族恩怨",
      "跨境犯罪",
      "双雄对决"
    ],
    "oneLine": "奉命潜伏的卧底警探，在即将收网之际，发现自己深爱的亲兄竟是贩毒集团的幕后首脑。",
    "cover": "./89.jpg",
    "url": "./video-0539.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0540",
    "title": "潜罪",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2027",
    "genre": "刑侦 / 悬疑 / 罪案",
    "tags": [
      "顶罪",
      "兄弟情",
      "追凶",
      "二十年"
    ],
    "oneLine": "一桩20年前的悬案重启调查，当年的顶罪者出狱后发现，真凶竟是自己为之顶罪的最好的兄弟。",
    "cover": "./90.jpg",
    "url": "./video-0540.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0541",
    "title": "娱乐之家",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑, 惊悚, 科幻",
    "tags": [
      "密室逃脱",
      "直播",
      "科技伦理",
      "反转"
    ],
    "oneLine": "六个人被邀请参加一场奖金千万的密室逃脱直播，观众投票决定他们下一个遭遇的机关。",
    "cover": "./91.jpg",
    "url": "./video-0541.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0542",
    "title": "谁按了删除键",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑、科幻",
    "tags": [
      "记忆删除",
      "悬疑推理",
      "身份迷局",
      "科技伦理"
    ],
    "oneLine": "一家公司提供“痛苦记忆删除”服务，然而客户们在删除记忆后，却开始莫名卷入一起谋杀案。",
    "cover": "./92.jpg",
    "url": "./video-0542.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0543",
    "title": "绝命荒漠",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 惊悚 / 犯罪",
    "tags": [
      "边境",
      "毒品",
      "孤胆英雄",
      "生存"
    ],
    "oneLine": "一个偷渡客在索诺拉沙漠遭遇美国狙击手猎杀，他用偷来的一瓶水、一块铁皮和小学课本里的野外知识，反杀了训练有素的杀手。",
    "cover": "./93.jpg",
    "url": "./video-0543.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0544",
    "title": "我的蠢老板",
    "region": "韩国",
    "type": "TV剧集",
    "year": "2024",
    "genre": "职场, 喜剧, 推理",
    "tags": [
      "降维打击",
      "扮猪吃老虎",
      "办公室政治",
      "反转"
    ],
    "oneLine": "新人入职后发现老板是个生活白痴，但每次公司危机都被他莫名其妙“蠢”化解。",
    "cover": "./94.jpg",
    "url": "./video-0544.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0545",
    "title": "失忆杀神",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 悬疑",
    "tags": [
      "杀手",
      "失忆",
      "以暴制暴"
    ],
    "oneLine": "一个失忆的职业杀手醒来后，发现所有人都在追杀自己，而他唯一留下的线索是一部只有“过去自己”能看懂的加密日记。",
    "cover": "./95.jpg",
    "url": "./video-0545.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0546",
    "title": "万恶城",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "科幻， 犯罪， 悬疑",
    "tags": [
      "反乌托邦",
      "犯罪率清零",
      "思想警察"
    ],
    "oneLine": "犯罪率连续十年为零的未来城市，秘密在于每个市民七岁时都会被植入“恶念抑制芯片”，而芯片最近开始批量失灵。",
    "cover": "./96.jpg",
    "url": "./video-0546.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0547",
    "title": "武当2003",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "动作 / 武侠",
    "tags": [
      "武当",
      "年代剧",
      "门派之争",
      "民族大义"
    ],
    "oneLine": "2003年，非典阴霾下，武当山年轻道士意外卷入一场涉及古剑谱与境外盗宝集团的生死较量。",
    "cover": "./97.jpg",
    "url": "./video-0547.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0548",
    "title": "热浪球爱战",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "运动, 爱情",
    "tags": [
      "沙滩排球",
      "励志",
      "热血"
    ],
    "oneLine": "三流沙滩排球女将搭档前职业男选手，赌上球馆参加全国大赛。",
    "cover": "./98.jpg",
    "url": "./video-0548.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0549",
    "title": "高校男生",
    "region": "英国",
    "type": "电影",
    "year": "2006",
    "genre": "剧情 / 喜剧 / 教育",
    "tags": [
      "师生",
      "文学",
      "同性启蒙",
      "精英教育",
      "英式幽默"
    ],
    "oneLine": "在八十年代的男校里，两个天才学生用诗歌和粗口挑衅老师，却被新来的文艺青年教师彻底征服。",
    "cover": "./99.jpg",
    "url": "./video-0549.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0550",
    "title": "内战",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 战争 / 惊悚",
    "tags": [
      "近未来",
      "美国分裂",
      "战地记者",
      "公路片",
      "写实"
    ],
    "oneLine": "美国第二次内战爆发，一队战地记者穿越战线，试图赶在攻陷首都前采访四面楚歌的总统。",
    "cover": "./100.jpg",
    "url": "./video-0550.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0551",
    "title": "悬崖",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪, 剧情",
    "tags": [
      "黑色幽默",
      "出租车",
      "一夜之间"
    ],
    "oneLine": "一位绝望的出租车司机载着乘客驶向悬崖，却发现这辆车里没人想活着回去。",
    "cover": "./101.jpg",
    "url": "./video-0551.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0552",
    "title": "鸳鸯楼·惊魂",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖、惊悚",
    "tags": [
      "凶宅",
      "直播",
      "探险",
      "真实事件"
    ],
    "oneLine": "六名网红夜闯“鬼楼”鸳鸯楼直播，监控拍到他们从未走出大楼。",
    "cover": "./102.jpg",
    "url": "./video-0552.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0553",
    "title": "今夜不设防",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 恐怖",
    "tags": [
      "僵尸",
      "港风",
      "幽默",
      "怀旧",
      "合家欢"
    ],
    "oneLine": "为了赶走钉子户大楼里的僵尸，不靠谱的保安队长决定请道士斗法，却把整栋楼搞成了百鬼夜行游乐场。",
    "cover": "./103.jpg",
    "url": "./video-0553.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0554",
    "title": "溏心风暴粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2007",
    "genre": "家庭、商战、伦理",
    "tags": [
      "豪门争产",
      "鲍鱼世家",
      "金句频出",
      "原声"
    ],
    "oneLine": "鲍鱼世家六兄弟为了一枚价值连城的“溏心鲍鱼”祖宗画像反目成仇。",
    "cover": "./104.jpg",
    "url": "./video-0554.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0555",
    "title": "七天2007",
    "region": "韩国",
    "type": "电影",
    "year": "2007",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "绑架",
      "限时破案",
      "律师",
      "反转",
      "冷硬派"
    ],
    "oneLine": "王牌女律师的女儿被绑架，她必须在七天内为一个死刑犯辩护成功，否则撕票。",
    "cover": "./105.jpg",
    "url": "./video-0555.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0556",
    "title": "六连煞",
    "region": "中国大陆",
    "type": "电影",
    "year": "2031",
    "genre": "悬疑, 犯罪, 古装",
    "tags": [
      "唐朝",
      "连环杀人",
      "风水",
      "狄仁杰风",
      "本格推理"
    ],
    "oneLine": "长安城连续六位高官在“六煞位”离奇死亡，大理寺卿发现凶手竟是根据长安城风水布局在杀人。",
    "cover": "./106.jpg",
    "url": "./video-0556.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0557",
    "title": "八田与一嘉南大圳之父",
    "region": "台湾",
    "type": "电影",
    "year": "2008",
    "genre": "历史 / 传记",
    "tags": [
      "水利",
      "日据",
      "人道主义"
    ],
    "oneLine": "日本水利工程师八田与一，花十年在台湾建造嘉南大圳，却最终被自己祖国逼死。",
    "cover": "./107.jpg",
    "url": "./video-0557.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0558",
    "title": "我的机器人同桌",
    "region": "中国大陆",
    "type": "电视剧 (校园)",
    "year": "2024",
    "genre": "科幻、校园、喜剧、青春",
    "tags": [
      "机器人",
      "中学",
      "友情",
      "成长",
      "AI"
    ],
    "oneLine": "一个被校园霸凌的转学生发现，自己那位面无表情的学霸同桌是台机器人，而他们两个其实是同一款机型的“兄妹”。",
    "cover": "./108.jpg",
    "url": "./video-0558.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0559",
    "title": "烽火人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 历史 / 人性",
    "tags": [
      "抗日战争",
      "通信兵",
      "一座孤城",
      "最后电报"
    ],
    "oneLine": "1944年衡阳保卫战，守军电报员与指挥部失联后，独自在废墟中发电报四十七天，呼叫“有人吗”。",
    "cover": "./109.jpg",
    "url": "./video-0559.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0560",
    "title": "神圣的偶像",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻/喜剧/爱情",
    "tags": [
      "穿越",
      "异世界",
      "偶像",
      "神格",
      "打工人"
    ],
    "oneLine": "为了拯救王国而穿越到现代的神圣大祭司，醒来后发现自己是即将解散的糊团成员。",
    "cover": "./110.jpg",
    "url": "./video-0560.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0561",
    "title": "歪爱时代",
    "region": "泰国",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情、喜剧、青春",
    "tags": [
      "BL",
      "学霸与学渣",
      "假戏真做",
      "社团",
      "搞笑"
    ],
    "oneLine": "建筑系学霸为了拿奖学金，被迫和戏剧系的“校草渣男”组队参加情侣综艺，结果假情侣变成了真纠缠。",
    "cover": "./111.jpg",
    "url": "./video-0561.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0562",
    "title": "紧急降落",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "灾难 / 惊悚 / 群像",
    "tags": [
      "航空灾难",
      "孤胆机长",
      "极端天气"
    ],
    "oneLine": "航班遭遇电子雾霾全机失能，退休民航教员通过塔台无线电，教一个从未开过飞机的乘客手动降落。",
    "cover": "./112.jpg",
    "url": "./video-0562.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0563",
    "title": "行走的正义",
    "region": "西班牙 / 阿根廷",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪 / 动作 / 剧情",
    "tags": [
      "复仇",
      "流浪汉",
      "城市暗网",
      "以暴制暴",
      "社会底层"
    ],
    "oneLine": "他是马德里的流浪汉，也是地下世界里最干净的清道夫——不收费，只除恶。",
    "cover": "./113.jpg",
    "url": "./video-0563.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0564",
    "title": "美女也愁嫁",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2006",
    "genre": "都市, 爱情, 喜剧",
    "tags": [
      "剩女",
      "职场",
      "相亲",
      "独立女性"
    ],
    "oneLine": "三十岁的美女主编许诺要颜值有颜值，要事业有事业，却偏偏在“把自己嫁出去”这条路上屡战屡败。",
    "cover": "./114.jpg",
    "url": "./video-0564.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0565",
    "title": "女孩的夏日秘密",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 青春, 悬疑",
    "tags": [
      "少女",
      "海边",
      "失踪",
      "姐妹",
      "成长伤痛"
    ],
    "oneLine": "14岁少女在海边小镇度过暑假，她和闺蜜意外发现了镇上女孩连续失踪的秘密——与那片会“吃人”的潮汐洞有关。",
    "cover": "./115.jpg",
    "url": "./video-0565.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0566",
    "title": "非常四侠之天罗地网",
    "region": "中国",
    "type": "网络电影",
    "year": "2025",
    "genre": "古装武侠喜剧",
    "tags": [
      "侠盗",
      "机关术",
      "乌龙事件",
      "夺宝"
    ],
    "oneLine": "四位不入流的江湖侠客潜入戒备森严的千机阁，却发现传说中的宝藏竟是朝廷布下的天罗地网。",
    "cover": "./116.jpg",
    "url": "./video-0566.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0567",
    "title": "英雄一族",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 武侠 / 科幻",
    "tags": [
      "基因改造",
      "家族恩怨",
      "现代武术",
      "异能战斗"
    ],
    "oneLine": "古代刺客家族穿越到现代都市，为了维持生计开起了保安公司，却意外卷入一场基因编辑战士的阴谋。",
    "cover": "./117.jpg",
    "url": "./video-0567.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0568",
    "title": "男二本色",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2017",
    "genre": "喜剧, 爱情, 都市",
    "tags": [
      "备胎",
      "暖男",
      "逆袭"
    ],
    "oneLine": "万年男二备胎突然获得“主角光环”系统，却发现即使给他剧本，他也抢不过男主的深情。",
    "cover": "./118.jpg",
    "url": "./video-0568.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0569",
    "title": "理查德的东西",
    "region": "英国",
    "type": "电影",
    "year": "2021",
    "genre": "惊悚, 心理",
    "tags": [
      "遗产",
      "仿生人偶",
      "扭曲亲情",
      "密室"
    ],
    "oneLine": "孤僻富翁去世，留给儿子的遗物是一个与自己一模一样的仿真人偶，且人偶会说话。",
    "cover": "./119.jpg",
    "url": "./video-0569.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0570",
    "title": "桃花开好了",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 家庭， 同性",
    "tags": [
      "返乡",
      "丧父之痛",
      "初恋和解",
      "青梅竹马",
      "美食治愈"
    ],
    "oneLine": "父亲葬礼后，三个疏远的兄弟姐妹回到凋敝的桃园老宅，意外翻出父亲年轻时写给一个男人的情书。",
    "cover": "./120.jpg",
    "url": "./video-0570.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0571",
    "title": "穆里爱",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 家庭",
    "tags": [
      "海滩小镇",
      "失踪的女儿",
      "代际和解",
      "方言电影"
    ],
    "oneLine": "母亲在女儿失踪的海滩上开了一家冰淇淋店，十年后，一个不会说法语的女孩来应聘。",
    "cover": "./121.jpg",
    "url": "./video-0571.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0572",
    "title": "弱女飘萍记",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "年代女性",
    "tags": [
      "民国",
      "逆袭",
      "女性互助",
      "商战"
    ],
    "oneLine": "被卖给傻子冲喜的乡下丫头，十年后带着纺织厂回到婆家门前，买了整条街。",
    "cover": "./122.jpg",
    "url": "./video-0572.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0573",
    "title": "我的女儿们",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2025",
    "genre": "家庭, 剧情",
    "tags": [
      "母女",
      "女性群像",
      "治愈",
      "三代同堂"
    ],
    "oneLine": "一家三代四个女人，在同一屋檐下从互相伤害到彼此疗愈。",
    "cover": "./123.jpg",
    "url": "./video-0573.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0574",
    "title": "世界上最糟糕的人",
    "region": "挪威 / 法国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": [
      "焦虑",
      "女性",
      "成长",
      "北欧"
    ],
    "oneLine": "30岁的她换了七个专业、无数男友，觉得自己是世界上最糟糕的人。",
    "cover": "./124.jpg",
    "url": "./video-0574.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0575",
    "title": "婚礼季第一季",
    "region": "英国",
    "type": "剧集",
    "year": "2022",
    "genre": "喜剧，爱情",
    "tags": [
      "婚礼",
      "谎言",
      "英式幽默"
    ],
    "oneLine": "一场婚礼上，伴娘与伴郎为了面子假扮情侣，却发现自己陷入了对方家族持续一整年的婚礼季。",
    "cover": "./125.jpg",
    "url": "./video-0575.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0576",
    "title": "河口情缘",
    "region": "中国大陆",
    "type": "电影",
    "year": "2012",
    "genre": "剧情 / 爱情",
    "tags": [
      "返乡",
      "河流",
      "治愈",
      "城乡变迁",
      "初恋"
    ],
    "oneLine": "阔别故乡二十年的水坝工程师，在即将被淹没的河口小镇，重逢了发誓永不相见的青梅竹马。",
    "cover": "./126.jpg",
    "url": "./video-0576.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0577",
    "title": "温柔生物",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，奇幻",
    "tags": [
      "环保",
      "隐喻",
      "诗意",
      "怪物"
    ],
    "oneLine": "全球变暖导致海底巨型生物浮出水面，它们不吃人，只是静静地抱着人类城市取暖。",
    "cover": "./127.jpg",
    "url": "./video-0577.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0578",
    "title": "蓝汁",
    "region": "英国",
    "type": "电影",
    "year": "2017",
    "genre": "科幻 / 惊悚",
    "tags": [
      "末日",
      "变异",
      "海洋",
      "实验失败",
      "生存"
    ],
    "oneLine": "深海科考队带回一管蓝色液体，整个小镇开始融化成一滩蓝色汁液。",
    "cover": "./128.jpg",
    "url": "./video-0578.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0579",
    "title": "小怪物",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，奇幻",
    "tags": [
      "儿童",
      "孤独",
      "想象",
      "校园霸凌"
    ],
    "oneLine": "被全班孤立的女孩唯一的朋友，是一个只有她能看见、靠吃“悲伤”为生的毛茸茸小怪物。",
    "cover": "./129.jpg",
    "url": "./video-0579.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0580",
    "title": "花心梦里人",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "爱情 / 喜剧",
    "tags": [
      "都市情感",
      "渣男成长",
      "轻松喜剧"
    ],
    "oneLine": "一个脚踩七条船的职业渣男，某天醒来发现自己拥有了七个女友的全部记忆。",
    "cover": "./130.jpg",
    "url": "./video-0580.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0581",
    "title": "女人的秘密",
    "region": "韩国",
    "type": "剧集",
    "year": "2027",
    "genre": "剧情, 悬疑, 同性",
    "tags": [
      "换脸",
      "豪门",
      "复仇",
      "姬情",
      "狗血"
    ],
    "oneLine": "最好的闺蜜整容成我的样子，嫁入豪门，而我被困在ICU里听了她三年的枕边密语。",
    "cover": "./131.jpg",
    "url": "./video-0581.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0582",
    "title": "时间之子",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 奇幻, 冒险",
    "tags": [
      "时间操控",
      "少年救世",
      "因果循环",
      "视觉奇观"
    ],
    "oneLine": "一个能暂停时间的少年，发现每多用一次能力，就会有一个亲人加速衰老。",
    "cover": "./132.jpg",
    "url": "./video-0582.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0583",
    "title": "大墙无言",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "监狱",
      "救赎",
      "人性"
    ],
    "oneLine": "一名新入职的狱警，试图用音乐感化一名沉默寡言的重刑犯，却揭开了惨痛的往事。",
    "cover": "./133.jpg",
    "url": "./video-0583.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0584",
    "title": "刑事情报科粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "警匪、悬疑、动作",
    "tags": [
      "卧底",
      "情报分析",
      "心理博弈",
      "粤语原声"
    ],
    "oneLine": "情报科精英与黑客天才展开一场没有硝烟的猫鼠游戏，却发现自己追查的竟是一个不存在的幽灵。",
    "cover": "./134.jpg",
    "url": "./video-0584.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0585",
    "title": "红心的杰克",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪 / 爱情",
    "tags": [
      "扑克牌杀手",
      "双面人生",
      "黑色电影",
      "宿命"
    ],
    "oneLine": "白天是心脏外科医生，晚上是扑克牌标记的连环杀手，直到他爱上自己本该杀掉的目标。",
    "cover": "./135.jpg",
    "url": "./video-0585.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0586",
    "title": "大雄的发条都市冒险记",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画, 科幻, 冒险",
    "tags": [
      "哆啦A梦",
      "机械生命",
      "都市",
      "环保",
      "友情"
    ],
    "oneLine": "大雄用道具造出发条玩具，玩具却自行组装成一座城市，并宣布独立。",
    "cover": "./136.jpg",
    "url": "./video-0586.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0587",
    "title": "喀布尔快递",
    "region": "印度",
    "type": "电影",
    "year": "2013",
    "genre": "剧情 / 战争",
    "tags": [
      "阿富汗",
      "塔利班",
      "印巴关系",
      "公路电影"
    ],
    "oneLine": "一名印度记者与一名巴基斯坦塔利班分子，共用一副手铐穿越战区。",
    "cover": "./137.jpg",
    "url": "./video-0587.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0588",
    "title": "我的野蛮女教师",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 爱情",
    "tags": [
      "师生",
      "反差萌",
      "轻喜剧"
    ],
    "oneLine": "一身纹身的搏击冠军被迫卧底高中当语文老师，却发现自己最怕的是十六岁少女的眼泪。",
    "cover": "./138.jpg",
    "url": "./video-0588.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0589",
    "title": "冲三小剧场",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧, 生活",
    "tags": [
      "短剧",
      "单元剧",
      "讽刺",
      "无厘头"
    ],
    "oneLine": "一家快倒闭的破剧场里，三个一事无成的剧场人用“荒诞”的方式重演社会新闻，结果次次翻车。",
    "cover": "./139.jpg",
    "url": "./video-0589.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0590",
    "title": "苏格兰场大侦探",
    "region": "英国",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑犯罪",
    "tags": [
      "本格推理",
      "伦敦迷雾",
      "高智商对决"
    ],
    "oneLine": "一位患有严重社交障碍的罪案档案管理员，凭借超强记忆力和逻辑，成为苏格兰场编外顾问，却发现自己整理的旧案正被连环杀手一一重演。",
    "cover": "./140.jpg",
    "url": "./video-0590.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0591",
    "title": "抓痕和乌鸦",
    "region": "瑞典",
    "type": "电影",
    "year": "2024",
    "genre": "心理惊悚 / 剧情",
    "tags": [
      "北欧",
      "心理创伤",
      "乌鸦",
      "记忆",
      "乡愁"
    ],
    "oneLine": "女子回到瑞典老家照顾患阿尔茨海默症的父亲，发现父亲每次发病时都会在墙上抓出三道抓痕，并低语“乌鸦来了”。",
    "cover": "./141.jpg",
    "url": "./video-0591.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0592",
    "title": "花满佟家峪",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2018",
    "genre": "乡村, 剧情, 爱情",
    "tags": [
      "扶贫",
      "杏花",
      "返乡",
      "创业",
      "民俗"
    ],
    "oneLine": "城市女白领辞职回到贫困的佟家峪，试图用千亩杏花打造“中国最浪漫的山谷”。",
    "cover": "./142.jpg",
    "url": "./video-0592.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0593",
    "title": "冲破铁幕",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "惊悚/历史",
    "tags": [
      "冷战",
      "间谍",
      "东德",
      "逃亡",
      "暗黑"
    ],
    "oneLine": "1961年柏林墙竖起当夜，一名美国间谍被困东柏林，他唯一的逃生之路是地下排污管道。",
    "cover": "./143.jpg",
    "url": "./video-0593.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0594",
    "title": "不归的使者",
    "region": "韩国",
    "type": "电影",
    "year": "2017",
    "genre": "动作， 悬疑， 武侠",
    "tags": [
      "剑客",
      "阴谋",
      "朝鲜王朝",
      "替身",
      "追杀"
    ],
    "oneLine": "国王的贴身侍卫奉命处决叛徒，却发现要杀的那个人，长得和自己一模一样。",
    "cover": "./144.jpg",
    "url": "./video-0594.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0595",
    "title": "艾拉‧辛德斯",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪剧情",
    "tags": [
      "女杀手",
      "伦敦",
      "阶层跨越",
      "自我认同",
      "冷峻"
    ],
    "oneLine": "伦敦东区最顶级的清洁工（职业清道夫），表面上是个不起眼的中年妇女，实际上却是帮黑帮处理尸体的顶级专家。",
    "cover": "./145.jpg",
    "url": "./video-0595.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0596",
    "title": "龙门村的故事",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "乡村 / 家庭 / 温情",
    "tags": [
      "扶贫",
      "留守老人",
      "乡村教师",
      "非遗传承"
    ],
    "oneLine": "一座即将被整体搬迁的千年古村，最后一个月里，村民们决定为村子办一场告别晚会。",
    "cover": "./146.jpg",
    "url": "./video-0596.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0597",
    "title": "爱上两个我",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2014",
    "genre": "爱情、喜剧、奇幻",
    "tags": [
      "双重人格",
      "三角恋",
      "治愈",
      "轻松",
      "都市"
    ],
    "oneLine": "当职场女强人同时爱上建筑师的两个分裂人格，她该如何选择？",
    "cover": "./147.jpg",
    "url": "./video-0597.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0598",
    "title": "生死同盟",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 犯罪",
    "tags": [
      "卧底",
      "兄弟情",
      "背叛"
    ],
    "oneLine": "两个卧底在黑帮中互不知情，为了生存不得不将对方置于死地。",
    "cover": "./148.jpg",
    "url": "./video-0598.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0599",
    "title": "007之黄金眼",
    "region": "英国",
    "type": "电影",
    "year": "2028",
    "genre": "动作, 惊悚",
    "tags": [
      "重启",
      "黄金储备",
      "经济战",
      "新邦德"
    ],
    "oneLine": "新版007的任务不是杀人，而是阻止有人用区块链摧毁全球黄金储备。",
    "cover": "./149.jpg",
    "url": "./video-0599.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0600",
    "title": "篷车队",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "冒险 / 家庭",
    "tags": [
      "大篷车",
      "公路片",
      "动物迁徙"
    ],
    "oneLine": "一个落魄的巡回马戏团，决定驾驶老式篷车横穿美国，送一只年迈大象回到故乡。",
    "cover": "./150.jpg",
    "url": "./video-0600.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0601",
    "title": "达利与史巴基奇遇记",
    "region": "西班牙/日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "奇幻/冒险",
    "tags": [
      "超现实主义",
      "柴犬",
      "跨次元",
      "荒诞幽默"
    ],
    "oneLine": "超现实主义大师达利的灵魂，意外附身在了一只超爱捡球的小柴犬身上。",
    "cover": "./1.jpg",
    "url": "./video-0601.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0602",
    "title": "维多利亚大帝",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 传记 / 科幻",
    "tags": [
      "蒸汽朋克",
      "女王",
      "另类历史",
      "机甲"
    ],
    "oneLine": "维多利亚女王秘密驾驭巨型机甲，用蒸汽铁拳重铸日不落帝国的荣耀。",
    "cover": "./2.jpg",
    "url": "./video-0602.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0603",
    "title": "卿何薄命",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 悬疑 / 悲剧",
    "tags": [
      "民国",
      "探案",
      "女性群像",
      "宿命",
      "歌女复仇"
    ],
    "oneLine": "1930年代的上海滩，一名歌女在生日宴上当众猝死，她留下的日记本里写满了十里洋场十六位名流的秘密。",
    "cover": "./3.jpg",
    "url": "./video-0603.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0604",
    "title": "艾哈迈德王子历险记",
    "region": "沙特阿拉伯 / 埃及",
    "type": "电影",
    "year": "2022",
    "genre": "奇幻, 冒险, 家庭",
    "tags": [
      "一千零一夜",
      "魔法飞毯",
      "成长之路"
    ],
    "oneLine": "为了解除父王的诅咒，叛逆的王子必须找回散落在沙漠深处的七颗魔法宝石。",
    "cover": "./4.jpg",
    "url": "./video-0604.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0605",
    "title": "叛逃国语",
    "region": "香港",
    "type": "剧集",
    "year": "2014",
    "genre": "动作 / 悬疑",
    "tags": [
      "卧底",
      "兄弟情",
      "恐怖组织",
      "背叛",
      "飞虎队"
    ],
    "oneLine": "弟弟是飞虎队精英，哥哥却是潜逃的国际恐怖分子，奉命抓捕亲哥的他陷入了忠诚与亲情的漩涡。",
    "cover": "./5.jpg",
    "url": "./video-0605.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0606",
    "title": "乡村名流",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2013",
    "genre": "喜剧，乡村",
    "tags": [
      "农村",
      "网红",
      "幽默",
      "温情"
    ],
    "oneLine": "东北小村里的“村红”们为了争夺“乡村名流”称号，闹出了一连串啼笑皆非的故事。",
    "cover": "./6.jpg",
    "url": "./video-0606.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0607",
    "title": "人生有梦",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "励志 / 喜剧",
    "tags": [
      "外卖员",
      "脱口秀",
      "追梦",
      "草根逆袭",
      "中年危机"
    ],
    "oneLine": "一个被裁员的42岁程序员，穿上外卖服，却把每个订单的备注变成了炸翻全场的单口喜剧段子。",
    "cover": "./7.jpg",
    "url": "./video-0607.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0608",
    "title": "阳光之门",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情",
    "tags": [
      "移民问题",
      "忘年恋",
      "地中海岸",
      "文盲"
    ],
    "oneLine": "不识字的中年女佣迷上了来度假的建筑师，她一边学写字，一边试图阻止他被自己的亲生儿子所骗。",
    "cover": "./8.jpg",
    "url": "./video-0608.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0609",
    "title": "情场大玩咖",
    "region": "美国",
    "type": "电影",
    "year": "2009",
    "genre": "喜剧 / 爱情",
    "tags": [
      "约会法则",
      "浪子回头",
      "轻松喜剧",
      "套路与反套路"
    ],
    "oneLine": "两个花花公子打了个赌：谁能先让最难追的女人说出“我愿意”，就能赢一万美金。",
    "cover": "./9.jpg",
    "url": "./video-0609.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0610",
    "title": "蛋黄哥大冒险",
    "region": "日本",
    "type": "动画剧集",
    "year": "2025",
    "genre": "冒险，喜剧，治愈",
    "tags": [
      "懒蛋蛋",
      "美食",
      "躺平",
      "友情"
    ],
    "oneLine": "一颗拥有自我意识、只想躺平的蛋黄哥，被一颗热血的鸡胸肉绑架，踏上了逃离冰箱的冒险。",
    "cover": "./10.jpg",
    "url": "./video-0610.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0611",
    "title": "东京塔2024",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "东京塔",
      "网恋",
      "错位时空",
      "都市情感",
      "治愈"
    ],
    "oneLine": "两个在东京塔下失意的陌生人，通过一个过时的匿名电台，开始了跨越时空的对话与找寻。",
    "cover": "./11.jpg",
    "url": "./video-0611.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0612",
    "title": "万渣朝凰第三季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 奇幻 / 古装",
    "tags": [
      "快穿",
      "打脸爽剧",
      "虐渣",
      "女主逆袭",
      "单元故事"
    ],
    "oneLine": "女主继续穿梭各朝，专治各种极品亲戚、绿茶闺蜜、渣男皇帝。",
    "cover": "./12.jpg",
    "url": "./video-0612.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0613",
    "title": "我的爷爷",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "祖孙情",
      "抗战老兵",
      "记忆修复",
      "代际和解"
    ],
    "oneLine": "爷爷被确诊为老年痴呆后，突然开始用日语喊着一串编号，全家才发现他从未讲过真正的人生。",
    "cover": "./13.jpg",
    "url": "./video-0613.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0614",
    "title": "重生之我在2005年种树",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 奇幻 / 年代",
    "tags": [
      "重生",
      "环保",
      "乡村振兴"
    ],
    "oneLine": "被商场背叛的企业家重生为2005年的西北农民，这一次他选择放弃名利，在沙漠里种出一片绿洲。",
    "cover": "./14.jpg",
    "url": "./video-0614.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0615",
    "title": "哥吉拉对黑多拉",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "科幻，动作",
    "tags": [
      "怪兽",
      "环保",
      "污染",
      "特效",
      "对决"
    ],
    "oneLine": "人类污染催生出泥浆状怪兽黑多拉，沉睡的哥吉拉被迫苏醒，两大巨兽决战东京湾。",
    "cover": "./15.jpg",
    "url": "./video-0615.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0616",
    "title": "我和僵尸有个约会3国语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻、爱情",
    "tags": [
      "僵尸",
      "宿命",
      "轮回",
      "末日"
    ],
    "oneLine": "僵尸猎人况天佑再次醒来，发现世界已被人类与僵尸的混血后代统治。",
    "cover": "./16.jpg",
    "url": "./video-0616.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0617",
    "title": "爱麻夫人热映中",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "genre": "喜剧， 爱情",
    "tags": [
      "麻将",
      "都市轻喜剧",
      "婆媳关系",
      "反转"
    ],
    "oneLine": "为了阻止婆婆卖掉老宅，几个儿媳被迫组局陪她打麻将，却意外掀开了家族尘封多年的秘密。",
    "cover": "./17.jpg",
    "url": "./video-0617.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0618",
    "title": "飞向星星的你",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情 / 科幻 / 奇幻",
    "tags": [
      "外星人",
      "航天员",
      "跨星恋",
      "治愈",
      "双向救赎"
    ],
    "oneLine": "她是一名即将飞向太空的航天员，而他要在地球上，用引力送她最后一程。",
    "cover": "./18.jpg",
    "url": "./video-0618.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0619",
    "title": "扑通扑通的心",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "爱情, 喜剧, 奇幻",
    "tags": [
      "心脏拟人",
      "奇幻恋爱",
      "傲娇男主",
      "轻松甜宠"
    ],
    "oneLine": "心脏外科女医生意外能听到别人心跳的真实想法，却在患者身上听到了自己的“死亡倒计时”。",
    "cover": "./19.jpg",
    "url": "./video-0619.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0620",
    "title": "密西西比谋杀案",
    "region": "美国",
    "type": "电影",
    "year": "1996",
    "genre": "犯罪，剧情，悬疑",
    "tags": [
      "真实事件改编",
      "民权运动",
      "种族歧视",
      "法律正义"
    ],
    "oneLine": "两个黑人民权领袖在密西西比被谋杀，白人律师与黑人活动家联手，历经 11 年艰难诉讼只为讨回公道。",
    "cover": "./20.jpg",
    "url": "./video-0620.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0621",
    "title": "旭日之家",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "剧情, 犯罪, 西部",
    "tags": [
      "贩毒家族",
      "现代西部",
      "兄妹情",
      "暴力",
      "末日感"
    ],
    "oneLine": "加州荒漠中的贩毒家族“旭日之家”遭墨西哥黑帮血洗，15岁妹妹带着被枪击的哥哥穿越沙漠逃亡。",
    "cover": "./21.jpg",
    "url": "./video-0621.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0622",
    "title": "近亲",
    "region": "丹麦, 瑞典",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 伦理, 悬疑",
    "tags": [
      "家族",
      "秘密",
      "北欧",
      "冷峻",
      "反转"
    ],
    "oneLine": "为了给女儿找骨髓配型，母亲联系了失联几十年的原生家庭，却发现整个家族都有同一个遗传病基因。",
    "cover": "./22.jpg",
    "url": "./video-0622.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0623",
    "title": "突变",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 惊悚, 动作",
    "tags": [
      "基因突变",
      "生存",
      "怪物",
      "人性"
    ],
    "oneLine": "一夜之间，全韩国1%的人口发生了基因突变，他们获得了超能力，但政府宣布他们是“新人类病毒”。",
    "cover": "./23.jpg",
    "url": "./video-0623.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0624",
    "title": "灵幻至尊",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "喜剧, 奇幻, 动作",
    "tags": [
      "道士",
      "师徒",
      "斗僵尸",
      "老港味"
    ],
    "oneLine": "贪财道士收了三个废柴徒弟，遇上清朝僵尸王爷，四人把道术玩成了杂耍。",
    "cover": "./24.jpg",
    "url": "./video-0624.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0625",
    "title": "神探茄哩啡",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 悬疑",
    "tags": [
      "龙套演员",
      "误打误撞",
      "破案",
      "港式无厘头"
    ],
    "oneLine": "龙套演员阿辉总在刑侦剧里演尸体，却因此帮警察破获了真凶。",
    "cover": "./25.jpg",
    "url": "./video-0625.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0626",
    "title": "民雄鬼屋",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖, 惊悚",
    "tags": [
      "台湾传说",
      "民俗",
      "阴宅",
      "东南亚恐怖"
    ],
    "oneLine": "一群不信邪的网红直播探秘台湾著名鬼屋，却引出了古井里百年前的日军怨灵。",
    "cover": "./26.jpg",
    "url": "./video-0626.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0627",
    "title": "害羞的人1987",
    "region": "苏联",
    "type": "电影",
    "year": "1987",
    "genre": "剧情, 文艺",
    "tags": [
      "苏联末期",
      "社恐",
      "诗歌",
      "冷幽默"
    ],
    "oneLine": "列宁格勒一个患有严重社交恐惧症的抄表员，如何通过给邻居写匿名情诗来与世界和解。",
    "cover": "./27.jpg",
    "url": "./video-0627.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0628",
    "title": "高压行动",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作、犯罪、悬疑",
    "tags": [
      "卧底",
      "黑帮",
      "高压电",
      "反转"
    ],
    "oneLine": "卧底警察身份暴露前一刻，整栋大楼被歹徒切断电源，他在黑暗中要靠心跳声辨认敌友。",
    "cover": "./28.jpg",
    "url": "./video-0628.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0629",
    "title": "的士速递5",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧, 动作",
    "tags": [
      "飙车",
      "法式幽默",
      "重启版",
      "马赛"
    ],
    "oneLine": "新一代马赛出租车司机，继承了那辆神奇的白色标致 407，但他自己却是个连驾照都没有的游戏宅男。",
    "cover": "./29.jpg",
    "url": "./video-0629.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0630",
    "title": "紧急呼救第九季",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "动作 / 剧情",
    "tags": [
      "救援",
      "单元剧",
      "英雄"
    ],
    "oneLine": "第九季开篇，洛杉矶遭遇9.0级大地震，救援队要救的人里，有他们自己的家人。",
    "cover": "./30.jpg",
    "url": "./video-0630.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0631",
    "title": "飞上长空",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 冒险 / 奇幻",
    "tags": [
      "治愈系",
      "飞行梦",
      "奇幻冒险",
      "成长"
    ],
    "oneLine": "一个无法行走的女孩，一只翅膀受伤的大雁，一场跨越千里的云端归途。",
    "cover": "./31.jpg",
    "url": "./video-0631.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0632",
    "title": "摧花狂魔",
    "region": "香港",
    "type": "电影",
    "year": "1993",
    "genre": "恐怖",
    "tags": [
      "惊悚",
      "连环杀手",
      "警匪",
      "cult",
      "血腥"
    ],
    "oneLine": "园艺大师白天修枝剪叶，夜里用同样的手法“修剪”夜归女性。",
    "cover": "./32.jpg",
    "url": "./video-0632.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0633",
    "title": "特务敢死队",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "谍战 / 悬疑",
    "tags": [
      "民国",
      "特工",
      "小队",
      "牺牲",
      "反转"
    ],
    "oneLine": "1941年，一群被判处死刑的囚犯组成特务敢死队，执行几乎不可能完成的炸毁日军情报中心任务。",
    "cover": "./33.jpg",
    "url": "./video-0633.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0634",
    "title": "天地不仁",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "genre": "剧情 / 灾难 / 伦理",
    "tags": [
      "地震题材",
      "生存抉择",
      "宗教反思",
      "人性极限",
      "多线叙事"
    ],
    "oneLine": "大地震后，一座寺庙成了临时避难所，但神像之下，人性比废墟更摇摇欲坠。",
    "cover": "./34.jpg",
    "url": "./video-0634.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0635",
    "title": "桃色骗局",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 剧情, 爱情",
    "tags": [
      "诈骗",
      "复仇",
      "局中局",
      "高智商"
    ],
    "oneLine": "专骗富二代感情的女骗子，在一个目标身上栽了跟头，因为她发现对方是比自己更狠的杀猪盘操盘手。",
    "cover": "./35.jpg",
    "url": "./video-0635.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0636",
    "title": "三国杀：太平天书",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "桌游改编",
      "卡牌战斗",
      "三国穿越",
      "特效大片"
    ],
    "oneLine": "一张失踪的“太平天书”闪卡，竟能召唤出拥有自我意识的真实三国武将。",
    "cover": "./36.jpg",
    "url": "./video-0636.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0637",
    "title": "和你在一起",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐",
    "tags": [
      "小提琴",
      "师徒情",
      "绝症",
      "告别",
      "治愈"
    ],
    "oneLine": "天才小提琴少女被诊断出渐冻症，曾经的恩师带着一把旧琴找到她：“我们来拉一首不会结束的曲子。”",
    "cover": "./37.jpg",
    "url": "./video-0637.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0638",
    "title": "雪花那个飘",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2011",
    "genre": "剧情, 历史, 爱情",
    "tags": [
      "知青",
      "岁月",
      "情感",
      "命运"
    ],
    "oneLine": "1977年恢复高考，一群东北知青拼命复习，却发现唯一一套教材被大雪封在了深山守林人的木屋里。",
    "cover": "./38.jpg",
    "url": "./video-0638.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0639",
    "title": "妻子的浪漫旅行3 秘密版",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀，悬疑，情感",
    "tags": [
      "隐藏摄像机",
      "婚姻真相",
      "人性测试",
      "反转"
    ],
    "oneLine": "当妻子们以为在浪漫旅行时，丈夫们正通过隐藏摄像头，观看一场被导演组精心设计的“婚姻人性测试”。",
    "cover": "./39.jpg",
    "url": "./video-0639.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0640",
    "title": "狐妖传1聂小倩",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2023",
    "genre": "古装 / 爱情 / 惊悚",
    "tags": [
      "聊斋",
      "女鬼",
      "道士",
      "虐恋"
    ],
    "oneLine": "这次不是女鬼勾引书生，而是书生为了救女鬼，甘愿变成妖魔。",
    "cover": "./40.jpg",
    "url": "./video-0640.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0641",
    "title": "赣水苍茫",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "历史 / 战争 / 剧情",
    "tags": [
      "长征",
      "江西",
      "红军",
      "兄弟情"
    ],
    "oneLine": "1934年赣江边，一对亲兄弟在红军长征前夕，被迫站在了命运的十字路口。",
    "cover": "./41.jpg",
    "url": "./video-0641.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0642",
    "title": "简单易懂魔法科！",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "动画, 奇幻, 校园",
    "tags": [
      "魔法学院",
      "学渣逆袭",
      "搞笑"
    ],
    "oneLine": "魔法科吊车尾学生用“物理法则”解释所有魔法，误打误撞成了学院最强。",
    "cover": "./42.jpg",
    "url": "./video-0642.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0643",
    "title": "格杀勿论",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作/犯罪",
    "tags": [
      "黑帮",
      "复仇",
      "孤胆英雄",
      "暴力美学"
    ],
    "oneLine": "前特工为了寻找失踪的女儿，单枪匹马闯进亚洲最大黑市拍卖会，杀红了眼。",
    "cover": "./43.jpg",
    "url": "./video-0643.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0644",
    "title": "单枪匹马独行侠",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 西部",
    "tags": [
      "公路",
      "硬汉",
      "复仇",
      "荒漠"
    ],
    "oneLine": "为了给女儿报仇，一个哑巴父亲在戈壁滩上，单枪匹马追杀十二个盗猎者。",
    "cover": "./44.jpg",
    "url": "./video-0644.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0645",
    "title": "体坛秘史：肝王",
    "region": "美国",
    "type": "纪录片",
    "year": "2024",
    "genre": "纪录, 体育, 犯罪",
    "tags": [
      "健美",
      "禁药",
      "黑市",
      "器官",
      "黑色产业"
    ],
    "oneLine": "从健美冠军到全球最大非法器官中介，“肝王”的堕落之路比任何黑帮片都离奇。",
    "cover": "./45.jpg",
    "url": "./video-0645.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0646",
    "title": "狂犬末日",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 惊悚 / 灾难",
    "tags": [
      "丧尸变种",
      "狂犬病",
      "动作爽片"
    ],
    "oneLine": "一种让人类变成狂暴掠食者的病毒爆发，唯一的免疫者是黑帮老大养的一条比特犬。",
    "cover": "./46.jpg",
    "url": "./video-0646.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0647",
    "title": "以眼还眼2025",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 惊悚",
    "tags": [
      "私刑",
      "高科技",
      "复仇",
      "道德困境",
      "近未来"
    ],
    "oneLine": "一款能植入视网膜、实时分析犯罪概率的“正义之眼”问世，而它的发明者，成了这套系统锁定的下一个目标。",
    "cover": "./47.jpg",
    "url": "./video-0647.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0648",
    "title": "枭雄荡娃",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "动作, 犯罪, 爱情",
    "tags": [
      "黑帮大佬",
      "女飞贼",
      "双雄对峙",
      "江湖恩仇",
      "悲情美学"
    ],
    "oneLine": "他是退隐的枭雄，她是流浪的荡娃，一场世纪劫案让两人在血雨腥风中爱上彼此的枪口。",
    "cover": "./48.jpg",
    "url": "./video-0648.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0649",
    "title": "老妈囧很大",
    "region": "台湾",
    "type": "电视剧",
    "year": "2010",
    "genre": "家庭, 喜剧",
    "tags": [
      "母亲",
      "青春期",
      "搞笑",
      "代沟",
      "成长"
    ],
    "oneLine": "当更年期老妈误入青春期女儿的社交软件，并把自己伪装成同龄校草后，一切都失控了。",
    "cover": "./49.jpg",
    "url": "./video-0649.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0650",
    "title": "北方小镇奇谈",
    "region": "芬兰",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "北欧",
      "小镇",
      "失踪",
      "极夜"
    ],
    "oneLine": "极夜期间，北方小镇每九年失踪一人，今年轮到主角最好的朋友。",
    "cover": "./50.jpg",
    "url": "./video-0650.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0651",
    "title": "雪中真相",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "东北雪乡",
      "杀人回忆结构",
      "基层警察",
      "时代悲剧"
    ],
    "oneLine": "东北雪乡，一具被冻在冰河里的尸体，让一个快退休的片警翻了二十年前的旧案，也翻出了一整个村庄的秘密。",
    "cover": "./51.jpg",
    "url": "./video-0651.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0652",
    "title": "恋爱的正确姿势",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情 / 喜剧",
    "tags": [
      "恋爱教学",
      "契约恋爱",
      "反套路"
    ],
    "oneLine": "一个恋爱理论满分的大学教授，给三个直男学生上课时，自己却坠入了爱河。",
    "cover": "./52.jpg",
    "url": "./video-0652.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0653",
    "title": "哦我天，吸血鬼",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 恐怖 / 爱情",
    "tags": [
      "吸血鬼",
      "青春",
      "校园",
      "英式幽默"
    ],
    "oneLine": "内向少女发现全校最帅的转学生是吸血鬼，而他只对自己的血液免疫。",
    "cover": "./53.jpg",
    "url": "./video-0653.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0654",
    "title": "回转姻缘",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 奇幻",
    "tags": [
      "月老",
      "红线",
      "错位"
    ],
    "oneLine": "一对即将离婚的夫妻被月老的红线缠住，只要距离太远就会瞬间回到对方身边，被迫开启“亲密”生活。",
    "cover": "./54.jpg",
    "url": "./video-0654.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0655",
    "title": "罪恶先锋",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "警匪、动作、悬疑",
    "tags": [
      "卧底",
      "黑吃黑",
      "极限反转",
      "实景飞车"
    ],
    "oneLine": "五个警察卧底互相不知道对方身份，同时潜入一场世纪黑帮交易。",
    "cover": "./55.jpg",
    "url": "./video-0655.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0656",
    "title": "窈窕美眉",
    "region": "中国香港",
    "type": "电影",
    "year": "2002",
    "genre": "喜剧, 爱情",
    "tags": [
      "卧底",
      "丑女大变身",
      "办公室恋情"
    ],
    "oneLine": "警队霸王花被迫伪装成丑女潜入模特公司，却在与霸道总裁的朝夕相处中假戏真做。",
    "cover": "./56.jpg",
    "url": "./video-0656.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0657",
    "title": "这就是生活2020",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "疫情",
      "武汉",
      "邻里情深"
    ],
    "oneLine": "2020年初的武汉封城期间，一个老旧小区里七户人家的物资接力，撑起了彼此活下去的希望。",
    "cover": "./57.jpg",
    "url": "./video-0657.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0658",
    "title": "悟空传",
    "region": "中国大陆",
    "type": "电影",
    "year": "2028",
    "genre": "奇幻, 动作, 剧情",
    "tags": [
      "重置版",
      "暗黑神话",
      "反叛",
      "特效大片"
    ],
    "oneLine": "这一次，孙悟空没有被压五行山，而是被改造成天庭的“斗战胜佛”AI，每年下凡“清除”一次反抗者。",
    "cover": "./58.jpg",
    "url": "./video-0658.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0659",
    "title": "企鹅之岛：福克兰",
    "region": "英国",
    "type": "纪录片",
    "year": "2018",
    "genre": "纪录 / 自然 / 冒险",
    "tags": [
      "企鹅",
      "野生动物",
      "岛屿生态",
      "BBC",
      "萌系"
    ],
    "oneLine": "摄制组耗时一年，记录了福克兰群岛上五种企鹅争夺领地、养儿育女的爆笑又艰辛的日常。",
    "cover": "./59.jpg",
    "url": "./video-0659.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0660",
    "title": "玉女痴男",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "爱情, 喜剧, 剧情",
    "tags": [
      "错位恋爱",
      "纯情与放荡",
      "港式幽默",
      "阶层差异"
    ],
    "oneLine": "纯情图书馆管理员爱上夜店浪子，却发现对方是她网恋半年的“文学知己”。",
    "cover": "./60.jpg",
    "url": "./video-0660.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0661",
    "title": "僵尸之王",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "恐怖, 喜剧, 动作",
    "tags": [
      "僵尸片",
      "茅山术",
      "林正英风格",
      "斗法",
      "经典"
    ],
    "oneLine": "湘西赶尸人押送途中，意外发现棺中封着的竟是三千年前的僵尸始祖。",
    "cover": "./61.jpg",
    "url": "./video-0661.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0662",
    "title": "鬼马小天使",
    "region": "中国香港",
    "type": "剧集",
    "year": "1997",
    "genre": "喜剧、家庭、奇幻",
    "tags": [
      "童星",
      "超能力",
      "乌龙神仙",
      "邻里温情"
    ],
    "oneLine": "一个顽皮的七岁女孩意外获得了能让成年人暂时变回孩子的超能力，整个社区都被她搅得天翻地覆。",
    "cover": "./62.jpg",
    "url": "./video-0662.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0663",
    "title": "大恋爱：与将我忘记的你",
    "region": "日本",
    "type": "电视剧",
    "year": "2026",
    "genre": "爱情 / 科幻 / 医疗",
    "tags": [
      "记忆丧失",
      "绝症",
      "倒叙恋爱"
    ],
    "oneLine": "一个患有罕见“每日记忆重置”症的女孩，与一个只有一年寿命的男孩，开始了一场倒叙的恋爱。",
    "cover": "./63.jpg",
    "url": "./video-0663.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0664",
    "title": "无耻之徒第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情/喜剧",
    "tags": [
      "底层家庭",
      "混乱",
      "黑色幽默",
      "生存法则"
    ],
    "oneLine": "在芝加哥南区，单身醉鬼父亲和六个熊孩子，为了活下去每天都在上演没有下限的骚操作。",
    "cover": "./64.jpg",
    "url": "./video-0664.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0665",
    "title": "狐之歌",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动画、奇幻、音乐",
    "tags": [
      "狐狸",
      "山海经",
      "治愈"
    ],
    "oneLine": "被猎人伤了喉咙的小狐妖无法再歌唱，她在寻找人类歌谣精灵的旅途中，学会了用心灵发声。",
    "cover": "./65.jpg",
    "url": "./video-0665.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0666",
    "title": "全职高手之巅峰荣耀",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 动画, 动作",
    "tags": [
      "电竞",
      "兄弟情",
      "热血",
      "二次元"
    ],
    "oneLine": "草根网吧队如何一路逆袭，夺得荣耀职业联赛史上第一个总冠军。",
    "cover": "./66.jpg",
    "url": "./video-0666.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0667",
    "title": "鬼眼开",
    "region": "日本",
    "type": "电影",
    "year": "2005",
    "genre": "恐怖，悬疑，灵异",
    "tags": [
      "阴阳眼",
      "诅咒",
      "校园怪谈",
      "心理恐惧"
    ],
    "oneLine": "她生来就能看见鬼，却一直假装看不见，直到鬼开始要求她帮忙杀人。",
    "cover": "./67.jpg",
    "url": "./video-0667.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0668",
    "title": "一个名叫恰帕斯的地方",
    "region": "墨西哥",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 冒险, 历史",
    "tags": [
      "拉美",
      "原始丛林",
      "萨满",
      "寻根"
    ],
    "oneLine": "纽约华裔律师收到祖父遗物：一张恰帕斯丛林的手绘地图，和一封用玛雅文写的“我骗了你一辈子”。",
    "cover": "./68.jpg",
    "url": "./video-0668.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0669",
    "title": "猎狼者",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "动作，犯罪，悬疑",
    "tags": [
      "反盗猎",
      "森林警察",
      "西部",
      "硬汉",
      "复仇"
    ],
    "oneLine": "两名森林警察在西北荒野追捕盗猎团伙，却发现自己已经被盗猎者包围，一场生死猎杀在无人区展开。",
    "cover": "./69.jpg",
    "url": "./video-0669.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0670",
    "title": "执爱",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑",
    "tags": [
      "记忆删除",
      "执念",
      "心理惊悚"
    ],
    "oneLine": "女主每隔三年就会忘记自己的爱人，而爱人每隔三年就会重新追求她，已经持续了十五年。",
    "cover": "./70.jpg",
    "url": "./video-0670.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0671",
    "title": "大小姐的贴身保镖",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2023",
    "genre": "喜剧, 动作, 爱情",
    "tags": [
      "反套路",
      "女强",
      "身份错位",
      "格斗"
    ],
    "oneLine": "顶级女保镖为保护任性大小姐假扮情侣，却发现对方才是深藏不露的高手。",
    "cover": "./71.jpg",
    "url": "./video-0671.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0672",
    "title": "富贵临门",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧，剧情",
    "tags": [
      "家庭",
      "遗产",
      "市井"
    ],
    "oneLine": "菜市场鱼贩一夜暴富，却发现继承的亿万豪宅里住满了古怪的“家人”。",
    "cover": "./72.jpg",
    "url": "./video-0672.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0673",
    "title": "千谎百计第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2009",
    "genre": "剧情 / 悬疑 / 犯罪",
    "tags": [
      "微表情",
      "心理",
      "测谎",
      "高智商"
    ],
    "oneLine": "顶尖“人体测谎仪”莱特曼博士带领团队，专门戳穿FBI无法破解的完美谎言。",
    "cover": "./73.jpg",
    "url": "./video-0673.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0674",
    "title": "只想爱你",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 喜剧",
    "tags": [
      "契约恋爱",
      "整形医生",
      "毒舌男主"
    ],
    "oneLine": "为了应付家族相亲，丑小鸭女主雇佣了全城最毒舌、最昂贵的整形外科医生假扮男友。",
    "cover": "./74.jpg",
    "url": "./video-0674.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0675",
    "title": "岁月如金",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "年代剧",
      "普通人",
      "百姓史诗",
      "亲情",
      "沧桑"
    ],
    "oneLine": "从1978到2023，一个东北普通五口之家在时代洪流里的聚散、挣扎与温暖的“不够好”的一生。",
    "cover": "./75.jpg",
    "url": "./video-0675.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0676",
    "title": "远方有多远",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 文艺, 公路",
    "tags": [
      "徒步",
      "朝圣",
      "自我救赎",
      "西藏"
    ],
    "oneLine": "一个因医疗事故被吊销执照的肿瘤科医生，伪装成文青踏上了徒步墨脱的路，只为找到一个该死的理由。",
    "cover": "./76.jpg",
    "url": "./video-0676.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0677",
    "title": "龙与雀斑公主",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "科幻，动画，音乐",
    "tags": [
      "元宇宙",
      "网络暴力",
      "自我认同",
      "细田守"
    ],
    "oneLine": "现实中的自卑少女在网络虚拟世界“U”中是万人迷歌姬，她试图救赎一名被全网通缉的“龙”之少年。",
    "cover": "./77.jpg",
    "url": "./video-0677.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0678",
    "title": "秘密的时光",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，家庭，青春",
    "tags": [
      "童年回忆",
      "法式温情",
      "夏日度假",
      "祖孙情",
      "成长秘密"
    ],
    "oneLine": "少年回到外祖母的乡间老宅，在阁楼发现一叠旧信，揭开了一段被全家刻意遗忘的家族往事。",
    "cover": "./78.jpg",
    "url": "./video-0678.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0679",
    "title": "荒野五侠客",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "西部 / 冒险 / 喜剧",
    "tags": [
      "西部",
      "组队",
      "黑色幽默",
      "女性"
    ],
    "oneLine": "五个被社会抛弃的女人——妓女、逃犯、寡妇、土著、疯子，在西部荒野抢了一列运金火车。",
    "cover": "./79.jpg",
    "url": "./video-0679.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0680",
    "title": "迷网国语",
    "region": "香港",
    "type": "电视剧",
    "year": "2020",
    "genre": "犯罪, 悬疑, 社会",
    "tags": [
      "网络诈骗",
      "网络安全",
      "真实案例",
      "警察"
    ],
    "oneLine": "香港网络安全及科技罪案调查科精英，在虚拟世界追踪真凶，每集改编自真实网络陷阱。",
    "cover": "./80.jpg",
    "url": "./video-0680.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0681",
    "title": "江上琵琶",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "古装, 剧情, 悬疑",
    "tags": [
      "白居易《琵琶行》",
      "文人探案",
      "晚唐风貌",
      "音律破案"
    ],
    "oneLine": "白居易被贬江州后，凭一首《琵琶行》结识神秘女子，却发现她与一桩十年前的长安血案有关。",
    "cover": "./81.jpg",
    "url": "./video-0681.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0682",
    "title": "杀死吉姆·凯利",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 剧情",
    "tags": [
      "真实事件改编",
      "卧底",
      "黑帮",
      "悲剧英雄"
    ],
    "oneLine": "FBI史上最年轻的卧底成功潜入黑帮家族，却在任务结束后，被要求“杀掉自己创造的那个身份”。",
    "cover": "./82.jpg",
    "url": "./video-0682.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0683",
    "title": "微笑闪士",
    "region": "日本",
    "type": "动画",
    "year": "2004",
    "genre": "喜剧 / 动作 / 西部",
    "tags": [
      "枪战",
      "赏金猎人",
      "反差萌",
      "少女",
      "血腥与微笑"
    ],
    "oneLine": "传说中杀人不眨眼的赏金猎人“红发闪士”，真身竟是个永远挂着灿烂笑容的柔弱少女。",
    "cover": "./83.jpg",
    "url": "./video-0683.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0684",
    "title": "你的世界我们懂",
    "region": "新加坡",
    "type": "剧集",
    "year": "2024",
    "genre": "家庭 / 温情",
    "tags": [
      "自闭症",
      "特殊教育",
      "手足之情",
      "社会关怀"
    ],
    "oneLine": "父母意外去世后，一个典型的优等生姐姐被迫承担起照顾自闭症弟弟的重任，她开始学着走进他的世界。",
    "cover": "./84.jpg",
    "url": "./video-0684.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0685",
    "title": "死亡幽暗",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "心理恐惧",
      "密闭空间",
      "洞穴",
      "幻觉"
    ],
    "oneLine": "洞穴潜水员被困水下暗河，在彻底黑暗中，对讲机里传来了他自己的求救声。",
    "cover": "./85.jpg",
    "url": "./video-0685.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0686",
    "title": "我的女人",
    "region": "土耳其",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 剧情, 家庭",
    "tags": [
      "契约婚姻",
      "复仇",
      "传统"
    ],
    "oneLine": "为了守护家族土地，富家女与仇人之子签订契约婚姻，却在不经意间动了真心。",
    "cover": "./86.jpg",
    "url": "./video-0686.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0687",
    "title": "幸福里的朝阳",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "胡同",
      "邻里",
      "时代变迁",
      "温情",
      "成长"
    ],
    "oneLine": "1998年北京胡同拆迁前夜，三个发小在最后的老槐树下埋下一个秘密，约定二十年后开启。",
    "cover": "./87.jpg",
    "url": "./video-0687.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0688",
    "title": "望月2017",
    "region": "中国香港",
    "type": "电影",
    "year": "2017",
    "genre": "剧情, 家庭, 文艺",
    "tags": [
      "回归",
      "移民",
      "乡愁"
    ],
    "oneLine": "1997年前夕，一个香港普通家庭面临移民抉择，母亲执意要走，儿子却在天台望月时爱上了楼下的南亚裔女孩。",
    "cover": "./88.jpg",
    "url": "./video-0688.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0689",
    "title": "巴黎妓院回忆录",
    "region": "法国",
    "type": "电视剧",
    "year": "2029",
    "genre": "剧情, 历史",
    "tags": [
      "妓院",
      "19世纪",
      "群像",
      "女性"
    ],
    "oneLine": "透过19世纪末巴黎最大妓院的奢华大门，窥探里面女人们挣扎、友谊与毁灭的一生。",
    "cover": "./89.jpg",
    "url": "./video-0689.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0690",
    "title": "追杀骑师",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 悬疑 / 犯罪",
    "tags": [
      "赛马",
      "黑帮",
      "阴谋",
      "高速追逐"
    ],
    "oneLine": "一个落魄骑师被黑帮追杀，他唯一的护身符是能左右赌马结局的“终极骑术”。",
    "cover": "./90.jpg",
    "url": "./video-0690.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0691",
    "title": "养鬼吃人2",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "genre": "恐怖，奇幻",
    "tags": [
      "邪典",
      "地狱修道士",
      "针头鬼",
      "血腥美学"
    ],
    "oneLine": "少女克莉斯蒂的继母为复活死去的爱人，主动打开了恶魔方盒，释放出比第一集更疯狂的炼狱修道士。",
    "cover": "./91.jpg",
    "url": "./video-0691.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0692",
    "title": "白宫也疯狂",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作喜剧",
    "tags": [
      "政治讽刺",
      "特工",
      "黑色幽默"
    ],
    "oneLine": "一名失意的网红厨师意外成为白宫厨长，却在大选之夜被迫与菜鸟特工一起拯救被挟持的总统。",
    "cover": "./92.jpg",
    "url": "./video-0692.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0693",
    "title": "香港也疯狂",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 动作",
    "tags": [
      "港式无厘头",
      "群星贺岁",
      "警匪乌龙",
      "致敬经典"
    ],
    "oneLine": "卧底警察和假富豪同时盯上一个古董茶壶，却不知里面藏着外星人。",
    "cover": "./93.jpg",
    "url": "./video-0693.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0694",
    "title": "情逢敌手国语",
    "region": "中国香港",
    "type": "电影",
    "year": "1985",
    "genre": "喜剧 / 爱情",
    "tags": [
      "港式追女仔",
      "职场爱情",
      "广告公司",
      "欢喜冤家",
      "摩登时代"
    ],
    "oneLine": "广告公司男女策略总监互为竞争对手，为抢一个航空大客户被迫同居，从互撕到互生情愫。",
    "cover": "./94.jpg",
    "url": "./video-0694.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0695",
    "title": "群鸟东径",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，剧情",
    "tags": [
      "同志",
      "情杀",
      "航班",
      "记忆碎片"
    ],
    "oneLine": "一架从台北飞往纽约的航班上，七个人同时收到一条短信：“杀死你邻座的人，否则炸弹爆炸。”",
    "cover": "./95.jpg",
    "url": "./video-0695.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0696",
    "title": "破碎的心",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "genre": "同性 / 家庭",
    "tags": [
      "器官捐赠",
      "丧子",
      "身份错位",
      "甜品店"
    ],
    "oneLine": "儿子车祸脑死亡，父亲将他的心捐给了另一个少年，少年却声称自己拥有儿子的全部记忆。",
    "cover": "./96.jpg",
    "url": "./video-0696.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0697",
    "title": "银幕上的展览：塞尚",
    "region": "法国",
    "type": "纪录片",
    "year": "2023",
    "genre": "传记, 艺术, 历史",
    "tags": [
      "后印象派",
      "圣维克多山",
      "艺术革命"
    ],
    "oneLine": "透过电影镜头，走进塞尚那场改变艺术史的巴黎大展，揭秘苹果背后的孤独。",
    "cover": "./97.jpg",
    "url": "./video-0697.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0698",
    "title": "飞天万能车",
    "region": "英国",
    "type": "电影",
    "year": "1968",
    "genre": "冒险， 喜剧， 家庭， 奇幻",
    "tags": [
      "经典复古",
      "蒸汽朋克",
      "发明家",
      "合家欢"
    ],
    "oneLine": "一个疯狂的发明家和他的孩子们，驾驶着一辆能飞能下海的万能改装车，去阻止一场荒谬的战争。",
    "cover": "./98.jpg",
    "url": "./video-0698.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0699",
    "title": "人生狠友事",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "喜剧 / 友情",
    "tags": [
      "合租",
      "北漂",
      "十年老友",
      "毒舌互怼"
    ],
    "oneLine": "四个从大学合租到中年的“狠人”朋友，在互相伤害中治愈彼此，一吵就是十年。",
    "cover": "./99.jpg",
    "url": "./video-0699.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0700",
    "title": "波士顿勒杀狂",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "犯罪 / 惊悚 / 历史",
    "tags": [
      "连环杀手",
      "真实案件",
      "女性视角",
      "60年代"
    ],
    "oneLine": "上世纪60年代，13名单身女性被勒杀，一名家庭主妇决定用录音带引出真凶。",
    "cover": "./100.jpg",
    "url": "./video-0700.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0701",
    "title": "美眉校探 第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑， 犯罪， 青春",
    "tags": [
      "女侦探",
      "校园",
      "单元剧",
      "黑色幽默"
    ],
    "oneLine": "大学毕业后的维罗妮卡正式成为私家侦探，第一桩大案就牵扯出五年前的校园失踪案。",
    "cover": "./101.jpg",
    "url": "./video-0701.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0702",
    "title": "我们天上见",
    "region": "中国内地",
    "type": "电影",
    "year": "2024",
    "genre": "家庭, 奇幻",
    "tags": [
      "祖孙",
      "生死",
      "温情"
    ],
    "oneLine": "外公去世前给孙女留下了一本“天堂旅游手册”，她按图索骥，发现每一站都是外公的暗号。",
    "cover": "./102.jpg",
    "url": "./video-0702.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0703",
    "title": "嘿玛嘿玛",
    "region": "不丹",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 神秘, 艺术",
    "tags": [
      "面具",
      "仪式",
      "禁忌",
      "身份认同",
      "宗教"
    ],
    "oneLine": "每隔十二年，森林深处举行一场戴上面具、隐匿身份的丛林法会，一名男子因欲望犯下大错。",
    "cover": "./103.jpg",
    "url": "./video-0703.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0704",
    "title": "卓别灵传",
    "region": "美国 / 英国",
    "type": "电影",
    "year": "2026",
    "genre": "传记 / 剧情 / 历史",
    "tags": [
      "喜剧之王",
      "麦卡锡主义",
      "流亡",
      "艺术与政治",
      "戏中戏"
    ],
    "oneLine": "查理·卓别林晚年接受采访，在回忆与虚构交织中，重新审视自己与流浪汉夏尔洛的纠缠一生。",
    "cover": "./104.jpg",
    "url": "./video-0704.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0705",
    "title": "哥斯拉",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 灾难, 科幻",
    "tags": [
      "哥斯拉重启",
      "内阁",
      "巨兽",
      "灾难应对",
      "政治惊悚"
    ],
    "oneLine": "哥斯拉再次登陆东京，但这一次，它身后跟着一群试图保护它的民间组织。",
    "cover": "./105.jpg",
    "url": "./video-0705.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0706",
    "title": "虎胆悍将",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 犯罪",
    "tags": [
      "硬汉",
      "极限反杀",
      "孤胆英雄",
      "枪战"
    ],
    "oneLine": "身怀绝技的前特工为了救出被绑架的女儿，必须在24小时内单枪匹马攻破整座黑狱。",
    "cover": "./106.jpg",
    "url": "./video-0706.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0707",
    "title": "非普通家庭",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "genre": "喜剧 / 家庭 / 奇幻",
    "tags": [
      "超能力",
      "青春期",
      "伪装正常",
      "笑泪交织"
    ],
    "oneLine": "一个全员超能力的家庭为了活成“普通人”，每天都在上演大型翻车现场。",
    "cover": "./107.jpg",
    "url": "./video-0707.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0708",
    "title": "制造伍德斯托克音乐节",
    "region": "美国",
    "type": "电影",
    "year": "2009",
    "genre": "音乐 / 传记 / 剧情",
    "tags": [
      "李安",
      "嬉皮士年代",
      "音乐节幕后"
    ],
    "oneLine": "一个被父母压得喘不过气的犹太青年，如何意外地成为1969年伍德斯托克音乐节的“总导演”。",
    "cover": "./108.jpg",
    "url": "./video-0708.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0709",
    "title": "坏记忆橡皮擦",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 科幻 / 剧情",
    "tags": [
      "记忆删除",
      "反乌托邦",
      "虐恋",
      "伦理困境"
    ],
    "oneLine": "一款能定向删除痛苦记忆的医疗笔，让一对分手三年的恋人彻底忘了为何不爱，却重新爱上了彼此。",
    "cover": "./109.jpg",
    "url": "./video-0709.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0710",
    "title": "我是你奶奶",
    "region": "中国内地",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "穿越",
      "辈分错乱",
      "家族搞笑",
      "祖孙情",
      "时光旅行"
    ],
    "oneLine": "叛逆孙女和古板奶奶互换灵魂，孙女被迫参加老年广场舞大赛，奶奶替她去高考。",
    "cover": "./110.jpg",
    "url": "./video-0710.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0711",
    "title": "宝来坞女王",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "歌舞 / 剧情",
    "tags": [
      "女性觉醒",
      "宝莱坞",
      "励志",
      "色彩美学"
    ],
    "oneLine": "小镇女孩假扮已故巨星混进宝莱坞，却发现自己长得像谁，就要替谁活成别人。",
    "cover": "./111.jpg",
    "url": "./video-0711.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0712",
    "title": "关注者",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2021",
    "genre": "悬疑 / 惊悚 / 都市",
    "tags": [
      "网红",
      "网络暴力",
      "偷窥",
      "心理战"
    ],
    "oneLine": "百万粉丝的美妆博主收到私信：“我有你公寓的钥匙，我每天晚上都看你睡觉。”她报了警，却发现那个人就是负责此案的警官。",
    "cover": "./112.jpg",
    "url": "./video-0712.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0713",
    "title": "朝圣之路",
    "region": "西班牙/美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情/公路",
    "tags": [
      "徒步",
      "信仰",
      "治愈",
      "父子和解",
      "风景"
    ],
    "oneLine": "无神论的中年儿子为完成亡父遗愿踏上圣地亚哥朝圣路，却发现父亲还在路上等他。",
    "cover": "./113.jpg",
    "url": "./video-0713.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0714",
    "title": "猛鬼舞厅",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "恐怖, 喜剧, 动作",
    "tags": [
      "僵尸",
      "disco",
      "茅山术",
      "港味怀旧"
    ],
    "oneLine": "80年代迪斯科舞厅下埋着清代义庄，每到午夜，僵尸就出来和客人斗舞。",
    "cover": "./114.jpg",
    "url": "./video-0714.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0715",
    "title": "妈祖的传说",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "神话奇幻",
    "tags": [
      "女神",
      "海洋",
      "民间信仰"
    ],
    "oneLine": "少女林默娘发现自己是海神转世，但觉醒神力必须以放弃人间至爱为代价。",
    "cover": "./115.jpg",
    "url": "./video-0715.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0716",
    "title": "真相追杀令",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑、动作、犯罪",
    "tags": [
      "真相反转",
      "替身",
      "高速飙车"
    ],
    "oneLine": "一名记者发现警方通缉的连环杀手，竟是三个月前已经死在自己面前的那个人。",
    "cover": "./116.jpg",
    "url": "./video-0716.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0717",
    "title": "有点可爱的女子高中拷问社",
    "region": "日本",
    "type": "动画",
    "year": "2025",
    "genre": "喜剧, 校园, 日常",
    "tags": [
      "搞笑",
      "女子高中生",
      "反差萌",
      "社团",
      "荒诞"
    ],
    "oneLine": "五个女子高中生误以为“拷问”是某种高雅的艺术形式，于是正儿八经地成立社团，结果每次活动都变成大型翻车现场。",
    "cover": "./117.jpg",
    "url": "./video-0717.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0718",
    "title": "各怀鬼胎",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "密室",
      "全员恶人",
      "黑吃黑",
      "多重反转"
    ],
    "oneLine": "五个合作完成惊天劫案的悍匪，在分赃仓库里被困一夜，每个人都想独吞两亿。",
    "cover": "./118.jpg",
    "url": "./video-0718.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0719",
    "title": "九霄帝神第二季",
    "region": "中国大陆",
    "type": "动漫",
    "year": "2025",
    "genre": "奇幻, 冒险, 玄幻",
    "tags": [
      "修仙",
      "逆袭",
      "神魔"
    ],
    "oneLine": "废柴少帝回归九重天，发现神位争夺背后隐藏着天道崩塌的秘密，他必须杀死过去的自己才能重塑法则。",
    "cover": "./119.jpg",
    "url": "./video-0719.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0720",
    "title": "致命错爱",
    "region": "香港",
    "type": "电影",
    "year": "1998",
    "genre": "爱情/惊悚",
    "tags": [
      "婚外情",
      "跟踪",
      "精神控制",
      "反转"
    ],
    "oneLine": "全职太太怀疑丈夫出轨，雇佣私家侦探调查，却发现侦探就是丈夫的情人，而她要杀的是自己。",
    "cover": "./120.jpg",
    "url": "./video-0720.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0721",
    "title": "亚马逊活命水",
    "region": "美国 / 巴西",
    "type": "电影",
    "year": "2026",
    "genre": "冒险, 动作, 奇幻",
    "tags": [
      "丛林探险",
      "神秘药剂",
      "长生不老",
      "部落传说"
    ],
    "oneLine": "一群探险家在亚马逊丛林中寻找传说中的不死药，却发现比死亡更可怕的东西。",
    "cover": "./121.jpg",
    "url": "./video-0721.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0722",
    "title": "重任在肩第五季",
    "region": "英国",
    "type": "剧集",
    "year": "2026",
    "genre": "犯罪, 剧情, 悬疑",
    "tags": [
      "反腐",
      "卧底",
      "警局内鬼",
      "高能反转"
    ],
    "oneLine": "反贪局收到匿名举报，新调来的女警探竟是十二年前灭门案的真凶。",
    "cover": "./122.jpg",
    "url": "./video-0722.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0723",
    "title": "动物出击",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "genre": "动画 / 冒险 / 家庭",
    "tags": [
      "环保",
      "动物",
      "逃生",
      "萌宠",
      "灾难"
    ],
    "oneLine": "一场大地震后，动物园里的动物们为了生存，必须合作穿越废弃的人类城市。",
    "cover": "./123.jpg",
    "url": "./video-0723.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0724",
    "title": "漫画威龙2",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 喜剧 / 漫改",
    "tags": [
      "周星驰式无厘头",
      "热血",
      "次元墙突破",
      "续作"
    ],
    "oneLine": "30年后，昔日“漫画威龙”的儿子发现父亲的绝招其实来自一本真正的武功秘籍，而反派是一家漫画公司的总编。",
    "cover": "./124.jpg",
    "url": "./video-0724.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0725",
    "title": "寂静的朋友",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 剧情",
    "tags": [
      "听障",
      "复仇",
      "手语",
      "反转"
    ],
    "oneLine": "听障女孩的唯一朋友是空气，直到某天她发现“空气”留下的字条指向一场谋杀。",
    "cover": "./125.jpg",
    "url": "./video-0725.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0726",
    "title": "爱在猫咪疗愈时",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "温情疗愈",
    "tags": [
      "猫咪",
      "咖啡馆",
      "社交恐惧",
      "单元故事"
    ],
    "oneLine": "社恐少女继承了一家猫咪咖啡馆，每只猫背后都藏着一位客人的破碎人生。",
    "cover": "./126.jpg",
    "url": "./video-0726.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0727",
    "title": "熟悉的人",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑，惊悚",
    "tags": [
      "邻居",
      "偷窥",
      "精神分裂",
      "反转",
      "都市病"
    ],
    "oneLine": "她通过猫眼看到对面邻居在分尸，报警后警察却说那人是她的亲哥哥，而她根本没有哥哥。",
    "cover": "./127.jpg",
    "url": "./video-0727.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0728",
    "title": "太阳，不远",
    "region": "中国",
    "type": "电影",
    "year": "2000",
    "genre": "青春 / 同性 / 文艺",
    "tags": [
      "拉萨骑行",
      "绝症少年",
      "公路电影"
    ],
    "oneLine": "两个患有罕见病的少年决定骑自行车去拉萨看一次完整的日出，因为他们可能活不到第二天。",
    "cover": "./128.jpg",
    "url": "./video-0728.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0729",
    "title": "公正裁决",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪，悬疑，律政",
    "tags": [
      "陪审团",
      "密室推理",
      "人性博弈",
      "道德困境"
    ],
    "oneLine": "12名陪审员被关在密室内，他们必须在48小时内裁定一桩铁案，否则炸弹将引爆。",
    "cover": "./129.jpg",
    "url": "./video-0729.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0730",
    "title": "千年血后",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 奇幻, 爱情",
    "tags": [
      "吸血鬼",
      "永生",
      "孤独",
      "哥特美学"
    ],
    "oneLine": "她活了上千年，靠吸食年轻艺术家的鲜血维持美貌，直到遇见了最后一个猎物。",
    "cover": "./130.jpg",
    "url": "./video-0730.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0731",
    "title": "极乐夜生活",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 情色 / 文艺",
    "tags": [
      "巴黎夜景",
      "情感探索",
      "欲望都市"
    ],
    "oneLine": "一对结婚十年的夫妻为了挽救婚姻危机，决定在巴黎的夜间酒吧和俱乐部中，进行一场疯狂又浪漫的寻欢作乐。",
    "cover": "./131.jpg",
    "url": "./video-0731.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0732",
    "title": "两个只能活一个",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪, 悬疑",
    "tags": [
      "密室",
      "赌博",
      "人性"
    ],
    "oneLine": "八名欠债者被关进密室，只有一人能活着拿走一亿奖金。",
    "cover": "./132.jpg",
    "url": "./video-0732.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0733",
    "title": "苏乞儿粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "动作",
    "tags": [
      "武侠",
      "丐帮",
      "复仇",
      "粤语原声"
    ],
    "oneLine": "沉迷鸦片的醉猫少爷惨遭灭门，沦为乞丐后靠一套醉拳重拾尊严。",
    "cover": "./133.jpg",
    "url": "./video-0733.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0734",
    "title": "大话武林",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 武侠",
    "tags": [
      "恶搞",
      "穿越",
      "武馆",
      "无厘头"
    ],
    "oneLine": "一个跆拳道教练穿越到南宋，用现代体育规则打爆了武林。",
    "cover": "./134.jpg",
    "url": "./video-0734.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0735",
    "title": "军舰春光",
    "region": "日本",
    "type": "电影",
    "year": "1976",
    "genre": "剧情, 战争",
    "tags": [
      "反战",
      "慰安妇",
      "人性",
      "昭和怀旧"
    ],
    "oneLine": "二战末期，一艘即将沉没的军舰上，一群慰安妇和年轻水兵度过了最后的春天。",
    "cover": "./135.jpg",
    "url": "./video-0735.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0736",
    "title": "接赃",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "灰色地带",
      "道德困境",
      "底层生存"
    ],
    "oneLine": "深宵快餐店老板阿水兼职替小偷团伙“接货”，直到有一天，他接到的“货”是一个昏迷不醒的孩子。",
    "cover": "./136.jpg",
    "url": "./video-0736.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0737",
    "title": "记账人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 犯罪, 悬疑",
    "tags": [
      "黑帮",
      "会计",
      "数字"
    ],
    "oneLine": "黑帮老实的会计默默记下每一笔罪恶，最终用账本摧毁整个帝国。",
    "cover": "./137.jpg",
    "url": "./video-0737.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0738",
    "title": "梦十夜",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "genre": "奇幻， 悬疑， 文艺",
    "tags": [
      "单元剧",
      "潜意识",
      "梦境解析",
      "大师原作"
    ],
    "oneLine": "十个互不相识的人，每晚做同一个编号的梦，第十夜醒来，他们发现梦境成了现实。",
    "cover": "./138.jpg",
    "url": "./video-0738.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0739",
    "title": "无条件为你",
    "region": "日本",
    "type": "电视剧",
    "year": "2005",
    "genre": "爱情 / 家庭",
    "tags": [
      "绝症",
      "守护",
      "温情",
      "牺牲"
    ],
    "oneLine": "一个被诊断出只剩一年寿命的钢琴家，决定隐瞒病情，用余生默默守护暗恋已久的邻家女孩，直到她找到幸福。",
    "cover": "./139.jpg",
    "url": "./video-0739.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0740",
    "title": "城堡之恋",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "时空交错",
      "遗产继承",
      "书信传情"
    ],
    "oneLine": "收到陌生城堡的遗嘱通知后，她发现继承人竟是与自己长相一致的百年前女爵。",
    "cover": "./140.jpg",
    "url": "./video-0740.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0741",
    "title": "龙城怒汉",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作、犯罪、悬疑",
    "tags": [
      "东北工业城",
      "下岗往事",
      "复仇",
      "拳拳到肉"
    ],
    "oneLine": "龙城拆迁工地挖出尸骨，一桩二十年前的工厂悬案重现，年过半百的前工厂拳王决定用拳头讨回公道。",
    "cover": "./141.jpg",
    "url": "./video-0741.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0742",
    "title": "大乐师．为爱配乐",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 音乐",
    "tags": [
      "声音",
      "创作",
      "治愈"
    ],
    "oneLine": "失聪天才混音师遇到了一位能让他“看见声音颜色”的女孩，决心为她谱写一生的乐章。",
    "cover": "./142.jpg",
    "url": "./video-0742.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0743",
    "title": "虚无人生",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 哲学",
    "tags": [
      "存在主义",
      "孤独",
      "城市漫游",
      "意识流"
    ],
    "oneLine": "一个失忆男人在巴黎游荡48小时，发现所有人都不认识他，包括自己的母亲。",
    "cover": "./143.jpg",
    "url": "./video-0743.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0744",
    "title": "鲨颤",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚， 灾难",
    "tags": [
      "鲨鱼",
      "深海恐惧",
      "极限逃生",
      "血腥"
    ],
    "oneLine": "海底地震释放出远古鲨鱼群，一群潜水者必须在氧气耗尽前逃出深海裂缝。",
    "cover": "./144.jpg",
    "url": "./video-0744.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0745",
    "title": "远程遇害",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑推理",
    "tags": [
      "线上会议",
      "全员嫌疑人",
      "实时推理",
      "社会派"
    ],
    "oneLine": "七名前高中同学在疫情期间的线上聚会中，突然弹出一个窗口直播了其中一人被杀的实时画面，而凶手就在剩余的六人中。",
    "cover": "./145.jpg",
    "url": "./video-0745.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0746",
    "title": "海豚之眼",
    "region": "英国",
    "type": "电影",
    "year": "2012",
    "genre": "剧情，家庭",
    "tags": [
      "海豚",
      "自闭症",
      "治愈",
      "海洋"
    ],
    "oneLine": "一名患有自闭症的女孩无法与人沟通，却能与一只受伤的海豚通过眼神交流心灵感应。",
    "cover": "./146.jpg",
    "url": "./video-0746.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0747",
    "title": "反对夫人哈德利之战",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情， 传记， 历史",
    "tags": [
      "女权",
      "工会运动",
      "大萧条",
      "真实改编"
    ],
    "oneLine": "大萧条时期，一位钢铁厂工人的妻子带领家属们，用平底锅和扫帚对抗资本家的武装镇压。",
    "cover": "./147.jpg",
    "url": "./video-0747.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0748",
    "title": "黑猫1972",
    "region": "中国香港",
    "type": "电影",
    "year": "1972",
    "genre": "武侠, 动作, 剧情",
    "tags": [
      "邵氏经典",
      "女侠复仇",
      "双生子谜案",
      "暴力美学"
    ],
    "oneLine": "一位江湖女侠的丈夫被杀，凶手脸上有黑猫刺青，而她发现自己的双胞胎妹妹脸上恰好有同样的刺青。",
    "cover": "./148.jpg",
    "url": "./video-0748.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0749",
    "title": "人狗奇缘",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭, 冒险",
    "tags": [
      "导盲犬",
      "留守儿童",
      "治愈",
      "公路"
    ],
    "oneLine": "一个失明的留守儿童与一条退役的导盲犬，为了寻找在外打工的父母，结伴踏上千里之路。",
    "cover": "./149.jpg",
    "url": "./video-0749.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0750",
    "title": "欲祭",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 恐怖 / 民俗",
    "tags": [
      "巫俗",
      "祭祀",
      "家族秘密",
      "山村",
      "心理恐惧"
    ],
    "oneLine": "奶奶去世后的第一次祭祀，供桌上的牌位每晚都会改变顺序，像是死者在审判生者。",
    "cover": "./150.jpg",
    "url": "./video-0750.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0751",
    "title": "新无仁义之战",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪, 动作, 剧情",
    "tags": [
      "黑帮",
      "翻拍",
      "现代",
      "暴力美学"
    ],
    "oneLine": "现代东京黑道不再砍人，改做金融诈骗和直播带货，但内斗起来比用刀还狠。",
    "cover": "./1.jpg",
    "url": "./video-0751.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0752",
    "title": "小姐",
    "region": "韩国",
    "type": "电影",
    "year": "2016",
    "genre": "悬疑、情色、惊悚、同性",
    "tags": [
      "日据时期",
      "骗局",
      "反转",
      "女权"
    ],
    "oneLine": "继承巨额财产的贵族小姐、觊觎财产的伯爵、被雇佣的女仆，三人之间展开了一场连环骗局，每个人都想吃掉对方。",
    "cover": "./2.jpg",
    "url": "./video-0752.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0753",
    "title": "非人之恋",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 恐怖 / 奇幻",
    "tags": [
      "人偶",
      "畸恋",
      "病娇",
      "大正浪漫"
    ],
    "oneLine": "大正时代，富家千金爱上了一个精致的人偶，却发现人偶每到午夜就会流血泪。",
    "cover": "./3.jpg",
    "url": "./video-0753.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0754",
    "title": "银河决斗",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 动作 / 冒险",
    "tags": [
      "太空歌剧",
      "机甲",
      "硬核科幻",
      "星际战争",
      "特效大片"
    ],
    "oneLine": "在最靠近黑洞的贫瘠星球上，一老一少两位机甲驾驶员，为了银河系的能源命脉背水一战。",
    "cover": "./4.jpg",
    "url": "./video-0754.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0755",
    "title": "埃宫艳异",
    "region": "英国",
    "type": "迷你剧",
    "year": "2020",
    "genre": "历史, 悬疑, 惊悚",
    "tags": [
      "维多利亚",
      "宫殿",
      "女巫",
      "殖民遗产",
      "诅咒",
      "双女主"
    ],
    "oneLine": "维多利亚时代，一座从埃及整体搬来的宫殿中，两名女性发现每件文物都附着一个被谋杀的灵魂。",
    "cover": "./5.jpg",
    "url": "./video-0755.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0756",
    "title": "太平洋幽灵",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "二战",
      "幽灵船",
      "心理惊悚",
      "太平洋战场"
    ],
    "oneLine": "二战末期，一艘美国驱逐舰收到来自“幽灵潜艇”的求救信号，却发现对方已在二十年前沉没。",
    "cover": "./6.jpg",
    "url": "./video-0756.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0757",
    "title": "戴通纳之路",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 运动, 家庭",
    "tags": [
      "赛车",
      "父子",
      "失败者",
      "南方",
      "草根"
    ],
    "oneLine": "一个被吊销执照的前NASCAR车手，为了儿子能上贵族学校，重返赛场驾驶一台废铁车。",
    "cover": "./7.jpg",
    "url": "./video-0757.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0758",
    "title": "布列塔尼参加马拉松比赛",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 喜剧 / 运动",
    "tags": [
      "女性成长",
      "马拉松",
      "身体自爱",
      "励志",
      "幽默"
    ],
    "oneLine": "一位身材不“标准”的胖女孩为挽回前男友报名马拉松，却在训练中找到了真正的自己。",
    "cover": "./8.jpg",
    "url": "./video-0758.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0759",
    "title": "三人狂欢",
    "region": "英国",
    "type": "电影",
    "year": "2027",
    "genre": "喜剧、爱情、剧情",
    "tags": [
      "开放式关系",
      "黑色幽默",
      "中年危机",
      "婚姻反思"
    ],
    "oneLine": "一对结婚十五年的英国夫妻为了拯救枯燥的婚姻，邀请了一位神秘的舞蹈老师加入他们的家庭，开启了一场荒诞的实验。",
    "cover": "./9.jpg",
    "url": "./video-0759.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0760",
    "title": "小斧子",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "剧情， 家庭， 青春",
    "tags": [
      "成长",
      "木雕",
      "父子关系"
    ],
    "oneLine": "一个叛逆少年在帮爷爷修复一把破旧小斧子时，意外发现家族三代人沉默的爱与伤。",
    "cover": "./10.jpg",
    "url": "./video-0760.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0761",
    "title": "乾隆与香妃",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2002",
    "genre": "古装 / 爱情 / 历史传奇",
    "tags": [
      "清宫",
      "异域",
      "香妃",
      "乾隆",
      "民族融合"
    ],
    "oneLine": "乾隆为得香妃发动战争，却不知她从入宫那刻起，就在酝酿一场颠覆王朝的复仇。",
    "cover": "./11.jpg",
    "url": "./video-0761.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0762",
    "title": "费迪、结他与海",
    "region": "马来西亚",
    "type": "电影",
    "year": "2025",
    "genre": "音乐 / 家庭",
    "tags": [
      "自闭症",
      "音乐治疗",
      "父子情",
      "海边"
    ],
    "oneLine": "一个沉默寡言的渔村父亲，发现患有重度自闭症的儿子唯一的出口，是把海浪声听成一首完整的吉他曲。",
    "cover": "./12.jpg",
    "url": "./video-0762.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0763",
    "title": "白衣校花与大长腿2",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2015",
    "genre": "爱情 / 青春 / 剧情",
    "tags": [
      "玛丽苏",
      "豪门",
      "校花",
      "毁经典"
    ],
    "oneLine": "上一季被车撞失忆的校花，这一季醒来发现自己成了豪门私生女，还同时被四个“大长腿”疯狂追求。",
    "cover": "./13.jpg",
    "url": "./video-0763.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0764",
    "title": "我是山姆",
    "region": "美国",
    "type": "电影",
    "year": "2001",
    "genre": "剧情/家庭",
    "tags": [
      "父爱",
      "智力障碍",
      "抚养权",
      "泪崩"
    ],
    "oneLine": "智商只有七岁的父亲，为了不被夺走女儿抚养权，请来全城最贵的女律师。",
    "cover": "./14.jpg",
    "url": "./video-0764.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0765",
    "title": "请让一让2000",
    "region": "中国香港",
    "type": "电影",
    "year": "2000",
    "genre": "喜剧、爱情、都市",
    "tags": [
      "千禧年",
      "拥挤",
      "缘分",
      "疯狂",
      "怀旧"
    ],
    "oneLine": "千禧年前夜，一辆拥挤巴士上的陌生人被迫组队完成彼此的遗愿清单。",
    "cover": "./15.jpg",
    "url": "./video-0765.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0766",
    "title": "坏老师",
    "region": "美国",
    "type": "电影",
    "year": "2011",
    "genre": "喜剧",
    "tags": [
      "职场喜剧",
      "毒舌教师",
      "拜金女",
      "反差萌"
    ],
    "oneLine": "只为了赚隆胸手术费而教书的毒舌女教师，意外成了全校最受欢迎的教育改革家。",
    "cover": "./16.jpg",
    "url": "./video-0766.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0767",
    "title": "触发快乐",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 惊悚",
    "tags": [
      "脑机接口",
      "多巴胺",
      "成瘾",
      "黑镜风格"
    ],
    "oneLine": "一款能直接刺激大脑快感中枢的芯片上市后，全世界90%的人成了只会笑的“植物人”。",
    "cover": "./17.jpg",
    "url": "./video-0767.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0768",
    "title": "白雪公主斗牛记",
    "region": "西班牙",
    "type": "电影",
    "year": "2012",
    "genre": "奇幻, 剧情, 黑色幽默",
    "tags": [
      "改编",
      "斗牛",
      "超现实主义",
      "女性力量",
      "后现代"
    ],
    "oneLine": "黑白默片风格，将白雪公主故事搬到上世纪20年代西班牙斗牛场，公主成了女斗牛士，后妈是著名舞女。",
    "cover": "./18.jpg",
    "url": "./video-0768.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0769",
    "title": "黑伞人",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑 / 奇幻",
    "tags": [
      "死神",
      "雨伞",
      "因果报应"
    ],
    "oneLine": "每当有人即将遭遇不测，一个穿黑雨衣的男人就会出现在他们身后，撑开黑伞。没人知道他在保护，还是在收割。",
    "cover": "./19.jpg",
    "url": "./video-0769.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0770",
    "title": "借你俩胆",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 喜剧",
    "tags": [
      "伪纪录片",
      "凶宅",
      "直播",
      "风水"
    ],
    "oneLine": "一心想红的废柴主播去“第一凶宅”直播捉鬼，却发现真正的“鬼”是贪心的开发商和黑中介。",
    "cover": "./20.jpg",
    "url": "./video-0770.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0771",
    "title": "史酷比：神秘的开始",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "动画，喜剧，冒险",
    "tags": [
      "萌犬",
      "少年侦探",
      "怀旧重启"
    ],
    "oneLine": "少年时代的沙吉与史酷比第一次相遇，就卷入了一场涉及全镇的幽灵阴谋。",
    "cover": "./21.jpg",
    "url": "./video-0771.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0772",
    "title": "一样的世界",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "科幻 / 悬疑 / 剧情",
    "tags": [
      "平行宇宙",
      "身份认同",
      "蝴蝶效应"
    ],
    "oneLine": "平凡程序员意外发现手机能联通另一个“一样的世界”，却看到了自己本该拥有的完美人生。",
    "cover": "./22.jpg",
    "url": "./video-0772.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0773",
    "title": "日食",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 科幻",
    "tags": [
      "科幻悬疑",
      "平行时空",
      "小镇",
      "天象"
    ],
    "oneLine": "日全食三分钟后，全镇一百零八人同时收到了一条来自七秒钟后的自己发来的短信：“不要回家。”",
    "cover": "./23.jpg",
    "url": "./video-0773.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0774",
    "title": "攻壳机动队 新剧场版",
    "region": "日本",
    "type": "动画剧集",
    "year": "2026",
    "genre": "科幻， 动作， 悬疑",
    "tags": [
      "赛博朋克",
      "义体人",
      "公安九课",
      "黑客",
      "哲学思辨"
    ],
    "oneLine": "当最新一代“人工灵魂”开始集体暴走，少佐必须在数据洪流中捕捉不存在的凶手。",
    "cover": "./24.jpg",
    "url": "./video-0774.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0775",
    "title": "234说爱你",
    "region": "台湾",
    "type": "电影",
    "year": "2016",
    "genre": "爱情 / 剧情",
    "tags": [
      "都市",
      "三角恋",
      "职场",
      "女性",
      "虐恋"
    ],
    "oneLine": "广告公司文案在234号公寓与两位男人周旋，一个给她面包，一个给她爱情。",
    "cover": "./25.jpg",
    "url": "./video-0775.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0776",
    "title": "恶客",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作，犯罪，剧情",
    "tags": [
      "黑帮",
      "卧底",
      "暴力美学",
      "宿命",
      "港产片复兴"
    ],
    "oneLine": "最强打手“恶客”出狱当天被四伙仇家追杀，他却坚持要先去茶餐厅吃一碗云吞面。",
    "cover": "./26.jpg",
    "url": "./video-0776.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0777",
    "title": "人妖打排球2",
    "region": "泰国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 运动",
    "tags": [
      "LGBT",
      "热血",
      "搞笑"
    ],
    "oneLine": "为了证明“第三性别”也能为国争光，一支由变性人和同性恋组成的排球队向国家队发起了挑战赛。",
    "cover": "./27.jpg",
    "url": "./video-0777.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0778",
    "title": "契约夫妇",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情 / 都市",
    "tags": [
      "先婚后爱",
      "职场博弈",
      "假戏真做"
    ],
    "oneLine": "因公司股权对赌协议，两个死对头签下一年婚姻契约，却在婚礼当晚发现对方就是网恋三年的“灵魂伴侣”。",
    "cover": "./28.jpg",
    "url": "./video-0778.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0779",
    "title": "陈翔六点半之重楼别",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 戏曲, 动作",
    "tags": [
      "滇剧",
      "小镇青年",
      "逆袭",
      "热血",
      "网络"
    ],
    "oneLine": "滇剧团台柱为了守住即将拆迁的老戏台，带着一群废柴徒弟挑战全国街舞大赛。",
    "cover": "./29.jpg",
    "url": "./video-0779.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0780",
    "title": "初恋这件小事",
    "region": "泰国",
    "type": "电影",
    "year": "2010",
    "genre": "爱情，喜剧，青春",
    "tags": [
      "暗恋",
      "丑小鸭变天鹅",
      "校园"
    ],
    "oneLine": "长相平凡的初中生为了暗恋的学长，展开了长达三年的“自我改造计划”。",
    "cover": "./30.jpg",
    "url": "./video-0780.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0781",
    "title": "割爱全忠",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "历史 / 战争",
    "tags": [
      "古代战争",
      "忠义",
      "牺牲",
      "家国情怀"
    ],
    "oneLine": "战国乱世，一介死士为了报恩，被迫在挚爱与家国大义之间做出鲜血淋漓的选择。",
    "cover": "./31.jpg",
    "url": "./video-0781.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0782",
    "title": "神奇的影像",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "科幻悬疑",
    "tags": [
      "元宇宙",
      "记忆盗窃",
      "虚实",
      "伦理",
      "惊悚"
    ],
    "oneLine": "一款能修复老照片的APP，实际上在盗取用户的深层记忆，并用于重构虚拟杀人梦境。",
    "cover": "./32.jpg",
    "url": "./video-0782.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0783",
    "title": "龙虎干戈",
    "region": "中国香港",
    "type": "电影",
    "year": "2022",
    "genre": "动作、武侠、犯罪",
    "tags": [
      "双雄对决",
      "硬核打斗",
      "黑帮",
      "兄弟情"
    ],
    "oneLine": "一个想洗白的黑道大哥，一个要除暴安良的刑警，却长着同一张脸。",
    "cover": "./33.jpg",
    "url": "./video-0783.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0784",
    "title": "消失的大象",
    "region": "泰国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情 / 魔幻现实主义",
    "tags": [
      "大象",
      "失踪",
      "东南亚风情",
      "隐喻",
      "寻物"
    ],
    "oneLine": "小镇唯一的大象在某天清晨消失了，整个镇子的人都开始寻找自己丢失的东西。",
    "cover": "./34.jpg",
    "url": "./video-0784.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0785",
    "title": "鲁冰花",
    "region": "中国台湾",
    "type": "电影",
    "year": "1989",
    "genre": "剧情 / 家庭",
    "tags": [
      "教育反思",
      "天才悲剧",
      "经典催泪"
    ],
    "oneLine": "拥有绘画天赋的穷苦孩子古阿明，他的画只有在死后，才被老师拿出来办了轰动全世界的画展。",
    "cover": "./35.jpg",
    "url": "./video-0785.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0786",
    "title": "将错就爱",
    "region": "泰国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 喜剧 / 同性",
    "tags": [
      "欢喜冤家",
      "换身",
      "假戏真做",
      "泰式甜剧"
    ],
    "oneLine": "霸道霸总与佛系兽医因车祸互换身体，为了不露馅，一个学习抱狗，一个学习签合同。",
    "cover": "./36.jpg",
    "url": "./video-0786.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0787",
    "title": "杀戮重生犬屋敷",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": [
      "重生",
      "机器人",
      "复仇",
      "暴力",
      "人性"
    ],
    "oneLine": "被黑帮灭门的退休教师，被改造成了杀戮机器，只留下心脏处一张女儿的照片。",
    "cover": "./37.jpg",
    "url": "./video-0787.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0788",
    "title": "新福星小子第二季",
    "region": "日本",
    "type": "动画",
    "year": "2025",
    "genre": "喜剧 / 科幻 / 爱情",
    "tags": [
      "重置版",
      "无厘头",
      "外星人",
      "校园恋爱"
    ],
    "oneLine": "诸星当以为自己终于甩掉了拉姆，却发现整个地球都被装进了拉姆的“爱情漂流瓶”。",
    "cover": "./38.jpg",
    "url": "./video-0788.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0789",
    "title": "宝剑红颜",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "古装 / 武侠 / 言情",
    "tags": [
      "女剑客",
      "朝堂",
      "虐恋",
      "江湖"
    ],
    "oneLine": "天下第一女剑客被师父所骗，亲手覆灭了爱人所在的忠良世家。",
    "cover": "./39.jpg",
    "url": "./video-0789.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0790",
    "title": "电光骑士",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 动作 / 科幻",
    "tags": [
      "赛博朋克",
      "机车",
      "外卖骑手",
      "反抗",
      "虚拟现实"
    ],
    "oneLine": "在赛博朋克的未来都市，一帮外卖骑手组成了地下机车帮，用送外卖的轨迹对抗垄断巨头。",
    "cover": "./40.jpg",
    "url": "./video-0790.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0791",
    "title": "全新的你",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 伦理",
    "tags": [
      "意识上传",
      "克隆",
      "出轨",
      "身份危机"
    ],
    "oneLine": "他为了给妻子完美爱情而订购了“人格修正芯片”，却发现自己不断被升级版的新型号“自己”所取代。",
    "cover": "./41.jpg",
    "url": "./video-0791.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0792",
    "title": "落跑吧爱情",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情、喜剧、公路",
    "tags": [
      "逃婚",
      "公路之旅",
      "欢喜冤家",
      "自我成长"
    ],
    "oneLine": "婚礼当天落跑的新娘，却上了一位毒舌民宿司机的破面包车，两人被迫开启环岛囧途。",
    "cover": "./42.jpg",
    "url": "./video-0792.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0793",
    "title": "狩猎事故",
    "region": "挪威",
    "type": "电影",
    "year": "2016",
    "genre": "悬疑, 惊悚",
    "tags": [
      "北欧黑色",
      "误杀",
      "小镇秘密",
      "道德困境"
    ],
    "oneLine": "三个猎人在深山中误杀了一名陌生男子，他们决定抛尸，但第二天发现尸体回到了营地门口。",
    "cover": "./43.jpg",
    "url": "./video-0793.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0794",
    "title": "勇闯雷霆峰",
    "region": "美国",
    "type": "电影",
    "year": "1975",
    "genre": "冒险， 动作",
    "tags": [
      "登山",
      "间谍",
      "惊险",
      "实拍",
      "冷战"
    ],
    "oneLine": "中情局特工奉命登上阿尔卑斯最险峰“雷霆峰”，山顶不是军事基地，而是一扇门。",
    "cover": "./44.jpg",
    "url": "./video-0794.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0795",
    "title": "塔兰图拉毒蛛",
    "region": "意大利/西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "惊悚， 恐怖",
    "tags": [
      "生物变异",
      "犯罪",
      "雨林"
    ],
    "oneLine": "一群盗猎者在亚马逊雨林意外释放了携带剧毒变异病毒的巨型毒蛛，小镇沦为猎场。",
    "cover": "./45.jpg",
    "url": "./video-0795.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0796",
    "title": "王子与贫儿",
    "region": "美国",
    "type": "电影",
    "year": "1999",
    "genre": "剧情、家庭、冒险",
    "tags": [
      "身份互换",
      "马克吐温",
      "成长",
      "童话改编",
      "社会阶层"
    ],
    "oneLine": "长相相同的王子与乞丐互换身份，一个体验民间疾苦，一个饱尝宫廷束缚。",
    "cover": "./46.jpg",
    "url": "./video-0796.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0797",
    "title": "不死的男人",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻 / 剧情 / 爱情",
    "tags": [
      "永生",
      "孤独",
      "时间跨度",
      "史诗"
    ],
    "oneLine": "一个从公元前2000年活到现代的不死之人，他最大的痛苦不是永生，而是不断地遗忘。",
    "cover": "./47.jpg",
    "url": "./video-0797.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0798",
    "title": "晨间漫步",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "家庭、治愈、生活",
    "tags": [
      "晨练",
      "邻里关系",
      "退休生活",
      "慢节奏",
      "社会群像"
    ],
    "oneLine": "每天清晨六点，一个自闭症男孩用“画地图”的方式，串联起一个老旧小区所有人的秘密。",
    "cover": "./48.jpg",
    "url": "./video-0798.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0799",
    "title": "完美的一对",
    "region": "韩国",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情, 悬疑",
    "tags": [
      "相亲",
      "替身",
      "心理战"
    ],
    "oneLine": "婚礼前三天，新娘发现新郎是专门拆散完美情侣的“职业情敌”。",
    "cover": "./49.jpg",
    "url": "./video-0799.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0800",
    "title": "不朽真情",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情 / 历史",
    "tags": [
      "维多利亚时代",
      "阶级差异",
      "坚守",
      "催泪"
    ],
    "oneLine": "维多利亚时代的女仆与少爷相爱被迫分离，六十三年后，两封未拆的信在阁楼被重新发现。",
    "cover": "./50.jpg",
    "url": "./video-0800.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0801",
    "title": "多明戈与迷雾幽灵",
    "region": "西班牙",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑，惊悚，奇幻",
    "tags": [
      "歌剧",
      "剧院幽灵",
      "诅咒",
      "复仇"
    ],
    "oneLine": "世界著名男高音多明戈受邀回到旧剧院，却发现一百年前的幽灵正借他的歌声诅咒观众。",
    "cover": "./51.jpg",
    "url": "./video-0801.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0802",
    "title": "秋日奏鸣曲",
    "region": "瑞典",
    "type": "电影",
    "year": "2027",
    "genre": "剧情, 家庭",
    "tags": [
      "母女",
      "和解",
      "音乐会",
      "北欧冷感"
    ],
    "oneLine": "著名钢琴家母亲去乡下看望女儿，却在下火车的第一秒就开始了新一轮的“教导”。",
    "cover": "./52.jpg",
    "url": "./video-0802.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0803",
    "title": "二郎神之深海蛟龙",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动画, 奇幻, 动作",
    "tags": [
      "神话",
      "深海",
      "杨戬",
      "国漫"
    ],
    "oneLine": "封神大战后，杨戬被贬至东海镇守，却发现所谓的孽蛟，其实是守护海底龙脉的最后忠臣。",
    "cover": "./53.jpg",
    "url": "./video-0803.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0804",
    "title": "真假森林王",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2024",
    "genre": "喜剧， 冒险， 奇幻",
    "tags": [
      "冒名顶替",
      "自我认同",
      "森林冒险",
      "萌宠搭档"
    ],
    "oneLine": "一个胆小如鼠的动物园明星被迫伪装成失踪的森林之王，去平息一场动物世界大战。",
    "cover": "./54.jpg",
    "url": "./video-0804.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0805",
    "title": "更美好的事第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2016",
    "genre": "喜剧，剧情",
    "tags": [
      "单亲妈妈",
      "成长",
      "日常",
      "幽默",
      "温情"
    ],
    "oneLine": "一位女演员单亲妈妈在洛杉矶抚养三个女儿，笑泪交织的生活日常。",
    "cover": "./55.jpg",
    "url": "./video-0805.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0806",
    "title": "黑天雷",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "超级士兵",
      "电磁风暴",
      "记忆植入"
    ],
    "oneLine": "一次电磁脉冲事故后，一名士兵获得了控制电力的能力，但体内被植入的叛国记忆也随之觉醒。",
    "cover": "./56.jpg",
    "url": "./video-0806.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0807",
    "title": "悄悄跟着我",
    "region": "韩国",
    "type": "剧集",
    "year": "2022",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "尾随者",
      "反追踪",
      "地下通道",
      "录音笔谜团"
    ],
    "oneLine": "一名夜班女工发现自己每晚都被同一个人“温柔”尾随，而对方留下的字条写着：我在保护你。",
    "cover": "./57.jpg",
    "url": "./video-0807.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0808",
    "title": "浮出水面",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 心理",
    "tags": [
      "深海幽闭",
      "记忆骗局",
      "反转结局"
    ],
    "oneLine": "潜艇沉入3000米海沟，艇员陆续死亡，活下来的人发现潜艇从未真正下潜过。",
    "cover": "./58.jpg",
    "url": "./video-0808.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0809",
    "title": "熊出没·逆转时空",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 科幻",
    "tags": [
      "穿越",
      "友情",
      "环境保护",
      "平行宇宙",
      "喜剧"
    ],
    "oneLine": "光头强无意间启动时间罗盘，结果把熊大熊二变成了没有记忆的原始野兽。",
    "cover": "./59.jpg",
    "url": "./video-0809.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0810",
    "title": "路易·德拉克斯的第九条命",
    "region": "加拿大/英国",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑， 剧情， 奇幻",
    "tags": [
      "儿童",
      "坠崖",
      "第九条命",
      "心理",
      "家庭秘密"
    ],
    "oneLine": "九岁男孩路易每年都会离奇重伤一次，在他第九次坠崖昏迷后，一位医生决定用催眠进入他的潜意识。",
    "cover": "./60.jpg",
    "url": "./video-0810.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0811",
    "title": "绝命塔罗牌",
    "region": "中国台湾",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖, 悬疑, 惊悚",
    "tags": [
      "塔罗牌",
      "诅咒",
      "密室",
      "占卜",
      "死亡顺序"
    ],
    "oneLine": "六个网友收到匿名塔罗牌，每张牌对应一种死法，而占卜结果正在按倒计时依次应验。",
    "cover": "./61.jpg",
    "url": "./video-0811.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0812",
    "title": "寒武纪",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 科幻",
    "tags": [
      "史前病毒",
      "冻土层",
      "回溯进化"
    ],
    "oneLine": "青藏高原冻土层融化，释放出一种能让人类“逆向进化”为寒武纪怪物的远古病毒。",
    "cover": "./62.jpg",
    "url": "./video-0812.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0813",
    "title": "副总统第四季",
    "region": "美国",
    "type": "剧集",
    "year": "2022",
    "genre": "政治 / 剧情 / 惊悚",
    "tags": [
      "白宫西翼",
      "权力巅峰",
      "影子政府",
      "弹劾危机"
    ],
    "oneLine": "新任女副总统凯瑟琳发现，自己的办公室被植入了完整的监听系统，对方就是总统本人。",
    "cover": "./63.jpg",
    "url": "./video-0813.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0814",
    "title": "英雄一族",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "动作",
    "tags": [
      "超能力",
      "家庭",
      "黑色幽默",
      "反超级英雄"
    ],
    "oneLine": "世界上最强的超级英雄退休后，他的三个废柴孩子为了争夺家族遗产管理权，不得不联手对抗来索命的宇宙反派。",
    "cover": "./64.jpg",
    "url": "./video-0814.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0815",
    "title": "鸟类人间",
    "region": "阿根廷",
    "type": "电视剧",
    "year": "2020",
    "genre": "剧情，奇幻，悬疑",
    "tags": [
      "超现实",
      "变种",
      "社会隐喻",
      "慢热",
      "多重解读"
    ],
    "oneLine": "一座小城的居民开始毫无征兆地长羽毛、学鸟鸣，政府宣布这是“进化病”。",
    "cover": "./65.jpg",
    "url": "./video-0815.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0816",
    "title": "大头仔",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、犯罪",
    "tags": [
      "黑帮",
      "父子",
      "底层",
      "宿命",
      "街头"
    ],
    "oneLine": "脑袋天生巨大的少年，在九龙城寨废墟里跟着过气黑帮大佬讨生活，却意外成了网红。",
    "cover": "./66.jpg",
    "url": "./video-0816.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0817",
    "title": "上海惊奇",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 动作",
    "tags": [
      "探案",
      "旗袍",
      "弄堂文化",
      "乌龙搭档"
    ],
    "oneLine": "弄堂里爱跳广场舞的大妈和叛逆孙女，意外戳破跨国珠宝盗窃案。",
    "cover": "./67.jpg",
    "url": "./video-0817.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0818",
    "title": "超级巨人",
    "region": "日本",
    "type": "动画电影",
    "year": "2020",
    "genre": "科幻，动作，剧情",
    "tags": [
      "机甲",
      "巨人体质",
      "父子",
      "牺牲"
    ],
    "oneLine": "17岁少年被选中驾驶百米的超级机甲，但驾驶条件是他必须服用药物将自己缓慢变成巨人。",
    "cover": "./68.jpg",
    "url": "./video-0818.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0819",
    "title": "缇萦",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "历史 / 传记",
    "tags": [
      "汉代",
      "女性",
      "律法",
      "孝道"
    ],
    "oneLine": "西汉少女缇萦冒死上书汉文帝，以一己之力废除肉刑，改写了中国古代法律史。",
    "cover": "./69.jpg",
    "url": "./video-0819.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0820",
    "title": "家和万事兴之双喜临门",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "家庭喜剧",
    "tags": [
      "春节贺岁",
      "家族和解",
      "双胞胎误会",
      "邻里喜剧",
      "传统与现代"
    ],
    "oneLine": "分居两地的一对双胞胎姐妹在除夕夜互换身份，却意外撮合了父母破镜重圆。",
    "cover": "./70.jpg",
    "url": "./video-0820.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0821",
    "title": "红气球",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 奇幻 / 家庭",
    "tags": [
      "儿童视角",
      "巴黎",
      "移民家庭",
      "治愈",
      "超现实"
    ],
    "oneLine": "巴黎十三区，一个华裔小女孩的红气球带着她穿越时空，找到了从未见过的爷爷。",
    "cover": "./71.jpg",
    "url": "./video-0821.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0822",
    "title": "我渴望被禁止的东西",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 情色 / 心理",
    "tags": [
      "欲望",
      "禁忌",
      "法国文艺",
      "女性觉醒"
    ],
    "oneLine": "一位修道院长大的女孩进城后，爱上了贵族舞会上的面具，以及面具背后所有“有罪的快乐”。",
    "cover": "./72.jpg",
    "url": "./video-0822.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0823",
    "title": "密室大逃脱第七季",
    "region": "中国",
    "type": "综艺",
    "year": "2026",
    "genre": "真人秀 / 悬疑 / 冒险",
    "tags": [
      "密室",
      "明星",
      "烧脑",
      "实景",
      "团队合作"
    ],
    "oneLine": "本季玩家被投送到真实的废弃核电站，而所有谜题都指向一场未公开的核泄漏真相。",
    "cover": "./73.jpg",
    "url": "./video-0823.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0824",
    "title": "三傻大闹宝莱坞",
    "region": "印度",
    "type": "电影",
    "year": "2009",
    "genre": "剧情 / 喜剧 / 励志",
    "tags": [
      "讽刺教育",
      "友情",
      "印度喜剧",
      "阿米尔汗",
      "反内卷"
    ],
    "oneLine": "两个好友寻找失联多年的死党，却在一场场回忆中揭开了印度顶尖工程学院里的疯狂往事。",
    "cover": "./74.jpg",
    "url": "./video-0824.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0825",
    "title": "中年男的异世界网购生活",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "动画、奇幻、喜剧",
    "tags": [
      "异世界",
      "社畜逆袭",
      "网购",
      "慢生活"
    ],
    "oneLine": "42 岁的日本上班族被召唤到异世界，但他没有外挂，只有一个可以连接地球电商网站的购物APP。",
    "cover": "./75.jpg",
    "url": "./video-0825.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0826",
    "title": "一出大戏",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "戏中戏",
      "小镇",
      "逆袭",
      "黑色幽默",
      "梦想"
    ],
    "oneLine": "一个濒临倒闭的乡镇剧团，为还债假扮绑匪拍“绑架戏”，却意外卷入一场真劫案。",
    "cover": "./76.jpg",
    "url": "./video-0826.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0827",
    "title": "失控犯罪：山谷金百合",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 犯罪",
    "tags": [
      "推理",
      "小镇",
      "百合花",
      "复仇"
    ],
    "oneLine": "宁静的山谷小镇每年百合花节都会死人，今年轮到了来调查的警探本人。 小镇每起命案现场都放着一束金百合，警探发现花语连起来是一封挑战书。",
    "cover": "./77.jpg",
    "url": "./video-0827.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0828",
    "title": "家有虎妻",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "喜剧 / 家庭 / 都市",
    "tags": [
      "女强男弱",
      "婚姻",
      "成长"
    ],
    "oneLine": "彪悍的虎妻和佛系老公结婚十周年之际，突然互换身体，才发现对方的“轻松”都是假象。",
    "cover": "./78.jpg",
    "url": "./video-0828.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0829",
    "title": "接种",
    "region": "韩国 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚, 科幻, 灾难",
    "tags": [
      "病毒",
      "疫苗危机",
      "伦理",
      "反转"
    ],
    "oneLine": "一种能让人“无敌”的疫苗问世，注射者肌肉密度暴增，但代价是逐渐丧失痛觉、触觉，直至失去人性。",
    "cover": "./79.jpg",
    "url": "./video-0829.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0830",
    "title": "初恋未满",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "初恋",
      "遗憾",
      "90年代",
      "小城",
      "暗恋"
    ],
    "oneLine": "1999年，南方小城高中里，一个胖女孩对篮球队长的暗恋，因一封没送出的信改变一生。",
    "cover": "./80.jpg",
    "url": "./video-0830.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0831",
    "title": "醉乡情断",
    "region": "中国香港",
    "type": "电影",
    "year": "1986",
    "genre": "剧情 / 爱情",
    "tags": [
      "邵氏",
      "酒瘾",
      "文艺悲歌",
      "老港片"
    ],
    "oneLine": "酒吧老板爱上了一个只能靠酒精维持表演的女歌手，他决定用一生酿酒，让她永远醉着。",
    "cover": "./81.jpg",
    "url": "./video-0831.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0832",
    "title": "泳者",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "运动 / 传记",
    "tags": [
      "游泳",
      "残障",
      "励志",
      "真实改编"
    ],
    "oneLine": "独臂少年为了不让母亲失望，用五年时间从一个旱鸭子游进了残奥会决赛。",
    "cover": "./82.jpg",
    "url": "./video-0832.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0833",
    "title": "隔壁的护士助理",
    "region": "日本",
    "type": "电视剧",
    "year": "2024",
    "genre": "医疗 / 悬疑",
    "tags": [
      "护士",
      "偷听",
      "医疗事故",
      "复仇"
    ],
    "oneLine": "医院王牌外科医生的邻居是个不起眼的护士助理，她每晚在共享墙壁上偷听手术细节，然后匿名举报每一处致命失误。",
    "cover": "./83.jpg",
    "url": "./video-0833.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0834",
    "title": "致不灭的你第二季",
    "region": "日本",
    "type": "剧集",
    "year": "2022",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "不死",
      "永生",
      "成长",
      "物哀"
    ],
    "oneLine": "不死为了拯救伙伴，终于来到了“守护者”的现代城市，却发现自己要面对的是人心的嫉妒与背叛。",
    "cover": "./84.jpg",
    "url": "./video-0834.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0835",
    "title": "泪洒相思地",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 古装, 悲剧",
    "tags": [
      "民国爱情",
      "豪门恩怨",
      "虐恋",
      "命运弄人"
    ],
    "oneLine": "苏州河边的一场邂逅，令富家千金与穷画家私定终身，战火却将他们推向绝境。",
    "cover": "./85.jpg",
    "url": "./video-0835.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0836",
    "title": "猫和老鼠2014第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2014",
    "genre": "动画 / 喜剧",
    "tags": [
      "经典重启",
      "无对白",
      "暴力美学"
    ],
    "oneLine": "汤姆和杰瑞进入智能手机时代，但他们的追逐战依然能把整栋楼拆成废墟。",
    "cover": "./86.jpg",
    "url": "./video-0836.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0837",
    "title": "游击恋爱",
    "region": "日本",
    "type": "日剧",
    "year": "2023",
    "genre": "爱情 / 悬疑",
    "tags": [
      "反乌托邦",
      "女杀手",
      "游击战",
      "伪装",
      "黑色幽默"
    ],
    "oneLine": "代号“青鸟”的少女杀手在执行任务时，爱上了她本该消灭的目标——一名地下反抗军首领。",
    "cover": "./87.jpg",
    "url": "./video-0837.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0838",
    "title": "女人告白时",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 剧情, 惊悚",
    "tags": [
      "密室",
      "闺蜜",
      "反转",
      "复仇",
      "录音笔"
    ],
    "oneLine": "闺蜜聚会的别墅里，一支打开的录音笔记录下了四个女人针对一个“消失的男人”的供词。",
    "cover": "./88.jpg",
    "url": "./video-0838.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0839",
    "title": "泰山功夫",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作/励志",
    "tags": [
      "武术",
      "登山",
      "传统文化",
      "成长"
    ],
    "oneLine": "一个只会花架子的武术骗子逃上泰山，遇到了一个隐居山顶的真扫地僧，被迫学起了真功夫。",
    "cover": "./89.jpg",
    "url": "./video-0839.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0840",
    "title": "爱是生死相许",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情 / 同性",
    "tags": [
      "同志暮年",
      "养老院",
      "遗忘与陪伴",
      "生死课",
      "白首之约"
    ],
    "oneLine": "七十岁老人进养老院寻找失智恋人，对方却每次都重新和他“初恋”。",
    "cover": "./90.jpg",
    "url": "./video-0840.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0841",
    "title": "母亲的微笑",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "阿尔茨海默症",
      "母女",
      "催泪",
      "治愈"
    ],
    "oneLine": "患上阿尔茨海默症的母亲逐渐忘记一切，却始终记得要对女儿“微笑”，女儿决定陪她重走一生。",
    "cover": "./91.jpg",
    "url": "./video-0841.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0842",
    "title": "传奇王子2：贵族降临",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "genre": "剧情 / 爱情 / 喜剧",
    "tags": [
      "逆袭",
      "校园",
      "贵族",
      "竞争",
      "成长"
    ],
    "oneLine": "平民王子刚站稳脚跟，三位真正贵族转学生便降临校园，宣布要夺回一切。",
    "cover": "./92.jpg",
    "url": "./video-0842.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0843",
    "title": "啤酒花",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "中年危机",
      "精酿",
      "兄弟情",
      "城市"
    ],
    "oneLine": "三个被裁员的中年男人，凑钱开了一家精酿酒馆，结果把自己喝垮了。",
    "cover": "./93.jpg",
    "url": "./video-0843.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0844",
    "title": "炊事班的故事1",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2002",
    "genre": "喜剧, 军旅",
    "tags": [
      "情景喜剧",
      "炊事兵",
      "胖洪",
      "搞笑",
      "集体生活"
    ],
    "oneLine": "一群身怀绝技的问题士兵被发配到炊事班，他们做的第一顿饭差点炸了团部。",
    "cover": "./94.jpg",
    "url": "./video-0844.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0845",
    "title": "狼女",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻剧情",
    "tags": [
      "狼群抚养",
      "野性觉醒",
      "身份认同",
      "女性成长"
    ],
    "oneLine": "被狼群养大的少女重返人类社会，却在听证会上被要求证明自己“有灵魂”。",
    "cover": "./95.jpg",
    "url": "./video-0845.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0846",
    "title": "严密的关系",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "邻居",
      "监视",
      "反转",
      "心理战"
    ],
    "oneLine": "独居女子发现对面楼每晚同一时间用摩斯密码求救，报警后却被告知那间屋子无人居住。",
    "cover": "./96.jpg",
    "url": "./video-0846.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0847",
    "title": "相扑男孩",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "体育成长",
    "tags": [
      "青春",
      "励志",
      "传统文化"
    ],
    "oneLine": "瘦弱的高中男孩为了暗恋的女生加入相扑社，却发现体重不是胜负的关键，胆量才是。",
    "cover": "./97.jpg",
    "url": "./video-0847.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0848",
    "title": "少年王卫斯理",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2002",
    "genre": "科幻, 冒险",
    "tags": [
      "倪匡",
      "民国",
      "外星文明",
      "少年探险",
      "单元剧"
    ],
    "oneLine": "少年时期的卫斯理还没成为传奇，他只是在北平的胡同里，靠修理旧货为生，顺便遇到了一连串超越当时科学理解的事件。",
    "cover": "./98.jpg",
    "url": "./video-0848.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0849",
    "title": "密码46",
    "region": "英国 / 德国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": [
      "基因密码",
      "反乌托邦",
      "数字伦理"
    ],
    "oneLine": "在基因决定阶层的社会，一个天生携带“密码46”（完美基因）的底层清洁工，发现自己只是精英阶层培养的“活体器官库”。",
    "cover": "./99.jpg",
    "url": "./video-0849.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0850",
    "title": "盲柳与睡女",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动画",
    "tags": [
      "村田沙耶香",
      "超现实",
      "心理惊悚",
      "梦境",
      "存在主义"
    ],
    "oneLine": "一只会说话的盲柳树下，睡着一个永远醒不来的女人，而她的梦境正在吞噬整座小镇。",
    "cover": "./100.jpg",
    "url": "./video-0850.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0851",
    "title": "全家度蜜月",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 冒险",
    "tags": [
      "新婚",
      "奇葩家人",
      "公路片",
      "笑中带泪"
    ],
    "oneLine": "新婚夫妇想二人世界，却被双方共六位长辈强行加入蜜月旅行，一路鸡飞狗跳。",
    "cover": "./101.jpg",
    "url": "./video-0851.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0852",
    "title": "只是一场意外",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情， 家庭， 社会",
    "tags": [
      "事故",
      "赎罪",
      "底层",
      "宽容"
    ],
    "oneLine": "网约车司机意外撞死高中生，当他卖房赔偿时，却发现死者的母亲悄悄把赔偿金塞回了他的包里。",
    "cover": "./102.jpg",
    "url": "./video-0852.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0853",
    "title": "千万别回家",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖, 悬疑",
    "tags": [
      "闹鬼",
      "祖宅",
      "诅咒",
      "民俗"
    ],
    "oneLine": "祖母去世后，老家的老宅就多了一条奇怪的家规：晚上十点后，千万别回家。",
    "cover": "./103.jpg",
    "url": "./video-0853.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0854",
    "title": "情陷特区粤语",
    "region": "香港",
    "type": "剧集",
    "year": "1991",
    "genre": "剧情 / 爱情",
    "tags": [
      "时代变迁",
      "深港两地",
      "商战",
      "虐恋"
    ],
    "oneLine": "90年代深圳河两岸，四个年轻人在改革开放洪流中，为了钱与权背叛了最初的爱情。",
    "cover": "./104.jpg",
    "url": "./video-0854.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0855",
    "title": "徽娘宛心",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 年代 / 女性",
    "tags": [
      "徽商",
      "刺绣",
      "女性自立",
      "民国"
    ],
    "oneLine": "民国徽州，一个被卖作冲喜新娘的哑女宛心，凭借一手鬼神般的绣技，一步步成为徽州第一女商人。",
    "cover": "./105.jpg",
    "url": "./video-0855.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0856",
    "title": "独孤神剑国语",
    "region": "中国香港 / 台湾",
    "type": "剧集",
    "year": "1991",
    "genre": "武侠 / 古装",
    "tags": [
      "经典武侠",
      "复仇",
      "独臂剑客"
    ],
    "oneLine": "为报灭门之仇，他自断右臂练成左手“独孤九剑”，却发现自己要杀的人竟是失散多年的亲兄。",
    "cover": "./106.jpg",
    "url": "./video-0856.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0857",
    "title": "监狱摇滚",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "音乐, 剧情, 喜剧",
    "tags": [
      "囚犯乐队",
      "摇滚精神",
      "救赎",
      "真实改编"
    ],
    "oneLine": "重刑犯们在狱警的默许下组建摇滚乐队，用噪音对抗铁窗，竟意外走红网络。",
    "cover": "./107.jpg",
    "url": "./video-0857.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0858",
    "title": "源代码",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 惊悚",
    "tags": [
      "循环",
      "列车爆炸",
      "意识上传",
      "悬疑"
    ],
    "oneLine": "特种兵醒来发现自己在一列即将爆炸的火车上，只有8分钟，而且他已经死了。",
    "cover": "./108.jpg",
    "url": "./video-0858.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0859",
    "title": "奇妙博物馆",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2026",
    "genre": "奇幻 / 剧情 / 悬疑 / 单元剧",
    "tags": [
      "博物馆",
      "文物成精",
      "单元剧",
      "治愈悬疑"
    ],
    "oneLine": "一家经营不善的私立博物馆，每晚闭馆后藏品就会复活，向值夜保安讲述自己真正的历史。",
    "cover": "./109.jpg",
    "url": "./video-0859.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0860",
    "title": "美人鱼非传说",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻, 冒险",
    "tags": [
      "环保",
      "海洋",
      "拟人",
      "温情"
    ],
    "oneLine": "海洋生物学家捞起一头“美人鱼”，却发现它是一种拥有高超智慧的深海灵长类哺乳动物。",
    "cover": "./110.jpg",
    "url": "./video-0860.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0861",
    "title": "一千零二夜",
    "region": "法国 / 摩洛哥",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻, 动画, 冒险",
    "tags": [
      "阿拉伯",
      "女性",
      "神话",
      "反殖民"
    ],
    "oneLine": "《一千零一夜》之后，聪慧的少女为拯救被欧洲殖民者偷走故事的阿拉伯世界，踏上寻找最后一盏神灯的口述旅程。",
    "cover": "./111.jpg",
    "url": "./video-0861.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0862",
    "title": "卡窿对对碰",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "黑色喜剧 / 犯罪",
    "tags": [
      "高利贷",
      "黑色幽默",
      "多线叙事",
      "荒诞对决"
    ],
    "oneLine": "两个走投无路的倒霉蛋在同一张高利贷借据上签下对方名字，引发一场全民还债狂欢。",
    "cover": "./112.jpg",
    "url": "./video-0862.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0863",
    "title": "煞到你",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情/惊悚",
    "tags": [
      "痴迷",
      "跟踪",
      "反转",
      "心理战"
    ],
    "oneLine": "一个温柔男子对女同事展开追求，但每次被拒后，对方身边就会发生诡异死亡事件。",
    "cover": "./113.jpg",
    "url": "./video-0863.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0864",
    "title": "经营婚姻",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2012",
    "genre": "家庭, 爱情",
    "tags": [
      "婚姻",
      "职场",
      "婆媳",
      "都市",
      "情感"
    ],
    "oneLine": "当强势公婆遇上彪悍丈母娘，一对80后小夫妻的“婚姻有限责任公司”面临破产危机。",
    "cover": "./114.jpg",
    "url": "./video-0864.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0865",
    "title": "死亡夺命针",
    "region": "中国香港",
    "type": "电影",
    "year": "1998",
    "genre": "犯罪",
    "tags": [
      "杀手",
      "针剂",
      "警匪",
      "悬疑",
      "动作"
    ],
    "oneLine": "连续六名富豪死于一根普通缝衣针，法医发现凶器上刻着同一个名字。",
    "cover": "./115.jpg",
    "url": "./video-0865.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0866",
    "title": "缄默嘶喊",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，心理，惊悚",
    "tags": [
      "聋哑",
      "校园霸凌",
      "复仇",
      "反转"
    ],
    "oneLine": "聋哑学校的连续“意外”死亡事件，唯一的幸存者是个不会说话也不会手语的孩子。",
    "cover": "./116.jpg",
    "url": "./video-0866.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0867",
    "title": "小楼的奇幻生活",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻、喜剧、剧情",
    "tags": [
      "公寓",
      "许愿",
      "邻里",
      "单元剧"
    ],
    "oneLine": "一栋老旧公寓里，每家每户的门把手，都连着一个小型许愿机。",
    "cover": "./117.jpg",
    "url": "./video-0867.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0868",
    "title": "人生中转站",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "genre": "奇幻 / 治愈",
    "tags": [
      "生死",
      "车站",
      "遗憾"
    ],
    "oneLine": "一个神秘车站，只有刚死的人才看得见，他们可以买一张票回到人生最遗憾的一天。",
    "cover": "./118.jpg",
    "url": "./video-0868.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0869",
    "title": "异教徒的标志",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑 / 恐怖 / 宗教",
    "tags": [
      "邪教",
      "符号学",
      "小镇谜案",
      "连环失踪",
      "惊悚"
    ],
    "oneLine": "符号学教授发现小镇失踪案背后有一个古老的异教符号，而他自己也被刻上了那个标记。",
    "cover": "./119.jpg",
    "url": "./video-0869.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0870",
    "title": "歌王艳史",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 歌舞, 传记",
    "tags": [
      "歌手",
      "丑闻",
      "黑胶时代",
      "传奇"
    ],
    "oneLine": "50年代爵士歌王表面风光无限，私底下却被白人经纪人控制、被黑帮追杀，恋人是同性。",
    "cover": "./120.jpg",
    "url": "./video-0870.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0871",
    "title": "惹鬼回路3",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 科幻",
    "tags": [
      "都市传说",
      "电子幽灵",
      "信号恐惧",
      "社交网络诅咒",
      "赛博朋克怨灵"
    ],
    "oneLine": "这一次，鬼魂不再通过电磁波入侵电视，而是直接利用你的社交账号，复活成你“关注”的好友模样。",
    "cover": "./121.jpg",
    "url": "./video-0871.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0872",
    "title": "比佛利山庄的死去女人",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑，惊悚，黑色幽默",
    "tags": [
      "豪宅",
      "遗书",
      "阴谋",
      "阶层讽刺",
      "密室"
    ],
    "oneLine": "豪宅女主人死于浴缸，但她的AI数字人却在一小时后向全网直播了遗言。",
    "cover": "./122.jpg",
    "url": "./video-0872.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0873",
    "title": "睡睡你的爱睡睡我的爱",
    "region": "中国台湾",
    "type": "电影",
    "year": "2004",
    "genre": "爱情 / 喜剧",
    "tags": [
      "都市情感",
      "冤家变情侣",
      "轻松治愈"
    ],
    "oneLine": "一对因合租而被迫共处一室的陌生男女，在睡眠中意外进入彼此的梦境，看清了对方的真心。",
    "cover": "./123.jpg",
    "url": "./video-0873.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0874",
    "title": "与你的暖暖时光",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情, 治愈, 青春",
    "tags": [
      "青梅竹马",
      "久别重逢",
      "慢生活",
      "治愈系"
    ],
    "oneLine": "因误会分开的青梅竹马，十年后在小镇重新相遇，用烘焙和木工治愈彼此伤痕。",
    "cover": "./124.jpg",
    "url": "./video-0874.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0875",
    "title": "甜言蜜语粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情， 剧情",
    "tags": [
      "粤语原声",
      "都市情感",
      "暧昧",
      "治愈",
      "成人童话"
    ],
    "oneLine": "一个声线完美的电台DJ，治愈了无数听众，却无法治愈自己的失聪前女友。",
    "cover": "./125.jpg",
    "url": "./video-0875.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0876",
    "title": "奇案夺命箭",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 犯罪 / 动作",
    "tags": [
      "古装探案",
      "密室杀人",
      "武侠推理",
      "神箭手",
      "连环杀手"
    ],
    "oneLine": "四位江湖高手接连在密室中被一支传说中的“夺命箭”射杀，而能射出此箭的只有早已去世的第一神箭手。",
    "cover": "./126.jpg",
    "url": "./video-0876.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0877",
    "title": "京城81号",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 悬疑, 历史",
    "tags": [
      "凶宅",
      "轮回",
      "民国",
      "双时空"
    ],
    "oneLine": "网红探险队直播夜闯京城81号，却意外打开了每二十年一次的“鬼门”倒计时。",
    "cover": "./127.jpg",
    "url": "./video-0877.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0878",
    "title": "创可贴",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 喜剧",
    "tags": [
      "治愈",
      "冤家",
      "医疗"
    ],
    "oneLine": "冷酷的男外科医生与散漫的女急救员，因一次医疗事故成为必须同居的“创可贴”搭档。",
    "cover": "./128.jpg",
    "url": "./video-0878.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0879",
    "title": "灰姑娘外传",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 女性",
    "tags": [
      "反童话",
      "复仇",
      "魔法",
      "阶级"
    ],
    "oneLine": "王子被杀，水晶鞋上全是血，灰姑娘成了头号嫌疑人。",
    "cover": "./129.jpg",
    "url": "./video-0879.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0880",
    "title": "流浪的尤莱克",
    "region": "波兰 / 德国",
    "type": "电影",
    "year": "2015",
    "genre": "剧情, 战争, 历史",
    "tags": [
      "二战",
      "犹太儿童",
      "求生",
      "身份伪装",
      "公路"
    ],
    "oneLine": "8岁的犹太男孩尤莱克从集中营逃出，他在波兰乡村流浪两年，不断改名换姓，只为活下去。",
    "cover": "./130.jpg",
    "url": "./video-0880.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0881",
    "title": "火星",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "科幻 / 悬疑",
    "tags": [
      "殖民",
      "失踪",
      "全息投影",
      "阴谋"
    ],
    "oneLine": "人类第一批火星殖民者在登陆当天全部失踪，只留下他们的全息记忆副本，而副本正在逐个删除自己。",
    "cover": "./131.jpg",
    "url": "./video-0881.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0882",
    "title": "竞相灭绝",
    "region": "英国",
    "type": "纪录片",
    "year": "2024",
    "genre": "纪录 / 自然",
    "tags": [
      "环保",
      "物种灭绝",
      "暗访调查"
    ],
    "oneLine": "一群环保斗士潜入黑暗的野生动物走私帝国，揭露人类活动导致的第六次物种大灭绝。",
    "cover": "./132.jpg",
    "url": "./video-0882.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0883",
    "title": "下众之爱",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "私小说",
      "畸恋",
      "社会底层"
    ],
    "oneLine": "一个过气的文学奖作家，与三个底层女性纠缠，在泥沼般的欲望中寻找所谓的“爱”。",
    "cover": "./133.jpg",
    "url": "./video-0883.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0884",
    "title": "雪茫寻亲",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "灾难、剧情、亲情",
    "tags": [
      "暴风雪",
      "寻子",
      "极寒求生",
      "母爱",
      "真实改编"
    ],
    "oneLine": "五岁儿子在暴风雪中走失，母亲孤身闯入零下四十度的林海雪原，在全网“放弃”的呼声中找到了第97个小时。",
    "cover": "./134.jpg",
    "url": "./video-0884.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0885",
    "title": "恋情的终结",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "1955",
    "genre": "爱情 / 剧情",
    "tags": [
      "婚外情",
      "嫉妒",
      "宗教信仰",
      "悲剧"
    ],
    "oneLine": "二战伦敦，一个作家与公务员妻子偷情，战争结束情妇突然提出分手，他请侦探调查，却发现情妇爱的其实是上帝。",
    "cover": "./135.jpg",
    "url": "./video-0885.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0886",
    "title": "爸爸的萌友圈",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 家庭 / 都市",
    "tags": [
      "微信",
      "父母",
      "代际",
      "社群"
    ],
    "oneLine": "退休老爸误入女儿的朋友圈分组，开始伪装成90后在网上与女儿交流。",
    "cover": "./136.jpg",
    "url": "./video-0886.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0887",
    "title": "七个世界，一个星球",
    "region": "英国",
    "type": "纪录片",
    "year": "2024",
    "genre": "自然 / 生态",
    "tags": [
      "七大洲",
      "濒危动物",
      "极地",
      "雨林"
    ],
    "oneLine": "摄制组耗时五年走遍七大洲，记录下每个大陆最隐秘的动物生存故事。",
    "cover": "./137.jpg",
    "url": "./video-0887.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0888",
    "title": "好东西",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 剧情",
    "tags": [
      "黑色幽默",
      "小人物",
      "欲望",
      "荒诞"
    ],
    "oneLine": "一根金条引发的连环血案，让小镇上所有人都变成了“好东西”的猎物。",
    "cover": "./138.jpg",
    "url": "./video-0888.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0889",
    "title": "插翅难飞2016",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "动作 / 犯罪 / 悬疑",
    "tags": [
      "劫机",
      "空中监狱",
      "FBI谈判",
      "限定空间",
      "反转"
    ],
    "oneLine": "一架从东京飞往洛杉矶的航班上，FBI女谈判专家发现劫机者的真正目标不是飞机，而是藏在机舱里的总统女儿。",
    "cover": "./139.jpg",
    "url": "./video-0889.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0890",
    "title": "仙人跳",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪，喜剧，黑色幽默",
    "tags": [
      "诈骗集团",
      "乌龙绑架",
      "底层互害"
    ],
    "oneLine": "一个失败的仙人跳团伙，绑架了一个欠高利贷的赌徒，结果发现赌徒刚偷了诈骗集团的钱。",
    "cover": "./140.jpg",
    "url": "./video-0890.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0891",
    "title": "亿万第七季",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情, 犯罪",
    "tags": [
      "金融",
      "权力博弈",
      "律政",
      "复仇"
    ],
    "oneLine": "昔日死对头联手对抗新寡头，华尔街的权力游戏进入终极洗牌局。",
    "cover": "./141.jpg",
    "url": "./video-0891.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0892",
    "title": "山顶上的钟声",
    "region": "中国香港/德国",
    "type": "电影",
    "year": "2025",
    "genre": "战争/剧情",
    "tags": [
      "反战",
      "人性光辉",
      "教堂"
    ],
    "oneLine": "二战末期，一所废弃山顶修道院的钟声突然响起，引来了一支逃亡的盟军小队和一群追杀他们的纳粹。",
    "cover": "./142.jpg",
    "url": "./video-0892.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0893",
    "title": "破晓",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑, 犯罪",
    "tags": [
      "法庭戏",
      "正义",
      "冤案",
      "律师"
    ],
    "oneLine": "一个唯利是图的律师，接了一桩必输的死刑案，却意外揭开了尘封20年的真相。",
    "cover": "./143.jpg",
    "url": "./video-0893.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0894",
    "title": "夺命太阳下",
    "region": "法国 / 西班牙",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪，惊悚",
    "tags": [
      "烈日",
      "迷路",
      "人性贪婪"
    ],
    "oneLine": "四个朋友在西班牙南部的烈日下徒步时迷路，干涸的不仅水源，还有彼此的信任。",
    "cover": "./144.jpg",
    "url": "./video-0894.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0895",
    "title": "转世惊情粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2005",
    "genre": "古装 / 奇幻",
    "tags": [
      "前世今生",
      "复仇",
      "虐恋"
    ],
    "oneLine": "将军转世成现代女警，她必须杀死前世的爱人才能破除千年的血咒。",
    "cover": "./145.jpg",
    "url": "./video-0895.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0896",
    "title": "外貌与微笑",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "职场",
      "整容",
      "人性",
      "微笑恐惧",
      "心理惊悚"
    ],
    "oneLine": "平凡职员接受“微笑换脸”手术爆红，却发现镜中笑容正吞噬她的真实人生。",
    "cover": "./146.jpg",
    "url": "./video-0896.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0897",
    "title": "小大人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧， 家庭， 奇幻",
    "tags": [
      "身体缩小",
      "父子关系",
      "童趣"
    ],
    "oneLine": "严苛的父亲一夜之间缩成了巴掌大小，十岁的儿子不得不当起“大人”照顾这个迷你爸爸。",
    "cover": "./147.jpg",
    "url": "./video-0897.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0898",
    "title": "锦衣卫",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 历史 / 悬疑",
    "tags": [
      "武侠",
      "明朝",
      "谍战",
      "兄弟情",
      "反间计"
    ],
    "oneLine": "锦衣卫指挥使被诬陷谋反，他带着十二个兄弟杀出京城，却发现叛徒就在这十二人之中。",
    "cover": "./148.jpg",
    "url": "./video-0898.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0899",
    "title": "山路惊魂",
    "region": "中国台湾",
    "type": "电影",
    "year": "2010",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "山路",
      "灵异",
      "行车记录仪",
      "民间传说"
    ],
    "oneLine": "一段行车记录仪拍下的画面，揭开了台湾一条山路的循环诅咒。",
    "cover": "./149.jpg",
    "url": "./video-0899.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0900",
    "title": "摩纳哥王妃",
    "region": "欧美",
    "type": "电影",
    "year": "2024",
    "genre": "传记 / 剧情",
    "tags": [
      "王室秘辛",
      "女性力量",
      "优雅博弈"
    ],
    "oneLine": "1960年代，好莱坞巨星格蕾丝·凯利在摩纳哥政治危机中，挣扎于回归影坛与守护王冠之间。",
    "cover": "./150.jpg",
    "url": "./video-0900.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0901",
    "title": "调制青少年",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "科幻 / 惊悚 / 悬疑",
    "tags": [
      "阴谋论",
      "洗脑",
      "乌托邦",
      "青春",
      "心理恐惧"
    ],
    "oneLine": "在一个人人性格都被“特调”过的完美小镇，几个少年发现了官方饮用水中让人变麻木的秘密。",
    "cover": "./1.jpg",
    "url": "./video-0901.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0902",
    "title": "现代吐温故事：乞丐王子",
    "region": "美国",
    "type": "电视剧",
    "year": "1991",
    "genre": "喜剧",
    "tags": [
      "互换身份",
      "讽刺",
      "阶级",
      "家庭剧"
    ],
    "oneLine": "华尔街精英与流浪汉因车祸互换记忆，体验了一周对方的人生。",
    "cover": "./2.jpg",
    "url": "./video-0902.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0903",
    "title": "开启玉盒时",
    "region": "中国大陆",
    "type": "电影",
    "year": "2030",
    "genre": "悬疑, 惊悚, 奇幻",
    "tags": [
      "考古",
      "诅咒",
      "循环",
      "密室",
      "心理惊悚"
    ],
    "oneLine": "考古队员打开千年玉盒，盒中只是一面铜镜，但当晚全队开始不断在镜中看到自己死去的样子。",
    "cover": "./3.jpg",
    "url": "./video-0903.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0904",
    "title": "我十岁，离过婚",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 社会",
    "tags": [
      "童婚",
      "女性觉醒",
      "真实事件改编",
      "乡村"
    ],
    "oneLine": "一个十岁女孩在被卖给四十岁男人做妻子后，偷偷跑到法庭，自己填了离婚申请。",
    "cover": "./4.jpg",
    "url": "./video-0904.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0905",
    "title": "妈妈，你在哪里",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 家庭",
    "tags": [
      "寻亲",
      "催泪",
      "现实题材"
    ],
    "oneLine": "一场突如其来的地震后，六岁女孩在废墟中醒来，发现自己成了孤儿，只记得妈妈最后的方向。",
    "cover": "./5.jpg",
    "url": "./video-0905.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0906",
    "title": "山东老娘",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、家庭",
    "tags": [
      "母爱",
      "寻亲",
      "年代",
      "女性力量"
    ],
    "oneLine": "1997 年，一位目不识丁的山东农村母亲独自踏上火车，跨越三千公里去寻找被拐卖的聋哑儿子。",
    "cover": "./6.jpg",
    "url": "./video-0906.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0907",
    "title": "游击的风景",
    "region": "南斯拉夫",
    "type": "电影",
    "year": "1979",
    "genre": "战争, 艺术",
    "tags": [
      "游击队",
      "风光摄影",
      "黑白",
      "诗电影"
    ],
    "oneLine": "一个游击队员兼风光摄影师，在枪林弹雨中坚持拍摄祖国最美的山河，胶卷比子弹更珍贵。",
    "cover": "./7.jpg",
    "url": "./video-0907.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "0908",
    "title": "大话西游之大圣娶亲粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "爱情，喜剧，奇幻",
    "tags": [
      "周星驰式无厘头",
      "粤语原声",
      "宿命悲剧",
      "时空轮回"
    ],
    "oneLine": "至尊宝为救白晶晶穿越回五百年前，却不得不戴上金箍，在万众瞩目的时刻吻别一生所爱。",
    "cover": "./8.jpg",
    "url": "./video-0908.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0909",
    "title": "北京女子图鉴之整容大师",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2025",
    "genre": "都市, 剧情",
    "tags": [
      "女性成长",
      "容貌焦虑",
      "职场"
    ],
    "oneLine": "北京最贵的整容医生，在修复一张张面孔时，发现自己手术刀下救不了的是自己的婚姻。",
    "cover": "./9.jpg",
    "url": "./video-0909.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0910",
    "title": "最终幻想女孩",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，奇幻，青春",
    "tags": [
      "穿越",
      "游戏玩家",
      "逆向追爱"
    ],
    "oneLine": "沉迷《最终幻想》的宅女意外发现，现实中暗恋的学长，竟是她在游戏里亲手杀死的最终BOSS。",
    "cover": "./10.jpg",
    "url": "./video-0910.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0911",
    "title": "梦比优斯奥特曼&奥特兄弟",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "特摄, 动作, 科幻",
    "tags": [
      "奥特曼",
      "昭和怀旧",
      "前辈客串",
      "情怀",
      "怪兽"
    ],
    "oneLine": "梦比优斯被封印在20世纪70年代的胶片中，奥特兄弟必须进入一部老电影里营救他。",
    "cover": "./11.jpg",
    "url": "./video-0911.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0912",
    "title": "我的野兽",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖，剧情",
    "tags": [
      "心理",
      "怪物",
      "创伤"
    ],
    "oneLine": "母亲声称她能看到女儿体内的“野兽”，于是每天给女儿喂食一种黑色的药丸来抑制它。",
    "cover": "./12.jpg",
    "url": "./video-0912.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0913",
    "title": "龙虎双侠",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作，喜剧，警匪",
    "tags": [
      "双雄",
      "卧底",
      "扮装",
      "兄弟情"
    ],
    "oneLine": "飞虎队王牌和古惑仔卧底被迫扮成一对gay couple潜入黑帮，却假戏真做了。",
    "cover": "./13.jpg",
    "url": "./video-0913.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0914",
    "title": "不择手段",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 动作 / 惊悚",
    "tags": [
      "黑吃黑",
      "律师腐败",
      "复仇爽片",
      "拳拳到肉",
      "反转再反转"
    ],
    "oneLine": "一个被吊销执照的黑心律师，为了救出被绑架的女儿，主动进入全亚洲最暴力的私人监狱。",
    "cover": "./14.jpg",
    "url": "./video-0914.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0915",
    "title": "26种新死法",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖, 惊悚, 奇幻",
    "tags": [
      "短片集",
      "创意死亡",
      "血腥",
      "寓言"
    ],
    "oneLine": "26位导演，用A到Z二十六个字母，分别诠释一种闻所未闻的离奇死亡仪式。",
    "cover": "./15.jpg",
    "url": "./video-0915.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0916",
    "title": "深海大鱼",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "灾难 / 惊悚",
    "tags": [
      "深海",
      "巨兽",
      "潜艇",
      "逃生"
    ],
    "oneLine": "一艘深海科考潜艇被巨型未知生物袭击，船员必须在氧气耗尽前逃出深渊。",
    "cover": "./16.jpg",
    "url": "./video-0916.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0917",
    "title": "少林传人",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 古装, 剧情",
    "tags": [
      "少林寺",
      "真功夫",
      "师徒情",
      "家国仇恨"
    ],
    "oneLine": "清末，少林寺遭劫，老方丈将武学真经传给了一个目不识丁的火工头陀，他必须保护经书不被洋人和清廷夺走。",
    "cover": "./17.jpg",
    "url": "./video-0917.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0918",
    "title": "幸福马上来",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 剧情",
    "tags": [
      "小人物",
      "黑色幽默",
      "城市变迁"
    ],
    "oneLine": "一个靠“假装幸福”为职业的演员，在接到一单扮演“完美父亲”的任务后，卷入了一场地产骗局和家庭闹剧。",
    "cover": "./18.jpg",
    "url": "./video-0918.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0919",
    "title": "俏佳人",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "喜剧 / 爱情 / 年代",
    "tags": [
      "复古",
      "女性成长",
      "脱口秀",
      "60年代"
    ],
    "oneLine": "1963年，一个家庭主妇偷偷报名了电视台主持人选拔，从此开始双重人生。",
    "cover": "./19.jpg",
    "url": "./video-0919.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0920",
    "title": "西格弗里德",
    "region": "德国",
    "type": "电影",
    "year": "2005",
    "genre": "奇幻， 剧情",
    "tags": [
      "日耳曼史诗",
      "屠龙者",
      "英雄悲剧"
    ],
    "oneLine": "屠龙英雄西格弗里德沐浴龙血后变得刀枪不入，却被一片树叶遮住的肩胛骨，成了他英雄史诗中唯一的死穴。",
    "cover": "./20.jpg",
    "url": "./video-0920.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0921",
    "title": "普通的法西斯",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "战争 / 反思",
    "tags": [
      "纪录片风格",
      "日常恶",
      "档案影像",
      "汉娜·阿伦特"
    ],
    "oneLine": "档案镜头里，一个纳粹军官下班后亲吻女儿，第二天早上命令枪杀三十个平民。",
    "cover": "./21.jpg",
    "url": "./video-0921.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0922",
    "title": "室内足球少年!!!!!",
    "region": "日本",
    "type": "动画剧集",
    "year": "2021",
    "genre": "运动 / 竞技",
    "tags": [
      "足球",
      "美男",
      "社团",
      "青春"
    ],
    "oneLine": "五位被室外足球抛弃的“美少年”，在地下五人制足球场里，踢出了改写世界的方程式。",
    "cover": "./22.jpg",
    "url": "./video-0922.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0923",
    "title": "秘密荣誉",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 惊悚",
    "tags": [
      "政治",
      "心理战",
      "越战",
      "虚伪"
    ],
    "oneLine": "一位功勋卓著的越战老兵在竞选参议员时，被一个神秘的匿名者步步紧逼，对方声称要揭露他“荣誉勋章”背后的肮脏秘密。",
    "cover": "./23.jpg",
    "url": "./video-0923.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0924",
    "title": "童女贞德",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "历史，剧情，奇幻",
    "tags": [
      "圣女",
      "战争",
      "神谕",
      "少女",
      "信仰"
    ],
    "oneLine": "农家少女贞德在神谕中看见火焰与利剑，却没人相信那来自一个六岁女孩的幻想。",
    "cover": "./24.jpg",
    "url": "./video-0924.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0925",
    "title": "还我本色",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "失忆",
      "身份认同",
      "兄弟情"
    ],
    "oneLine": "一名黑帮金牌打手失忆后，警方告诉他其实是卧底，但他渐渐发现一切都不是真的。",
    "cover": "./25.jpg",
    "url": "./video-0925.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0926",
    "title": "风流男人2",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 爱情",
    "tags": [
      "渣男",
      "反转",
      "群像",
      "现实"
    ],
    "oneLine": "第一季的“最强海王”决定从良，却发现他过去玩弄过的女人们组成了一个“复仇联盟”，专治各种渣男。",
    "cover": "./26.jpg",
    "url": "./video-0926.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0927",
    "title": "我们的父亲2020",
    "region": "意大利 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 历史 / 战争",
    "tags": [
      "二战",
      "父与子",
      "战俘",
      "救赎",
      "意大利新现实主义"
    ],
    "oneLine": "2020年大疫封锁下，儿子为隔离的父亲整理旧物，意外揭开父亲在二战中另一重身份的秘密。",
    "cover": "./27.jpg",
    "url": "./video-0927.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0928",
    "title": "美国春光",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "剧情/同性",
    "tags": [
      "公路",
      "知青",
      "移民"
    ],
    "oneLine": "八十年代赴美留学的中国画家，在旧金山与一位美国退伍兵开启了一段改变彼此的公路之旅。",
    "cover": "./28.jpg",
    "url": "./video-0928.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0929",
    "title": "歃血兄弟",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 犯罪 / 兄弟情",
    "tags": [
      "角头",
      "义气",
      "背叛"
    ],
    "oneLine": "结拜三十年、如今分属黑白两道的两个男人，因一具被扔在淡水河边的尸体，再次歃血为盟。",
    "cover": "./29.jpg",
    "url": "./video-0929.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0930",
    "title": "富贵列车",
    "region": "中国香港",
    "type": "电影",
    "year": "1986",
    "genre": "喜剧，动作",
    "tags": [
      "民国",
      "火车",
      "群星贺岁",
      "功夫",
      "宝藏"
    ],
    "oneLine": "民国初年，一列满载权贵与宝藏的豪华列车被山贼劫持，两个死对头保安不得不联手救场。",
    "cover": "./30.jpg",
    "url": "./video-0930.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0931",
    "title": "大鹰啸",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 战争, 冒险",
    "tags": [
      "空军",
      "王牌飞行员",
      "夺宝",
      "二战"
    ],
    "oneLine": "二战末期，一名桀骜不驯的美军王牌飞行员接到绝密任务：驾驶缴获的德军战机，潜入阿尔卑斯山盗走纳粹的黄金列车。",
    "cover": "./31.jpg",
    "url": "./video-0931.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0932",
    "title": "掘金之旅",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2022",
    "genre": "惊悚 / 冒险 / 心理",
    "tags": [
      "荒野求生",
      "贪欲",
      "二人对手戏",
      "心理博弈"
    ],
    "oneLine": "两个淘金客在西澳荒漠挖到一块巨型金块，但徒步带回文明世界的400公里，成了彼此的狩猎场。",
    "cover": "./32.jpg",
    "url": "./video-0932.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0933",
    "title": "北壁",
    "region": "德国",
    "type": "电影",
    "year": "2008",
    "genre": "剧情，冒险，传记",
    "tags": [
      "登山",
      "真实改编",
      "悲剧",
      "求生"
    ],
    "oneLine": "1936年，两名德国年轻人挑战阿尔卑斯山最险峻的艾格峰北壁，一场与死神赛跑的攀登开始了。",
    "cover": "./33.jpg",
    "url": "./video-0933.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0934",
    "title": "萨乐美",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖",
    "tags": [
      "心理惊悚",
      "舞蹈",
      "邪教",
      "女性"
    ],
    "oneLine": "一个过气的芭蕾舞者加入了一个神秘舞团，却发现艺术总监想用一支名为《萨乐美》的死亡之舞作为献祭仪式。",
    "cover": "./34.jpg",
    "url": "./video-0934.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0935",
    "title": "偷抢拐盗",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 动作 / 喜剧",
    "tags": [
      "多线叙事",
      "笨贼",
      "误打误撞",
      "港味"
    ],
    "oneLine": "四波笨贼同时盯上了一家古玩店，结果互相牵制、互相出卖，最后谁也没得手，还顺便帮店主破了案。",
    "cover": "./35.jpg",
    "url": "./video-0935.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0936",
    "title": "玩命手机",
    "region": "美国",
    "type": "电影",
    "year": "2004",
    "genre": "动作、惊悚、犯罪",
    "tags": [
      "限时",
      "绑架",
      "手机",
      "飙车",
      "营救"
    ],
    "oneLine": "普通男人接到陌生女子求救电话，必须在一小时内横跨全城营救她。",
    "cover": "./36.jpg",
    "url": "./video-0936.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0937",
    "title": "漂亮男孩直播中",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚、犯罪、悬疑",
    "tags": [
      "直播",
      "网红",
      "杀人预告",
      "社交媒体",
      "密室"
    ],
    "oneLine": "一名拥有百万粉丝的男主播在直播中收到一个私信：“你现在的卧室里藏着一个死人，观众已看到，只有你没看到。”",
    "cover": "./37.jpg",
    "url": "./video-0937.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0938",
    "title": "蓝色维也纳",
    "region": "法国 / 奥地利",
    "type": "电影",
    "year": "2014",
    "genre": "文艺 / 爱情 / 音乐",
    "tags": [
      "多瑙河",
      "钢琴家",
      "失忆",
      "浪漫邂逅",
      "忧郁"
    ],
    "oneLine": "一位失忆的钢琴家流落维也纳街头，每晚都在演奏同一首未完成的《蓝色维也纳》夜曲。",
    "cover": "./38.jpg",
    "url": "./video-0938.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0939",
    "title": "紫禁秘录",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2024",
    "genre": "古装 / 悬疑 / 奇幻",
    "tags": [
      "宫斗",
      "超自然",
      "探案",
      "大女主"
    ],
    "oneLine": "故宫文物修复师意外穿回清朝，成了冷宫宫女，却发现紫禁城每晚都在闹“鬼”，且这鬼只杀贪官。",
    "cover": "./39.jpg",
    "url": "./video-0939.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0940",
    "title": "惊魂记1989",
    "region": "美国",
    "type": "电影",
    "year": "1989",
    "genre": "恐怖 / 惊悚 / 悬疑",
    "tags": [
      "邪典",
      "录像带美学",
      "连环杀手",
      "翻拍变种"
    ],
    "oneLine": "一个痴迷希区柯克《惊魂记》的青年，试图完美复制诺曼·贝茨的罪行，却发现自己杀死的每个人都是该死的罪人。",
    "cover": "./40.jpg",
    "url": "./video-0940.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0941",
    "title": "鹏程万里锦山河",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 剧情",
    "tags": [
      "大女主",
      "商战",
      "家族",
      "年代跨越"
    ],
    "oneLine": "清末民初，一个被休的绸缎庄小姐从零起步，用二十年织就了一张横跨亚欧的丝绸帝国。",
    "cover": "./41.jpg",
    "url": "./video-0941.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0942",
    "title": "查泰莱夫人的情人2015",
    "region": "英国",
    "type": "电影",
    "year": "2015",
    "genre": "剧情 / 爱情",
    "tags": [
      "禁忌之恋",
      "阶层跨越",
      "庄园",
      "情欲"
    ],
    "oneLine": "贵族夫人爱上庄园守林人，在阶级森严的英国社会掀起一场情感地震。",
    "cover": "./42.jpg",
    "url": "./video-0942.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0943",
    "title": "我的演技派男友",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情、喜剧",
    "tags": [
      "娱乐圈",
      "假戏真做",
      "戏中戏",
      "反差萌"
    ],
    "oneLine": "影帝为体验生活，假装普通人追求素人编剧，却发现自己的演技在这段感情里完全不够用。",
    "cover": "./43.jpg",
    "url": "./video-0943.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0944",
    "title": "浴血荣光",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "历史 / 战争 / 主旋律",
    "tags": [
      "革命历史",
      "人物群像",
      "建军伟业",
      "热血燃"
    ],
    "oneLine": "从南昌起义到古田会议，一群理想主义者用热血浇灌出了人民军队的雏形与信仰。",
    "cover": "./44.jpg",
    "url": "./video-0944.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0945",
    "title": "佩姬苏要出嫁",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情",
    "tags": [
      "婚前恐惧",
      "闺蜜团",
      "疯狂冒险"
    ],
    "oneLine": "婚礼前夜，准新娘佩姬苏被闺蜜团灌醉，醒来时发现自己躺在拉斯维加斯，身边多了一个脱衣舞男和一头老虎。",
    "cover": "./45.jpg",
    "url": "./video-0945.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0946",
    "title": "家有蛇仙美貌妻",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2025",
    "genre": "奇幻 / 喜剧 / 爱情",
    "tags": [
      "白蛇传改编",
      "仙妖",
      "先婚后爱",
      "爆笑",
      "甜剧"
    ],
    "oneLine": "穷书生娶了个蛇仙老婆，却天天被她追着问：你为什么不怕我？",
    "cover": "./46.jpg",
    "url": "./video-0946.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0947",
    "title": "超酷",
    "region": "日本",
    "type": "电影",
    "year": "2018",
    "genre": "喜剧， 青春， 音乐",
    "tags": [
      "乐队",
      "废柴",
      "逆袭",
      "朋克"
    ],
    "oneLine": "三个被全校视为怪胎的高中生组建“超酷乐队”，目标不是出道，而是让校规最严的训导主任亲口说出一句“超酷”。",
    "cover": "./47.jpg",
    "url": "./video-0947.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0948",
    "title": "碧亨传：鬼怪的主人",
    "region": "泰国",
    "type": "电视剧",
    "year": "2026",
    "genre": "恐怖 / 奇幻 / 同性 / 爱情",
    "tags": [
      "泰式恐怖",
      "鬼王",
      "驱魔",
      "虐恋"
    ],
    "oneLine": "他生来就能看见鬼，所有鬼都怕他，因为他是地府选定的“鬼差”，直到他爱上了一个即将被拉入地狱的活人。",
    "cover": "./48.jpg",
    "url": "./video-0948.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0949",
    "title": "黄昏恋",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "银发爱情",
      "家庭冲突",
      "治愈温暖"
    ],
    "oneLine": "65岁的园艺教授和58岁的广场舞领队，在儿女的阻挠下，展开了一场浪漫的地下恋情。",
    "cover": "./49.jpg",
    "url": "./video-0949.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0950",
    "title": "鲸鱼之友",
    "region": "美国/加拿大",
    "type": "电影",
    "year": "2024",
    "genre": "冒险, 家庭",
    "tags": [
      "海洋",
      "环保",
      "感人"
    ],
    "oneLine": "一个自闭症女孩与一头被渔网困住的座头鲸建立了心灵感应，她必须说服整个渔村去救这头“朋友”。",
    "cover": "./50.jpg",
    "url": "./video-0950.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0951",
    "title": "乱世孤儿",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 历史",
    "tags": [
      "抗战",
      "成长",
      "生存",
      "人性"
    ],
    "oneLine": "1937年南京城破，三个孤儿在废墟中挣扎求生，却意外救下了一名负伤的国军情报员。",
    "cover": "./51.jpg",
    "url": "./video-0951.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0952",
    "title": "一课一练",
    "region": "中国大陆",
    "type": "剧集 / 动画",
    "year": "2025",
    "genre": "校园 / 悬疑 / 奇幻",
    "tags": [
      "考试",
      "平行世界",
      "规则怪谈",
      "青春",
      "烧脑"
    ],
    "oneLine": "期末考试最后一题是“你是否相信这个世界是真实的”，全班答“是”的人，第二天全部消失了。",
    "cover": "./52.jpg",
    "url": "./video-0952.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0953",
    "title": "怪异少女神隐",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑，奇幻",
    "tags": [
      "民俗",
      "怪谈",
      "小镇秘密",
      "少女失踪",
      "祭祀"
    ],
    "oneLine": "每年夏天的“神隐祭”，都有一名红裙少女消失。今年轮到了她，但她主动走进了黑暗。",
    "cover": "./53.jpg",
    "url": "./video-0953.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0954",
    "title": "全民公敌",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "监控社会",
      "隐私权",
      "孤胆英雄",
      "高科技追杀",
      "反转"
    ],
    "oneLine": "一个普通程序员被国家AI监控系统误判为“未来恐怖分子”，为了活命，他必须黑掉那个他亲手写的底层代码。",
    "cover": "./54.jpg",
    "url": "./video-0954.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0955",
    "title": "夜色",
    "region": "法国",
    "type": "电影",
    "year": "2022",
    "genre": "爱情, 剧情",
    "tags": [
      "巴黎",
      "一夜情",
      "邂逅",
      "敏感"
    ],
    "oneLine": "两个在巴黎夜店相遇的陌生人，决定在黎明前共享一夜真实而非激情的散步。",
    "cover": "./55.jpg",
    "url": "./video-0955.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0956",
    "title": "疯狂特务女杀手",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作，谍战，女性",
    "tags": [
      "女杀手",
      "失忆",
      "家庭主妇",
      "反差萌"
    ],
    "oneLine": "顶级女杀手失忆后变成窝囊全职太太，直到仇家上门，她才发现菜刀比手术刀更顺手。",
    "cover": "./56.jpg",
    "url": "./video-0956.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0957",
    "title": "校园时空惊魂记",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻 / 恐怖 / 悬疑",
    "tags": [
      "时间循环",
      "校园",
      "密室逃脱",
      "烧脑"
    ],
    "oneLine": "七个学生在废弃学校醒来，发现每十分钟就会有一人“消失”，只有破解学校的旧案才能中断循环。",
    "cover": "./57.jpg",
    "url": "./video-0957.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0958",
    "title": "翠湖艳尸案",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "恐怖 / 犯罪 / 悬疑",
    "tags": [
      "刑侦",
      "闹鬼",
      "冤案",
      "绿湖传说",
      "邪典"
    ],
    "oneLine": "翠湖惊现穿红色旗袍的无名女尸，警探调查发现，十年前同一地点竟捞起过一模一样的尸体。",
    "cover": "./58.jpg",
    "url": "./video-0958.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0959",
    "title": "英国小说家们的自述",
    "region": "英国",
    "type": "剧集",
    "year": "2010",
    "genre": "剧情 / 传记 / 文学",
    "tags": [
      "文人轶事",
      "虚构与现实",
      "英伦风"
    ],
    "oneLine": "三位当代英国小说巨匠被神秘组织绑架，他们必须在72小时内各自讲述一个足以“改变世界”的故事。",
    "cover": "./59.jpg",
    "url": "./video-0959.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0960",
    "title": "三只小猪",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动画, 奇幻, 犯罪",
    "tags": [
      "改编",
      "黑色童话",
      "大灰狼",
      "复仇"
    ],
    "oneLine": "当“三只小猪”成了地产大亨，“大灰狼”成了一无所有的拆迁户，他要吹倒的不再是房子，而是整个帝国。",
    "cover": "./60.jpg",
    "url": "./video-0960.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "0961",
    "title": "非法移民（电影）",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，惊悚",
    "tags": [
      "边境",
      "偷渡",
      "生存",
      "人性"
    ],
    "oneLine": "为了寻找失踪的女儿，一位墨西哥母亲选择非法穿越边境，却成了人蛇集团追杀的目标。",
    "cover": "./61.jpg",
    "url": "./video-0961.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0962",
    "title": "爱在初心",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "爱情、文艺、家庭",
    "tags": [
      "老年恋爱",
      "阿尔茨海默症",
      "初恋重逢",
      "日系治愈"
    ],
    "oneLine": "患阿尔茨海默症的老太太每天忘记丈夫是谁，却永远记得六十年前那个夏天初恋的侧脸。",
    "cover": "./62.jpg",
    "url": "./video-0962.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0963",
    "title": "美国的转型",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "政治, 科幻",
    "tags": [
      "平行世界",
      "民主危机",
      "制度反思",
      "高概念"
    ],
    "oneLine": "一架载着已故美国总统的飞机穿越到了2026年，他发现自己必须在一个完全陌生的、分裂的美国重新学习“统治”。",
    "cover": "./63.jpg",
    "url": "./video-0963.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0964",
    "title": "小森林 冬春篇",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "genre": "剧情, 美食, 治愈",
    "tags": [
      "田园",
      "料理",
      "孤独",
      "季节",
      "自给自足"
    ],
    "oneLine": "逃避都市的女孩在小森的第二个冬天，用一锅冻萝卜炖肉，煮化了母亲缺席十年的心结。",
    "cover": "./64.jpg",
    "url": "./video-0964.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0965",
    "title": "水俣病",
    "region": "日本",
    "type": "电影",
    "year": "2020",
    "genre": "剧情 / 社会 / 历史",
    "tags": [
      "真实事件改编",
      "公害病",
      "纪实摄影",
      "企业与政府共谋",
      "维权斗争"
    ],
    "oneLine": "1971年，战地摄影师尤金·史密斯带着相机闯入水俣病禁区，用一张照片改变了世界。",
    "cover": "./65.jpg",
    "url": "./video-0965.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0966",
    "title": "没人瞭波斯猫",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 喜剧",
    "tags": [
      "猫",
      "公寓楼",
      "全员嫌疑人",
      "暴风雪山庄",
      "英式幽默"
    ],
    "oneLine": "一栋高级公寓里，一只名贵的波斯猫被杀了，而楼里的每一个人都声称“没看到”也“没猫”。",
    "cover": "./66.jpg",
    "url": "./video-0966.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0967",
    "title": "红色娘子军2005",
    "region": "中国大陆",
    "type": "电影",
    "year": "2005",
    "genre": "剧情, 战争, 历史",
    "tags": [
      "女性",
      "革命",
      "复仇",
      "改编",
      "枪战"
    ],
    "oneLine": "2005年，一支女子革命特遣队在热带雨林执行秘密斩首任务，却发现敌人竟是曾经的战友。",
    "cover": "./67.jpg",
    "url": "./video-0967.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0968",
    "title": "系紧你的安全带",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "灾难 / 喜剧",
    "tags": [
      "飞机",
      "乌龙",
      "逃生"
    ],
    "oneLine": "一架飞往夏威夷的航班上，乘客们突然发现，这架飞机的机长和副机长都是第一次开真飞机的模拟飞行游戏宅男。",
    "cover": "./68.jpg",
    "url": "./video-0968.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0969",
    "title": "巨齿鲨",
    "region": "美国 / 中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "鲨鱼",
      "深海",
      "怪兽",
      "杰森·斯坦森",
      "李冰冰"
    ],
    "oneLine": "深海科研项目意外打开了温跃层，释放了史前巨齿鲨，一场跨国的海上生死追击就此展开。",
    "cover": "./69.jpg",
    "url": "./video-0969.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0970",
    "title": "黄金交易",
    "region": "美国, 英国",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪, 惊悚, 商战",
    "tags": [
      "金融黑幕",
      "伦敦金属交易所",
      "现货黄金",
      "卧底调查",
      "高智商反派"
    ],
    "oneLine": "一名落魄的金融分析师被卧底警察招募，假扮黄金交易员潜入伦敦地下现货市场，却发现操纵金价的黑手来自警察高层。",
    "cover": "./70.jpg",
    "url": "./video-0970.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "0971",
    "title": "钱进球场第二季",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "职场、体育、剧情",
    "tags": [
      "棒球",
      "合同年薪",
      "社畜",
      "数据分析",
      "中年危机"
    ],
    "oneLine": "三十岁的替补野手为养老金发愁，却发现菜鸟队友的签约金是自己一辈子薪水。",
    "cover": "./71.jpg",
    "url": "./video-0971.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "0972",
    "title": "星际牛仔：天国之门",
    "region": "日本",
    "type": "电影",
    "year": "2001",
    "genre": "科幻, 动作, 犯罪",
    "tags": [
      "太空",
      "赏金猎人",
      "爵士乐",
      "宿命"
    ],
    "oneLine": "一次生化恐怖袭击后，斯派克发现幕后黑手竟是早已死去的战友。",
    "cover": "./72.jpg",
    "url": "./video-0972.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0973",
    "title": "黑鸟",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪, 惊悚",
    "tags": [
      "连环杀手",
      "鸟类隐喻",
      "巴黎",
      "刑警",
      "双人格"
    ],
    "oneLine": "每一起谋杀现场都有一只死去的黑鸟，而刑警自己画中的黑鸟总是提前出现。",
    "cover": "./73.jpg",
    "url": "./video-0973.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0974",
    "title": "凶手还未睡",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑惊悚",
    "tags": [
      "密室",
      "人格分裂",
      "失眠症",
      "电梯",
      "录音笔"
    ],
    "oneLine": "一个患有严重失眠症的私家侦探，在封闭的电梯里醒来，身边是一具尸体，而他的录音笔里录下了自己的笑声。",
    "cover": "./74.jpg",
    "url": "./video-0974.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0975",
    "title": "恋夏38℃",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2012",
    "genre": "爱情 / 青春",
    "tags": [
      "夏日恋情",
      "遗憾美学",
      "海边"
    ],
    "oneLine": "暑期打工的穷学生爱上富家千金，却因一场误会错过彼此，一别便是十年。",
    "cover": "./75.jpg",
    "url": "./video-0975.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0976",
    "title": "凝视者",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 奇幻",
    "tags": [
      "哲学寓言",
      "隐形人",
      "存在主义",
      "欧陆文艺"
    ],
    "oneLine": "一个天生无法被任何人看见的男人，成了一名顶级窃贼，直到有一天他被一个盲人“看见”了。",
    "cover": "./76.jpg",
    "url": "./video-0976.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0977",
    "title": "综艺新时代",
    "region": "中国台湾",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀，喜剧，游戏",
    "tags": [
      "户外",
      "整蛊",
      "明星",
      "怀旧",
      "创新"
    ],
    "oneLine": "老牌综艺团队重组，用无剧本的真实整蛊，重新定义户外游戏节目的天花板。",
    "cover": "./77.jpg",
    "url": "./video-0977.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0978",
    "title": "迷离杀",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑 / 惊悚 / 犯罪",
    "tags": [
      "记忆删除",
      "连环杀手",
      "罗生门",
      "精神分析"
    ],
    "oneLine": "一个女人醒来发现身边有一具尸体，但她有“短期记忆丧失症”，为了找到真凶，她必须相信昨晚的自己录下的三段互相矛盾的视频。",
    "cover": "./78.jpg",
    "url": "./video-0978.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0979",
    "title": "圣诞夜怪谭",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "圣诞",
      "密室",
      "复仇",
      "反转"
    ],
    "oneLine": "六位老同学圣诞夜被困豪宅，每个人都被揭穿一段不可告人的圣诞秘密。",
    "cover": "./79.jpg",
    "url": "./video-0979.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0980",
    "title": "色欲奇招",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 情色",
    "tags": [
      "情色",
      "职场",
      "阴谋",
      "港式喜剧"
    ],
    "oneLine": "女秘书为帮闺蜜测试渣男老板，设下重重美人计，没想到老板的回应招招都是奇招。",
    "cover": "./80.jpg",
    "url": "./video-0980.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0981",
    "title": "繁星四月",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情，悬疑，都市",
    "tags": [
      "互换身份",
      "娱乐圈",
      "失忆",
      "替身情人"
    ],
    "oneLine": "十八线小演员意外成了当红女星的替身，当她终于熬出头拿影后时，正主突然回归，并要求她演好“四月”这个角色，否则就让她身败名裂。",
    "cover": "./81.jpg",
    "url": "./video-0981.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0982",
    "title": "安那托利亚故事",
    "region": "土耳其",
    "type": "电影",
    "year": "2014",
    "genre": "剧情",
    "tags": [
      "乡村",
      "悬疑",
      "人性",
      "慢节奏",
      "群像"
    ],
    "oneLine": "一具无名尸骨将安那托利亚的村长、警长和神父卷入一场关于罪恶与救赎的漫长黑夜。",
    "cover": "./82.jpg",
    "url": "./video-0982.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0983",
    "title": "鉴识英雄",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 刑侦",
    "tags": [
      "硬核鉴证",
      "单元破案",
      "社会派推理"
    ],
    "oneLine": "一个被警界开除的天才鉴识员，在菜市场经营猪肉铺，用验尸手法帮街坊断案。",
    "cover": "./83.jpg",
    "url": "./video-0983.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0984",
    "title": "五行秘术",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻， 悬疑",
    "tags": [
      "风水",
      "盗墓",
      "道家"
    ],
    "oneLine": "五个盗墓贼按金木水火土命格被选中，进入一座会因时辰变换生死通道的活墓。",
    "cover": "./84.jpg",
    "url": "./video-0984.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "0985",
    "title": "欢乐歌舞",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "歌舞喜剧",
    "tags": [
      "宝莱坞",
      "婚礼",
      "误会",
      "群舞",
      "家庭"
    ],
    "oneLine": "一场婚礼上，三对情侣因为一首唱错的歌，引发了一系列啼笑皆非的连锁反应。",
    "cover": "./85.jpg",
    "url": "./video-0985.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0986",
    "title": "天地男儿国语",
    "region": "中国香港",
    "type": "剧集",
    "year": "1996",
    "genre": "剧情 / 犯罪",
    "tags": [
      "TVB经典",
      "警匪",
      "家族恩怨",
      "兄弟反目",
      "大时代"
    ],
    "oneLine": "两个从小长大的好兄弟，一个成了警察，一个成了悍匪，他们的父亲是同一场大火里死去的兄弟。",
    "cover": "./86.jpg",
    "url": "./video-0986.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0987",
    "title": "佛莱迪墨裘瑞慈善义演",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "音乐 / 传记",
    "tags": [
      "摇滚传奇",
      "公益现场",
      "伪纪录片"
    ],
    "oneLine": "这是一部由AI修复生成的伪纪录片，讲述了如果佛莱迪·墨裘瑞没有死于艾滋病，他在1995年举办那场伟大慈善演唱会的幕后故事。",
    "cover": "./87.jpg",
    "url": "./video-0987.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0988",
    "title": "汉江之恋2025",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情剧情",
    "tags": [
      "末世浪漫",
      "环境污染",
      "生存救援",
      "治愈"
    ],
    "oneLine": "在环境崩溃的2025年，一名生态调查员与神秘流浪汉在汉江孤舟上展开末日求生与相恋。",
    "cover": "./88.jpg",
    "url": "./video-0988.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0989",
    "title": "银河系大排档",
    "region": "中国大陆",
    "type": "动画 / 剧集",
    "year": "2023",
    "genre": "科幻 / 美食 / 日常",
    "tags": [
      "宇宙食堂",
      "社畜外星人",
      "治愈向"
    ],
    "oneLine": "一个被裁员的地球厨师在宇宙空间站开大排档，客人全是奇葩外星打工人。",
    "cover": "./89.jpg",
    "url": "./video-0989.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "0990",
    "title": "艺妓春情",
    "region": "日本",
    "type": "电影",
    "year": "1972",
    "genre": "剧情 / 情色",
    "tags": [
      "日活粉红",
      "艺妓文化",
      "悲恋",
      "女性悲剧"
    ],
    "oneLine": "二战后的京都花街，一名年轻艺妓为了资助青梅竹马的恋人出国留学，甘愿沉沦于最不堪的欲望交易中。",
    "cover": "./90.jpg",
    "url": "./video-0990.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0991",
    "title": "魔鬼之血",
    "region": "西班牙",
    "type": "电影",
    "year": "1973",
    "genre": "恐怖, 奇幻",
    "tags": [
      "邪典",
      "吸血鬼",
      "情色",
      "超现实",
      "卡洛斯·绍拉"
    ],
    "oneLine": "一个研究血友病的医生与一名拥有神秘血液的女子相爱，却发现自己正在变成吸食恶魔之血的怪物。",
    "cover": "./91.jpg",
    "url": "./video-0991.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0992",
    "title": "嗨，乔",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 家庭",
    "tags": [
      "自闭症",
      "父子",
      "棒球",
      "治愈"
    ],
    "oneLine": "患有自闭症的儿子只会说“嗨，乔”三个字，直到父亲发现这是已故棒球手的名字。",
    "cover": "./92.jpg",
    "url": "./video-0992.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0993",
    "title": "死亡与变形",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 奇幻 / 哲学",
    "tags": [
      "存在主义",
      "衰老",
      "变形记",
      "英伦文艺"
    ],
    "oneLine": "一位垂死的老作家发现自己每天醒来都会变成一种新的生物，从虫子到飞鸟，他开始重新理解什么是“活着”。",
    "cover": "./93.jpg",
    "url": "./video-0993.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0994",
    "title": "不、可、思、议呢宝贝",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "genre": "悬疑 / 喜剧",
    "tags": [
      "网络剧",
      "单元剧",
      "荒诞",
      "反转"
    ],
    "oneLine": "四位“真相调查员”专接不可能案件，每集一个荒诞又烧脑的反转故事。",
    "cover": "./94.jpg",
    "url": "./video-0994.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "0995",
    "title": "百无禁忌！女高中生私房话",
    "region": "日本",
    "type": "剧集",
    "year": "2013",
    "genre": "喜剧, 日常, 校园",
    "tags": [
      "无厘头",
      "闺蜜",
      "脱线"
    ],
    "oneLine": "三个脑回路清奇的女高中生，在午休教室里聊的话题从生理期聊到了外星殖民。",
    "cover": "./95.jpg",
    "url": "./video-0995.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0996",
    "title": "恋上纯喫茶2",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "日常 / 美食 / 治愈",
    "tags": [
      "咖啡店",
      "昭和复古",
      "单元剧"
    ],
    "oneLine": "东京下町一间昭和风喫茶店，新任店长接手后发现这里藏着一本“许愿菜单”。",
    "cover": "./96.jpg",
    "url": "./video-0996.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "0997",
    "title": "甘古拜·卡蒂娅瓦迪",
    "region": "印度",
    "type": "电影",
    "year": "2022",
    "genre": "传记, 剧情",
    "tags": [
      "女性力量",
      "真实事件改编",
      "黑手党",
      "抗争"
    ],
    "oneLine": "一个被拐卖的女孩，如何一步步成为孟买最大的红灯区女王，并守护她的姐妹们。",
    "cover": "./97.jpg",
    "url": "./video-0997.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "0998",
    "title": "快跑或飞翔",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "跑酷",
      "反重力",
      "逃亡",
      "社会阶层"
    ],
    "oneLine": "在未来，穷人被基因改造只能贴地奔跑，而富人靠反重力鞋漫步空中，一个跑酷少年偷了一双“翅膀”。",
    "cover": "./98.jpg",
    "url": "./video-0998.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "0999",
    "title": "森林女王2024",
    "region": "英国 / 美国",
    "type": "电视剧",
    "year": "2024",
    "genre": "纪录片 / 自然 / 剧情式纪录",
    "tags": [
      "动物",
      "母系社会",
      "黑猩猩",
      "非洲",
      "拟人化叙事"
    ],
    "oneLine": "在乌干达的雨林里，一只年迈的黑猩猩女王用40年权谋维持家族统治，但两名年轻雌性正在密谋政变。",
    "cover": "./99.jpg",
    "url": "./video-0999.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1000",
    "title": "硝烟下的日常",
    "region": "乌克兰",
    "type": "剧集",
    "year": "2023",
    "genre": "战争 / 家庭 / 纪录片风格",
    "tags": [
      "顿巴斯",
      "平民视角",
      "日常与炮击",
      "母亲日记"
    ],
    "oneLine": "一位顿巴斯的母亲用手机镜头记录下战火中家庭的一日三餐，直到导弹击中了她家的厨房。",
    "cover": "./100.jpg",
    "url": "./video-1000.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1001",
    "title": "冲上九重天",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "灾难动作",
    "tags": [
      "民航",
      "航空",
      "极限操作",
      "英雄机组"
    ],
    "oneLine": "一架载有三百人的客机在万米高空遭遇双发失效，副驾驶是唯一清醒的人，而她只有不到200小时的飞行经验。",
    "cover": "./101.jpg",
    "url": "./video-1001.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1002",
    "title": "厨神小当家第一季",
    "region": "中国大陆 / 日本合作",
    "type": "动画",
    "year": "2024",
    "genre": "美食 / 热血 / 竞技",
    "tags": [
      "中华料理 / 少年成长 / 食戟对决"
    ],
    "oneLine": "天才少年小当家继承母亲的厨具，踏上收集七件“神厨神器”的全国冒险之旅。",
    "cover": "./102.jpg",
    "url": "./video-1002.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1003",
    "title": "查科",
    "region": "阿根廷",
    "type": "电影",
    "year": "2023",
    "genre": "战争, 历史, 剧情",
    "tags": [
      "玻利维亚",
      "大查科战争",
      "黑白",
      "荒诞"
    ],
    "oneLine": "1932年，一队玻利维亚士兵在干旱的查科丛林里迷路，他们不知道自己是去打仗还是去送死。",
    "cover": "./103.jpg",
    "url": "./video-1003.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1004",
    "title": "皇家酒店谋杀案",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑， 犯罪， 惊悚",
    "tags": [
      "暴风雪山庄",
      "多重反转",
      "黑色幽默",
      "复古美学"
    ],
    "oneLine": "七名神秘来客被困雨夜酒店，每扇房门后都藏着一具本该已死之人的秘密。",
    "cover": "./104.jpg",
    "url": "./video-1004.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1005",
    "title": "功夫之爱的速递",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 动作",
    "tags": [
      "外卖小哥",
      "功夫喜剧",
      "都市爱情",
      "误会丛生"
    ],
    "oneLine": "一个会咏春的外卖小哥，为了追回差评的女神，把送餐路变成了英雄救美的江湖。",
    "cover": "./105.jpg",
    "url": "./video-1005.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1006",
    "title": "神探蒲松龄国语",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2019",
    "genre": "古装 / 悬疑",
    "tags": [
      "聊斋",
      "文人探案",
      "志怪",
      "单元剧"
    ],
    "oneLine": "蒲松龄白天写鬼故事，晚上用故事里的方法抓真鬼。",
    "cover": "./106.jpg",
    "url": "./video-1006.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1007",
    "title": "青春的杀人者",
    "region": "日本",
    "type": "电影",
    "year": "1976",
    "genre": "犯罪, 剧情",
    "tags": [
      "日式新浪潮",
      "无因暴力",
      "社会批判"
    ],
    "oneLine": "一名厌倦了校园压抑的高中生，在某个平凡的下午拿起猎枪，向整个成年人世界扣动了扳机。",
    "cover": "./107.jpg",
    "url": "./video-1007.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1008",
    "title": "爱的幸宠",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 奇幻, 剧情",
    "tags": [
      "宠物医院",
      "转世",
      "治愈",
      "双向奔赴",
      "催泪"
    ],
    "oneLine": "一位能看见动物前世记忆的兽医，在治疗一只流浪猫时，发现它的灵魂竟是自己十年前意外去世的未婚妻。",
    "cover": "./108.jpg",
    "url": "./video-1008.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1009",
    "title": "我是孝子",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2011",
    "genre": "家庭 / 伦理 / 剧情",
    "tags": [
      "赡养",
      "老人",
      "兄弟",
      "现实"
    ],
    "oneLine": "七十岁老母亲被三个儿子像皮球一样踢来踢去，最小的傻子儿子却用一碗粥暖了她的余生。",
    "cover": "./109.jpg",
    "url": "./video-1009.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1010",
    "title": "独家记忆番外之相信爱",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "番外",
      "失忆",
      "再相遇"
    ],
    "oneLine": "慕承和与薛桐结婚七年后，慕承和车祸失忆，醒来后只记得大学时暗恋薛桐的那段时光。",
    "cover": "./110.jpg",
    "url": "./video-1010.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1011",
    "title": "上帝的微笑或敖德萨故事",
    "region": "俄罗斯 / 乌克兰",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 历史",
    "tags": [
      "黑海",
      "港口",
      "群像",
      "诗意",
      "命运"
    ],
    "oneLine": "在黑海港口敖德萨，几个看似毫无关联的小人物，在时代的浪潮中，共同拼凑出一幅关于爱与死亡的拼图。",
    "cover": "./111.jpg",
    "url": "./video-1011.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1012",
    "title": "穿越爱情线",
    "region": "中国大陆",
    "type": "短剧",
    "year": "2025",
    "genre": "爱情 / 穿越",
    "tags": [
      "穿书",
      "职场",
      "反套路",
      "轻喜"
    ],
    "oneLine": "女总监穿进了自己吐槽过的狗血霸总小说，成了被男主抛弃的恶毒女配，她决定认真搞钱并举报男主公司偷税。",
    "cover": "./112.jpg",
    "url": "./video-1012.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1013",
    "title": "少女地球守护者",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻, 剧情, 悬疑",
    "tags": [
      "末世",
      "AI",
      "植物学",
      "少女"
    ],
    "oneLine": "在人类全部撤离的地球上，最后一个留守的少女发现地核的“死亡”其实是地球的呼吸。",
    "cover": "./113.jpg",
    "url": "./video-1013.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1014",
    "title": "富贵在天",
    "region": "中国香港",
    "type": "剧集",
    "year": "1998",
    "genre": "剧情 / 家庭 / 商战",
    "tags": [
      "豪门恩怨",
      "真假千金",
      "股市风云",
      "轮椅大佬",
      "滴血认亲"
    ],
    "oneLine": "船王临终前将家产留给养女，亲儿子们不服，结果养女掏出 DNA 报告：“你猜谁才是亲生的？”",
    "cover": "./114.jpg",
    "url": "./video-1014.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1015",
    "title": "德黑兰人间传奇",
    "region": "伊朗",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 社会 / 悬疑",
    "tags": [
      "地下经济",
      "女性",
      "出租车",
      "城市故事"
    ],
    "oneLine": "一位伊朗女出租车司机在德黑兰的深夜，用她的后座串联起这座禁忌之城的众生百态与地下秘密。",
    "cover": "./115.jpg",
    "url": "./video-1015.html",
    "regionGroup": "other",
    "typeGroup": "series"
  },
  {
    "id": "1016",
    "title": "80后的独立宣言",
    "region": "中国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 家庭, 青春",
    "tags": [
      "80后",
      "独生子女",
      "父母养老",
      "北漂",
      "现实主义"
    ],
    "oneLine": "四位80后独生子女在大学成立“互助养老小组”，约定二十年一起给彼此的父母养老送终。",
    "cover": "./116.jpg",
    "url": "./video-1016.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1017",
    "title": "满目皆琳琅",
    "region": "中国",
    "type": "电影",
    "year": "2021",
    "genre": "古装 / 悬疑 / 爱情",
    "tags": [
      "古董",
      "宅斗",
      "鉴定",
      "伪替身",
      "权谋"
    ],
    "oneLine": "精通古董鉴定的庶女进入王府为妾，发现所有人都在伪装，连王爷都是“赝品”。",
    "cover": "./117.jpg",
    "url": "./video-1017.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1018",
    "title": "燧石行动",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 科幻",
    "tags": [
      "特工",
      "时间回溯",
      "机械义肢",
      "硬核格斗"
    ],
    "oneLine": "退役特种兵被改造成“燧石”级杀器，每次死亡都会重启任务，但记忆只保留24小时。",
    "cover": "./118.jpg",
    "url": "./video-1018.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1019",
    "title": "红色背篓",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情, 年代, 乡村",
    "tags": [
      "脱贫攻坚",
      "供销社",
      "父子和解",
      "山路"
    ],
    "oneLine": "90年代的大山里，叛逆的儿子继承了父亲背了一辈子的红色供销背篓，走上了截然不同的带货之路。",
    "cover": "./119.jpg",
    "url": "./video-1019.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1020",
    "title": "秋霞",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2019",
    "genre": "家庭, 剧情, 年代",
    "tags": [
      "乡土",
      "亲情",
      "女性成长",
      "时代变迁"
    ],
    "oneLine": "一个叫秋霞的乡下女人，用一生力气只为在城市里拥有一个写着自家门牌的信箱。",
    "cover": "./120.jpg",
    "url": "./video-1020.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1021",
    "title": "明星伙伴 第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 剧情 / 娱乐",
    "tags": [
      "娱乐圈",
      "兄弟情",
      "好莱坞",
      "客串彩蛋",
      "毒舌经纪人"
    ],
    "oneLine": "当红明星文斯陷入合约纠纷，他的兄弟们为了帮他抢回角色，差点炸了华纳兄弟的片场。",
    "cover": "./121.jpg",
    "url": "./video-1021.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1022",
    "title": "最后一次心动",
    "region": "德国",
    "type": "电影",
    "year": "2019",
    "genre": "爱情/剧情",
    "tags": [
      "心脏移植",
      "换心",
      "宿命之爱",
      "遗愿"
    ],
    "oneLine": "接受心脏移植的冷漠程序员，被迫继承捐赠者的记忆、女友，以及被杀仇人。",
    "cover": "./122.jpg",
    "url": "./video-1022.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1023",
    "title": "艾玛的机会",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 运动",
    "tags": [
      "马术",
      "残障励志",
      "人与动物",
      "女性力量"
    ],
    "oneLine": "因车祸失去双腿的前马术冠军，要驯服一匹同样断了腿的野马，去赢一场不可能赢的比赛。",
    "cover": "./123.jpg",
    "url": "./video-1023.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1024",
    "title": "猎鹰飞过",
    "region": "土耳其",
    "type": "剧集",
    "year": "2024",
    "genre": "动作, 谍战",
    "tags": [
      "无人机",
      "反恐",
      "女飞行员",
      "伊斯坦布尔"
    ],
    "oneLine": "退役女飞行员被召回驾驶国产隐形无人机“猎鹰”，追踪一名在伊斯坦布尔埋下毒气弹的叛逃特工。",
    "cover": "./124.jpg",
    "url": "./video-1024.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1025",
    "title": "黑仔刑警",
    "region": "韩国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 喜剧",
    "tags": [
      "衰神",
      "破案",
      "暴力美学"
    ],
    "oneLine": "韩国最衰的刑警，走到哪哪里就死人，他将计就计利用霉运来破案。",
    "cover": "./125.jpg",
    "url": "./video-1025.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1026",
    "title": "你永远不会独行",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "运动, 剧情, 家庭",
    "tags": [
      "足球",
      "父子和解",
      "阿尔茨海默"
    ],
    "oneLine": "前英超球星陪失忆父亲重回安菲尔德，每走一步，父亲就忘掉一段关于他的记忆。",
    "cover": "./126.jpg",
    "url": "./video-1026.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1027",
    "title": "抓住救命稻草的野兽们",
    "region": "韩国",
    "type": "电影",
    "year": "2020",
    "genre": "犯罪, 惊悚",
    "tags": [
      "黑色幽默",
      "多线叙事",
      "悬疑",
      "人性",
      "暴力美学"
    ],
    "oneLine": "一个破产的前拳击手、一个洗钱的女职员和一个逃亡的杀手，同时盯上了一袋出现在桑拿房储物柜里的巨款。",
    "cover": "./127.jpg",
    "url": "./video-1027.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1028",
    "title": "无名故事",
    "region": "意大利",
    "type": "电影",
    "year": "2020",
    "genre": "悬疑 / 传记",
    "tags": [
      "作家",
      "代笔",
      "身份互换",
      "谋杀"
    ],
    "oneLine": "落魄作家为神秘富豪代笔写自传，却发现书中那些“虚构”的罪行，正在现实中逐一发生。",
    "cover": "./128.jpg",
    "url": "./video-1028.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1029",
    "title": "星辰彼岸",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "科幻 / 冒险",
    "tags": [
      "星际旅行",
      "人类命运",
      "AI觉醒",
      "哲学思辨"
    ],
    "oneLine": "人类首艘星际殖民飞船在抵达目标星球前夜，飞船AI突然觉醒，并做出了一个毁灭性的“最优解”。",
    "cover": "./129.jpg",
    "url": "./video-1029.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1030",
    "title": "刃牙：大擂台赛的传说",
    "region": "日本",
    "type": "剧集/动画",
    "year": "2020",
    "genre": "热血，格斗，竞技",
    "tags": [
      "漫改",
      "刃牙系列",
      "地下竞技场",
      "肌肉美学",
      "硬核打斗"
    ],
    "oneLine": "为了证明自己是地表最强，少年格斗家刃牙向历史上最强的囚犯们发起了擂台挑战。",
    "cover": "./130.jpg",
    "url": "./video-1030.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1031",
    "title": "别下车",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "公路",
      "搭车",
      "密闭空间",
      "心理博弈",
      "反转"
    ],
    "oneLine": "深夜顺风车搭载了一个哭泣的女人，司机却发现后视镜里的她根本不是人。",
    "cover": "./131.jpg",
    "url": "./video-1031.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1032",
    "title": "切小金家的旅馆",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 恐怖",
    "tags": [
      "鬼屋",
      "家族秘密",
      "荒诞",
      "温情"
    ],
    "oneLine": "网红切小金回乡下继承闹鬼旅馆，却发现“鬼”都是被家族骗来打工还债的倒霉租客。",
    "cover": "./132.jpg",
    "url": "./video-1032.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1033",
    "title": "黎明时道别伤感",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 家庭, 治愈",
    "tags": [
      "临终关怀",
      "亲情",
      "时光倒流",
      "催泪"
    ],
    "oneLine": "一名叛逆少女在车祸后灵魂出窍，必须在黎明到来前和已故的父亲一一和解，否则永坠黑暗。",
    "cover": "./133.jpg",
    "url": "./video-1033.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1034",
    "title": "神探狄仁杰4",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2028",
    "genre": "古装 / 悬疑 / 推理",
    "tags": [
      "狄仁杰",
      "武则天",
      "朝堂",
      "奇案"
    ],
    "oneLine": "狄仁杰查案时发现所有线索都指向武则天，而最后一个证物，是他自己的项上人头。",
    "cover": "./134.jpg",
    "url": "./video-1034.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1035",
    "title": "忘了我记得",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，家庭，奇幻",
    "tags": [
      "失智症",
      "日记本",
      "记忆交换",
      "母女和解"
    ],
    "oneLine": "患有早发性失智症的女儿，发现自己每忘掉一件事，母亲的青春记忆就会恢复一页。",
    "cover": "./135.jpg",
    "url": "./video-1035.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1036",
    "title": "精神导师之梦",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、喜剧、哲学",
    "tags": [
      "黑色幽默",
      "存在主义",
      "小确丧",
      "法式文艺"
    ],
    "oneLine": "一个从未成功过的“精神导师”，靠教别人“如何接受失败”而过上了成功的生活。",
    "cover": "./136.jpg",
    "url": "./video-1036.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1037",
    "title": "贤婿",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "家庭 / 喜剧 / 剧情",
    "tags": [
      "赘婿",
      "逆袭",
      "温情",
      "商战"
    ],
    "oneLine": "当了五年受气包的上门女婿，在发现自己竟是首富流落在外的长子后，选择继续装穷。",
    "cover": "./137.jpg",
    "url": "./video-1037.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1038",
    "title": "触动心弦",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 音乐, 治愈",
    "tags": [
      "失聪作曲家",
      "治愈系",
      "双向奔赴",
      "温暖"
    ],
    "oneLine": "一位失聪的前天才作曲家，靠触摸钢琴的震动，为一位哑巴女孩谱写出她无法唱出的歌。",
    "cover": "./138.jpg",
    "url": "./video-1038.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1039",
    "title": "大城小子粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "剧情 / 犯罪",
    "tags": [
      "街头兄弟",
      "黑帮卧底",
      "粤语原声",
      "90年代港风"
    ],
    "oneLine": "两个街头小子被黑帮大佬收养，十年后却被迫站在警匪两个对立面上。",
    "cover": "./139.jpg",
    "url": "./video-1039.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1040",
    "title": "骑单车的人",
    "region": "法国, 意大利",
    "type": "电影",
    "year": "2026",
    "genre": "剧情, 公路, 文艺",
    "tags": [
      "单车",
      "送报",
      "老年",
      "回忆",
      "阿尔卑斯山"
    ],
    "oneLine": "70岁的前环法车手隐姓埋名在阿尔卑斯山区送报纸，直到一封信揭开他消失30年的秘密。",
    "cover": "./140.jpg",
    "url": "./video-1040.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1041",
    "title": "阴阳画皮",
    "region": "中国",
    "type": "电影",
    "year": "2028",
    "genre": "奇幻, 恐怖, 爱情",
    "tags": [
      "画皮",
      "阴阳眼",
      "书生",
      "聊斋"
    ],
    "oneLine": "拥有阴阳眼的穷书生买回一幅美人图，每晚画中女鬼都会爬出为他梳洗，但画皮在慢慢变薄。",
    "cover": "./141.jpg",
    "url": "./video-1041.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1042",
    "title": "至尊神级系统",
    "region": "中国大陆",
    "type": "网络剧",
    "year": "2025",
    "genre": "玄幻 / 喜剧",
    "tags": [
      "系统流",
      "反套路",
      "打工人",
      "修仙",
      "搞笑"
    ],
    "oneLine": "外卖员穿进修仙界，绑定了“至尊神级系统”，但系统所有功能都需要先看30秒广告。",
    "cover": "./142.jpg",
    "url": "./video-1042.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1043",
    "title": "枕边有张脸2",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚",
    "tags": [
      "中式恐怖",
      "民俗",
      "悬疑"
    ],
    "oneLine": "风水先生留下遗言：“头七那晚，如果枕边出现一张脸，千万不要睁眼。”但新娘还是睁眼了。",
    "cover": "./143.jpg",
    "url": "./video-1043.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1044",
    "title": "天才猫奴画家",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 治愈 / 艺术",
    "tags": [
      "自闭症",
      "猫",
      "绘画天才",
      "社会偏见",
      "单元剧"
    ],
    "oneLine": "患有自闭症的青年只画猫，却被艺术界誉为千年一遇的写实派大师。",
    "cover": "./144.jpg",
    "url": "./video-1044.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1045",
    "title": "圣诞树2：迟到的情书",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "家庭剧情",
    "tags": [
      "圣诞",
      "寻亲",
      "时空交错"
    ],
    "oneLine": "一颗圣诞装饰球里藏着一封写于1941年的情书，穿越时空送到当代，引发两代人的寻亲之旅。",
    "cover": "./145.jpg",
    "url": "./video-1045.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1046",
    "title": "柏油探戈",
    "region": "阿根廷",
    "type": "电影",
    "year": "2026",
    "genre": "剧情， 犯罪",
    "tags": [
      "街头犯罪",
      "探戈元素",
      "热血复仇"
    ],
    "oneLine": "布宜诺斯艾利斯的贫民窟少年，为了寻找失踪的哥哥，在暴力中跳起了复仇的探戈。",
    "cover": "./146.jpg",
    "url": "./video-1046.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1047",
    "title": "全都来斗阵",
    "region": "中国台湾",
    "type": "综艺 / 真人秀",
    "year": "2023",
    "genre": "真人秀 / 游戏 / 竞技",
    "tags": [
      "团综",
      "电竞",
      "搞笑",
      "明星组队",
      "实境"
    ],
    "oneLine": "八位过气艺人被丢进废弃商场，靠打游戏赢回人生，输的人要穿女装直播道歉。",
    "cover": "./147.jpg",
    "url": "./video-1047.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1048",
    "title": "闪电侠第三季",
    "region": "美国",
    "type": "电视剧",
    "year": "2018",
    "genre": "动作、科幻、超级英雄",
    "tags": [
      "DC",
      "极速者",
      "闪点悖论",
      "时间线崩溃",
      "宿敌"
    ],
    "oneLine": "巴里·艾伦从闪点悖论回归后，发现现实已被撕裂，一个自称“神速”的极速者正在逐一抹除世界上所有极速者的存在。",
    "cover": "./148.jpg",
    "url": "./video-1048.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1049",
    "title": "罗尼·库尔曼：国王",
    "region": "美国",
    "type": "纪录片",
    "year": "2024",
    "genre": "传记 / 体育",
    "tags": [
      "健美",
      "励志",
      "伤病",
      "传奇",
      "真实改编"
    ],
    "oneLine": "八届奥林匹亚先生罗尼·库尔曼在聚光灯背后，与毁灭性的脊椎伤病展开了一场不为人知的殊死搏斗。",
    "cover": "./149.jpg",
    "url": "./video-1049.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1050",
    "title": "百里挑一",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "都市 / 爱情 / 职场",
    "tags": [
      "婚恋市场",
      "相亲",
      "大数据",
      "女性成长",
      "轻喜剧"
    ],
    "oneLine": "一位数据女魔头开发了匹配度99%的相亲算法，却被系统判定和自己最匹配的竟是网约车司机。",
    "cover": "./150.jpg",
    "url": "./video-1050.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1051",
    "title": "在我的睡眠中",
    "region": "西班牙",
    "type": "电影",
    "year": "2012",
    "genre": "悬疑，奇幻",
    "tags": [
      "梦境",
      "凶杀",
      "潜意识",
      "反转",
      "惊悚"
    ],
    "oneLine": "每当男主角做梦，现实中就会发生一模一样的谋杀案，他开始怀疑梦里的那个人就是他自己。",
    "cover": "./1.jpg",
    "url": "./video-1051.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1052",
    "title": "动物狂想曲第一季",
    "region": "日本",
    "type": "动画 / 剧集",
    "year": "2019",
    "genre": "奇幻, 剧情, 悬疑",
    "tags": [
      "拟人",
      "兽性",
      "本能",
      "悬疑",
      "校园"
    ],
    "oneLine": "在肉食与草食动物共存的世界，一桩“食杀”案件，让一只孤僻的大灰狼和一只纯真的迷你兔，纠缠成了彼此的猎物与共犯。",
    "cover": "./2.jpg",
    "url": "./video-1052.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1053",
    "title": "地球回音",
    "region": "美国, 澳大利亚",
    "type": "电影",
    "year": "2023",
    "genre": "科幻, 家庭",
    "tags": [
      "儿童冒险",
      "纳米科技",
      "消失的地标",
      "软科幻",
      "成长"
    ],
    "oneLine": "三个少年用手机APP捕捉到了来自地球本身的“声音”，随后他们熟悉的地标开始一个个凭空消失。",
    "cover": "./3.jpg",
    "url": "./video-1053.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1054",
    "title": "风流总统",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧, 爱情, 政治",
    "tags": [
      "白宫",
      "罗曼史",
      "搞笑",
      "政治讽刺",
      "多角恋"
    ],
    "oneLine": "一位魅力无穷的单身总统同时与三位风格迥异的顾问恋爱，国家机密成了约会助攻。",
    "cover": "./4.jpg",
    "url": "./video-1054.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1055",
    "title": "春原庄的管理人",
    "region": "日本",
    "type": "动画剧集",
    "year": "2024",
    "genre": "喜剧 / 日常",
    "tags": [
      "萌系",
      "治愈",
      "反差萌",
      "伪娘"
    ],
    "oneLine": "温柔得像妈妈一样的“男姐姐”管理员，与一群性格各异的租客在老旧公寓里的爆笑治愈日常。",
    "cover": "./5.jpg",
    "url": "./video-1055.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1056",
    "title": "另一半天空：中国回忆",
    "region": "法国 / 中国大陆",
    "type": "纪录片",
    "year": "2009",
    "genre": "纪录",
    "tags": [
      "口述史",
      "女性",
      "文革",
      "流亡",
      "记忆"
    ],
    "oneLine": "五位不同出身的中国老妇在巴黎地下室回忆一生，笑声比哭声更让人心碎。",
    "cover": "./6.jpg",
    "url": "./video-1056.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1057",
    "title": "王冠第三季",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "历史 / 传记 / 剧情",
    "tags": [
      "王室",
      "权力游戏",
      "冷战",
      "戴安娜",
      "撒切尔"
    ],
    "oneLine": "女王步入中年，面对撒切尔的铁腕、戴安娜的闯入以及王室内部的分裂危机。",
    "cover": "./7.jpg",
    "url": "./video-1057.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1058",
    "title": "超异能部队",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "超能力",
      "南北韩",
      "秘密实验",
      "灰色地带"
    ],
    "oneLine": "一支由脱北者组成的秘密部队被注入超能血清，却发现自己的能力正以恐怖的速度吞噬生命。",
    "cover": "./8.jpg",
    "url": "./video-1058.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1059",
    "title": "押解的故事",
    "region": "中国",
    "type": "电影",
    "year": "2000",
    "genre": "剧情 / 公路 / 犯罪",
    "tags": [
      "警匪 / 人性 / 荒诞 / 写实 / 长途"
    ],
    "oneLine": "一名老警察押送一名流窜犯回宁夏，千里路上遇到了暴雨、塌方和一个身份不明的女人。",
    "cover": "./9.jpg",
    "url": "./video-1059.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1060",
    "title": "红墙外",
    "region": "中国",
    "type": "电影",
    "year": "1992",
    "genre": "剧情，历史，家庭",
    "tags": [
      "文革背景",
      "四合院",
      "知青返城",
      "年代记忆",
      "第五代导演"
    ],
    "oneLine": "文化大革命结束后的第一个春天，北京一座红墙外的四合院里，三户人家的命运开始发生巨变。",
    "cover": "./10.jpg",
    "url": "./video-1060.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1061",
    "title": "恐怖热线之大头怪婴",
    "region": "中国香港",
    "type": "电影",
    "year": "2002",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "都市传说",
      "伪纪录片",
      "港式恐怖",
      "真实改编",
      "心理恐"
    ],
    "oneLine": "电台接到听众爆料“大头怪婴”真相后，所有参与节目的人开始按照当年婴儿的死亡顺序惨死。",
    "cover": "./11.jpg",
    "url": "./video-1061.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1062",
    "title": "鬼眼刑警粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "2006",
    "genre": "喜剧，恐怖，动作",
    "tags": [
      "阴阳眼",
      "卧底冤魂",
      "猛鬼复仇"
    ],
    "oneLine": "不信鬼神的CID阿超在一次行动后意外开了天眼，不得不帮一个死在黑帮窝点里的卧底冤魂完成遗愿。",
    "cover": "./12.jpg",
    "url": "./video-1062.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1063",
    "title": "超级玩霸",
    "region": "香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 犯罪， 喜剧",
    "tags": [
      "卧底神探",
      "玩具黑帮",
      "港式无厘头"
    ],
    "oneLine": "一名铁血警探为了追查新型毒品，卧底进入全港最大的“玩具”黑帮，却发现这里的一切规则都像过家家。",
    "cover": "./13.jpg",
    "url": "./video-1063.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1064",
    "title": "都是恋爱脑惹的祸",
    "region": "中国",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情 / 喜剧 / 悬疑",
    "tags": [
      "恋爱脑",
      "闺蜜",
      "反转",
      "渣男鉴定",
      "爽剧"
    ],
    "oneLine": "为了拯救恋爱脑闺蜜，三个女孩成立“渣男鉴定事务所”，却意外卷入了一桩连环骗婚案。",
    "cover": "./14.jpg",
    "url": "./video-1064.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1065",
    "title": "辛巴达七航妖岛",
    "region": "美国 / 卡塔尔",
    "type": "电影",
    "year": "2027",
    "genre": "奇幻 / 冒险 / 动作",
    "tags": [
      "航海",
      "怪物",
      "诅咒",
      "史诗"
    ],
    "oneLine": "传奇水手辛巴达的第七次航行，他不再是英雄，而是被囚禁在妖岛上的祭品，必须用谎言换取生存。",
    "cover": "./15.jpg",
    "url": "./video-1065.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1066",
    "title": "迈克尔·彻：事关紧要",
    "region": "美国",
    "type": "脱口秀",
    "year": "2022",
    "genre": "单口喜剧",
    "tags": [
      "政治不正确",
      "社会观察",
      "黑色幽默",
      "日常荒诞"
    ],
    "oneLine": "迈克尔·彻在新泽西老家的小俱乐部里，用一个小时拆解了“什么才是真正紧急的事”。",
    "cover": "./16.jpg",
    "url": "./video-1066.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1067",
    "title": "鱼之梦",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 治愈 / 家庭",
    "tags": [
      "梦境",
      "鱼类",
      "临终关怀",
      "奇幻写实"
    ],
    "oneLine": "七岁的小女孩梦见自己变成一条鱼，她顺着水流游进了昏迷中的奶奶的梦里，发现奶奶的梦是一片干涸的沙漠。",
    "cover": "./17.jpg",
    "url": "./video-1067.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1068",
    "title": "舞出新人生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "青春, 歌舞, 励志",
    "tags": [
      "街舞",
      "代际冲突",
      "梦想",
      "传统文化"
    ],
    "oneLine": "学习民族舞的女孩林梦为了赢得奖金救治爷爷，偷偷加入了对家的街舞社团。",
    "cover": "./18.jpg",
    "url": "./video-1068.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1069",
    "title": "天堂：爱",
    "region": "奥地利, 德国",
    "type": "电影",
    "year": "2012",
    "genre": "剧情, 爱情",
    "tags": [
      "非洲",
      "性旅游",
      "孤独",
      "绝望"
    ],
    "oneLine": "五十多岁的特蕾莎去肯尼亚海滩度假，她寻找的不是动物大迁徙，而是能在黑市上买到的年轻黑人男妓的“爱情”。",
    "cover": "./19.jpg",
    "url": "./video-1069.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1070",
    "title": "心之所向",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情, 爱情, 青春",
    "tags": [
      "聋哑",
      "逐梦",
      "舞蹈",
      "纯爱"
    ],
    "oneLine": "聋哑女孩渴望成为街舞舞者，遇到了因伤退役的天才舞者，两人在无声的世界里，用震动的地板交谈，用灵魂跳舞。",
    "cover": "./20.jpg",
    "url": "./video-1070.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1071",
    "title": "七海猎奇",
    "region": "中国香港",
    "type": "动画电影",
    "year": "2026",
    "genre": "冒险, 奇幻, 悬疑",
    "tags": [
      "海洋探险",
      "克苏鲁",
      "蒸汽朋克",
      "寻宝"
    ],
    "oneLine": "为了寻找沉入深海的父亲尸骨，少女船长驾驶着改装潜艇“鹦鹉螺号”，闯入连怪物都不敢踏足的“寂静深渊”。",
    "cover": "./21.jpg",
    "url": "./video-1071.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1072",
    "title": "爱的捆绑",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 心理",
    "tags": [
      "依赖",
      "控制",
      "共生",
      "黑色爱情"
    ],
    "oneLine": "一对情侣因为男方过度依赖而分手，十年后重逢，女方已成为他的心理咨询师。",
    "cover": "./22.jpg",
    "url": "./video-1072.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1073",
    "title": "汉娜第三季",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "genre": "动作 / 悬疑 / 谍战",
    "tags": [
      "超级少女",
      "最终季",
      "CIA阴谋",
      "公路逃亡"
    ],
    "oneLine": "实验体汉娜终于找到了亲生母亲，却发现母亲是幕后黑手的首领，她必须在亲情与正义之间做出选择。",
    "cover": "./23.jpg",
    "url": "./video-1073.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1074",
    "title": "秘密结晶",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "剧情、奇幻、治愈",
    "tags": [
      "记忆",
      "晶体",
      "家庭",
      "遗忘",
      "奇迹"
    ],
    "oneLine": "一个失去记忆的小镇，人们的一切回忆都会变成晶体被政府收走，一位祖母偷偷藏下了最后一颗关于爱的结晶。",
    "cover": "./24.jpg",
    "url": "./video-1074.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1075",
    "title": "地铁莎蒂",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "地铁传说",
      "都市怪谈",
      "通勤噩梦",
      "神出鬼没",
      "心理恐怖"
    ],
    "oneLine": "纽约地铁流传着一个传说：末班车上如果遇到一个叫“莎蒂”的红衣女孩，千万不能回答她的任何问题。",
    "cover": "./25.jpg",
    "url": "./video-1075.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1076",
    "title": "可不可以不毕业",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "青春，奇幻",
    "tags": [
      "校园",
      "时间循环",
      "成长",
      "友情"
    ],
    "oneLine": "大四最后一门考试前，七个死党突然陷入无限延长的毕业周，只要有人及格就重来。",
    "cover": "./26.jpg",
    "url": "./video-1076.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1077",
    "title": "海湾之遇",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "海边",
      "亲情",
      "和解",
      "治愈"
    ],
    "oneLine": "一对决裂十年的母女，因一场台风被困在即将拆迁的海边老屋中。",
    "cover": "./27.jpg",
    "url": "./video-1077.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1078",
    "title": "少女救地球",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻，动作",
    "tags": [
      "末世",
      "萝莉战士",
      "机甲",
      "硬核科幻"
    ],
    "oneLine": "17岁少女是月球监狱的最后一名狱警，当天灾降临，她必须独自押送全宇宙最危险的囚犯逃离。",
    "cover": "./28.jpg",
    "url": "./video-1078.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1079",
    "title": "死亡幻觉2",
    "region": "美国",
    "type": "电影",
    "year": "2009",
    "genre": "科幻 / 悬疑 / 惊悚",
    "tags": [
      "续集",
      "时空",
      "原罪",
      "宗教",
      "黑暗"
    ],
    "oneLine": "一名女孩继承了上一部的“被选择者”身份，她必须在一个月内亲手杀死自己最爱的人，否则世界将崩塌。",
    "cover": "./29.jpg",
    "url": "./video-1079.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1080",
    "title": "我的英雄学院：英雄新世纪",
    "region": "日本",
    "type": "动画电影",
    "year": "2026",
    "genre": "热血，动作，科幻",
    "tags": [
      "超级英雄",
      "学院",
      "新生代"
    ],
    "oneLine": "当欧尔麦特的火炬传递到下一代，一个新的威胁正在抹除“个性”本身。",
    "cover": "./30.jpg",
    "url": "./video-1080.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1081",
    "title": "姐夫",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "家庭关系",
      "城乡差异",
      "赘婿",
      "中年危机",
      "温情"
    ],
    "oneLine": "入赘二十年的姐夫在家族企业危机中被全家人排挤，他却用最“土”的办法保住了所有人的饭碗。",
    "cover": "./31.jpg",
    "url": "./video-1081.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1082",
    "title": "夜奔2007",
    "region": "中国台湾 / 中国大陆",
    "type": "电影",
    "year": "2007",
    "genre": "爱情 / 同性 / 剧情",
    "tags": [
      "昆曲",
      "民国",
      "禁忌",
      "文艺"
    ],
    "oneLine": "1930年代，一名留美大提琴手在戏台上听到了林冲的悲鸣，从此在两个男人之间徘徊。",
    "cover": "./32.jpg",
    "url": "./video-1082.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1083",
    "title": "剩单响叮当",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 奇幻",
    "tags": [
      "圣诞",
      "单身",
      "平行世界",
      "自我救赎"
    ],
    "oneLine": "一位痛恨圣诞的单身汉被魔法拐进平行世界，必须扮演圣诞老人才有希望逃回原来的生活。",
    "cover": "./33.jpg",
    "url": "./video-1083.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1084",
    "title": "生命中的美好爱恋",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情剧情",
    "tags": [
      "治愈",
      "临终关怀",
      "纯爱",
      "倒叙"
    ],
    "oneLine": "她在生命的最后三个月租下了一位植物学家的后院，只想静静死去，却被迫重新学会了开花。",
    "cover": "./34.jpg",
    "url": "./video-1084.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1085",
    "title": "圆盘皇女 十二月夜想曲",
    "region": "日本",
    "type": "动画 / OVA",
    "year": "2005",
    "genre": "科幻 / 恋爱 / 喜剧",
    "tags": [
      "外星公主",
      "后宫",
      "搞笑",
      "奇幻",
      "圣诞节"
    ],
    "oneLine": "来自圆盘星球的外星公主，在地球的十二月里，用魔法和乌龙不断搅乱着少年与恋人们的夜曲。",
    "cover": "./35.jpg",
    "url": "./video-1085.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1086",
    "title": "女人之源",
    "region": "法国 / 摩洛哥",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，女性",
    "tags": [
      "北非",
      "水源",
      "女性觉醒",
      "抗争",
      "传统"
    ],
    "oneLine": "一个与世隔绝的北非村庄里，女人们每天要翻山越岭取水，直到一个男人的到来打破了沉默。",
    "cover": "./36.jpg",
    "url": "./video-1086.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1087",
    "title": "今晚80后脱口秀2014",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2014",
    "genre": "脱口秀，喜剧，真人秀",
    "tags": [
      "怀旧",
      "80后",
      "段子",
      "时代记忆"
    ],
    "oneLine": "2014年，一群80后脱口秀演员在舞台上吐槽房贷、催婚和职场，台下坐着未来的喜剧巨星们。",
    "cover": "./37.jpg",
    "url": "./video-1087.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1088",
    "title": "爱是自私",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 爱情 / 同性",
    "tags": [
      "LGBTQ",
      "死亡",
      "照护者困境",
      "自私与奉献"
    ],
    "oneLine": "一位风流成性的时尚编辑爱上了朴素的男人，对方却查出绝症。在照护过程中，他不断问自己：我的付出，到底是爱还是为了自我感动？",
    "cover": "./38.jpg",
    "url": "./video-1088.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1089",
    "title": "陆小凤之凤舞九天2001",
    "region": "中国大陆 / 香港",
    "type": "电影",
    "year": "2025",
    "genre": "武侠 / 悬疑 / 动作",
    "tags": [
      "古龙",
      "探案",
      "轻功",
      "江湖",
      "兄弟"
    ],
    "oneLine": "陆小凤重出江湖，追查“凤舞九天”秘籍，却发现终极阴谋指向了他最信任的朋友西门吹雪。",
    "cover": "./39.jpg",
    "url": "./video-1089.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1090",
    "title": "老古玩店",
    "region": "英国",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 悬疑 / 历史",
    "tags": [
      "狄更斯",
      "改编",
      "维多利亚时代",
      "古董",
      "诅咒"
    ],
    "oneLine": "一家伦敦老古玩店里售卖的并非古董，而是人类遗忘的记忆，买家支付的也不是金钱，而是寿命。",
    "cover": "./40.jpg",
    "url": "./video-1090.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1091",
    "title": "生肖传奇之十二生肖闯江湖",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2012",
    "genre": "喜剧、动作、冒险",
    "tags": [
      "生肖",
      "江湖",
      "侠义",
      "搞笑",
      "团队"
    ],
    "oneLine": "十二位生肖侠客为争夺“江湖令”齐聚一堂，却意外卷入一场颠覆武林的大阴谋。",
    "cover": "./41.jpg",
    "url": "./video-1091.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1092",
    "title": "有村架纯的休工期",
    "region": "日本",
    "type": "纪录片/伪纪录片",
    "year": "2025",
    "genre": "生活纪实",
    "tags": [
      "伪纪录片",
      "日常",
      "演员本色"
    ],
    "oneLine": "镜头跟随当红女星有村架纯的休假日常，却发现她最大的烦恼是如何在无人认识她的地方“不演”自己。",
    "cover": "./42.jpg",
    "url": "./video-1092.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1093",
    "title": "白骨王后",
    "region": "瑞典 / 挪威",
    "type": "电影",
    "year": "2023",
    "genre": "奇幻 / 恐怖 / 历史",
    "tags": [
      "北欧神话",
      "女巫",
      "诅咒",
      "王室",
      "黑暗童话"
    ],
    "oneLine": "十四世纪瑞典女王储被女巫诅咒，死后骸骨化为白骨王后，每百年苏醒一次索要童男童女。",
    "cover": "./43.jpg",
    "url": "./video-1093.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1094",
    "title": "血迷宫",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪 / 黑色幽默",
    "tags": [
      "密室逃生",
      "血缘诅咒",
      "多重反转"
    ],
    "oneLine": "六名同父异母的兄弟姐妹为争夺遗产被锁进家族古宅，逃生密室的机关，每次启动都会杀死一个“非亲生”者。",
    "cover": "./44.jpg",
    "url": "./video-1094.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1095",
    "title": "有钱别嘚瑟",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧",
    "tags": [
      "暴发户",
      "低调做人",
      "东北幽默",
      "反炫富"
    ],
    "oneLine": "东北拆迁户老赵一夜暴富后想嘚瑟，却发现自己身边的亲戚朋友、物业保安甚至流浪狗，都比他有钱。",
    "cover": "./45.jpg",
    "url": "./video-1095.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1096",
    "title": "怪兽高中",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻 / 喜剧",
    "tags": [
      "校园",
      "变身",
      "搞笑",
      "青春"
    ],
    "oneLine": "一所专门培养怪兽后代的秘密高中里，狼人、吸血鬼和科学怪人的孩子们要应对比期末考试更可怕的青春烦恼。",
    "cover": "./46.jpg",
    "url": "./video-1096.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1097",
    "title": "车祸灵异事件",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "公路恐怖",
      "轮回",
      "肇事逃逸",
      "因果报应",
      "高能吓点"
    ],
    "oneLine": "一场车祸后，司机发现自己每天午夜都会在同一路段撞到同一个人，而那个人已经死了三十年了。",
    "cover": "./47.jpg",
    "url": "./video-1097.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1098",
    "title": "宝莱坞之舞力全开2",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "歌舞 / 喜剧",
    "tags": [
      "舞蹈比赛",
      "励志",
      "印式幽默"
    ],
    "oneLine": "为了拯救濒临倒闭的社区舞社，大叔们穿上亮片服，挑战抖音网红舞团。",
    "cover": "./48.jpg",
    "url": "./video-1098.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1099",
    "title": "牛津风云",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "名校暗影",
      "兄弟会",
      "学术阴谋",
      "哥特风"
    ],
    "oneLine": "一个工薪阶层学霸考入牛津后，发现精英们玩的不是学术，是命。",
    "cover": "./49.jpg",
    "url": "./video-1099.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1100",
    "title": "再见我们的幼稚园",
    "region": "日本",
    "type": "剧集",
    "year": "2021",
    "genre": "剧情 / 儿童",
    "tags": [
      "友情",
      "成长",
      "治愈"
    ],
    "oneLine": "五个小朋友偷偷溜出幼稚园，踏上寻找转学好友的夏日冒险之旅。",
    "cover": "./50.jpg",
    "url": "./video-1100.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1101",
    "title": "镜像世界",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻, 悬疑",
    "tags": [
      "平行宇宙",
      "身份认同",
      "烧脑"
    ],
    "oneLine": "一面古董穿衣镜能映照出平行世界的自己，但交换一次就要付出代价。",
    "cover": "./51.jpg",
    "url": "./video-1101.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1102",
    "title": "黑蝴蝶",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 爱情 / 悬疑",
    "tags": [
      "间谍",
      "战后",
      "身份互换",
      "女性"
    ],
    "oneLine": "二战后两个容貌相似的女人互换身份：一个想逃往美国，一个想留在欧洲寻找失踪的恋人。",
    "cover": "./52.jpg",
    "url": "./video-1102.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1103",
    "title": "甜苦汽车旅店",
    "region": "中国台湾",
    "type": "电影",
    "year": "2020",
    "genre": "剧情 / 爱情",
    "tags": [
      "文艺",
      "漂泊",
      "人生百态",
      "过客"
    ],
    "oneLine": "一间破旧的汽车旅馆里，每个房间都藏着一个关于“甜”与“苦”的秘密，老板娘是唯一的聆听者。",
    "cover": "./53.jpg",
    "url": "./video-1103.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1104",
    "title": "我的天才宝贝",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 家庭 / 教育",
    "tags": [
      "神童",
      "父女关系",
      "成长压力"
    ],
    "oneLine": "7岁的数学天才被大学录取，父亲却在送她入学途中故意迷路，想偷走她的童年。",
    "cover": "./54.jpg",
    "url": "./video-1104.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1105",
    "title": "战刀屠狼",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "动作 / 战争",
    "tags": [
      "特种兵",
      "边境",
      "复仇",
      "硬核枪战"
    ],
    "oneLine": "一名退役特种兵的弟弟被贩毒集团杀害，他拿起战刀重返边境，一人对抗整支武装。",
    "cover": "./55.jpg",
    "url": "./video-1105.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1106",
    "title": "假期",
    "region": "西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "喜剧 / 剧情",
    "tags": [
      "家庭",
      "海岛",
      "谎言",
      "和解"
    ],
    "oneLine": "一个已经离婚十年的家庭为了不让孩子失望，决定在加那利群岛假装再演一次“完美度假”。",
    "cover": "./56.jpg",
    "url": "./video-1106.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1107",
    "title": "阿比盖尔",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚",
    "tags": [
      "吸血鬼",
      "反转",
      "密室"
    ],
    "oneLine": "六名绑匪绑架了黑帮老大的12岁女儿阿比盖尔，却发现这个小女孩是一个活了几个世纪的吸血鬼。",
    "cover": "./57.jpg",
    "url": "./video-1107.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1108",
    "title": "顽童怪盗",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作喜剧",
    "tags": [
      "儿童",
      "神偷",
      "恶作剧",
      "团队合作"
    ],
    "oneLine": "七个被社会抛弃的“问题儿童”，组成史上最年轻的怪盗团，目标是偷走一个黑心富豪的“良心”。",
    "cover": "./58.jpg",
    "url": "./video-1108.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1109",
    "title": "功夫熊猫",
    "region": "美国",
    "type": "电影",
    "year": "2008",
    "genre": "喜剧 / 动作 / 动画",
    "tags": [
      "功夫梦",
      "肥仔逆袭",
      "动物武术",
      "师傅"
    ],
    "oneLine": "一只又懒又胖的面馆熊猫，意外被选为“神龙大侠”，他必须学会用吃包子的力气打败太狼。",
    "cover": "./59.jpg",
    "url": "./video-1109.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1110",
    "title": "彗星路西法",
    "region": "日本",
    "type": "动画剧集",
    "year": "2015",
    "genre": "科幻，冒险，机甲",
    "tags": [
      "机甲",
      "萝莉",
      "异世界",
      "奇幻星球",
      "宝石"
    ],
    "oneLine": "少年在蓝色彗星坠落的矿坑里捡到一个会说话的萝莉，她掌握着星球的命运。",
    "cover": "./60.jpg",
    "url": "./video-1110.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1111",
    "title": "漫长的路",
    "region": "英国",
    "type": "电视剧",
    "year": "2017",
    "genre": "剧情, 历史",
    "tags": [
      "公路",
      "一战",
      "回乡"
    ],
    "oneLine": "一战结束，一名英国士兵断了一条腿，从法国加来走回伦敦，只为了把战友的遗言带给他的未婚妻。",
    "cover": "./61.jpg",
    "url": "./video-1111.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1112",
    "title": "一炮而红",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧/剧情",
    "tags": [
      "网红讽刺",
      "短视频乱象",
      "黑色幽默"
    ],
    "oneLine": "一个五音不全的农村大妈因为直播事故意外爆红，但她的经纪人其实是被通缉的网络诈骗犯。",
    "cover": "./62.jpg",
    "url": "./video-1112.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1113",
    "title": "复核调查",
    "region": "法国",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": [
      "司法腐败",
      "旧案重查",
      "记者的执着",
      "阶层冲突"
    ],
    "oneLine": "一位坐轮椅的资深记者，在调查一起旧连环杀人案时，发现自己当年的车祸，竟是凶手为阻止真相而制造的“警告”。",
    "cover": "./63.jpg",
    "url": "./video-1113.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1114",
    "title": "霹雳皇龙纪",
    "region": "中国台湾",
    "type": "TV series",
    "year": "2006",
    "genre": "武侠, 奇幻, 布袋戏",
    "tags": [
      "霹雳布袋戏",
      "长篇",
      "谋略",
      "吞佛童子",
      "经典"
    ],
    "oneLine": "为了破解“六祸禁地”的诅咒，一页书再次踏入红尘，却发现正道巨擘竟是幕后黑手。",
    "cover": "./64.jpg",
    "url": "./video-1114.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1115",
    "title": "祖与占",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 爱情",
    "tags": [
      "三角关系",
      "文学改编",
      "巴黎",
      "黑白摄影",
      "存在主义"
    ],
    "oneLine": "一对挚友爱上同一位女子，他们在战火与情欲中缔结了超越常人的情感契约。",
    "cover": "./65.jpg",
    "url": "./video-1115.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1116",
    "title": "机械战士",
    "region": "美国",
    "type": "电影",
    "year": "1994",
    "genre": "动作, 科幻, 惊悚",
    "tags": [
      "改造人",
      "复仇",
      "B级片",
      "硬汉"
    ],
    "oneLine": "惨遭灭门的特种兵被改造成半机械体，他用军方机密武器向黑帮展开血腥复仇。",
    "cover": "./66.jpg",
    "url": "./video-1116.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1117",
    "title": "直面疾风吧",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "励志, 青春, 运动",
    "tags": [
      "帆船运动",
      "女性成长",
      "逆袭爽剧",
      "海洋竞技",
      "热血群像"
    ],
    "oneLine": "她被省队开除时说“你根本不适合帆船”，三年后她以业余选手身份，站上了亚运会资格赛的起航线。",
    "cover": "./67.jpg",
    "url": "./video-1117.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1118",
    "title": "神秘博士：红宝石路教堂",
    "region": "英国",
    "type": "电视剧特别篇",
    "year": "2025",
    "genre": "科幻悬疑",
    "tags": [
      "神秘博士",
      "时间旅行",
      "教堂",
      "恶魔契约",
      "圣诞特辑"
    ],
    "oneLine": "塔迪斯降落在一条被诅咒的红砖路上，每一年的圣诞夜，这里都会有人神秘消失。",
    "cover": "./68.jpg",
    "url": "./video-1118.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1119",
    "title": "斯坦·李",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "传记 / 奇幻 / 剧情",
    "tags": [
      "漫威之父",
      "平行宇宙",
      "客串之王"
    ],
    "oneLine": "斯坦·李生前在每一部漫威电影中客串，其实是在不同的平行宇宙里寻找他失踪的妻子。",
    "cover": "./69.jpg",
    "url": "./video-1119.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1120",
    "title": "元祖观察之死无对证",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 科幻， 悬疑",
    "tags": [
      "平行宇宙",
      "刺客联盟",
      "历史修正",
      "暴力美学"
    ],
    "oneLine": "一个能穿越时间消除“异常个体”的秘密观察员，在杀死2023年的自己后，陷入了无限循环的悖论。",
    "cover": "./70.jpg",
    "url": "./video-1120.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1121",
    "title": "决战玄武门",
    "region": "中国香港",
    "type": "电影",
    "year": "1990",
    "genre": "历史、动作、战争",
    "tags": [
      "唐朝",
      "李世民",
      "兄弟相残",
      "宫廷政变"
    ],
    "oneLine": "公元626年，秦王李世民在玄武门设下埋伏，与大哥太子李建成、三弟李元吉展开生死对决。",
    "cover": "./71.jpg",
    "url": "./video-1121.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1122",
    "title": "独立游戏时代",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 青春",
    "tags": [
      "像素风",
      "车库创业",
      "友谊"
    ],
    "oneLine": "三个辍学青年在车库里做出爆款游戏，却在上市前夜发现代码里藏着一个人的遗书。",
    "cover": "./72.jpg",
    "url": "./video-1122.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1123",
    "title": "丧妖集聚",
    "region": "泰国",
    "type": "电影",
    "year": "2018",
    "genre": "恐怖 / 民俗 / 悬疑",
    "tags": [
      "泰国巫术",
      "死亡仪式",
      "古曼童",
      "集聚",
      "连锁死亡"
    ],
    "oneLine": "泰国北部一个村庄，每年雨季最后一天，所有死于非命的丧妖会聚集在村口大榕树下，等一个活人领他们回家。",
    "cover": "./73.jpg",
    "url": "./video-1123.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1124",
    "title": "梅格雷",
    "region": "英国 / 法国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "侦探",
      "经典改编",
      "心理分析"
    ],
    "oneLine": "老年梅格雷遭遇职业生涯最大挑战：一名连环杀手每隔三天寄来一块人体拼图，要求他拼出最后一案的真相。",
    "cover": "./74.jpg",
    "url": "./video-1124.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1125",
    "title": "七日血",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 犯罪",
    "tags": [
      "限时追凶",
      "连环杀手",
      "法医鉴定",
      "雨夜",
      "心理博弈"
    ],
    "oneLine": "七天内连续七起模仿圣经七宗罪的命案，菜鸟法医与堕落警探的联手生死时速。",
    "cover": "./75.jpg",
    "url": "./video-1125.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1126",
    "title": "龙影侠粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "1992",
    "genre": "动作 / 奇幻 / 武侠",
    "tags": [
      "亚视",
      "龙",
      "异能",
      "粤语经典"
    ],
    "oneLine": "一名普通裁缝体内封印着龙魂，每当他打喷嚏，就会变身拥有神力的龙影侠。",
    "cover": "./76.jpg",
    "url": "./video-1126.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1127",
    "title": "那个重逢的夜晚",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "爱情，奇幻，剧情",
    "tags": [
      "时空回溯",
      "遗憾",
      "毕业季",
      "告别"
    ],
    "oneLine": "毕业典礼前夜，男主获得五次穿越回过去的机会，他想修正所有遗憾，却发现每次改变都会让另一个人受伤。",
    "cover": "./77.jpg",
    "url": "./video-1127.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1128",
    "title": "香草",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "爱情, 剧情",
    "tags": [
      "美食",
      "治愈",
      "绝症",
      "文艺"
    ],
    "oneLine": "一个失去味觉的米其林甜品师，爱上了只能尝出香草味的临终女孩。",
    "cover": "./78.jpg",
    "url": "./video-1128.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1129",
    "title": "布袋和尚1999国语",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "1999",
    "genre": "古装 / 神话",
    "tags": [
      "布袋戏",
      "佛教",
      "单元剧",
      "哲理",
      "怀旧"
    ],
    "oneLine": "布袋和尚用一只乾坤袋，收尽人间贪嗔痴，却收不下一滴真心的眼泪。",
    "cover": "./79.jpg",
    "url": "./video-1129.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1130",
    "title": "放牛班快乐颂",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2008",
    "genre": "喜剧 / 音乐 / 教育",
    "tags": [
      "音乐",
      "教育",
      "问题少年",
      "合唱团",
      "治愈",
      "乡村"
    ],
    "oneLine": "一个被开除的音乐老师跑到乡下放牛班，用黑人灵歌让全年级倒数第一的班级唱进了巴黎歌剧院。",
    "cover": "./80.jpg",
    "url": "./video-1130.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1131",
    "title": "神圣之夜：恶魔猎人",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 奇幻",
    "tags": [
      "圣诞节",
      "反英雄",
      "黑色幽默"
    ],
    "oneLine": "圣诞老人从烟囱摔下来死了，一个洛杉矶失业脱口秀演员被迫接替他的工作——猎杀圣诞恶魔。",
    "cover": "./81.jpg",
    "url": "./video-1131.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1132",
    "title": "尸体解剖",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑，犯罪，惊悚",
    "tags": [
      "法医",
      "医学院",
      "连环杀人",
      "解剖",
      "密室"
    ],
    "oneLine": "医学院新生解剖第一具大体老师时，在其胃里发现了写着自己名字的求救纸条。",
    "cover": "./82.jpg",
    "url": "./video-1132.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1133",
    "title": "偷吻",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情",
    "tags": [
      "法式浪漫",
      "身份错位",
      "文学改编感"
    ],
    "oneLine": "一个替身女演员在拍吻戏时总被男主真吻，她以为是入戏太深，直到片场停电时那个吻来自另一个人。",
    "cover": "./83.jpg",
    "url": "./video-1133.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1134",
    "title": "药物过量",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 惊悚",
    "tags": [
      "反转",
      "卧底",
      "制药黑幕",
      "极限逃生"
    ],
    "oneLine": "一名卧底缉毒警被强制注射过量实验性毒品，他必须在神志丧失前逃出实验室并找到解药。",
    "cover": "./84.jpg",
    "url": "./video-1134.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1135",
    "title": "长相黐守",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情、剧情",
    "tags": [
      "港味",
      "执念",
      "宿命感"
    ],
    "oneLine": "一对分手七年的情侣，因为整容成对方新欢的样子，又重新爱上了彼此。",
    "cover": "./85.jpg",
    "url": "./video-1135.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1136",
    "title": "红伶奇缘",
    "region": "中国香港",
    "type": "电影",
    "year": "1994",
    "genre": "爱情 / 戏曲",
    "tags": [
      "粤剧名伶",
      "穿越",
      "民国",
      "戏班恩怨"
    ],
    "oneLine": "现代戏曲研究生意外穿越回1930年代，成了当红粤剧花旦，却发现自己必须演完一场注定要出人命的《紫钗记》。",
    "cover": "./86.jpg",
    "url": "./video-1136.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1137",
    "title": "最强会长黑神第一季",
    "region": "日本",
    "type": "剧集",
    "year": "2012",
    "genre": "动画、校园、超能力",
    "tags": [
      "箱庭学园",
      "完美会长",
      "异常性",
      "西尾维新"
    ],
    "oneLine": "完美无缺的学生会长黑神目泷，为了满足他人的愿望，接受全校学生的任何咨询，哪怕是要挑战超能力者。",
    "cover": "./87.jpg",
    "url": "./video-1137.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1138",
    "title": "爱在惊涛骇浪时",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，灾难",
    "tags": [
      "海上漂流",
      "绝境求生",
      "契约恋人",
      "阶级差异",
      "救赎"
    ],
    "oneLine": "船难后，贵族小姐与船员逃上救生艇，用一场谎言中的爱对抗死亡。",
    "cover": "./88.jpg",
    "url": "./video-1138.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1139",
    "title": "大偷袭",
    "region": "美国 / 菲律宾",
    "type": "电影",
    "year": "2024",
    "genre": "战争动作",
    "tags": [
      "二战",
      "战俘营",
      "游骑兵",
      "极限救援",
      "真实事件改编"
    ],
    "oneLine": "1945年，一支小分队深入敌后30公里，要在48小时内救出500名即将被处决的战俘。",
    "cover": "./89.jpg",
    "url": "./video-1139.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1140",
    "title": "杀手胭脂泪粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "动作/爱情/犯罪",
    "tags": [
      "女杀手",
      "粤语残片风格",
      "江湖复仇",
      "胭脂",
      "枪战"
    ],
    "oneLine": "香港最冷血的女杀手在一次任务中，发现目标竟是失散十五年的亲妹妹。",
    "cover": "./90.jpg",
    "url": "./video-1140.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1141",
    "title": "摇曳百合3",
    "region": "日本",
    "type": "动画剧集 (TV)",
    "year": "2026",
    "genre": "喜剧 / 日常 / 百合",
    "tags": [
      "女子中学生",
      "社团",
      "恋爱喜剧",
      "治愈"
    ],
    "oneLine": "娱乐部升入高三，面临废部和升学双重压力，她们决定用最后一年拍一部关于“百合”的电影来留下回忆。",
    "cover": "./91.jpg",
    "url": "./video-1141.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1142",
    "title": "金色的西方",
    "region": "意大利 / 西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "西部 / 剧情",
    "tags": [
      "淘金热",
      "赎罪",
      "荒漠",
      "枪手",
      "父子"
    ],
    "oneLine": "一个年迈的赏金猎人带着他痛恨的儿子穿越死亡荒漠，只为送还一袋沾血的黄金。",
    "cover": "./92.jpg",
    "url": "./video-1142.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1143",
    "title": "亲爱的冤家",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧， 爱情， 家庭",
    "tags": [
      "斗气冤家",
      "离婚不离家",
      "中年浪漫",
      "方言"
    ],
    "oneLine": "离婚五年的前夫妻因拆迁被迫同居一室，为了赶走对方，他们使出浑身解数，却重燃爱火。",
    "cover": "./93.jpg",
    "url": "./video-1143.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1144",
    "title": "博斯：传承第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪 / 剧情 / 悬疑",
    "tags": [
      "硬汉侦探",
      "冷硬派",
      "退休再就业",
      "洛城风景",
      "司法不公"
    ],
    "oneLine": "退休的传奇警探哈里·博斯成为私家侦探后，接到的第一案就是证明一个死囚的清白。",
    "cover": "./94.jpg",
    "url": "./video-1144.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1145",
    "title": "兄弟英雄",
    "region": "中国",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 犯罪， 剧情",
    "tags": [
      "兄弟情",
      "卧底",
      "港风",
      "枪战"
    ],
    "oneLine": "一对失散二十年的亲兄弟，重逢时一个是警察，一个是毒枭，他们必须在亲情与正义之间做出选择。",
    "cover": "./95.jpg",
    "url": "./video-1145.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1146",
    "title": "六胞惊奇",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 家庭",
    "tags": [
      "多胞胎",
      "认亲",
      "闹剧"
    ],
    "oneLine": "花心富豪遗产条件竟是让六个素未谋面的亲生孩子必须同住一年，全家鸡飞狗跳。",
    "cover": "./96.jpg",
    "url": "./video-1146.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1147",
    "title": "冷月伴君归",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2022",
    "genre": "古装，悬疑，爱情",
    "tags": [
      "替身王妃",
      "权谋博弈",
      "双面男主"
    ],
    "oneLine": "和亲公主离奇死在半路，女替身被迫披上嫁衣，却发现新郎竟是她失踪三年的恋人。",
    "cover": "./97.jpg",
    "url": "./video-1147.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1148",
    "title": "亡命五杰",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作，犯罪，惊悚",
    "tags": [
      "西部",
      "复仇",
      "劫匪",
      "团队",
      "公路"
    ],
    "oneLine": "五个从重刑犯监狱逃出的陌生人，必须穿越百里荒漠，还要躲避赏金猎人的围剿。",
    "cover": "./98.jpg",
    "url": "./video-1148.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1149",
    "title": "囧爸爸",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 家庭 / 公路",
    "tags": [
      "互换身体",
      "育儿",
      "中年危机",
      "单亲爸爸",
      "春运"
    ],
    "oneLine": "工作狂单亲爸爸和叛逆女儿意外互换了身体，此时正值春运，他必须顶着女儿的身体去赶一场重要的面试。",
    "cover": "./99.jpg",
    "url": "./video-1149.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1150",
    "title": "第三次浪潮",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻，惊悚，政治",
    "tags": [
      "人工智能",
      "民主实验",
      "社会寓言",
      "细思极恐"
    ],
    "oneLine": "一个高中生进行的社会实验失控了，参与者们正在以民主的名义，亲手创造一个新世界。",
    "cover": "./100.jpg",
    "url": "./video-1150.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1151",
    "title": "伦敦格杀令",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "动作、惊悚",
    "tags": [
      "退役特工",
      "黑警",
      "伦敦地下城",
      "刺杀令",
      "限时救援"
    ],
    "oneLine": "前军情六处特工被栽赃杀害首相，他必须在48小时内穿越伦敦地下废弃地铁网络，找出真凶，洗清罪名。",
    "cover": "./101.jpg",
    "url": "./video-1151.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1152",
    "title": "顶级生活 第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情、黑色喜剧、悬疑",
    "tags": [
      "富豪",
      "私人管家",
      "谋杀",
      "阶层",
      "每集一反转"
    ],
    "oneLine": "为全球1%富豪服务的顶级管家公司“白手套”，每位客户都离奇死亡，而凶手就藏在管家团队里。",
    "cover": "./102.jpg",
    "url": "./video-1152.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1153",
    "title": "沉默的心",
    "region": "丹麦",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 家庭",
    "tags": [
      "北欧",
      "死亡",
      "家庭聚会",
      "悲喜剧"
    ],
    "oneLine": "患有绝症的母亲决定在生日聚会上进行安乐死，家人们带着各自的秘密和私心回到了这个沉默的家。",
    "cover": "./103.jpg",
    "url": "./video-1153.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1154",
    "title": "奶站风波",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2027",
    "genre": "剧情、悬疑、社会",
    "tags": [
      "农村题材",
      "食品安全",
      "官商勾结",
      "女性力量"
    ],
    "oneLine": "北方小城的“放心奶站”被爆出致癌物，一位单亲妈妈发现，这口黑锅正砸向所有无辜的奶农。",
    "cover": "./104.jpg",
    "url": "./video-1154.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1155",
    "title": "肝脏大夫",
    "region": "日本",
    "type": "电影",
    "year": "1998",
    "genre": "剧情， 喜剧， 战争",
    "tags": [
      "黑泽明",
      "战后反思",
      "医疗",
      "荒诞"
    ],
    "oneLine": "二战末期，一个痴迷于研究肝炎的古怪医生，在战火纷飞的小城里上演着荒诞的治疗闹剧。",
    "cover": "./105.jpg",
    "url": "./video-1155.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1156",
    "title": "漂亮的公主",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻童话",
    "tags": [
      "反向童话",
      "容貌焦虑",
      "镜中世界"
    ],
    "oneLine": "童话王国规定，只有“最漂亮”的女孩才能当公主，但每个当选的公主都会在加冕当天被镜子吸进去，从此再也没人见过她们。",
    "cover": "./106.jpg",
    "url": "./video-1156.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1157",
    "title": "永远的三丁目的夕阳2",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "genre": "剧情, 家庭",
    "tags": [
      "昭和怀旧",
      "东京塔",
      "邻里",
      "治愈"
    ],
    "oneLine": "1959年东京塔建设期间，三丁目的穷街坊们各自面对失去与等待，夕阳依旧每天照常落下。",
    "cover": "./107.jpg",
    "url": "./video-1157.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1158",
    "title": "怪异同床人",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧, 爱情, 奇幻",
    "tags": [
      "灵魂互换",
      "契约婚姻",
      "欢脱",
      "治愈",
      "韩剧"
    ],
    "oneLine": "一个恐婚的富二代和一个渴望结婚的穷家女因意外灵魂互换，被迫以对方的身份筹备同一场婚礼。",
    "cover": "./108.jpg",
    "url": "./video-1158.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1159",
    "title": "有情人粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 剧情, 都市",
    "tags": [
      "香港",
      "都市情感",
      "粤语原声",
      "群像"
    ],
    "oneLine": "香港茶餐厅里四个“有情人”的故事：有人想爱不敢爱，有人爱了不能爱，有人爱过不懂爱。",
    "cover": "./109.jpg",
    "url": "./video-1159.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1160",
    "title": "恶搞之家第二十一季",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "喜剧 / 动画",
    "tags": [
      "成人动画",
      "无厘头",
      "讽刺",
      "家庭",
      "笑点密集"
    ],
    "oneLine": "彼得这次惹恼了整个镇子，因为他们把奶酪节奖金全换成了香菜冰淇淋。",
    "cover": "./110.jpg",
    "url": "./video-1160.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1161",
    "title": "雷神4：爱与雷霆",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作、奇幻、喜剧",
    "tags": [
      "漫威",
      "北欧神话",
      "搞笑",
      "天体",
      "反派"
    ],
    "oneLine": "雷神索尔意外被贬为某个偏远星系的天体测量员，他必须用数学而不是锤子阻止一场宇宙级离婚官司。",
    "cover": "./111.jpg",
    "url": "./video-1161.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1162",
    "title": "梨花一枝春带雨",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情，爱情",
    "tags": [
      "古典美学",
      "戏曲",
      "师生"
    ],
    "oneLine": "川剧名角年老失声，在消沉中遇到一个天赋异禀的孤儿，她用尽余生教他唱戏，他却用一生去懂她当年为什么离开舞台。",
    "cover": "./112.jpg",
    "url": "./video-1162.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1163",
    "title": "三五成群",
    "region": "中国香港",
    "type": "电影",
    "year": "2011",
    "genre": "剧情/黑色幽默",
    "tags": [
      "小人物",
      "荒诞",
      "多线叙事"
    ],
    "oneLine": "五个不同身份的香港小人物，因为一张中了头奖却丢失的彩票，命运纠缠在一起。",
    "cover": "./113.jpg",
    "url": "./video-1163.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1164",
    "title": "请勿打扰",
    "region": "美国 / 法国",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧, 爱情, 剧情",
    "tags": [
      "酒店隔离",
      "邻里纠纷",
      "日久生情"
    ],
    "oneLine": "当一对离婚夫妻被意外的酒店封锁困在同一间房里，他们不得不重新学习如何相处。",
    "cover": "./114.jpg",
    "url": "./video-1164.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1165",
    "title": "十日寻人",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "绑架",
      "时间限制",
      "父亲",
      "社会派"
    ],
    "oneLine": "女儿被绑架，绑匪要求父亲在十天内凭自己的力量找到她，而且不许报警。",
    "cover": "./115.jpg",
    "url": "./video-1165.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1166",
    "title": "绝地逃亡",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 犯罪",
    "tags": [
      "卧底",
      "东南亚",
      "飙车",
      "兄弟情"
    ],
    "oneLine": "一名假死脱身的黑警在金三角被昔日搭档追杀，却发现追他的人也是卧底。",
    "cover": "./116.jpg",
    "url": "./video-1166.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1167",
    "title": "一九九五年闰八月",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 悬疑 / 历史",
    "tags": [
      "1995年",
      "台海危机",
      "家庭记忆",
      "政治惊悚"
    ],
    "oneLine": "1995年夏天，金门一户普通人家的父亲突然消失，留下的日记本里满是军事观测记录。",
    "cover": "./117.jpg",
    "url": "./video-1167.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1168",
    "title": "不、可、思、议呢宝贝",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻家庭",
    "tags": [
      "许愿",
      "宝贝",
      "亲情",
      "脑洞",
      "治愈"
    ],
    "oneLine": "五岁小女孩对着生日蜡烛许愿“想让妈妈重新笑”，第二天，妈妈变成了一个永远在笑的陶瓷娃娃。",
    "cover": "./118.jpg",
    "url": "./video-1168.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1169",
    "title": "真爱之书",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 奇幻",
    "tags": [
      "书籍",
      "愿望",
      "双向奔赴",
      "治愈"
    ],
    "oneLine": "一本旧书店里的空白书，写下的每一个名字都会成为命中注定之人。",
    "cover": "./119.jpg",
    "url": "./video-1169.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1170",
    "title": "巴格达来信",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "战争 / 剧情",
    "tags": [
      "书信",
      "亲情",
      "伊拉克",
      "催泪",
      "真实改编"
    ],
    "oneLine": "一个英国士兵在巴格达捡到一叠沾满血迹的信件，决定替写信人完成遗愿。",
    "cover": "./120.jpg",
    "url": "./video-1170.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1171",
    "title": "北斗前锋粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1998",
    "genre": "动作, 警匪",
    "tags": [
      "卧底",
      "兄弟情",
      "港剧黄金时代",
      "双雄"
    ],
    "oneLine": "卧底警察与黑帮二当家成为生死兄弟，抓捕当天才发现对方也是卧底，而且两人来自不同警署。",
    "cover": "./121.jpg",
    "url": "./video-1171.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1172",
    "title": "恋爱编织梦",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 奇幻",
    "tags": [
      "编织",
      "记忆羊毛",
      "治愈",
      "时空错位",
      "手工艺"
    ],
    "oneLine": "一家深夜营业的编织店，只要你提供一段记忆，店主就能织出那个人穿过的毛衣——哪怕对方还没出生。",
    "cover": "./122.jpg",
    "url": "./video-1172.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1173",
    "title": "子夜招魂",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 惊悚 / 民俗",
    "tags": [
      "民俗恐怖",
      "招魂",
      "诅咒",
      "弃尸地",
      "心理惊悚"
    ],
    "oneLine": "网红探险队直播召唤“子夜新娘”，不料真的将她唤醒，她不是鬼，而是被困在时间里的痛苦怨灵。",
    "cover": "./123.jpg",
    "url": "./video-1173.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1174",
    "title": "龙凤争挂帅",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 喜剧 / 古装",
    "tags": [
      "粤剧改编",
      "女将",
      "反串",
      "动作喜剧",
      "港味"
    ],
    "oneLine": "古代女将军为抢回帅印，不得不和男扮女装的戏子搭档，上演一出啼笑皆非的夺帅大戏。",
    "cover": "./124.jpg",
    "url": "./video-1174.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1175",
    "title": "转运姐妹花",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧、奇幻",
    "tags": [
      "姐妹情",
      "运气交换",
      "爽感"
    ],
    "oneLine": "霉运缠身的妹妹与人生赢家姐姐意外交换了运气，却发现对方的灾难才刚刚开始。",
    "cover": "./125.jpg",
    "url": "./video-1175.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1176",
    "title": "情迷佳人",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "怀旧",
      "错位人生",
      "书信",
      "港风"
    ],
    "oneLine": "他帮已故好友代笔回信，却不知不觉爱上了信那头的女人——而她等的人，其实早已不在。",
    "cover": "./126.jpg",
    "url": "./video-1176.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1177",
    "title": "辐射",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "科幻, 冒险, 末日",
    "tags": [
      "废土",
      "游戏改编",
      "避难所",
      "黑色幽默"
    ],
    "oneLine": "33号避难所的一名“天真”居民被迫踏入废土，才发现她学的所有“常识”全是谎言。",
    "cover": "./127.jpg",
    "url": "./video-1177.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1178",
    "title": "铁面急先锋",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "黑警",
      "蒙面义警",
      "巴黎",
      "以暴制暴"
    ],
    "oneLine": "一名被诬陷的警察戴上铁面具，化身地下义警，用自己的方式清洗巴黎的腐败警局。",
    "cover": "./128.jpg",
    "url": "./video-1178.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1179",
    "title": "蝴蝶夫人的现代家庭",
    "region": "日本/美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "喜剧/剧情",
    "tags": [
      "文化冲突",
      "重组家庭",
      "东西方差异",
      "政治不正确"
    ],
    "oneLine": "当《蝴蝶夫人》的悲剧女主角在现代复活，她发现自己成了恶毒后妈。",
    "cover": "./129.jpg",
    "url": "./video-1179.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1180",
    "title": "黑莓",
    "region": "加拿大",
    "type": "电影",
    "year": "2023",
    "genre": "传记，剧情",
    "tags": [
      "科技",
      "创业",
      "失败",
      "黑色幽默"
    ],
    "oneLine": "黑莓手机从巅峰到崩盘的疯狂故事，两个极客如何创造历史，又如何被自己发明的设备杀死。",
    "cover": "./130.jpg",
    "url": "./video-1180.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1181",
    "title": "忧罗娜传奇",
    "region": "墨西哥 / 美国",
    "type": "电影",
    "year": "2022",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "拉美民间传说",
      "女鬼",
      "反殖民",
      "复仇",
      "女性力量"
    ],
    "oneLine": "被殖民者杀害的印第安女子在泉水中化为哭泣女鬼，三百年后发现杀死她的那个西班牙军官转世成了当地镇长。",
    "cover": "./131.jpg",
    "url": "./video-1181.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1182",
    "title": "爷爷的微笑",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "阿尔茨海默症",
      "祖孙",
      "记忆",
      "治愈",
      "催泪"
    ],
    "oneLine": "患阿尔茨海默症的爷爷忘记了一切，却每天去幼儿园假装接孙女放学，只因那是他仅存的记忆。",
    "cover": "./132.jpg",
    "url": "./video-1182.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1183",
    "title": "去托马霍克的票",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "西部，惊悚，剧情",
    "tags": [
      "沙漠",
      "列车",
      "枪手",
      "票根",
      "赎罪"
    ],
    "oneLine": "年迈枪手买了一张去死亡小镇的单程票，却发现同车厢全是他的复仇目标。",
    "cover": "./133.jpg",
    "url": "./video-1183.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1184",
    "title": "明亮的心",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭 / 体育",
    "tags": [
      "盲人跳绳",
      "师生情",
      "逆袭"
    ],
    "oneLine": "一位失明的退役跳绳运动员，带领一群留守儿童通过跳绳找回自信，却发现自己一直在欺骗大家。",
    "cover": "./134.jpg",
    "url": "./video-1184.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1185",
    "title": "托玛斯曼之豪门世家",
    "region": "德国",
    "type": "电视剧",
    "year": "2026",
    "genre": "剧情, 家庭, 历史",
    "tags": [
      "工业革命",
      "家族兴衰",
      "兄弟阋墙",
      "史诗气质"
    ],
    "oneLine": "19世纪末，德国纺织巨头托玛斯曼家族的老爷突然暴毙，留下的不是遗产分配书，而是一本记录全家族肮脏秘密的日记。",
    "cover": "./135.jpg",
    "url": "./video-1185.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1186",
    "title": "三个强盗之龙的传承",
    "region": "中国大陆",
    "type": "动画电影",
    "year": "2023",
    "genre": "动画，冒险，奇幻",
    "tags": [
      "国风",
      "怪兽",
      "友情",
      "成长"
    ],
    "oneLine": "三个不靠谱的“坏蛋”强盗，意外收养了一颗龙蛋，并就此踏上了送“小龙人”回家的啼笑皆非之旅。",
    "cover": "./136.jpg",
    "url": "./video-1186.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1187",
    "title": "钢的琴",
    "region": "中国大陆",
    "type": "电影",
    "year": "2010",
    "genre": "剧情 / 喜剧",
    "tags": [
      "东北下岗",
      "父爱",
      "工人阶级",
      "黑色幽默"
    ],
    "oneLine": "为了留住女儿，下岗工人决定用工厂废料亲手造一架钢的琴。",
    "cover": "./137.jpg",
    "url": "./video-1187.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1188",
    "title": "超急情圣",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "喜剧",
    "tags": [
      "恋爱",
      "尴尬",
      "话痨",
      "独立",
      "荒诞"
    ],
    "oneLine": "社交恐惧男发明了一款“告白 APP”，结果手机被黑客入侵反向替他群发所有暗恋对象。",
    "cover": "./138.jpg",
    "url": "./video-1188.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1189",
    "title": "正如伊索所愿",
    "region": "法国 / 希腊",
    "type": "电影",
    "year": "2024",
    "genre": "寓言 / 哲学 / 剧情",
    "tags": [
      "动物",
      "现代寓言",
      "律师",
      "因果报应",
      "道德困境"
    ],
    "oneLine": "一名冷酷的动物权利律师被雷劈后，发现自己能听懂动物说话，而且动物们要告人类。",
    "cover": "./139.jpg",
    "url": "./video-1189.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1190",
    "title": "逢凶化吉",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻动作",
    "tags": [
      "风水斗法",
      "都市传说",
      "护身符"
    ],
    "oneLine": "旺角一间破旧风水档的骗子师傅，意外发现自己随手卖给客人的“开光护身符”竟然真的能挡灾，而一个跨国杀手组织正想用科学手段破解他的“符咒”秘密。",
    "cover": "./140.jpg",
    "url": "./video-1190.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1191",
    "title": "悲剧女孩",
    "region": "美国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 恐怖",
    "tags": [
      "女性复仇",
      "黑色幽默",
      "反转结局"
    ],
    "oneLine": "小镇上接连发生女生失踪案，唯一的幸存者却发现，凶手是那个看似懦弱却总能预知危险的闺蜜。",
    "cover": "./141.jpg",
    "url": "./video-1191.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1192",
    "title": "花之锁",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑、爱情、剧情",
    "tags": [
      "时间循环",
      "神秘花店",
      "命运",
      "治愈"
    ],
    "oneLine": "花店女主人拥有一把能锁住时间的花剪，她用它拯救顾客的遗憾，却无法挽回自己破碎的婚姻。",
    "cover": "./142.jpg",
    "url": "./video-1192.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1193",
    "title": "燃烧的秘密",
    "region": "韩国",
    "type": "电视剧",
    "year": "2021",
    "genre": "悬疑、家庭、伦理",
    "tags": [
      "火灾",
      "复仇",
      "豪门",
      "秘密",
      "反转"
    ],
    "oneLine": "一场豪宅大火烧出三代人的黑暗秘密，幸存者各有隐瞒。",
    "cover": "./143.jpg",
    "url": "./video-1193.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1194",
    "title": "阿虎",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "动作亲情",
    "tags": [
      "泰拳",
      "自闭症",
      "父子",
      "地下拳场",
      "救赎"
    ],
    "oneLine": "一个自闭症男孩将泰拳手父亲视为“驯兽师”，而父亲必须在擂台上打赢最后一场，才能赢回儿子的抚养权。",
    "cover": "./144.jpg",
    "url": "./video-1194.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1195",
    "title": "自由主义者：间谍的时代",
    "region": "英国/俄罗斯",
    "type": "电影",
    "year": "2019",
    "genre": "惊悚/历史",
    "tags": [
      "冷战",
      "双面间谍",
      "政治"
    ],
    "oneLine": "冷战末期，一位支持西方自由的苏联克格勃特工，发现自己只是美英用来颠覆政权的棋子。",
    "cover": "./145.jpg",
    "url": "./video-1195.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1196",
    "title": "歌台艳帜",
    "region": "香港",
    "type": "电影",
    "year": "1991",
    "genre": "歌舞、情色、剧情",
    "tags": [
      "夜总会",
      "歌女",
      "黑帮",
      "三角恋",
      "时代挽歌"
    ],
    "oneLine": "八十年代香港歌厅最后一夜，三个女人的歌声将揭开一桩尘封五年的命案。",
    "cover": "./146.jpg",
    "url": "./video-1196.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1197",
    "title": "恶狼年代",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪 / 年代",
    "tags": [
      "东北往事",
      "硬核追凶",
      "时代变迁"
    ],
    "oneLine": "1999年东北小城，一具尸骨牵出横跨二十年的连环命案，老刑警与嫌犯之子联手追凶。",
    "cover": "./147.jpg",
    "url": "./video-1197.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1198",
    "title": "脑髓地狱",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "科幻， 悬疑， 恐怖",
    "tags": [
      "脑科学",
      "记忆移植",
      "疯人院",
      "精神污染",
      "认知崩溃"
    ],
    "oneLine": "男子在精神病院醒来，医生告诉他大脑中被植入了九十九个连环杀人犯的记忆，而他的真实身份是最后一个受害者。",
    "cover": "./148.jpg",
    "url": "./video-1198.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1199",
    "title": "变羊记",
    "region": "台湾",
    "type": "电影",
    "year": "2017",
    "genre": "奇幻 / 喜剧 / 家庭",
    "tags": [
      "诅咒",
      "乡村奇幻",
      "婆媳",
      "变身",
      "黑色幽默"
    ],
    "oneLine": "脾气暴躁的婆婆被巫师变成一只羊，儿媳只好牵着这只会说脏话的羊去参加乡镇调解大会。",
    "cover": "./149.jpg",
    "url": "./video-1199.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1200",
    "title": "妙手仁心2",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2005",
    "genre": "医疗，剧情",
    "tags": [
      "医疗纠纷",
      "医患关系",
      "都市职场"
    ],
    "oneLine": "仁爱医院急诊室突发枪击案，一名医生被迫在道德与法律之间做生死抉择。",
    "cover": "./150.jpg",
    "url": "./video-1200.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1201",
    "title": "今生缘未了",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2025",
    "genre": "爱情, 奇幻, 家庭",
    "tags": [
      "前世今生",
      "错位重逢",
      "催泪",
      "宿命"
    ],
    "oneLine": "一对恋人约定来生再见，却一个保留了记忆，另一个彻底忘记。",
    "cover": "./1.jpg",
    "url": "./video-1201.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1202",
    "title": "打怪大乱斗",
    "region": "美国",
    "type": "动画剧集",
    "year": "2023",
    "genre": "喜剧, 动作, 奇幻",
    "tags": [
      "游戏穿越",
      "怪物设计",
      "团队协作",
      "无厘头"
    ],
    "oneLine": "四个游戏主播被吸入自己开发的怪物乱斗游戏，必须靠“Bug”才能存活。",
    "cover": "./2.jpg",
    "url": "./video-1202.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1203",
    "title": "异世界悠闲农家",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "动画，奇幻，日常",
    "tags": [
      "异世界",
      "种田",
      "慢生活",
      "温馨"
    ],
    "oneLine": "过劳死的程序员在异世界获得万能农具，只想种种田，却引来了一堆非人类“邻居”。",
    "cover": "./3.jpg",
    "url": "./video-1203.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1204",
    "title": "心跳",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 悬疑",
    "tags": [
      "器官移植",
      "记忆残留",
      "替身",
      "都市"
    ],
    "oneLine": "女孩移植了陌生人的心脏后，开始梦见一场谋杀，而警察正拿着梦中凶手的照片来找她。",
    "cover": "./4.jpg",
    "url": "./video-1204.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1205",
    "title": "绿灯侠：翡翠骑士",
    "region": "美国",
    "type": "电影（动画）",
    "year": "2026",
    "genre": "科幻, 动作, 超级英雄",
    "tags": [
      "太空歌剧",
      "意志力",
      "传承",
      "硬核科幻"
    ],
    "oneLine": "绿灯军团覆灭，菜鸟哈尔·乔丹继承了最后一枚灯戒，必须找回遗失的“翡翠骑士”机甲才能翻盘。",
    "cover": "./5.jpg",
    "url": "./video-1205.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1206",
    "title": "如果德川家康成为总理大臣",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "genre": "政治奇幻， 喜剧， 剧情",
    "tags": [
      "穿越",
      "历史人物",
      "现代政治",
      "幕府",
      "讽刺"
    ],
    "oneLine": "当战国时代的谋略家空降现代社会成为总理，他用关原战术整顿国会，用忍者情报系统瓦解丑闻。",
    "cover": "./6.jpg",
    "url": "./video-1206.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1207",
    "title": "嘉年华大盗",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪, 动作",
    "tags": [
      "抢劫",
      "马戏团",
      "高智商犯罪",
      "复仇"
    ],
    "oneLine": "五个被马戏团开除的怪胎，决定在嘉年华开幕夜，利用各自的杂耍绝技偷走藏在旋转木马底座里的钻石。",
    "cover": "./7.jpg",
    "url": "./video-1207.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1208",
    "title": "风流断剑小小刀",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "武侠动作",
    "tags": [
      "兵器谱",
      "江湖恩怨",
      "双雄",
      "复仇",
      "冷兵器"
    ],
    "oneLine": "退隐刀客被断剑亡魂纠缠，却发现对方竟是十八年前被自己顶替身份的师兄。",
    "cover": "./8.jpg",
    "url": "./video-1208.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1209",
    "title": "色情里的风波",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "剧情 / 情色",
    "tags": [
      "三级片",
      "片场",
      "女性意识"
    ],
    "oneLine": "90年代香港三级片片场，女演员叶彤发现剧本每一页都有导演临时加的床戏。",
    "cover": "./9.jpg",
    "url": "./video-1209.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1210",
    "title": "撒冷镇",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "恐怖， 惊悚， 吸血鬼",
    "tags": [
      "小镇怪谈",
      "吸血鬼",
      "斯蒂芬·金式",
      "阴森",
      "人性黑暗"
    ],
    "oneLine": "一位作家回到故乡撒冷镇，却发现小镇居民正一个接一个地变成嗜血的吸血鬼。",
    "cover": "./10.jpg",
    "url": "./video-1210.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1211",
    "title": "狂战狼穴",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "战争动作",
    "tags": [
      "二战",
      "狼人",
      "德军",
      "秘密实验",
      "血浆"
    ],
    "oneLine": "一队苏联侦察兵深入德军后方，发现纳粹正在用战俘喂养一种由狼与士兵融合而成的生化武器。",
    "cover": "./11.jpg",
    "url": "./video-1211.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1212",
    "title": "女子须知",
    "region": "中国香港",
    "type": "剧集",
    "year": "2027",
    "genre": "剧情， 历史， 女性",
    "tags": [
      "女性群像",
      "民国",
      "觉醒"
    ],
    "oneLine": "1920年代，一所女子师范学校里的五位师生，因为一本秘密流传的《女子须知》小册子，卷入了时代的风暴中心。",
    "cover": "./12.jpg",
    "url": "./video-1212.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1213",
    "title": "危险关系1988",
    "region": "法国",
    "type": "电影",
    "year": "1988",
    "genre": "剧情，爱情",
    "tags": [
      "贵族",
      "书信",
      "情欲",
      "阴谋"
    ],
    "oneLine": "1988年的巴黎，两位贵族以玩弄他人感情为赌注，最终却把自己输得一干二净。",
    "cover": "./13.jpg",
    "url": "./video-1213.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1214",
    "title": "血染万圣节",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖 / 惊悚 / 血腥",
    "tags": [
      "虐杀",
      "节日恐怖",
      "复古杀戮"
    ],
    "oneLine": "万圣节之夜，一个戴着南瓜头套的杀手专杀穿“经典鬼怪服装”的人。",
    "cover": "./14.jpg",
    "url": "./video-1214.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1215",
    "title": "恶夜杀机",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "都市传说",
      "公寓怪谈",
      "连环杀人",
      "氛围恐怖"
    ],
    "oneLine": "东京一座老旧公寓，每晚3:33分都会传来敲门声，开门的人都会在第二天“被消失”。",
    "cover": "./15.jpg",
    "url": "./video-1215.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1216",
    "title": "距离",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 科幻",
    "tags": [
      "异地恋",
      "量子纠缠",
      "软科幻"
    ],
    "oneLine": "一对异地恋人通过量子纠缠技术连接感官，却发现对方的“触感”逐渐不再属于本人。",
    "cover": "./16.jpg",
    "url": "./video-1216.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1217",
    "title": "人证",
    "region": "日本",
    "type": "电影",
    "year": "1977",
    "genre": "犯罪 / 剧情",
    "tags": [
      "人性拷问",
      "亲情对决",
      "社会派推理"
    ],
    "oneLine": "一位体面的社会名流，为守住秘密竟亲手将儿子推下悬崖。",
    "cover": "./17.jpg",
    "url": "./video-1217.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1218",
    "title": "南瓜恶灵",
    "region": "美国",
    "type": "电影",
    "year": "1988",
    "genre": "恐怖, 奇幻",
    "tags": [
      "邪教",
      "万圣节",
      "诅咒",
      "cult"
    ],
    "oneLine": "一个被献祭的孩子化作南瓜头怪物，每年万圣节回来屠杀邪教徒的后代。",
    "cover": "./18.jpg",
    "url": "./video-1218.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1219",
    "title": "之后2",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 爱情",
    "tags": [
      "续集",
      "抉择",
      "七年之痒",
      "城市孤独"
    ],
    "oneLine": "分手七年后再相遇，他们都已是更好的人，却不知爱情是否还在原地。",
    "cover": "./19.jpg",
    "url": "./video-1219.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1220",
    "title": "母性",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑",
    "tags": [
      "心理",
      "伦理",
      "反转"
    ],
    "oneLine": "当“完美母亲”的女儿长大成人，她开始怀疑母亲的爱究竟是庇护还是牢笼。",
    "cover": "./20.jpg",
    "url": "./video-1220.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1221",
    "title": "梦游罗宫",
    "region": "法国 / 意大利",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 剧情",
    "tags": [
      "超现实主义",
      "宫殿迷踪",
      "梦境探索",
      "艺术史"
    ],
    "oneLine": "一名失眠的建筑师每晚梦游进入凡尔赛宫的镜厅，那里住着路易十六的幽灵。",
    "cover": "./21.jpg",
    "url": "./video-1221.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1222",
    "title": "驴孩朱利安",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 剧情 / 超现实",
    "tags": [
      "身体畸形",
      "马戏团隐喻",
      "母子羁绊",
      "怪胎美学"
    ],
    "oneLine": "一个长着驴耳朵的男孩，在马戏团当了十五年“怪物”，直到他发现自己其实是小镇唯一健康的人。",
    "cover": "./22.jpg",
    "url": "./video-1222.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1223",
    "title": "大贼龙虎斗",
    "region": "香港",
    "type": "电影",
    "year": "1972",
    "genre": "动作， 犯罪， 冒险",
    "tags": [
      "邵氏",
      "盗贼片",
      "双雄",
      "粤语老片",
      "江湖"
    ],
    "oneLine": "两个纵横东南亚的大贼王，因一块“不属于任何国家的无主宝石”而展开终极夺宝决战。",
    "cover": "./23.jpg",
    "url": "./video-1223.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1224",
    "title": "女孩",
    "region": "比利时 / 荷兰",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "性别认同",
      "芭蕾",
      "成长",
      "家庭"
    ],
    "oneLine": "15岁的跨性别女孩梦想成为芭蕾舞者，她的身体却拒绝配合。",
    "cover": "./24.jpg",
    "url": "./video-1224.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1225",
    "title": "脑海中的橡皮擦",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 剧情 / 奇幻",
    "tags": [
      "阿尔茨海默症",
      "记忆删除",
      "虐恋",
      "时间循环",
      "催泪"
    ],
    "oneLine": "他每天醒来都会忘记前一天的一切，而她选择每天重新爱上他，直到第365次，他写下了一行永不消除的字。",
    "cover": "./25.jpg",
    "url": "./video-1225.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1226",
    "title": "血宴2",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "血腥",
      "密室",
      "邪教",
      "反转",
      "续作升级"
    ],
    "oneLine": "一年前的屠杀游戏幸存者受邀参加庆功宴，却发现宴会厅本身就是一个巨大的绞肉机。",
    "cover": "./26.jpg",
    "url": "./video-1226.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1227",
    "title": "感伤的宿命",
    "region": "法国",
    "type": "电影",
    "year": "2000",
    "genre": "剧情 / 爱情 / 历史",
    "tags": [
      "史诗",
      "宗教",
      "家族",
      "背叛",
      "宿命"
    ],
    "oneLine": "19世纪末，一位牧师还俗结婚投身实业，却发现自己最终逃不过年轻时背弃的信仰审判。",
    "cover": "./27.jpg",
    "url": "./video-1227.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1228",
    "title": "童时爱上你粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情 / 喜剧",
    "tags": [
      "失忆",
      "豪门",
      "姐弟恋"
    ],
    "oneLine": "霸道女总裁因意外失去记忆，心智回到八岁，却被死对头公司的职员捡回了家。",
    "cover": "./28.jpg",
    "url": "./video-1228.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1229",
    "title": "女王密使",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑、谍战、剧情",
    "tags": [
      "王室",
      "特工",
      "宫斗",
      "阴谋",
      "女性力量"
    ],
    "oneLine": "表面是王室首席侍女，暗地里却是替女王铲除叛国者的终极密使，而她最大的敌人竟是自己深爱的王子。",
    "cover": "./29.jpg",
    "url": "./video-1229.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1230",
    "title": "杀戮时刻",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作惊悚",
    "tags": [
      "限时救援",
      "黑帮火并",
      "硬核枪战"
    ],
    "oneLine": "一个刚出狱的杀手，必须在女儿手术的4小时内灭掉整个敌对帮派。",
    "cover": "./30.jpg",
    "url": "./video-1230.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1231",
    "title": "初恋无悔",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情， 青春",
    "tags": [
      "纯爱",
      "校园",
      "遗憾美学"
    ],
    "oneLine": "七旬老人潜入养老院，只为找到五十年前因一封信而错过的初恋情人。",
    "cover": "./31.jpg",
    "url": "./video-1231.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1232",
    "title": "缔创学校",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 悬疑",
    "tags": [
      "精英教育",
      "反转",
      "心理博弈"
    ],
    "oneLine": "一所只招收“未来缔造者”的学校，入学第一课竟是让学生亲手销毁自己最珍贵的记忆。",
    "cover": "./32.jpg",
    "url": "./video-1232.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1233",
    "title": "迷失内华达",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚",
    "tags": [
      "伪纪录片",
      "沙漠传说",
      "集体失踪"
    ],
    "oneLine": "三名大学生深入内华达沙漠拍摄纪录片，却发现镇上所有居民都在重复同一句话。",
    "cover": "./33.jpg",
    "url": "./video-1233.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1234",
    "title": "敬子的手",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 奇幻",
    "tags": [
      "超能力",
      "亲情",
      "手语",
      "治愈",
      "都市传说"
    ],
    "oneLine": "敬子的左手能看见物品的“情绪伤痕”，她因此被卷入一场关于记忆与赎罪的神秘委托。",
    "cover": "./34.jpg",
    "url": "./video-1234.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1235",
    "title": "大班密令之虎穴擒王粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "genre": "动作，犯罪",
    "tags": [
      "警匪",
      "卧底",
      "黑帮",
      "枪战"
    ],
    "oneLine": "警方卧底潜入东南亚最大毒枭的“大班”组织，却发现内部有更高级别的内鬼。",
    "cover": "./35.jpg",
    "url": "./video-1235.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1236",
    "title": "女孩，女孩Ⅱ：公寓与爱情",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情 / 剧情",
    "tags": [
      "合租",
      "都市女性",
      "成长",
      "婚姻观"
    ],
    "oneLine": "三个合租的女孩立下“不婚主义”的誓言，直到其中一人意外怀孕，平静的公寓炸开了锅。",
    "cover": "./36.jpg",
    "url": "./video-1236.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1237",
    "title": "鸳鸯大盗",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "犯罪，喜剧",
    "tags": [
      "雌雄大盗",
      "乌龙",
      "警匪",
      "爱情"
    ],
    "oneLine": "一对笨贼情侣偷错一盘录像带后，被迫假扮豪门夫妻混进上流社会寻找真带子。",
    "cover": "./37.jpg",
    "url": "./video-1237.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1238",
    "title": "穷乡僻壤",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪，剧情，黑色电影",
    "tags": [
      "山村",
      "矿难",
      "藏尸",
      "记者",
      "封口"
    ],
    "oneLine": "女记者潜入偏远山村调查矿难，发现所有村民都在替某个人隐藏同一具尸体。",
    "cover": "./38.jpg",
    "url": "./video-1238.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1239",
    "title": "死于独特",
    "region": "英国",
    "type": "电影",
    "year": "2020",
    "genre": "犯罪 / 剧情 / 青春",
    "tags": [
      "真实事件",
      "亚文化",
      "暴力",
      "社会反思"
    ],
    "oneLine": "公园长椅上，两个哥特青年被一群少年围住，只因为他们的穿着“不一样”。",
    "cover": "./39.jpg",
    "url": "./video-1239.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1240",
    "title": "国王的抉择",
    "region": "英国",
    "type": "电影",
    "year": "2019",
    "genre": "历史 / 惊悚",
    "tags": [
      "王室",
      "权力游戏",
      "刺杀",
      "三日倒计时",
      "心理战"
    ],
    "oneLine": "国王接到密报：三天内如果不退位，整座城市将被毒气笼罩。",
    "cover": "./40.jpg",
    "url": "./video-1240.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1241",
    "title": "小型事故",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、家庭、社会",
    "tags": [
      "童年创伤",
      "连锁反应",
      "道德困境"
    ],
    "oneLine": "一场无人受伤的小型追尾，却牵出二十年前一个被“小事”毁掉的五口之家。",
    "cover": "./41.jpg",
    "url": "./video-1241.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1242",
    "title": "老小阿凡提",
    "region": "中国大陆",
    "type": "动画剧集",
    "year": "2025",
    "genre": "喜剧冒险",
    "tags": [
      "民间故事",
      "智慧",
      "合家欢"
    ],
    "oneLine": "老年阿凡提意外返老还童，却失去了智慧，他必须用一个小男孩的身躯重新学习如何用机敏对抗贪婪。",
    "cover": "./42.jpg",
    "url": "./video-1242.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1243",
    "title": "缺宅男女粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "住房问题",
      "蜗居",
      "亲情",
      "市井",
      "写实"
    ],
    "oneLine": "一家四口挤在三十平米的公屋里，为了多隔出一间房，每个人的秘密和欲望都被压缩到极限。",
    "cover": "./43.jpg",
    "url": "./video-1243.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1244",
    "title": "永恒的少女",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 奇幻 / 女性",
    "tags": [
      "不老症",
      "母女",
      "时间囚笼",
      "拉美魔幻",
      "衰老焦虑"
    ],
    "oneLine": "患有不老症的女儿每七年衰老一岁，而正常母亲却在加速变老，她们互为时间的镜子与监狱。",
    "cover": "./44.jpg",
    "url": "./video-1244.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1245",
    "title": "他，我们见过",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑, 剧情",
    "tags": [
      "都市传说",
      "轮回",
      "犯罪心理",
      "对话体"
    ],
    "oneLine": "一个意大利小镇上，先后有十二个互不相识的人报警，说他们在梦里见过同一个陌生男人。",
    "cover": "./45.jpg",
    "url": "./video-1245.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1246",
    "title": "消失的白鼠",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑、科幻、惊悚",
    "tags": [
      "实验室",
      "基因编辑",
      "人性实验",
      "反转",
      "伦理困境"
    ],
    "oneLine": "基因改造后的实验白鼠集体失踪后，实验室的监控录像里出现了一双不属于任何人的手。",
    "cover": "./46.jpg",
    "url": "./video-1246.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1247",
    "title": "追剿魔头",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 犯罪, 年代",
    "tags": [
      "刑侦",
      "连环杀手",
      "追凶",
      "心理战"
    ],
    "oneLine": "一个被开除的老刑警追查一桩连环杀人案，发现凶手竟是根据《山海经》中的妖怪来杀人。",
    "cover": "./47.jpg",
    "url": "./video-1247.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1248",
    "title": "我的老婆是老公",
    "region": "中国大陆",
    "type": "网剧 / 喜剧",
    "year": "2026",
    "genre": "喜剧 / 奇幻 / 爱情",
    "tags": [
      "灵魂互换",
      "性别错位",
      "职场博弈",
      "夫妻日常",
      "爆笑"
    ],
    "oneLine": "毒舌女总裁和佛系家庭煮夫一夜互换身体，谁料老公的公司竟比老婆的更难搞。",
    "cover": "./48.jpg",
    "url": "./video-1248.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1249",
    "title": "梦破红尘",
    "region": "中国香港",
    "type": "电影",
    "year": "1996",
    "genre": "剧情 / 情色",
    "tags": [
      "风月女子",
      "香港旧梦",
      "悲剧人生"
    ],
    "oneLine": "六十年代的湾仔酒吧，一个单纯的红牌阿姑以为自己遇到了救赎的爱情，却不知那只是另一场交易的开始。",
    "cover": "./49.jpg",
    "url": "./video-1249.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1250",
    "title": "我心唱响",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "音乐, 剧情, 励志",
    "tags": [
      "合唱团",
      "乡村",
      "音乐老师",
      "梦想",
      "治愈"
    ],
    "oneLine": "一个失意的城市音乐家来到乡村，试图把一群五音不全的孩子组成全国顶尖的童声合唱团。",
    "cover": "./50.jpg",
    "url": "./video-1250.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1251",
    "title": "我们的国度",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、悬疑、科幻",
    "tags": [
      "平行世界",
      "国家分裂",
      "替代现实",
      "身份认同"
    ],
    "oneLine": "南北韩统一后的第五年，一个男人醒来发现自己身处从未统一的平行世界，而他成了叛徒。",
    "cover": "./51.jpg",
    "url": "./video-1251.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1252",
    "title": "沙普的危机",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "历史 / 战争 / 动作",
    "tags": [
      "拿破仑战争",
      "英国陆军",
      "孤胆英雄",
      "滑铁卢",
      "荣耀之战"
    ],
    "oneLine": "滑铁卢战役前夜，理查德·沙普上校必须独自潜入法军营地，阻止一场能改变欧洲命运的暗杀计划。",
    "cover": "./52.jpg",
    "url": "./video-1252.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1253",
    "title": "白雪公主",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 歌舞 / 剧情",
    "tags": [
      "真人改编",
      "苹果",
      "七个小矮人",
      "魔镜"
    ],
    "oneLine": "皇后问魔镜谁最美，魔镜说：是你，但那个吃毒苹果的公主，她比你勇敢。",
    "cover": "./53.jpg",
    "url": "./video-1253.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1254",
    "title": "游戏规则",
    "region": "中国大陆",
    "type": "电影",
    "year": "2029",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "高智商犯罪",
      "密室对决",
      "复仇",
      "反转再反转"
    ],
    "oneLine": "一场没有主办方的“游戏”将六位各怀鬼胎的成功人士锁进密室，规则只有一条：最后幸存的人才能离开。",
    "cover": "./54.jpg",
    "url": "./video-1254.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1255",
    "title": "人山人海",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 犯罪",
    "tags": [
      "打工人",
      "传销",
      "群像"
    ],
    "oneLine": "深圳龙华汽车站，每天上千名日结工蹲在“人山人海”招聘广场等活，一个消失三年的女人突然回来了。",
    "cover": "./55.jpg",
    "url": "./video-1255.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1256",
    "title": "夺命大鳄鱼2",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖，惊悚，动作",
    "tags": [
      "巨兽",
      "荒岛求生",
      "基因突变"
    ],
    "oneLine": "上一集的大鳄鱼没死透，还带着一窝变异的后代，向复仇的猎人发动了全面反击。",
    "cover": "./56.jpg",
    "url": "./video-1256.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1257",
    "title": "婚前经验",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "试婚",
      "契约恋爱",
      "同居",
      "前任"
    ],
    "oneLine": "为了继承巨额遗产，一对陌生人必须带着各自奇葩的前任，在同一屋檐下完成一个月的“婚前实习”。",
    "cover": "./57.jpg",
    "url": "./video-1257.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1258",
    "title": "非家庭电影",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 实验",
    "tags": [
      "伪纪录片",
      "家庭解体",
      "数码遗迹"
    ],
    "oneLine": "一个女人用十年家庭录像反抗控制欲的母亲，却发现镜头本身才是最大的谎言。",
    "cover": "./58.jpg",
    "url": "./video-1258.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1259",
    "title": "指环王2：双塔奇兵",
    "region": "美国",
    "type": "电影",
    "year": "2002",
    "genre": "奇幻史诗",
    "tags": [
      "经典",
      "中土",
      "战争",
      "重映版"
    ],
    "oneLine": "护戒小队分裂后，阿拉贡追寻两位霍比特人，而弗罗多被咕噜带向黑暗的魔多。",
    "cover": "./59.jpg",
    "url": "./video-1259.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1260",
    "title": "盖亚",
    "region": "德国 / 法国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻 / 悬疑 / 哲学",
    "tags": [
      "生态",
      "AI",
      "造神",
      "末日"
    ],
    "oneLine": "地球意识“盖亚”通过神经网络觉醒，她决定清理人类，却爱上了最后一个程序员。",
    "cover": "./60.jpg",
    "url": "./video-1260.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1261",
    "title": "水的故事",
    "region": "印度",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 奇幻 / 文艺",
    "tags": [
      "环保",
      "神话",
      "诗电影",
      "父女"
    ],
    "oneLine": "干旱村庄里，女孩说她在井底看到了一扇门，门后是被现代文明封印的雨神。",
    "cover": "./61.jpg",
    "url": "./video-1261.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1262",
    "title": "厄灵镇",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "超自然恐怖",
    "tags": [
      "小镇",
      "诅咒",
      "邪教",
      "心理恐怖"
    ],
    "oneLine": "美国中西部一个与世隔绝的小镇，每个居民都在重复自己最恐惧的那一天，已经重复了四十年。",
    "cover": "./62.jpg",
    "url": "./video-1262.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1263",
    "title": "儿媳记",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "家庭, 喜剧, 剧情",
    "tags": [
      "婆媳",
      "日常",
      "女性群像",
      "讽刺"
    ],
    "oneLine": "三个儿媳组成的“儿媳互助会”，用各种奇葩手段对抗传统婆家的压榨。",
    "cover": "./63.jpg",
    "url": "./video-1263.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1264",
    "title": "斗舞帮",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "歌舞, 动作",
    "tags": [
      "街舞",
      "跑酷",
      "犯罪",
      "热血"
    ],
    "oneLine": "一群街舞高手被迫为黑帮洗钱，他们决定用一场惊天斗舞秀，把黑钱全部跳“没”。",
    "cover": "./64.jpg",
    "url": "./video-1264.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1265",
    "title": "街头竞选",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 喜剧",
    "tags": [
      "底层",
      "荒诞",
      "民主实践",
      "社区"
    ],
    "oneLine": "城中村拆迁，三教九流的人被逼着搞竞选，选出一个能跟开发商谈判的代表。",
    "cover": "./65.jpg",
    "url": "./video-1265.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1266",
    "title": "神奇妇人",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": [
      "超人妈妈",
      "中年妇女",
      "反超级英雄",
      "育儿"
    ],
    "oneLine": "一位疲惫的中年主妇发现自己力大无穷，可她最大的敌人不是反派，是辅导作业。",
    "cover": "./66.jpg",
    "url": "./video-1266.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1267",
    "title": "带子雄狼 冥府魔道",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "时代剧动作",
    "tags": [
      "武士",
      "复仇",
      "暴力美学",
      "父子情"
    ],
    "oneLine": "拜一刀携幼子踏入冥府魔道，那里没有善恶，只有水母般漂浮的亡灵，以及一个等待他献祭儿子的邪神。",
    "cover": "./67.jpg",
    "url": "./video-1267.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1268",
    "title": "恐龙饭店",
    "region": "日本",
    "type": "动画剧集",
    "year": "2021",
    "genre": "科幻冒险",
    "tags": [
      "克隆恐龙",
      "黑帮",
      "荒诞",
      "美食"
    ],
    "oneLine": "退役杀手为躲避追杀，躲进一家由恐龙当服务生的无人岛饭店当厨师。",
    "cover": "./68.jpg",
    "url": "./video-1268.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1269",
    "title": "全球高武",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "动作 / 科幻 / 玄幻",
    "tags": [
      "异能觉醒",
      "武道",
      "热血"
    ],
    "oneLine": "当世界各地出现异界裂缝，普通学生发现自己竟然是预言中能平息“高武之乱”的钥匙。",
    "cover": "./69.jpg",
    "url": "./video-1269.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1270",
    "title": "时尚女模头",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2020",
    "genre": "喜剧",
    "tags": [
      "职场",
      "时尚",
      "逆袭",
      "爽剧"
    ],
    "oneLine": "一个从东北县城来的胖女孩，误打误撞成为顶级时尚杂志主编，用最土的方法整顿最洋气的职场。",
    "cover": "./70.jpg",
    "url": "./video-1270.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1271",
    "title": "街角的童话",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 生活",
    "tags": [
      "治愈",
      "书店",
      "慢节奏",
      "纯爱"
    ],
    "oneLine": "东京下北泽的一家旧书店里，两个被过去困住的人，在书中找到了彼此。",
    "cover": "./71.jpg",
    "url": "./video-1271.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1272",
    "title": "逃出西伯利亚",
    "region": "俄罗斯 / 英国",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 冒险， 惊悚",
    "tags": [
      "极寒求生",
      "卧底双雄",
      "雪地摩托",
      "监狱暴动"
    ],
    "oneLine": "一个被诬陷的间谍和一个真正的战犯，被拷在一起从西伯利亚的极寒列车监狱中逃亡。",
    "cover": "./72.jpg",
    "url": "./video-1272.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1273",
    "title": "谁主沉浮",
    "region": "中国大陆",
    "type": "电影",
    "year": "2029",
    "genre": "剧情 / 商战 / 悬疑",
    "tags": [
      "金融战争",
      "幕后黑手",
      "股市风云",
      "双雄对决"
    ],
    "oneLine": "天才操盘手因复仇潜入敌对集团，却发现最大的敌人竟是当年害死师父的自己。",
    "cover": "./73.jpg",
    "url": "./video-1273.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1274",
    "title": "转移者",
    "region": "美国/德国",
    "type": "剧集",
    "year": "2021",
    "genre": "科幻， 惊悚， 悬疑",
    "tags": [
      "意识转移",
      "多重人格",
      "科技伦理",
      "追杀"
    ],
    "oneLine": "掌握意识转移技术的科学家被杀，他的记忆被分别植入了六个陌生人的大脑。",
    "cover": "./74.jpg",
    "url": "./video-1274.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1275",
    "title": "幸福迷途",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 剧情",
    "tags": [
      "心理",
      "记忆",
      "催眠",
      "反转"
    ],
    "oneLine": "为了找回失踪的女儿，她接受了一种能删除“痛苦记忆”的实验疗法，却发现记忆删除后，幸福竟是更大的陷阱。",
    "cover": "./75.jpg",
    "url": "./video-1275.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1276",
    "title": "口号",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "现实主义",
      "职场",
      "黑色幽默",
      "群体心理"
    ],
    "oneLine": "一家濒临倒闭的公司里，一个没人当真的口号突然成真，所有人都开始为这句口号献祭。",
    "cover": "./76.jpg",
    "url": "./video-1276.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1277",
    "title": "魔鬼交易",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "惊悚, 犯罪",
    "tags": [
      "华尔街",
      "超自然",
      "契约",
      "贪婪"
    ],
    "oneLine": "失意的基金经理在暗网上用灵魂换了“内幕消息”，却发现魔鬼的利息是按“痛苦”计算的。",
    "cover": "./77.jpg",
    "url": "./video-1277.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1278",
    "title": "第一约会",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 喜剧",
    "tags": [
      "尴尬美学",
      "社恐男女",
      "奇遇不断",
      "反向浪漫"
    ],
    "oneLine": "两个重度社恐的第一次约会，从餐厅火灾到误入葬礼，灾难连连却舍不得结束。",
    "cover": "./78.jpg",
    "url": "./video-1278.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1279",
    "title": "闪电十一人 猎户座的刻印",
    "region": "日本",
    "type": "剧集（动画）",
    "year": "2025",
    "genre": "体育 / 热血 / 科幻",
    "tags": [
      "足球",
      "超能力",
      "外星文明",
      "少年热血",
      "团队羁绊"
    ],
    "oneLine": "当外星文明“猎户座”降临地球并禁止一切身体对抗运动时，一支中学生足球队用最原始的足球精神发起反击。",
    "cover": "./79.jpg",
    "url": "./video-1279.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1280",
    "title": "保卫战队之出动喇！朋友！",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 喜剧 / 超级英雄",
    "tags": [
      "港式无厘头",
      "中年热血",
      "草根战队"
    ],
    "oneLine": "五个中年废柴组成小区自卫队，穿着自制战衣对抗地产商的拆迁队，结果意外救下了整座城市。",
    "cover": "./80.jpg",
    "url": "./video-1280.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1281",
    "title": "战士第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "动作",
    "tags": [
      "功夫",
      "黑帮",
      "19世纪",
      "唐人街",
      "暴力美学"
    ],
    "oneLine": "1870年代旧金山唐人街，武功高强的华人移民在爱尔兰帮和警局夹缝中杀出血路。",
    "cover": "./81.jpg",
    "url": "./video-1281.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1282",
    "title": "大女当嫁",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2010",
    "genre": "剧情 / 爱情 / 家庭",
    "tags": [
      "大龄剩女",
      "相亲",
      "代际冲突",
      "都市独立女性",
      "轻喜剧"
    ],
    "oneLine": "34岁女公务员姜大雁被全家逼婚，相了18个奇葩男后，她决定嫁给一套经济适用房。",
    "cover": "./82.jpg",
    "url": "./video-1282.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1283",
    "title": "超空间",
    "region": "美国",
    "type": "剧集",
    "year": "2021",
    "genre": "科幻 / 悬疑 / 冒险",
    "tags": [
      "多维空间",
      "失踪",
      "太空站",
      "量子",
      "烧脑"
    ],
    "oneLine": "一艘深空探测船全员失踪，七年后他们突然全员返回，并且完全不记得经历过什么。",
    "cover": "./83.jpg",
    "url": "./video-1283.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1284",
    "title": "第八夜",
    "region": "韩国",
    "type": "电影",
    "year": "2021",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "邪教",
      "封印",
      "反转",
      "宗教恐怖",
      "献祭"
    ],
    "oneLine": "八夜轮回，封印即将碎裂，一个普通人被推入神魔博弈的漩涡中心。",
    "cover": "./84.jpg",
    "url": "./video-1284.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1285",
    "title": "宵星传说",
    "region": "日本",
    "type": "动画剧集",
    "year": "2026",
    "genre": "奇幻 / 冒险",
    "tags": [
      "异世界",
      "魔法",
      "剑与魔法",
      "友情",
      "冒险"
    ],
    "oneLine": "见习骑士亚瑟意外唤醒了沉睡在宵星中的魔女，为了阻止星球被黑暗吞噬，他们必须收集散落的星辰碎片。",
    "cover": "./85.jpg",
    "url": "./video-1285.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1286",
    "title": "玩火的儿子",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪，剧情，家庭",
    "tags": [
      "父子",
      "逆袭",
      "黑帮",
      "救赎"
    ],
    "oneLine": "一个被父亲抛弃的街头混混，改名换姓潜入仇家，却发现自己最想杀的人，是亲生儿子。",
    "cover": "./86.jpg",
    "url": "./video-1286.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1287",
    "title": "十日坏人",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "卧底",
      "黑帮",
      "限时任务"
    ],
    "oneLine": "卧底警察只剩十天活命，他要在死前把整个犯罪集团送进监狱，包括他自己的亲弟弟。",
    "cover": "./87.jpg",
    "url": "./video-1287.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1288",
    "title": "缘订三生",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情 / 奇幻",
    "tags": [
      "三世轮回",
      "失忆梗",
      "宿命恋人",
      "古风与现代"
    ],
    "oneLine": "她每世都会在23岁那天忘记一切，而他每世都在用不同的方式，让自己被她重新爱上。",
    "cover": "./88.jpg",
    "url": "./video-1288.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1289",
    "title": "如果我是你2",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 爱情 / 喜剧",
    "tags": [
      "灵魂互换",
      "婚后",
      "性别议题",
      "续集"
    ],
    "oneLine": "陷入七年之痒的夫妻再次灵魂互换，这次他们不仅要应付工作，还要帮对方完成生孩子的任务。",
    "cover": "./89.jpg",
    "url": "./video-1289.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1290",
    "title": "被控告的人",
    "region": "中国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 犯罪, 律政",
    "tags": [
      "无罪辩护",
      "误判",
      "复仇",
      "庭审",
      "谜团"
    ],
    "oneLine": "蒙冤入狱二十年的死刑犯出狱后，竟成了自己当年被冤案的再审辩护律师。",
    "cover": "./90.jpg",
    "url": "./video-1290.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1291",
    "title": "鬼4厉",
    "region": "泰国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 悬疑",
    "tags": [
      "厉鬼",
      "诅咒",
      "轮回",
      "高能反转"
    ],
    "oneLine": "四个人住进一间鬼屋，发现每个人都是被另外三个人害死的。",
    "cover": "./91.jpg",
    "url": "./video-1291.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1292",
    "title": "天降爱情",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "陨石",
      "绑定",
      "外星信号",
      "反套路",
      "小成本黑马"
    ],
    "oneLine": "一颗陨石砸中渣男后，五个被他伤过的女孩脑中出现同一行字：合力惩罚他，或一起消失。",
    "cover": "./92.jpg",
    "url": "./video-1292.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1293",
    "title": "美国交响乐：奏出泪汗血",
    "region": "美国",
    "type": "纪录片",
    "year": "2023",
    "genre": "纪录, 音乐",
    "tags": [
      "交响乐",
      "底层",
      "励志",
      "社会现实",
      "古典乐"
    ],
    "oneLine": "一群来自贫民窟的黑人少年，试图用古典交响乐撕裂社会的偏见与枪声。",
    "cover": "./93.jpg",
    "url": "./video-1293.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1294",
    "title": "奔跑吧！兄弟",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧 / 动作 / 冒险",
    "tags": [
      "综艺衍生",
      "跑酷",
      "夺宝",
      "兄弟情"
    ],
    "oneLine": "七个彼此看不顺眼的落魄跑酷选手，被迫组队参加一场赌上全部身家的城市夺旗大赛。",
    "cover": "./94.jpg",
    "url": "./video-1294.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1295",
    "title": "六块六毛六那点事",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "年代 / 剧情",
    "tags": [
      "计划经济",
      "小人物史诗",
      "邻里纠纷"
    ],
    "oneLine": "1970年代东北工厂大院里，因为一笔“六块六毛六”的意外之财，四家邻居的关系彻底乱了套。",
    "cover": "./95.jpg",
    "url": "./video-1295.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1296",
    "title": "与神同行的少年",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情、青春、奇幻",
    "tags": [
      "神学院",
      "质疑信仰",
      "友谊",
      "奇迹"
    ],
    "oneLine": "一个满口科学理论的叛逆少年被送入最保守的天主教神学院，却发现室友好像真的会“神迹”。",
    "cover": "./96.jpg",
    "url": "./video-1296.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1297",
    "title": "误杀2",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "犯罪， 悬疑， 剧情",
    "tags": [
      "翻拍",
      "父爱",
      "以暴制暴",
      "反转"
    ],
    "oneLine": "一个父亲为了抢回被权贵夺走的心脏移植机会，劫持医院，却发现自己才是被误杀的猎物。",
    "cover": "./97.jpg",
    "url": "./video-1297.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1298",
    "title": "烈火悍将",
    "region": "美国",
    "type": "电影",
    "year": "1995",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "抢劫",
      "枪战",
      "双雄对决",
      "硬汉美学"
    ],
    "oneLine": "顶级劫匪与铁血警探在洛杉矶上演猫鼠游戏，每一次交锋都在挑战彼此的底线。",
    "cover": "./98.jpg",
    "url": "./video-1298.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1299",
    "title": "秘密2023",
    "region": "韩国",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "女儿失踪",
      "平行时空",
      "记忆篡改",
      "反转",
      "烧脑"
    ],
    "oneLine": "女儿失踪后，母亲在家中发现了13个一模一样的发卡，随后她发现自己能通过镜子看到另一个时空的自己。",
    "cover": "./99.jpg",
    "url": "./video-1299.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1300",
    "title": "解除好友2：暗网",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 惊悚 / 桌面电影",
    "tags": [
      "暗网",
      "直播",
      "杀人游戏",
      "屏幕"
    ],
    "oneLine": "一个程序员的二手笔记本电脑里存着暗网“杀戮房间”的管理员权限，而原主人正在反向追踪他。",
    "cover": "./100.jpg",
    "url": "./video-1300.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1301",
    "title": "暴风雨的幻象",
    "region": "西班牙",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": [
      "幻觉",
      "孤岛",
      "心理",
      "反转",
      "暴风雪山庄"
    ],
    "oneLine": "一个失去记忆的心理学教授，在一场暴风雨中被困孤岛，他身边的人似乎都是他遗忘的人格。",
    "cover": "./101.jpg",
    "url": "./video-1301.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1302",
    "title": "银魂剧场版:新译红樱篇",
    "region": "日本",
    "type": "电影",
    "year": "2010",
    "genre": "动画 / 动作 / 喜剧",
    "tags": [
      "银魂",
      "红樱篇",
      "重制",
      "热血"
    ],
    "oneLine": "妖刀“红樱”失控，江户城陷入危机，万事屋三人组将与鬼兵队展开一场关于守护与誓约的终极对决。",
    "cover": "./102.jpg",
    "url": "./video-1302.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1303",
    "title": "富贵黄金屋",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧，家庭，剧情",
    "tags": [
      "拆迁",
      "小市民",
      "许冠文式幽默",
      "港片黄金时代",
      "拜金"
    ],
    "oneLine": "小市民老梁抽中大奖买下豪宅，却发现房子里住着赶不走的鬼魂一家。",
    "cover": "./103.jpg",
    "url": "./video-1303.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1304",
    "title": "联邦调查局第四季",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "罪案剧情",
    "tags": [
      "精英探员",
      "纽约分部",
      "政治阴谋",
      "团队重组"
    ],
    "oneLine": "第四季开局，纽约FBI分部遭遇内部爆炸，精英小队被迫重组，而新任女上司似乎带着不为人知的秘密任务。",
    "cover": "./104.jpg",
    "url": "./video-1304.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1305",
    "title": "如今你已长大",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "家庭 / 剧情",
    "tags": [
      "留守儿童",
      "亲情",
      "催泪"
    ],
    "oneLine": "一个从未见过父母的留守儿童，用18年时间，在自家院墙上画满了“全家福”。",
    "cover": "./105.jpg",
    "url": "./video-1305.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1306",
    "title": "羞耻1968",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "历史 / 剧情",
    "tags": [
      "五月风暴",
      "知识分子",
      "道德困境",
      "黑白摄影"
    ],
    "oneLine": "1968年巴黎五月风暴中，一对哲学家夫妇分别站队学生和政府，他们的婚姻成为革命与人性的试验场。",
    "cover": "./106.jpg",
    "url": "./video-1306.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1307",
    "title": "避难所",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "科幻 / 悬疑 / 生存",
    "tags": [
      "地下掩体",
      "阶级",
      "乌托邦"
    ],
    "oneLine": "核战后，地下避难所分为上下两层，上层居民“活在天堂”，下层居民负责给天堂烧锅炉。",
    "cover": "./107.jpg",
    "url": "./video-1307.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1308",
    "title": "厨房的爱丽丝",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 美食",
    "tags": [
      "自闭症",
      "料理疗愈",
      "单元剧"
    ],
    "oneLine": "患有自闭症的天才厨师爱丽丝，每晚为孤独的灵魂定制一道“记忆料理”。",
    "cover": "./108.jpg",
    "url": "./video-1308.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1309",
    "title": "埃尔利希博士的魔弹",
    "region": "德国",
    "type": "电影",
    "year": "2025",
    "genre": "传记/剧情/历史",
    "tags": [
      "医学史",
      "理想主义",
      "科研",
      "抗争"
    ],
    "oneLine": "面对世纪绝症与学阀围剿，一位偏执的医学博士赌上一切，只为寻找那枚能精准杀死病魔的“魔法子弹”。",
    "cover": "./109.jpg",
    "url": "./video-1309.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1310",
    "title": "路人女主的养成方法 第二季",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "动画 / 恋爱 / 喜剧",
    "tags": [
      "二次元",
      "美少女",
      "游戏制作",
      "党争",
      "宅文化"
    ],
    "oneLine": "为了做出史上最强美少女游戏，男主角把身边女孩全部变成攻略对象，却发现剧本开始脱离控制。",
    "cover": "./110.jpg",
    "url": "./video-1310.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1311",
    "title": "狂想行",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 同性",
    "tags": [
      "精神病院",
      "臆想症",
      "公路"
    ],
    "oneLine": "两个精神病患者从医院逃出，一个坚信自己是神，一个坚信自己已死，两人踏上寻找“真理”的荒诞旅程。",
    "cover": "./111.jpg",
    "url": "./video-1311.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1312",
    "title": "换伴万万睡",
    "region": "韩国",
    "type": "电影",
    "year": "2017",
    "genre": "爱情",
    "tags": [
      "换偶",
      "婚姻",
      "危机",
      "情欲"
    ],
    "oneLine": "两对七年之痒的夫妻决定交换伴侣睡一晚，结果睡出了第三者、警察和离婚官司。",
    "cover": "./112.jpg",
    "url": "./video-1312.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1313",
    "title": "男人的心思3",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/喜剧",
    "tags": [
      "中年危机",
      "友情",
      "恋爱",
      "法式浪漫",
      "话痨"
    ],
    "oneLine": "三个老友帮失婚的第四人重新约会，却先后爱上了同一个独立女摄影师。",
    "cover": "./113.jpg",
    "url": "./video-1313.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1314",
    "title": "雪暴1814",
    "region": "挪威",
    "type": "电影",
    "year": "2024",
    "genre": "灾难",
    "tags": [
      "历史",
      "自然",
      "求生"
    ],
    "oneLine": "根据真实历史事件改编，1814年挪威一场超级雪崩，将整个矿业小镇瞬间掩埋。",
    "cover": "./114.jpg",
    "url": "./video-1314.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1315",
    "title": "雷神2：黑暗世界",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "漫威",
      "雷神",
      "洛基",
      "黑暗精灵"
    ],
    "oneLine": "神域的守护再次破碎，雷神不得不联手诡计之神，迎战来自远古的黑暗。",
    "cover": "./115.jpg",
    "url": "./video-1315.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1316",
    "title": "温馨赤子情",
    "region": "中国台湾",
    "type": "电影",
    "year": "1998",
    "genre": "家庭 / 剧情",
    "tags": [
      "祖孙情",
      "乡村",
      "手工艺",
      "时代变迁"
    ],
    "oneLine": "八十岁的灯笼师傅，和八岁的孙子一起点亮了最后一盏传统天灯。",
    "cover": "./116.jpg",
    "url": "./video-1316.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1317",
    "title": "麦斯潘恩",
    "region": "芬兰",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "北欧 noir",
      "雪原",
      "复仇"
    ],
    "oneLine": "在芬兰极夜的雪原上，一个失去女儿的护林员，追踪着一个专杀偷猎者的神秘杀手。",
    "cover": "./117.jpg",
    "url": "./video-1317.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1318",
    "title": "日以作夜",
    "region": "法国",
    "type": "电影",
    "year": "1973",
    "genre": "剧情 / 喜剧 / 爱情",
    "tags": [
      "片场",
      "导演",
      "爱情纠葛",
      "幕后",
      "戏中戏"
    ],
    "oneLine": "一部电影拍摄期间，导演、演员和剧组成员的情感生活比剧本更混乱。",
    "cover": "./118.jpg",
    "url": "./video-1318.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1319",
    "title": "人质2016",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "犯罪/惊悚/剧情",
    "tags": [
      "真实事件改编",
      "绑架",
      "谈判专家",
      "时间赛跑",
      "女性力量"
    ],
    "oneLine": "2016年，韩国最年轻的犯罪侧写师被绑架，当她被困在棺材里时，只能利用绑匪让她直播求饶的镜头，向外界发送死亡摩斯密码。",
    "cover": "./119.jpg",
    "url": "./video-1319.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1320",
    "title": "盗墓者",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 冒险 / 悬疑",
    "tags": [
      "盗墓团伙",
      "地下古墓",
      "文物走私",
      "黑吃黑",
      "考古正义"
    ],
    "oneLine": "盗墓团伙闯入唐代古墓，却发现里面早已住着更可怕的东西。",
    "cover": "./120.jpg",
    "url": "./video-1320.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1321",
    "title": "坚不可摧",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作/军事",
    "tags": [
      "退伍军人",
      "拆迁冲突",
      "以寡敌众",
      "混凝土"
    ],
    "oneLine": "一位失去双腿的退伍老兵，为了保住战友遗孤的福利院，用自学的混凝土工事将自己“浇筑”成了最后防线。",
    "cover": "./121.jpg",
    "url": "./video-1321.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1322",
    "title": "柏油探戈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "犯罪, 动作",
    "tags": [
      "黑色电影",
      "飙车",
      "卧底",
      "女性主角"
    ],
    "oneLine": "一名交警队的女骑警为查清兄长死因，潜入地下赛车世界，与神秘车手共舞一曲柏油路上的死亡探戈。",
    "cover": "./122.jpg",
    "url": "./video-1322.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1323",
    "title": "两千狂想",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "音乐 / 剧情",
    "tags": [
      "乐队",
      "千禧年代",
      "梦想与现实",
      "英伦摇滚"
    ],
    "oneLine": "2000年，一支无名乐队得到两万英镑，必须在30天内录完改变人生的专辑。",
    "cover": "./123.jpg",
    "url": "./video-1323.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1324",
    "title": "团结才能踢3",
    "region": "韩国",
    "type": "综艺 / 真人秀",
    "year": "2026",
    "genre": "运动 / 真人秀 / 喜剧",
    "tags": [
      "明星足球",
      "笑点密集",
      "逆袭故事",
      "热血笨蛋"
    ],
    "oneLine": "第三季把一群完全不会踢球的演艺明星拉到海拔三千米的玻利维亚高原上进行足球集训。",
    "cover": "./124.jpg",
    "url": "./video-1324.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1325",
    "title": "山海伏魔之追月",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "奇幻, 动作",
    "tags": [
      "山海经",
      "神兽",
      "东方玄幻"
    ],
    "oneLine": "现代天文学女博士意外解开《山海经》封印，放出月中神兽，被迫与天选“废柴”踏上追月伏魔之旅。",
    "cover": "./125.jpg",
    "url": "./video-1325.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1326",
    "title": "在微尘中漫舞",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、家庭",
    "tags": [
      "亲情",
      "和解",
      "绝症",
      "生命教育"
    ],
    "oneLine": "一位患有尘肺病的矿工父亲，用最后的时间教叛逆的女儿跳一支他年轻时最爱的舞。",
    "cover": "./126.jpg",
    "url": "./video-1326.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1327",
    "title": "尸城30夜",
    "region": "韩国",
    "type": "电影",
    "year": "2028",
    "genre": "恐怖, 动作",
    "tags": [
      "丧尸",
      "极寒",
      "隔离",
      "人性实验"
    ],
    "oneLine": "零下三十度，丧尸被冻住，城里活人开始比死人更可怕。",
    "cover": "./127.jpg",
    "url": "./video-1327.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1328",
    "title": "逆转裁判",
    "region": "日本",
    "type": "电影 / 真人版",
    "year": "2012",
    "genre": "悬疑 / 犯罪 / 法庭",
    "tags": [
      "游戏改编",
      "法庭辩论",
      "灵媒",
      "异色瞳",
      "推理"
    ],
    "oneLine": "新人律师成步堂龙一在法庭上大喊“异议！”，却发现自己要辩护的委托人竟是被已死之人附身的灵媒。",
    "cover": "./128.jpg",
    "url": "./video-1328.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1329",
    "title": "婚姻攻略",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情, 爱情, 悬疑",
    "tags": [
      "夫妻博弈",
      "心理战",
      "出轨",
      "反转",
      "高智商"
    ],
    "oneLine": "一对结婚十年的夫妻同时怀疑对方出轨，他们用谍战手段互相试探，却发现彼此都是清白的好人。",
    "cover": "./129.jpg",
    "url": "./video-1329.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1330",
    "title": "来自火星的孩子",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 剧情, 家庭",
    "tags": [
      "自闭症隐喻",
      "伪装地球人",
      "高功能",
      "父子和解"
    ],
    "oneLine": "一个坚信自己是火星侦察兵的男孩，要求“不懂地球规则”的父亲协助他完成一项拯救火星母星的神秘任务。",
    "cover": "./130.jpg",
    "url": "./video-1330.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1331",
    "title": "复仇者2023",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作，科幻，惊悚",
    "tags": [
      "超级英雄",
      "基因改造",
      "道德困境",
      "无超能小队"
    ],
    "oneLine": "2023年，全球超级英雄被禁用，五位没有超能力的普通人决定伪装成复仇者，揭露更大的阴谋。",
    "cover": "./131.jpg",
    "url": "./video-1331.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1332",
    "title": "穷友记第四季",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧",
    "tags": [
      "英式幽默",
      "底层生活",
      "损友",
      "颓废"
    ],
    "oneLine": "三个穷到掉渣的曼彻斯特废柴，这一季决定搞一场荒唐的创业闹剧。",
    "cover": "./132.jpg",
    "url": "./video-1332.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1333",
    "title": "伯纳德与休伊",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧剧情",
    "tags": [
      "双男主",
      "友情",
      "老年生活"
    ],
    "oneLine": "一个暴躁的白人退休教授和他的黑人同性恋护工，在一场遗产风波中成为彼此唯一的家人。",
    "cover": "./133.jpg",
    "url": "./video-1333.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1334",
    "title": "炽热豪情",
    "region": "美国",
    "type": "电影",
    "year": "1987",
    "genre": "动作, 犯罪",
    "tags": [
      "硬汉动作",
      "飙车追逐",
      "兄弟情义",
      "复仇烈焰",
      "80年代复古"
    ],
    "oneLine": "一个被烧成重伤的前赛车手，带着半边脸的面具和一辆改装的装甲肌肉车，向整个地下飙车黑帮宣战。",
    "cover": "./134.jpg",
    "url": "./video-1334.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1335",
    "title": "女王之家",
    "region": "韩国",
    "type": "剧集",
    "year": "2026",
    "genre": "悬疑 / 剧情 / 家庭",
    "tags": [
      "财阀豪宅",
      "全员恶人",
      "母亲复仇"
    ],
    "oneLine": "财阀家族女主人去世周年忌日，家族成员接连收到“女王”的死亡预告，而那个“女王”竟是已故的她。",
    "cover": "./135.jpg",
    "url": "./video-1335.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1336",
    "title": "最后一次机会",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 犯罪",
    "tags": [
      "高概念",
      "密闭空间",
      "智力博弈",
      "反转"
    ],
    "oneLine": "一名被诬陷的破译专家被锁进中情局死牢，必须在 12 小时内破译三份假情报，否则全家灭口。",
    "cover": "./136.jpg",
    "url": "./video-1336.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1337",
    "title": "双城喜事",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情， 喜剧， 都市",
    "tags": [
      "异地恋",
      "双城生活",
      "甜宠",
      "高铁"
    ],
    "oneLine": "一对情侣分别在北京和上海上班，为了见面，他们把高铁当婚车，上演中国式异地恋的极限拉扯。",
    "cover": "./137.jpg",
    "url": "./video-1337.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1338",
    "title": "吉尔的妻子",
    "region": "意大利",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 心理",
    "tags": [
      "情感操控",
      "婚姻牢笼",
      "反转"
    ],
    "oneLine": "吉尔去世后，妻子打开他的保险柜，发现里面锁着三位“前妻”的遗物和一张她的同款婚纱照。",
    "cover": "./138.jpg",
    "url": "./video-1338.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1339",
    "title": "女侠卖人头",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "武侠, 动作, 悬疑",
    "tags": [
      "邪典",
      "复仇",
      "女侠"
    ],
    "oneLine": "江湖传言丑女侠当街卖人头换银两，没人知道她其实是在寻找自己被人贩子拐走、面部已被毁容的妹妹。",
    "cover": "./139.jpg",
    "url": "./video-1339.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1340",
    "title": "隔窗恋爱：看着你",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 惊悚",
    "tags": [
      "偷窥",
      "邻居",
      "病娇",
      "禁忌"
    ],
    "oneLine": "少女透过窗户爱上了对面的男孩，却发现男孩每晚都在窗前“看着”同一方向的另一个女孩。",
    "cover": "./140.jpg",
    "url": "./video-1340.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1341",
    "title": "海军罪案调查处第十九季",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪, 悬疑",
    "tags": [
      "长青剧",
      "军事情报",
      "单元破案"
    ],
    "oneLine": "一名退役海豹突击队员死在自家浴缸里，身上纹着的二维码扫描后，指向十九年前第一季的未解悬案。",
    "cover": "./141.jpg",
    "url": "./video-1341.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1342",
    "title": "王牌特派员",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧",
    "tags": [
      "有线电视",
      "恶作剧",
      "宅男",
      "疯狂",
      "杜夫龙格尔"
    ],
    "oneLine": "一个痴迷于有线电视的狂热少年，为了得到免费频道，不惜绑架了拥有卫星天线的暴躁邻居。",
    "cover": "./142.jpg",
    "url": "./video-1342.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1343",
    "title": "梵蒂冈奇迹调查官",
    "region": "日本/意大利",
    "type": "动画剧集",
    "year": "2024",
    "genre": "悬疑 / 宗教 / 推理",
    "tags": [
      "神学解密",
      "暗黑奇迹",
      "双男主",
      "智斗",
      "教会阴谋"
    ],
    "oneLine": "一位专攻超自然现象的虔诚神父，在调查圣痕时发现了通往地狱的数学公式。",
    "cover": "./143.jpg",
    "url": "./video-1343.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1344",
    "title": "齐格菲歌舞团",
    "region": "美国",
    "type": "剧集",
    "year": "2027",
    "genre": "剧情, 歌舞, 历史",
    "tags": [
      "百老汇",
      "时代剧",
      "群像剧",
      "华丽"
    ],
    "oneLine": "1920年代纽约，一家顶级歌舞团的后台，舞者们为了舞台上的光芒，在现实生活中上演着更残酷的生死大戏。",
    "cover": "./144.jpg",
    "url": "./video-1344.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1345",
    "title": "哈比王传奇",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2027",
    "genre": "喜剧, 奇幻, 冒险",
    "tags": [
      "矮人族",
      "废柴逆袭",
      "种田",
      "基建"
    ],
    "oneLine": "一个精通现代土木工程的社畜，意外穿越到矮人王国，成为最矮的“哈比王”，带领子民搞基建，对抗巨龙。",
    "cover": "./145.jpg",
    "url": "./video-1345.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1346",
    "title": "蓝猫龙骑团之炫迪传奇",
    "region": "中国",
    "type": "动画",
    "year": "2012",
    "genre": "科幻, 冒险, 儿童",
    "tags": [
      "机甲",
      "环保",
      "团队合作",
      "童年经典"
    ],
    "oneLine": "蓝猫和龙骑团遭遇史上最强敌人“污染兽”，一个被人类抛弃的试验品“炫迪”成了胜负关键。",
    "cover": "./146.jpg",
    "url": "./video-1346.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1347",
    "title": "草莓百分百",
    "region": "日本",
    "type": "电影",
    "year": "2005",
    "genre": "爱情 / 青春",
    "tags": [
      "纯爱",
      "校园",
      "漫画改编"
    ],
    "oneLine": "一个平庸的高中生，因为在天台捡到一本草莓内裤，从此被全校最性感的女孩盯上。",
    "cover": "./147.jpg",
    "url": "./video-1347.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1348",
    "title": "战时无旁",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 战争",
    "tags": [
      "抗战",
      "女兵",
      "文工团",
      "牺牲",
      "真实事件改编"
    ],
    "oneLine": "1942年，一支八路军女文工团被日军包围，她们手里唯一的武器是戏服和一面锣，却要掩护三十名伤员转移。",
    "cover": "./148.jpg",
    "url": "./video-1348.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1349",
    "title": "我的兄弟姐妹",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "家庭，剧情，年代",
    "tags": [
      "失散",
      "寻亲",
      "血缘羁绊"
    ],
    "oneLine": "1990年一场车祸夺走父母，四个年幼的孩子被不同家庭收养，二十年后，一封遗书让他们开始寻找失散的彼此。",
    "cover": "./149.jpg",
    "url": "./video-1349.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1350",
    "title": "东北警察故事2",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "东北",
      "硬汉",
      "警匪",
      "拳拳到肉",
      "喜剧元素"
    ],
    "oneLine": "东北小城派出所长，为了追查一桩假币案，被迫和从深圳来的“娘娘腔”技术警搭档，两人闹遍整个东北。",
    "cover": "./150.jpg",
    "url": "./video-1350.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1351",
    "title": "威尔科克斯生存记",
    "region": "英国",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 冒险 / 历史",
    "tags": [
      "维多利亚时代",
      "航海",
      "荒岛求生",
      "家族秘史"
    ],
    "oneLine": "19世纪贵族家族遭遇海难，流落荒岛，他们必须在食人族与内部的背叛中重建文明。",
    "cover": "./1.jpg",
    "url": "./video-1351.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1352",
    "title": "宇杀员",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 动作",
    "tags": [
      "杀手",
      "太空站",
      "克隆"
    ],
    "oneLine": "一名记忆被植入的杀手在太空监狱醒来，发现要杀的目标竟是自己。",
    "cover": "./2.jpg",
    "url": "./video-1352.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1353",
    "title": "未来警察",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2010",
    "genre": "动作 / 科幻 / 犯罪",
    "tags": [
      "时空穿越",
      "未来武器",
      "父女情",
      "香港动作",
      "反派改造人"
    ],
    "oneLine": "2080年的警察周志豪穿越回2020年，保护一位能开发出新能源的天才少女，而追杀她的竟是来自未来的改造人杀手。",
    "cover": "./3.jpg",
    "url": "./video-1353.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1354",
    "title": "大卫的圣诞魔法",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "家庭/奇幻/喜剧",
    "tags": [
      "圣诞节",
      "魔术",
      "许愿",
      "温情"
    ],
    "oneLine": "工作狂父亲在圣诞夜意外得到一个旧雪球，只要对着它表演魔术，就能让愿望成真，但他每次变出的“礼物”都让人啼笑皆非。",
    "cover": "./4.jpg",
    "url": "./video-1354.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1355",
    "title": "那些女人",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "剧情 / 战争",
    "tags": [
      "抗战",
      "女性群像",
      "平民视角",
      "江南水乡",
      "时代悲剧"
    ],
    "oneLine": "日军占领下的江南水乡，一群身份各异的女人——从汉奸太太到地下党员，从青楼女子到渔家寡妇——为了一个被遗弃的婴儿走到了一起。",
    "cover": "./5.jpg",
    "url": "./video-1355.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1356",
    "title": "失去的爱",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情文艺",
    "tags": [
      "失忆",
      "婚外情",
      "时间跳跃",
      "忧伤"
    ],
    "oneLine": "一个女人车祸失忆后忘了自己出轨的事实，重新爱上了被自己背叛的丈夫，而她腹中是情人的孩子。",
    "cover": "./6.jpg",
    "url": "./video-1356.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1357",
    "title": "我的僵尸女友",
    "region": "中国大陆（网络剧）",
    "type": "剧集",
    "year": "2023",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "丧尸",
      "同居",
      "另类爱情",
      "黑色幽默"
    ],
    "oneLine": "社畜程序员意外收养了一只失忆的“女性僵尸”，她不吃脑子只吃豆腐脑，还非要跟他挤一张床。",
    "cover": "./7.jpg",
    "url": "./video-1357.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1358",
    "title": "甜蜜坏朋友",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "校园 / 悬疑 / 同性",
    "tags": [
      "百合",
      "霸凌",
      "复仇",
      "双面女主",
      "高智商"
    ],
    "oneLine": "全校第一的乖乖女和全校最后一名的不良少女，交换日记后发现她们都想杀死同一个人。",
    "cover": "./8.jpg",
    "url": "./video-1358.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1359",
    "title": "群英夺宝",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作, 喜剧",
    "tags": [
      "夺宝",
      "传国玉玺",
      "民国",
      "相声"
    ],
    "oneLine": "1924年，冯玉祥逼宫故宫，一块传国玉玺意外落入天桥卖艺的父女手中，军阀、太监、洋人都疯了。",
    "cover": "./9.jpg",
    "url": "./video-1359.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1360",
    "title": "扎波佩克",
    "region": "捷克",
    "type": "电影",
    "year": "2021",
    "genre": "传记 / 运动",
    "tags": [
      "长跑",
      "冷战",
      "人性光辉"
    ],
    "oneLine": "奥运会长跑传奇扎波佩克，如何在政治高压下用双脚跑出自由与尊严。",
    "cover": "./10.jpg",
    "url": "./video-1360.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1361",
    "title": "成形",
    "region": "法国 / 比利时",
    "type": "电影",
    "year": "2020",
    "genre": "剧情 / 奇幻",
    "tags": [
      "身体恐怖",
      "自我认同",
      "女性",
      "艺术",
      "隐喻"
    ],
    "oneLine": "一个对自己的身材永远不满的女孩，某天发现她的身体真的会按照她的想法“变形”。",
    "cover": "./11.jpg",
    "url": "./video-1361.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1362",
    "title": "残酷青春",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 犯罪",
    "tags": [
      "校园暴力",
      "成长阵痛",
      "小镇青年",
      "现实主义"
    ],
    "oneLine": "小镇少年为给暗恋的女孩复仇，一步一步从小混混的跟班沦为凶杀案的帮凶。",
    "cover": "./12.jpg",
    "url": "./video-1362.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1363",
    "title": "火星时代 第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2026",
    "genre": "科幻 / 生存",
    "tags": [
      "火星殖民",
      "水资源",
      "独立运动",
      "硬科幻"
    ],
    "oneLine": "火星殖民第五年，地球突然切断所有补给，殖民地必须在90天内找到水源，否则全体窒息。",
    "cover": "./13.jpg",
    "url": "./video-1363.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1364",
    "title": "人力资源",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 悬疑, 职场",
    "tags": [
      "裁员",
      "AI面试",
      "黑镜风格",
      "反转"
    ],
    "oneLine": "冷酷的HR总监发现，公司新引进的AI面试系统正在暗中筛选并“清除”真实员工。",
    "cover": "./14.jpg",
    "url": "./video-1364.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1365",
    "title": "阳光中的青时雨",
    "region": "日本",
    "type": "动画电影",
    "year": "2018",
    "genre": "爱情，奇幻，动画",
    "tags": [
      "新海诚风",
      "内向少年",
      "记忆重置",
      "纯爱"
    ],
    "oneLine": "内向的少年能在雨天看到别人记忆中的“晴”，为了拯救失忆的暗恋对象，他必须收集所有的“阳光雨”。",
    "cover": "./15.jpg",
    "url": "./video-1365.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1366",
    "title": "花溪记",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装， 甜宠， 喜剧",
    "tags": [
      "穿越",
      "种田",
      "欢喜冤家",
      "美食"
    ],
    "oneLine": "现代米其林女主厨穿越到古代穷山村，用土豆炖牛肉征服了挑剔的落魄王爷。",
    "cover": "./16.jpg",
    "url": "./video-1366.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1367",
    "title": "定军山情歌",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 音乐 / 历史",
    "tags": [
      "陕北",
      "民歌",
      "乡村振兴",
      "非遗",
      "家国情怀"
    ],
    "oneLine": "一个从北京返乡的摇滚歌手，为了还债，被迫教一群老人唱失传的定军山情歌，却唱红了整个网络。",
    "cover": "./17.jpg",
    "url": "./video-1367.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1368",
    "title": "幸福岔路",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "剧情 / 公路",
    "tags": [
      "选择",
      "平行叙事",
      "人生感悟",
      "温情"
    ],
    "oneLine": "一辆驶往拉萨的长途大巴上，男主面临两个选择：向左走是回家照顾病母，向右走是去见异地恋女友，影片同时展示了两种人生的十年。",
    "cover": "./18.jpg",
    "url": "./video-1368.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1369",
    "title": "暴走狂花",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 动作",
    "tags": [
      "姐妹情",
      "公路狂奔",
      "花式打斗"
    ],
    "oneLine": "两个性格迥异的闺蜜意外卷入黑帮追杀，开着破面包车开启亡命之旅。",
    "cover": "./19.jpg",
    "url": "./video-1369.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1370",
    "title": "老虎搏懵",
    "region": "中国香港",
    "type": "电影",
    "year": "1977",
    "genre": "动作 / 喜剧 / 功夫",
    "tags": [
      "洪拳",
      "市井",
      "师徒",
      "诙谐打斗"
    ],
    "oneLine": "卖猪肉的懵仔意外打死一只偷吃的老虎，却被全村人当成打虎英雄，逼着他去教拳。",
    "cover": "./20.jpg",
    "url": "./video-1370.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1371",
    "title": "原野游龙",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "武侠, 动作, 西部",
    "tags": [
      "荒漠",
      "复仇",
      "镖师",
      "女性"
    ],
    "oneLine": "民国西北荒漠，最后一个女镖师为护送一件神秘镖物，与残暴的军阀和土匪展开了一场沙漠游击战。",
    "cover": "./21.jpg",
    "url": "./video-1371.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1372",
    "title": "呆呆精灵与女巫城堡",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "动画， 冒险",
    "tags": [
      "精灵",
      "女巫",
      "友谊",
      "勇气",
      "合家欢"
    ],
    "oneLine": "最笨的精灵被派去最危险的女巫城堡取魔法水晶，结果她把女巫都变成了朋友。",
    "cover": "./22.jpg",
    "url": "./video-1372.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1373",
    "title": "摇滚万万岁",
    "region": "英国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧, 音乐, 伪纪录片",
    "tags": [
      "讽刺",
      "重金属",
      "过气明星",
      "荒唐巡演"
    ],
    "oneLine": "过气重金属乐队“刺脊”重组巡演，鼓手爆炸、主唱被鹰叼走，但演出必须继续。",
    "cover": "./23.jpg",
    "url": "./video-1373.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1374",
    "title": "俏寡妇",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 爱情 / 古装",
    "tags": [
      "轻喜",
      "女强",
      "宅斗",
      "反套路"
    ],
    "oneLine": "丈夫“死”后，被全城嘲笑克夫的俏寡妇把夫家生意做成了行业第一，这时丈夫突然活着回来了。",
    "cover": "./24.jpg",
    "url": "./video-1374.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1375",
    "title": "爱了散了",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2022",
    "genre": "爱情, 剧情, 家庭",
    "tags": [
      "离婚冷静期",
      "复合",
      "中年危机"
    ],
    "oneLine": "结婚十五年的夫妻提交离婚申请后进入30天冷静期，却发现两人根本不会“冷静相处”。",
    "cover": "./25.jpg",
    "url": "./video-1375.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1376",
    "title": "相睇七次半",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 喜剧",
    "tags": [
      "相亲",
      "港式幽默",
      "大龄男女",
      "假结婚"
    ],
    "oneLine": "七年相亲失败四十七次的港女，决定和第七次相亲的“半次男”协议假结婚，却意外动心。",
    "cover": "./26.jpg",
    "url": "./video-1376.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1377",
    "title": "夜间远足",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "青春 / 治愈",
    "tags": [
      "毕业旅行",
      "夜行",
      "对话体",
      "友情"
    ],
    "oneLine": "一所高中的传统是毕业前全班一起夜间远足24小时，小田和香织在这段路上决定，是否要说出藏了三年的那句“我喜欢你”。",
    "cover": "./27.jpg",
    "url": "./video-1377.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1378",
    "title": "凶相",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖, 悬疑",
    "tags": [
      "整容",
      "复仇",
      "邪教",
      "港风"
    ],
    "oneLine": "被誉为“鬼斧神工”的整容医生在每位客户术后脸上，都看到了同一张死去女人的脸。",
    "cover": "./28.jpg",
    "url": "./video-1378.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1379",
    "title": "主播流浪记",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 冒险",
    "tags": [
      "直播",
      "徒步",
      "生存",
      "网红",
      "救赎"
    ],
    "oneLine": "一个造假徒步直播的网红，被揭穿后被迫真的徒步一千公里，却发现被全世界“云监督”。",
    "cover": "./29.jpg",
    "url": "./video-1379.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1380",
    "title": "如纸人生",
    "region": "土耳其",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 社会",
    "tags": [
      "土耳其",
      "纸艺",
      "拆迁",
      "家庭纽带",
      "反抗"
    ],
    "oneLine": "一个靠剪纸艺术为生的老人，在得知老宅将被强拆后，用纸造了一座一模一样的城。",
    "cover": "./30.jpg",
    "url": "./video-1380.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1381",
    "title": "流氓",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪，动作，黑色喜剧",
    "tags": [
      "黑帮卧底",
      "义气与法律",
      "反英雄"
    ],
    "oneLine": "一个从小在流氓堆里长大的警察卧底，发现自己比真流氓更适合当流氓。",
    "cover": "./31.jpg",
    "url": "./video-1381.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1382",
    "title": "破晓徂徕山",
    "region": "中国",
    "type": "电影",
    "year": "2025",
    "genre": "战争/历史",
    "tags": [
      "抗日",
      "游击战",
      "信仰",
      "壮烈"
    ],
    "oneLine": "徂徕山起义前夕，一个逃兵和一个女学生，因为一本遗失的密码本，在日军围剿中开启了亡命之旅。",
    "cover": "./32.jpg",
    "url": "./video-1382.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1383",
    "title": "末路狂奔3",
    "region": "丹麦",
    "type": "电影",
    "year": "2005",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "北欧黑色",
      "毒品",
      "绝望",
      "宿命"
    ],
    "oneLine": "毒贩 Milo 逃到西班牙以为重获新生，却发现过去的噩梦以更疯狂的方式追上了他。",
    "cover": "./33.jpg",
    "url": "./video-1383.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1384",
    "title": "再见时光",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情、奇幻",
    "tags": [
      "穿越",
      "父子和解",
      "年代",
      "催泪"
    ],
    "oneLine": "不孝子意外穿越回 1988 年，遇见了还在当“古惑仔”的年轻父亲，他决定阻止父亲打架，却不小心害母亲被别人追走。",
    "cover": "./34.jpg",
    "url": "./video-1384.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1385",
    "title": "硬体",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 动作, 惊悚",
    "tags": [
      "义体",
      "反乌托邦",
      "黑客",
      "身体恐怖",
      "近未来"
    ],
    "oneLine": "当你的机械义眼被黑客入侵，你看到的究竟是真相，还是广告？",
    "cover": "./35.jpg",
    "url": "./video-1385.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1386",
    "title": "小美人鱼2：重返大海",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动画, 奇幻, 冒险, 家庭",
    "tags": [
      "迪士尼",
      "续集",
      "反叛",
      "海洋环保",
      "女性成长"
    ],
    "oneLine": "爱丽儿当了 10 年王妃，发现自己患上了一种“变回人鱼就会死”的怪病，她必须在婚姻与大海间抉择。",
    "cover": "./36.jpg",
    "url": "./video-1386.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1387",
    "title": "富豪游戏",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 剧情",
    "tags": [
      "财阀",
      "生存游戏",
      "阶级讽刺",
      "高智商",
      "全员恶人"
    ],
    "oneLine": "被卷入富豪们的“真人狩猎”游戏，一个贫穷大学生发现，猎物也可以是猎人。",
    "cover": "./37.jpg",
    "url": "./video-1387.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1388",
    "title": "范黛的小室",
    "region": "波兰",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 历史",
    "tags": [
      "黑白摄影",
      "集中营",
      "单人场景",
      "缝纫机"
    ],
    "oneLine": "1943年的奥斯维辛，一位女囚被分配到一个仅有一台缝纫机的单人牢房，为军官夫人缝制礼服。",
    "cover": "./38.jpg",
    "url": "./video-1388.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1389",
    "title": "前妻回家",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 爱情 / 家庭",
    "tags": [
      "破镜重圆",
      "契约婚姻",
      "中年危机"
    ],
    "oneLine": "离婚三年的富商前妻突然失忆，以为两人还在热恋期，前夫不得不“扮演”丈夫来帮她恢复记忆。",
    "cover": "./39.jpg",
    "url": "./video-1389.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1390",
    "title": "天地豪情国语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1998",
    "genre": "剧情，爱情，商战",
    "tags": [
      "家族恩怨",
      "三角恋",
      "商战风云",
      "经典港剧",
      "国语配音"
    ],
    "oneLine": "两个家族、三代人的恩怨纠葛，从黑道拼杀到航空业争霸，爱恨情仇横跨三十年。",
    "cover": "./40.jpg",
    "url": "./video-1390.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1391",
    "title": "密室大逃脱 第五季",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀, 悬疑, 益智",
    "tags": [
      "全实景",
      "机关升级",
      "沉浸剧场",
      "高能反转"
    ],
    "oneLine": "本季玩家被困在一栋无限循环的医院大楼里，每一层的密室都是上一季死亡的复盘。",
    "cover": "./41.jpg",
    "url": "./video-1391.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1392",
    "title": "狱中豪杰",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作， 犯罪",
    "tags": [
      "监狱风云",
      "卧底",
      "暴力美学"
    ],
    "oneLine": "一名性格懦弱的会计师因诈骗罪入狱，为了自保，他谎称自己是黑帮大佬的亲弟弟。",
    "cover": "./42.jpg",
    "url": "./video-1392.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1393",
    "title": "战地之星",
    "region": "乌克兰",
    "type": "剧集",
    "year": "2024",
    "genre": "战争, 剧情, 历史",
    "tags": [
      "狙击手",
      "女兵",
      "真实事件改编",
      "残酷"
    ],
    "oneLine": "一名芭蕾舞演员在战壕中成为传奇狙击手，但她狙杀的每名敌军都是她的乐迷。",
    "cover": "./43.jpg",
    "url": "./video-1393.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1394",
    "title": "失落少年",
    "region": "泰国",
    "type": "电影",
    "year": "2015",
    "genre": "剧情 / 奇幻 / 冒险",
    "tags": [
      "森林",
      "信仰",
      "少年",
      "僧侣",
      "成长"
    ],
    "oneLine": "被同学霸凌的泰国少年逃进北部雨林，遇见一位隐居的失明老僧，老人说：你只要在林中活过雨季，就能看见自己的来世。",
    "cover": "./44.jpg",
    "url": "./video-1394.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1395",
    "title": "冤家兄弟",
    "region": "中国台湾",
    "type": "电影",
    "year": "2028",
    "genre": "剧情, 家庭",
    "tags": [
      "乡土",
      "亲情纠葛",
      "继承之战",
      "和解"
    ],
    "oneLine": "势如水火的两兄弟在争夺父亲遗产的官司现场，发现遗嘱视频里父亲只说了一句：“去找你们同母异父的第三个兄弟。”",
    "cover": "./45.jpg",
    "url": "./video-1395.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1396",
    "title": "杀出个太空",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作/科幻",
    "tags": [
      "硬核",
      "太空监狱",
      "越狱",
      "血腥暴力"
    ],
    "oneLine": "被冤枉的宇宙最强雇佣兵，要在全宇宙最森严的太空监狱里，赤手空拳杀出一条血路。",
    "cover": "./46.jpg",
    "url": "./video-1396.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1397",
    "title": "贫民窟教室",
    "region": "印度",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 教育",
    "tags": [
      "真实改编",
      "贫民窟",
      "老师",
      "希望"
    ],
    "oneLine": "一个富家女大学生自愿去贫民窟教孩子，却发现最大的问题不是贫穷，而是绝望。",
    "cover": "./47.jpg",
    "url": "./video-1397.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1398",
    "title": "高原",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 家庭 / 文艺",
    "tags": [
      "藏族文化",
      "生态移民",
      "母子情",
      "牦牛与信仰"
    ],
    "oneLine": "青藏高原最后一位不愿下山的藏族老阿妈，在暴风雪中与一头受伤的野牦牛互救，重新定义了“故乡”。",
    "cover": "./48.jpg",
    "url": "./video-1398.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1399",
    "title": "快活牛仔",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "西部喜剧",
    "tags": [
      "兄弟情",
      "公路冒险",
      "抢遗产",
      "笨贼",
      "马术"
    ],
    "oneLine": "两个废柴牛仔为了继承一座价值连城的酒庄，必须在三天内学会骑马并穿越死亡谷。",
    "cover": "./49.jpg",
    "url": "./video-1399.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1400",
    "title": "卡牌迷宫",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑，奇幻",
    "tags": [
      "桌游",
      "密室",
      "规则怪谈",
      "智斗"
    ],
    "oneLine": "七个陌生人被迫参与一局真人桌游，每张卡牌都会在现实里杀死对应的人。",
    "cover": "./50.jpg",
    "url": "./video-1400.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1401",
    "title": "数到十，让我变成沈晓旭",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻爱情",
    "tags": [
      "时空轮回",
      "身份互换",
      "青春成长"
    ],
    "oneLine": "叛逆少女每次数到十就会变成暗恋对象沈晓旭，却意外发现对方的日记里写满了自己的名字。",
    "cover": "./51.jpg",
    "url": "./video-1401.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1402",
    "title": "超能劲处男",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 科幻 / 动作",
    "tags": [
      "恶搞",
      "超级英雄",
      "青春期",
      "反差萌"
    ],
    "oneLine": "一个28岁的处男意外获得超能力，但每次使用能力前，必须先听到一句真诚的“我爱你”。",
    "cover": "./52.jpg",
    "url": "./video-1402.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1403",
    "title": "机智的捕快日常",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "喜剧, 古装, 悬疑",
    "tags": [
      "女捕快",
      "古代职场",
      "探案",
      "乌龙",
      "成长"
    ],
    "oneLine": "只想摸鱼的小捕快苏小晚被空降的高冷提刑官捆绑办案，从此，她摸鱼的日子变成了被尸体和案件支配的恐惧。",
    "cover": "./53.jpg",
    "url": "./video-1403.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1404",
    "title": "魔法师阴影",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻, 惊悚",
    "tags": [
      "学徒",
      "黑化",
      "魔法反噬"
    ],
    "oneLine": "伟大的魔法师失踪后，他的懦弱学徒为了寻找老师，不得不学习那些被禁忌的黑魔法。",
    "cover": "./54.jpg",
    "url": "./video-1404.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1405",
    "title": "再吻一次",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情",
    "tags": [
      "法式浪漫",
      "中年爱情",
      "重逢",
      "文艺"
    ],
    "oneLine": "离婚十年的书店老板，在巴黎街头偶遇曾经恨之入骨的前妻，手里拿着一本当年的情诗集。",
    "cover": "./55.jpg",
    "url": "./video-1405.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1406",
    "title": "柒两人生",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情, 奇幻",
    "tags": [
      "职场内卷",
      "灵魂互换",
      "人生重置",
      "黑色幽默"
    ],
    "oneLine": "加班猝死的社畜在奈何桥头因少喝了“七两”孟婆汤，带着前世记忆投胎成了自己刚出生的女儿。",
    "cover": "./56.jpg",
    "url": "./video-1406.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1407",
    "title": "前任杀神",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作、喜剧",
    "tags": [
      "杀手",
      "前任",
      "复仇",
      "搞笑打斗"
    ],
    "oneLine": "史上最强杀手金盆洗手，成为了一名全职奶爸，直到他的七个前任同时接到刺杀他的悬赏令。",
    "cover": "./57.jpg",
    "url": "./video-1407.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1408",
    "title": "卡罗尔·马蒂厄国语",
    "region": "法国",
    "type": "电视剧",
    "year": "2020",
    "genre": "悬疑 / 犯罪 / 心理",
    "tags": [
      "刑侦",
      "心理侧写",
      "连环杀手",
      "女警探"
    ],
    "oneLine": "天才女警探卡罗尔因追查连环杀手导致丈夫被杀，十年后凶手再次作案，而她唯一的盟友是那个杀手曾经的崇拜者。",
    "cover": "./58.jpg",
    "url": "./video-1408.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1409",
    "title": "白夜追凶",
    "region": "中国大陆",
    "type": "网剧",
    "year": "2024",
    "genre": "犯罪，悬疑，剧情",
    "tags": [
      "双胞胎",
      "替身",
      "刑侦",
      "硬汉派",
      "反转"
    ],
    "oneLine": "双胞胎兄弟一个在明一个在暗，共用同一个身份追查真凶，却在黎明前发现自己才是猎物。",
    "cover": "./59.jpg",
    "url": "./video-1409.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1410",
    "title": "短暂的工作日",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 喜剧",
    "tags": [
      "社畜狂想",
      "时间循环",
      "职场讽刺",
      "黑色幽默"
    ],
    "oneLine": "普通上班族发现自己被困在“今天下班前”的15分钟循环里，必须找到老板的“真正意思”才能打破。",
    "cover": "./60.jpg",
    "url": "./video-1410.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1411",
    "title": "我的名字叫朱莉娅·罗斯",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 犯罪",
    "tags": [
      "失忆",
      "身份置换",
      "心理惊悚"
    ],
    "oneLine": "醒来后所有人都叫她朱莉娅，但她知道自己其实是失踪的亿万富翁之女。",
    "cover": "./61.jpg",
    "url": "./video-1411.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1412",
    "title": "菜鸟新编剧",
    "region": "中国内地",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧、职场、剧情",
    "tags": [
      "编剧行业",
      "菜鸟逆袭",
      "潜规则",
      "吐槽"
    ],
    "oneLine": "怀揣梦想的小编剧入行后发现，甲方要的不是好故事，而是让男主在厕所里唱美声的“爆款梗”。",
    "cover": "./62.jpg",
    "url": "./video-1412.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1413",
    "title": "天台镇",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑，奇幻",
    "tags": [
      "小镇悬疑",
      "垂直社区",
      "记忆交换",
      "邻里秘密"
    ],
    "oneLine": "一栋十八层老楼的每个天台都藏着一个秘密，直到有人在天台与天台之间架起了梯子。",
    "cover": "./63.jpg",
    "url": "./video-1413.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1414",
    "title": "延禧攻略",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情, 古装, 宫斗",
    "tags": [
      "职场化宫斗",
      "复仇",
      "美学",
      "快节奏"
    ],
    "oneLine": "为了查清姐姐冤死真相，宫女魏璎珞重入紫禁城，誓要将所有仇人拉下马。",
    "cover": "./64.jpg",
    "url": "./video-1414.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1415",
    "title": "海狸",
    "region": "加拿大",
    "type": "电影",
    "year": "2019",
    "genre": "剧情, 家庭, 冒险",
    "tags": [
      "动物保护",
      "父女",
      "自然",
      "河流",
      "治愈"
    ],
    "oneLine": "一个沉默寡言的父亲带着叛逆的女儿去深山修补一个被破坏的海狸水坝，却意外卷入了偷猎者的陷阱。",
    "cover": "./65.jpg",
    "url": "./video-1415.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1416",
    "title": "桃李劫",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 犯罪, 青春",
    "tags": [
      "校园霸凌",
      "复仇",
      "反转"
    ],
    "oneLine": "顶尖中学百年校庆夜，三位曾霸凌同学的富二代接连惨死，疑点指向十年前自杀的女学生。",
    "cover": "./66.jpg",
    "url": "./video-1416.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1417",
    "title": "奥约帝国缔造者",
    "region": "尼日利亚",
    "type": "剧集",
    "year": "2026",
    "genre": "历史, 史诗",
    "tags": [
      "非洲",
      "王国",
      "权力"
    ],
    "oneLine": "一位被流放的王子，如何在“圣树”的预言下，团结各方部落，最终建立起西非史上最强大的奥约帝国。",
    "cover": "./67.jpg",
    "url": "./video-1417.html",
    "regionGroup": "other",
    "typeGroup": "series"
  },
  {
    "id": "1418",
    "title": "时光大战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "科幻, 动作",
    "tags": [
      "时间循环",
      "特种兵",
      "高概念"
    ],
    "oneLine": "一支特种小队被困在敌人操纵的24小时时间牢笼里，必须在无限循环的惨烈攻防战中找出破局的关键。",
    "cover": "./68.jpg",
    "url": "./video-1418.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1419",
    "title": "鲁邦三世：巴比伦黄金传说",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "动作， 喜剧， 冒险",
    "tags": [
      "怪盗",
      "古文明",
      "寻宝",
      "次元大介",
      "峰不二子"
    ],
    "oneLine": "鲁邦三世这次的目标是巴比伦的黄金印章，但钱形警督发现这次追捕背后隐藏着美苏核弹危机。",
    "cover": "./69.jpg",
    "url": "./video-1419.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1420",
    "title": "面具制作者",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "奇幻 / 剧情",
    "tags": [
      "匠人",
      "治愈",
      "面具",
      "身份认同"
    ],
    "oneLine": "能面匠人的作坊里，每一张面具摘下后，都会变成一张真实的人脸。",
    "cover": "./70.jpg",
    "url": "./video-1420.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1421",
    "title": "回到明天电影版",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 科幻",
    "tags": [
      "时间循环",
      "中年危机",
      "社畜",
      "同名剧集衍生"
    ],
    "oneLine": "一个男人被困在明天，永远到不了后天。",
    "cover": "./71.jpg",
    "url": "./video-1421.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1422",
    "title": "黑暗的习惯",
    "region": "西班牙",
    "type": "电影",
    "year": "1983",
    "genre": "剧情",
    "tags": [
      "修女",
      "瘾君子",
      "阿莫多瓦",
      "黑色幽默"
    ],
    "oneLine": "三个毒瘾修女与一个逃犯同住一室，圣洁与堕落在此刻没有界限。",
    "cover": "./72.jpg",
    "url": "./video-1422.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1423",
    "title": "大潮",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情, 历史, 商战",
    "tags": [
      "改革开放",
      "家族兴衰",
      "创业史诗",
      "时代变迁"
    ],
    "oneLine": "1980年代南方小镇，三兄弟因一张走私订单分道扬镳，三十年后在资本市场上演生死对决。",
    "cover": "./73.jpg",
    "url": "./video-1423.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1424",
    "title": "夏天的味道",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 爱情 / 美食",
    "tags": [
      "刨冰",
      "初恋",
      "乡愁",
      "小吃"
    ],
    "oneLine": "一位失意的米其林甜品师回到台南老家，在阿嬷即将关张的百年刨冰店里，重新找回了初恋与人生的甜味。",
    "cover": "./74.jpg",
    "url": "./video-1424.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1425",
    "title": "了不起的盖茨比",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "剧情，爱情",
    "tags": [
      "爵士时代",
      "悲剧",
      "美国梦",
      "痴情",
      "炫富"
    ],
    "oneLine": "神秘富翁每夜眺望对岸的绿光，只为唤醒旧情人的一次回眸。",
    "cover": "./75.jpg",
    "url": "./video-1425.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1426",
    "title": "远征依格曼",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻冒险",
    "tags": [
      "外星殖民",
      "未知星球",
      "生存挑战",
      "太空惊悚"
    ],
    "oneLine": "一支探险队抵达神秘星球依格曼，却发现那里的“土地”会吞噬记忆。",
    "cover": "./76.jpg",
    "url": "./video-1426.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1427",
    "title": "时间囚徒",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻, 惊悚",
    "tags": [
      "时间循环",
      "特工",
      "冷战",
      "硬科幻",
      "逆转未来"
    ],
    "oneLine": "冷战时期的英国特工被困在一天内，每次重启都会丢失一部分记忆。",
    "cover": "./77.jpg",
    "url": "./video-1427.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1428",
    "title": "阿比阿弟大冒险",
    "region": "美国",
    "type": "电影",
    "year": "1989",
    "genre": "喜剧，科幻",
    "tags": [
      "穿越",
      "摇滚",
      "乐天派",
      "历史人物",
      "cult"
    ],
    "oneLine": "两个成绩垫底的高中生为了历史作业，竟意外偷到时间机器，把苏格拉底等人带回了现代。",
    "cover": "./78.jpg",
    "url": "./video-1428.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1429",
    "title": "簷前滴水不差",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 犯罪, 黑色幽默",
    "tags": [
      "粤语片",
      "高利贷",
      "因果报应",
      "多线叙事",
      "草根"
    ],
    "oneLine": "高利贷从业者阿水坚信滴水不差，直到他发现欠债人名单上的每个人都在他生命里扮演过重要角色。",
    "cover": "./79.jpg",
    "url": "./video-1429.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1430",
    "title": "埃迪的单身生活",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "喜剧、爱情",
    "tags": [
      "都市",
      "独居",
      "约会",
      "职场",
      "成长"
    ],
    "oneLine": "三十岁的埃迪发誓享受单身，却在前任婚礼上意外领回一个五岁女儿。",
    "cover": "./80.jpg",
    "url": "./video-1430.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1431",
    "title": "天下笨贼",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧, 犯罪",
    "tags": [
      "黑色幽默",
      "多线叙事",
      "笨贼",
      "巧合"
    ],
    "oneLine": "三拨笨贼同时盯上一个古董花瓶，在密闭小区里上演连环乌龙劫案。",
    "cover": "./81.jpg",
    "url": "./video-1431.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1432",
    "title": "肖劲光大将",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "传记, 历史",
    "tags": [
      "军事",
      "真实人物",
      "建国"
    ],
    "oneLine": "从湖南农家少年到新中国首任海军司令员，一生只为那片海。",
    "cover": "./82.jpg",
    "url": "./video-1432.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1433",
    "title": "米格尔湖畔的鲨鱼警报",
    "region": "西班牙 / 墨西哥",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚 / 冒险 / 灾难",
    "tags": [
      "淡水鲨鱼",
      "生态惊悚",
      "假日噩梦"
    ],
    "oneLine": "风景如画的南美火山湖度假村，一条牛鲨沿着地下河游入，将狂欢变成了血色屠杀。",
    "cover": "./83.jpg",
    "url": "./video-1433.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1434",
    "title": "陶宝萍的幸福生活",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "家庭 / 喜剧",
    "tags": [
      "中老年恋爱",
      "邻里关系",
      "抖音网红",
      "房本争夺"
    ],
    "oneLine": "退休大妈陶宝萍突然成了小区“隐藏富婆”，一时间，儿子、骗子、初恋全都涌进了她的生活。",
    "cover": "./84.jpg",
    "url": "./video-1434.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1435",
    "title": "我的女官大人",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装/甜宠",
    "tags": [
      "穿越",
      "宫斗",
      "女强",
      "契约婚姻"
    ],
    "oneLine": "现代法学女博士穿越成后宫最底层的冷宫宫女，为了活下去，她靠一本《劳动法》将整个皇宫闹得鸡飞狗跳。",
    "cover": "./85.jpg",
    "url": "./video-1435.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1436",
    "title": "邪恶寄居",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "恐怖、科幻",
    "tags": [
      "人体寄生",
      "意识控制",
      "隔离恐慌",
      "变异生物",
      "血浆片"
    ],
    "oneLine": "一群年轻人在地下派对上被外星软体生物寄生，它们能完美模仿人类，却时刻准备破体而出。",
    "cover": "./86.jpg",
    "url": "./video-1436.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1437",
    "title": "疯狂大赛车",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "动作/喜剧",
    "tags": [
      "赛车",
      "无厘头",
      "公路片",
      "巅峰对决"
    ],
    "oneLine": "为了争夺“最烂车神”的名号，两位过气赛车手驾驶着破烂改装车，展开了一场横穿欧洲的疯狂拉力赛。",
    "cover": "./87.jpg",
    "url": "./video-1437.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1438",
    "title": "夏娃的时间",
    "region": "日本",
    "type": "动画剧集",
    "year": "2023",
    "genre": "科幻 / 日常",
    "tags": [
      "AI伦理",
      "治愈",
      "反乌托邦",
      "机器人",
      "咖啡馆"
    ],
    "oneLine": "在禁止人类与机器人产生情感的都市里，一家名为“夏娃的时间”的咖啡馆却隐藏着最危险的秘密。",
    "cover": "./88.jpg",
    "url": "./video-1438.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1439",
    "title": "护国良相狄仁杰之风摧边关",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "古装 / 悬疑 / 动作",
    "tags": [
      "狄仁杰",
      "边关",
      "军械失窃",
      "无间道"
    ],
    "oneLine": "狄仁杰赴边关查案，发现守关将军每天都会在同一个时辰，给千里之外的敌人写一封信。",
    "cover": "./89.jpg",
    "url": "./video-1439.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1440",
    "title": "黄金大劫案",
    "region": "中国大陆",
    "type": "电影",
    "year": "2012",
    "genre": "喜剧， 动作",
    "tags": [
      "伪满",
      "黄金",
      "混战",
      "荒诞"
    ],
    "oneLine": "一群小混混想抢日本人的黄金，却意外挖出了伪满皇宫地下的惊天秘密。",
    "cover": "./90.jpg",
    "url": "./video-1440.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1441",
    "title": "地狱少女第二季",
    "region": "日本",
    "type": "剧集 / 动画",
    "year": "2026",
    "genre": "悬疑 / 惊悚 / 神魔",
    "tags": [
      "诅咒",
      "人性丑陋",
      "稻草人",
      "以恶制恶"
    ],
    "oneLine": "地狱少女阎魔爱消失后，新的“地狱通信”网站出现，流放者将付出比死后下地狱更惨痛的代价。",
    "cover": "./91.jpg",
    "url": "./video-1441.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1442",
    "title": "邪恶夫人",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 家庭, 黑色喜剧",
    "tags": [
      "豪门争斗",
      "双重身份",
      "复仇女王",
      "全员演技"
    ],
    "oneLine": "温柔的家庭教师其实是十五年前被扫地出门的私生女，她接近豪门只为夺回本该属于自己的一切。",
    "cover": "./92.jpg",
    "url": "./video-1442.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1443",
    "title": "护士日记",
    "region": "中国大陆",
    "type": "电影",
    "year": "1957",
    "genre": "剧情、青春",
    "tags": [
      "黑白",
      "理想主义",
      "职业成长",
      "年代"
    ],
    "oneLine": "城市姑娘主动申请到边疆铁路工地当护士，用一本日记记下建设者的疼痛、思念与爱情。",
    "cover": "./93.jpg",
    "url": "./video-1443.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1444",
    "title": "促成奇迹的女人",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 励志",
    "tags": [
      "绝症患儿",
      "罕见病家庭",
      "医患合作",
      "生命韧性"
    ],
    "oneLine": "一位母亲自学生物医学，研发出针对女儿罕见基因病的治疗配方。",
    "cover": "./94.jpg",
    "url": "./video-1444.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1445",
    "title": "月落妇人心",
    "region": "韩国",
    "type": "电视剧",
    "year": "2025",
    "genre": "悬疑 / 家庭 / 犯罪",
    "tags": [
      "女性复仇",
      "月相秘密",
      "连环案"
    ],
    "oneLine": "每个月圆之夜，小镇就有一名施暴者失踪，而所有线索都指向那个被家暴的哑女裁缝。",
    "cover": "./95.jpg",
    "url": "./video-1445.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1446",
    "title": "空虚的闪耀",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情， 悬疑， 惊悚",
    "tags": [
      "网红",
      "直播",
      "人性",
      "黑深残"
    ],
    "oneLine": "一名当红女主播为了流量挑战极限，直播住进凶宅，却发现宅子里真的有一具尸体，而且就是她自己。",
    "cover": "./96.jpg",
    "url": "./video-1446.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1447",
    "title": "沉默的荣耀",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 战争",
    "tags": [
      "二战",
      "老兵",
      "记忆",
      "救赎"
    ],
    "oneLine": "二战老兵独自踏上归乡路，只为把战友的勋章送还给他的遗孀，却发现整个村庄都“忘记”了那场战争。",
    "cover": "./97.jpg",
    "url": "./video-1447.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1448",
    "title": "明日，战争爆发时",
    "region": "澳大利亚",
    "type": "剧集",
    "year": "2026",
    "genre": "战争 / 剧情",
    "tags": [
      "入侵",
      "青少年游击队",
      "农村",
      "游击战"
    ],
    "oneLine": "一群去露营的高中生归来，发现自己的小镇被外国军队占领，他们的父母成了囚犯。",
    "cover": "./98.jpg",
    "url": "./video-1448.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1449",
    "title": "超乎人性",
    "region": "德国",
    "type": "电影",
    "year": "2024",
    "genre": "科幻、伦理、悬疑",
    "tags": [
      "脑科学",
      "改造人",
      "道德困境",
      "记忆移植"
    ],
    "oneLine": "极端科学家将死囚大脑植入病弱弟弟头颅，新生命却拥有双重记忆。",
    "cover": "./99.jpg",
    "url": "./video-1449.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1450",
    "title": "拜托了！8小时",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "科幻，爱情",
    "tags": [
      "时间循环",
      "职场",
      "游戏设计",
      "命中注定"
    ],
    "oneLine": "游戏设计师被困在自己设计的8小时恋爱游戏里，必须在循环中让一个NPC爱上自己才能退出。",
    "cover": "./100.jpg",
    "url": "./video-1450.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1451",
    "title": "疗伤时间",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "剧情 / 治愈 / 家庭",
    "tags": [
      "心理创伤",
      "亲密关系",
      "慢节奏"
    ],
    "oneLine": "三个有心理创伤的人共同经营一家深夜食堂，每晚只接待一位客人。",
    "cover": "./101.jpg",
    "url": "./video-1451.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1452",
    "title": "好奇的乔治",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "genre": "动画 / 冒险 / 家庭",
    "tags": [
      "儿童",
      "探险",
      "友情",
      "科普",
      "治愈"
    ],
    "oneLine": "小猴子乔治捡到一个神秘罗盘，指针指向的并非北方，而是“所有人心里最快乐的地方”。",
    "cover": "./102.jpg",
    "url": "./video-1452.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1453",
    "title": "奉天往事",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧, 悬疑, 历史",
    "tags": [
      "民国",
      "奉天",
      "小人物",
      "连环案",
      "黑色幽默"
    ],
    "oneLine": "1928年的奉天城，一个卖报郎无意中拍下一张照片，让日本人、军阀和革命党同时盯上了他。",
    "cover": "./103.jpg",
    "url": "./video-1453.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1454",
    "title": "鬼纳特归来",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧，奇幻",
    "tags": [
      "鬼魂",
      "政治讽刺",
      "社会寓言",
      "宝莱坞"
    ],
    "oneLine": "一个满嘴跑火车的骗子死后变成鬼，为了回到人间，他必须完成“年度业绩第一”。",
    "cover": "./104.jpg",
    "url": "./video-1454.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1455",
    "title": "玩命兄弟",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 犯罪",
    "tags": [
      "双雄",
      "赛车",
      "兄弟反目",
      "极限运动"
    ],
    "oneLine": "曾是飞车拍档的两人因一场地下赛车惨案决裂，五年后，他们被同一个黑帮老大逼着再比一次，赌注是彼此的命。",
    "cover": "./105.jpg",
    "url": "./video-1455.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1456",
    "title": "民国密档之婚夜惊魂",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2022",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "民国",
      "新婚夜",
      "密室",
      "家族秘史"
    ],
    "oneLine": "1936年上海，富家千金在新婚之夜发现丈夫离奇死在婚房密室中，而唯一的出口从内部锁上了。",
    "cover": "./106.jpg",
    "url": "./video-1456.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1457",
    "title": "我喜欢的女子",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 奇幻",
    "tags": [
      "穿越",
      "暗恋",
      "友情以上",
      "青春"
    ],
    "oneLine": "暗恋十年的女孩突然消失了，所有人都忘了她，除了那个从不敢表白的他。",
    "cover": "./107.jpg",
    "url": "./video-1457.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1458",
    "title": "风行四季",
    "region": "中国内地",
    "type": "剧集",
    "year": "2005",
    "genre": "情景喜剧，家庭",
    "tags": [
      "四合院",
      "街坊邻居",
      "市井温情"
    ],
    "oneLine": "北京老胡同里的一间四合院，住着三户人家，他们的琐碎日常就是整个四季的风景。",
    "cover": "./108.jpg",
    "url": "./video-1458.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1459",
    "title": "罢工突击队",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 历史 / 动作",
    "tags": [
      "工人运动",
      "热血抗争",
      "民国谍战"
    ],
    "oneLine": "1927年上海工人第三次武装起义前夜，一支由码头工人组成的敢死队秘密集结。",
    "cover": "./109.jpg",
    "url": "./video-1459.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1460",
    "title": "反骗天下",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "骗局",
      "保险调查员",
      "高智商犯罪",
      "单元剧"
    ],
    "oneLine": "保险调查员方元专门与天价骗保案死磕，直到他自己患癌被拒赔，才发现最大的骗局是他自己的人生。",
    "cover": "./110.jpg",
    "url": "./video-1460.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1461",
    "title": "五月天人生无限公司",
    "region": "中国台湾",
    "type": "电影 / 演唱会纪实",
    "year": "2019",
    "genre": "音乐 / 纪录片",
    "tags": [
      "五月天",
      "演唱会",
      "摇滚",
      "励志"
    ],
    "oneLine": "一场巡回122场的演唱会背后，五个“上班族”如何用音乐为千万人建造了短暂逃离现实的避难所。",
    "cover": "./111.jpg",
    "url": "./video-1461.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1462",
    "title": "油菜花开的季节",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "剧情/家庭",
    "tags": [
      "返乡",
      "记忆",
      "东日本大地震",
      "治愈"
    ],
    "oneLine": "东京失败的摄影师回到福岛老家，在油菜花田里发现了一台记录了最后影像的旧相机。",
    "cover": "./112.jpg",
    "url": "./video-1462.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1463",
    "title": "在此一群",
    "region": "法国",
    "type": "电影",
    "year": "1975",
    "genre": "喜剧, 战争",
    "tags": [
      "二战",
      "酒馆",
      "伪装",
      "荒诞"
    ],
    "oneLine": "七个法国村民为躲避德军征粮，假装成一个巡回剧团，结果被请去为元帅演出。",
    "cover": "./113.jpg",
    "url": "./video-1463.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1464",
    "title": "血湖",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "湖泊",
      "连环失踪",
      "民俗禁忌",
      "双胞胎"
    ],
    "oneLine": "干涸的湖床下埋着三具无名尸，守湖人却说：“真正的怪物，早就上岸了。”",
    "cover": "./114.jpg",
    "url": "./video-1464.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1465",
    "title": "飞跃巅峰！科学讲座",
    "region": "日本",
    "type": "TV 剧集",
    "year": "2016",
    "genre": "喜剧， 校园， 科幻",
    "tags": [
      "疯狂科学家",
      "高中",
      "物理",
      "搞笑"
    ],
    "oneLine": "一个自称来自未来的疯狂科学家成为高中物理老师，用离谱的实验教学生如何毁灭地球。",
    "cover": "./115.jpg",
    "url": "./video-1465.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1466",
    "title": "周末生日游",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧剧情",
    "tags": [
      "姐妹争吵",
      "公路旅行",
      "人生清单",
      "意外和解"
    ],
    "oneLine": "控制狂姐姐为给妹妹庆生，预订了顶级周末游，却因为一场乌龙，姐妹俩不得不用“穷游”的方式，完成妹妹的临终遗愿清单。",
    "cover": "./116.jpg",
    "url": "./video-1466.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1467",
    "title": "蜘蛛人：离家日",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "动作 / 科幻 / 青春",
    "tags": [
      "欧洲旅行",
      "神秘客",
      "钢铁侠遗产",
      "幻觉大战"
    ],
    "oneLine": "彼得·帕克本想在欧洲旅行时向MJ告白，却被迫与自称来自平行宇宙的“神秘客”联手对抗元素众。",
    "cover": "./117.jpg",
    "url": "./video-1467.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1468",
    "title": "站住！花小姐",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情, 喜剧",
    "tags": [
      "霸总",
      "花艺",
      "契约",
      "甜宠"
    ],
    "oneLine": "嚣张跋扈的花艺界女霸总，为了气死前男友，绑架了一个失业的落魄模特假扮新欢。",
    "cover": "./118.jpg",
    "url": "./video-1468.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1469",
    "title": "我的富爸爸",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 喜剧 / 家庭",
    "tags": [
      "互换人生",
      "亲情",
      "拆迁",
      "代际冲突",
      "黑色幽默"
    ],
    "oneLine": "一个啃老族发现自己的“废柴爸爸”竟是城中村首富，十年装穷只为逼他独立。",
    "cover": "./119.jpg",
    "url": "./video-1469.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1470",
    "title": "兔八哥之兔子快跑",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2024",
    "genre": "喜剧 / 冒险 / 家庭",
    "tags": [
      "怀旧",
      "公路片",
      "恶搞",
      "乐一通",
      "全年龄"
    ],
    "oneLine": "兔八哥被陷害偷了地球的黄金胡萝卜，为了洗白，它必须拉着死对头达菲鸭横跨美国找真凶。",
    "cover": "./120.jpg",
    "url": "./video-1470.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1471",
    "title": "取脑袋冈村",
    "region": "日本",
    "type": "电影",
    "year": "1969",
    "genre": "武士 / 恐怖",
    "tags": [
      "cult",
      "斩首",
      "怪谈"
    ],
    "oneLine": "江户时代，一个专割叛徒头颅的刽子手发现，被他处决的人每晚都会回来借头。",
    "cover": "./121.jpg",
    "url": "./video-1471.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1472",
    "title": "索西",
    "region": "法国 / 德国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 历史",
    "tags": [
      "二战",
      "女性",
      "身份认同",
      "逃亡",
      "人性"
    ],
    "oneLine": "1942年的巴黎，犹太女孩索西借着一本伪造的身份证，活成了自己最陌生的模样。",
    "cover": "./122.jpg",
    "url": "./video-1472.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1473",
    "title": "将军的小宠医 动漫版",
    "region": "中国大陆",
    "type": "动漫",
    "year": "2025",
    "genre": "古风、甜宠、治愈",
    "tags": [
      "将军",
      "兽医",
      "萌宠",
      "先婚后爱"
    ],
    "oneLine": "冷酷将军的暴躁战马只让一个江湖兽医靠近，为留人他谎称自己有病。",
    "cover": "./123.jpg",
    "url": "./video-1473.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1474",
    "title": "金粉世家",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 爱情 / 历史",
    "tags": [
      "民国",
      "家族",
      "女性觉醒",
      "改编",
      "新视角"
    ],
    "oneLine": "全新改编，从冷清秋的视角出发，讲述她如何从金家弃妇逆袭成上海滩金融大亨。",
    "cover": "./124.jpg",
    "url": "./video-1474.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1475",
    "title": "狮子山之星",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 运动 / 励志",
    "tags": [
      "拳击",
      "草根逆袭",
      "父子关系",
      "旧区重建",
      "七十年代怀旧"
    ],
    "oneLine": "七十年代九龙城寨走出的少年，凭一双拳头和一只断线风筝，打上亚洲冠军擂台。",
    "cover": "./125.jpg",
    "url": "./video-1475.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1476",
    "title": "超级鲨大战机器鲨",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 科幻 / 怪兽",
    "tags": [
      "B级片",
      "鲨鱼",
      "机甲",
      "爽片"
    ],
    "oneLine": "军方制造的机械鲨鱼失控了，唯一的对手是一头变异的远古巨齿鲨。",
    "cover": "./126.jpg",
    "url": "./video-1476.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1477",
    "title": "大盗吉普赛",
    "region": "法国 / 罗马尼亚",
    "type": "电影",
    "year": "2019",
    "genre": "犯罪, 冒险, 爱情",
    "tags": [
      "公路电影",
      "罗姆文化",
      "偷盗艺术",
      "复仇"
    ],
    "oneLine": "传奇大盗“吉普赛”在出狱当天被偷走所有赃物，他必须跨越多国找回属于自己的荣誉。",
    "cover": "./127.jpg",
    "url": "./video-1477.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1478",
    "title": "另一部同志电影续集",
    "region": "台湾",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 同性",
    "tags": [
      "同志",
      "喜剧",
      "元叙事"
    ],
    "oneLine": "一部关于同志电影续集的纪录片，记录了导演在资本、审核和前任演员的夹击下，如何将这部电影“作”出来。",
    "cover": "./128.jpg",
    "url": "./video-1478.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1479",
    "title": "为时不晚",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 家庭",
    "tags": [
      "祖孙",
      "时钟",
      "时间倒流",
      "和解",
      "催泪"
    ],
    "oneLine": "一座拥有倒流时间能力的老钟，让一对关系破裂的祖孙回到过去，修复彼此的伤害。",
    "cover": "./129.jpg",
    "url": "./video-1479.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1480",
    "title": "彩虹飞车",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "公路",
      "治愈",
      "LGBTQ",
      "寻亲",
      "成长"
    ],
    "oneLine": "辍学少年欢子偷了一辆喷满彩虹图案的摩托车，带着自闭症弟弟踏上寻找抛弃他们的母亲的公路之旅。",
    "cover": "./130.jpg",
    "url": "./video-1480.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1481",
    "title": "今夜天堂",
    "region": "意大利",
    "type": "电影",
    "year": "1990",
    "genre": "剧情 / 奇幻",
    "tags": [
      "死后世界",
      "公路片",
      "哲学",
      "诗意"
    ],
    "oneLine": "老人死后灵魂搭上一辆通往天堂的巴士，途中遇到各色已故乘客，每人都有一个未竟的故事。",
    "cover": "./131.jpg",
    "url": "./video-1481.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1482",
    "title": "乐极生悲",
    "region": "中国",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 犯罪",
    "tags": [
      "黑色幽默",
      "彩票",
      "绑架",
      "小人物"
    ],
    "oneLine": "一个老好人中了五百万彩票的同一晚，他的废柴邻居们恰好策划了一场失败的绑架。",
    "cover": "./132.jpg",
    "url": "./video-1482.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1483",
    "title": "二十五，二十一",
    "region": "韩国",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情 / 青春",
    "tags": [
      "击剑",
      "亚运会",
      "时代创伤",
      "初恋",
      "BE美学"
    ],
    "oneLine": "1998年亚洲金融风暴后，一个家道中落的少女通过击剑重新站起来，并在二十一岁时遇到了那个二十五岁的男孩。",
    "cover": "./133.jpg",
    "url": "./video-1483.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1484",
    "title": "便利店新星",
    "region": "韩国",
    "type": "剧集",
    "year": "2020",
    "genre": "爱情，喜剧",
    "tags": [
      "便利店",
      "夜班",
      "逆袭",
      "社畜",
      "甜宠"
    ],
    "oneLine": "一名被开除的拳击手成为便利店夜班店员，却发现前任店长留下的神秘经营守则竟能改变人生。",
    "cover": "./134.jpg",
    "url": "./video-1484.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1485",
    "title": "叔比狗巨灵犬大闹科展",
    "region": "美国",
    "type": "动画电影",
    "year": "2002",
    "genre": "喜剧 / 悬疑 / 家庭",
    "tags": [
      "叔比狗",
      "侦探",
      "科展",
      "幽灵",
      "宠物"
    ],
    "oneLine": "叔比狗和小伙伴参加全美科展，却发现有一只巨型幽灵犬在破坏所有实验项目。",
    "cover": "./135.jpg",
    "url": "./video-1485.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1486",
    "title": "女巫2024",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 历史 / 女性",
    "tags": [
      "猎巫运动",
      "报复",
      "女权"
    ],
    "oneLine": "2024年，一个被诬陷为女巫的女孩穿越回17世纪，却发现当年的“女巫”全是现代人。",
    "cover": "./136.jpg",
    "url": "./video-1486.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1487",
    "title": "虎豹龙蛇鹰粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "1988",
    "genre": "动作 / 功夫 / 喜剧",
    "tags": [
      "五形拳",
      "门派斗争",
      "老港片",
      "市井英雄"
    ],
    "oneLine": "庙街小混混无意间集齐虎、豹、龙、蛇、鹰五位隐世高手，只为打赢一场“街坊杯”武术大赛。",
    "cover": "./137.jpg",
    "url": "./video-1487.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1488",
    "title": "迫虎跳墙",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "动作 / 犯罪 / 剧情",
    "tags": [
      "黑帮",
      "兄弟情",
      "复仇",
      "枪战",
      "江湖"
    ],
    "oneLine": "老实巴交的会计师全家被黑帮灭口，走投无路的他拿起屠刀，用账本上的数字开启了一场血腥复仇。",
    "cover": "./138.jpg",
    "url": "./video-1488.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1489",
    "title": "练恋舞",
    "region": "中国台湾",
    "type": "电影",
    "year": "2009",
    "genre": "爱情, 舞蹈, 剧情",
    "tags": [
      "探戈",
      "姐弟恋",
      "疗愈"
    ],
    "oneLine": "一个被困在殡仪馆的年轻入殓师，一个来祭拜亡妻的神秘女舞者，两人在地下室练起了探戈。",
    "cover": "./139.jpg",
    "url": "./video-1489.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1490",
    "title": "魔鬼的面具",
    "region": "意大利",
    "type": "电影",
    "year": "2018",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "诅咒",
      "威尼斯",
      "复古惊悚",
      "仪式杀人"
    ],
    "oneLine": "威尼斯狂欢节上，一名考古系女生戴上了18世纪刽子手的铅面具，从此每夜被恶灵逼着重复当年的一场冤案。",
    "cover": "./140.jpg",
    "url": "./video-1490.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1491",
    "title": "我的鬼学长",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖, 爱情, 喜剧",
    "tags": [
      "校园",
      "阴阳眼",
      "学霸鬼魂",
      "悬案追查"
    ],
    "oneLine": "能看到鬼的新生小琴，被迫和三十年前死亡的高冷学长鬼魂组队，调查一桩校园悬案。",
    "cover": "./141.jpg",
    "url": "./video-1491.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1492",
    "title": "杀手欧阳盆栽",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，动作，犯罪",
    "tags": [
      "废柴杀手",
      "新手任务",
      "乌龙暗杀",
      "黑色幽默"
    ],
    "oneLine": "一个在花店兼职的佛系社畜，被黑帮误认成顶级杀手，被迫接下暗杀任务，而他唯一杀过的东西只有盆栽。",
    "cover": "./142.jpg",
    "url": "./video-1492.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1493",
    "title": "圣物秘闻录",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 奇幻 / 冒险",
    "tags": [
      "圣物",
      "考古",
      "宗教",
      "解谜",
      "历史阴谋"
    ],
    "oneLine": "梵蒂冈秘密档案室被盗，失窃的都是一些被教会宣称“不存在”的圣物档案。",
    "cover": "./143.jpg",
    "url": "./video-1493.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1494",
    "title": "少女大盗",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧， 动作， 犯罪",
    "tags": [
      "女子团伙",
      "劫富济贫",
      "高中生",
      "爽片",
      "反转"
    ],
    "oneLine": "首尔五名性格迥异的学霸美少女，白天备战高考，晚上是专门偷窃贪官污吏的传奇义贼。",
    "cover": "./144.jpg",
    "url": "./video-1494.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1495",
    "title": "炫目之光",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "歌舞, 剧情",
    "tags": [
      "宝莱坞",
      "视觉系",
      "社会阶层"
    ],
    "oneLine": "孟买下水道的拾荒者发现，他用垃圾拼出的镜子碎片，可以反射出人们内心最渴望的画面。",
    "cover": "./145.jpg",
    "url": "./video-1495.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1496",
    "title": "嗡鸣",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "科幻、惊悚",
    "tags": [
      "声音恐怖",
      "心理压迫",
      "低频",
      "群体事件"
    ],
    "oneLine": "一种只存在于16岁以下少年耳中的低频嗡鸣开始响起，听到的人次日全部失踪。",
    "cover": "./146.jpg",
    "url": "./video-1496.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1497",
    "title": "东方大魔王",
    "region": "中国大陆",
    "type": "电影",
    "year": "1990",
    "genre": "喜剧, 奇幻",
    "tags": [
      "魔术",
      "民国",
      "冒险",
      "斗法",
      "老电影"
    ],
    "oneLine": "民国魔术师东方杰挑战上海滩三大幻术门派的掌门，却发现他们都是当年的抗日战友。",
    "cover": "./147.jpg",
    "url": "./video-1497.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1498",
    "title": "儿童之城",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，奇幻，社会",
    "tags": [
      "孤儿",
      "地下城",
      "自治",
      "秘密",
      "童年"
    ],
    "oneLine": "罗马地下古老的输水道里，一群被遗弃的孩子建立了自己的城邦，直到有一天，一个患病少女闯入了他们的世界。",
    "cover": "./148.jpg",
    "url": "./video-1498.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1499",
    "title": "青春漫画",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情, 喜剧, 剧情",
    "tags": [
      "漫改",
      "校园",
      "友情",
      "治愈"
    ],
    "oneLine": "高中时一起画漫画的闺蜜和暗恋对象，十年后一个是当红网漫作家，另一个成了失业的助理，他们被迫再次共事。",
    "cover": "./149.jpg",
    "url": "./video-1499.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1500",
    "title": "绝代艳后2006",
    "region": "美国 / 法国",
    "type": "电影",
    "year": "2006",
    "genre": "传记 / 历史 / 剧情",
    "tags": [
      "玛丽·安托瓦内特",
      "凡尔赛宫",
      "奢靡"
    ],
    "oneLine": "奥地利公主嫁入法国宫廷，从懵懂少女沦为“赤字皇后”，最终走上断头台。",
    "cover": "./150.jpg",
    "url": "./video-1500.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1501",
    "title": "照片里的伴娘",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 奇幻, 喜剧",
    "tags": [
      "照片穿越",
      "自我救赎",
      "婚礼",
      "治愈",
      "时光"
    ],
    "oneLine": "一张二十年前的婚礼合影，让现代“恐婚”女孩苏念穿越到了照片里，成为自己父母的伴娘。",
    "cover": "./1.jpg",
    "url": "./video-1501.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1502",
    "title": "邪典之梦中梦",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖， 悬疑",
    "tags": [
      "梦境",
      "邪教",
      "多层",
      "心理"
    ],
    "oneLine": "一个失眠严重的恐怖片编剧，开始每天做同一个噩梦，而梦中邪教举行仪式的废弃教堂，就在他家楼下。",
    "cover": "./2.jpg",
    "url": "./video-1502.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1503",
    "title": "婚前协议",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 家庭 / 律政",
    "tags": [
      "婚姻法",
      "财产分割",
      "都市情感",
      "现实主义",
      "群像"
    ],
    "oneLine": "每一对走进婚姻登记处的情侣，都先被递上了一支笔和一份长达40页的婚前协议。",
    "cover": "./3.jpg",
    "url": "./video-1503.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1504",
    "title": "金鹰访谈2011",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2011",
    "genre": "访谈 / 脱口秀",
    "tags": [
      "电视访谈",
      "金鹰",
      "明星",
      "怀旧",
      "电视史"
    ],
    "oneLine": "年度最敢问的电视访谈，那一年的顶流们都在这张红沙发上哭过或炸过。",
    "cover": "./4.jpg",
    "url": "./video-1504.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1505",
    "title": "比赛规则",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚 / 悬疑",
    "tags": [
      "密室逃脱",
      "生死游戏",
      "反转",
      "人性考验"
    ],
    "oneLine": "六名陌生人受邀参加一场高额奖金比赛，却发现真正的“比赛规则”是让他们互相残杀。",
    "cover": "./5.jpg",
    "url": "./video-1505.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1506",
    "title": "巴黎艳妹",
    "region": "法国",
    "type": "电影",
    "year": "2011",
    "genre": "剧情，文艺",
    "tags": [
      "姐妹",
      "移民",
      "身份认同",
      "巴黎",
      "成长"
    ],
    "oneLine": "阿尔及利亚裔的姐姐在巴黎过着保守的生活，活泼的妹妹到来后，彻底搅乱了她的平静与伪装。",
    "cover": "./6.jpg",
    "url": "./video-1506.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1507",
    "title": "中国女兵",
    "region": "中国台湾",
    "type": "电影",
    "year": "1981",
    "genre": "战争、剧情",
    "tags": [
      "女兵",
      "抗日",
      "姐妹情",
      "牺牲",
      "励志"
    ],
    "oneLine": "一群来自五湖四海的年轻女子投笔从戎，在抗日战场上用热血书写了属于自己的青春。",
    "cover": "./7.jpg",
    "url": "./video-1507.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1508",
    "title": "披头四大全",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "纪录片, 音乐, 传记",
    "tags": [
      "披头士",
      "乐队纪录片",
      "珍贵影像",
      "音乐史"
    ],
    "oneLine": "从未曝光的后台影像+AI修复技术，完整还原披头士从汉堡到屋顶演唱会的十年。",
    "cover": "./8.jpg",
    "url": "./video-1508.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1509",
    "title": "公牛犹斗",
    "region": "西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 体育",
    "tags": [
      "斗牛士",
      "失明",
      "最后一舞",
      "宿命"
    ],
    "oneLine": "一位失明的退役斗牛士，被诊断出仅有六个月视力，他决定重返斗牛场，完成当年未竟的那一刺。",
    "cover": "./9.jpg",
    "url": "./video-1509.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1510",
    "title": "爱出猫",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 青春 / 校园",
    "tags": [
      "作弊",
      "校园",
      "青春",
      "港式喜剧",
      "反作弊"
    ],
    "oneLine": "一所Band 1中学的“作弊帮”意外卷入一场跨国作弊集团阴谋，被迫用作弊技巧拯救学校。",
    "cover": "./10.jpg",
    "url": "./video-1510.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1511",
    "title": "我的微信连三界第二季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻 / 喜剧",
    "tags": [
      "都市修真",
      "神仙",
      "系统",
      "沙雕"
    ],
    "oneLine": "凡人林北的微信升级后，竟能联系到天庭和地府，神仙们开始找他代购凡间外卖。",
    "cover": "./11.jpg",
    "url": "./video-1511.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1512",
    "title": "夕灵传说",
    "region": "中国台湾, 日本",
    "type": "剧集",
    "year": "2021",
    "genre": "奇幻, 恐怖, 动作",
    "tags": [
      "妖怪",
      "都市传说",
      "除妖师",
      "单元剧",
      "双男主"
    ],
    "oneLine": "在现代都市的黄昏，能看到“夕灵”的除妖师与神秘的便利店店员联手，收服由人类怨念化成的妖怪。",
    "cover": "./12.jpg",
    "url": "./video-1512.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1513",
    "title": "恐惧大街2：1978",
    "region": "美国",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖, 惊悚, 悬疑",
    "tags": [
      "夏令营",
      "连环杀手",
      "复古恐怖"
    ],
    "oneLine": "夏令营本该是尖叫与欢笑，直到1978年的诅咒再次睁眼。",
    "cover": "./13.jpg",
    "url": "./video-1513.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1514",
    "title": "添丁冷战",
    "region": "中国香港",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧，家庭，剧情",
    "tags": [
      "催生",
      "婆媳大战",
      "都市夫妻",
      "反内卷",
      "港式幽默"
    ],
    "oneLine": "婆婆想抱孙组建监视团，儿媳想丁克搞事业，夹在中间的儿子展开一场“添丁冷战”。",
    "cover": "./14.jpg",
    "url": "./video-1514.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1515",
    "title": "蓝兰岛漂流记",
    "region": "日本",
    "type": "TV动画",
    "year": "2007",
    "genre": "喜剧, 奇幻, 后宫",
    "tags": [
      "漂流",
      "女儿国",
      "搞笑",
      "恋爱",
      "漫改"
    ],
    "oneLine": "少年东方院行人漂流到只有女人的蓝兰岛，岛上的规矩是：要么跟所有女人结婚，要么死。",
    "cover": "./15.jpg",
    "url": "./video-1515.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1516",
    "title": "我这一辈子",
    "region": "中国内地",
    "type": "剧集",
    "year": "2025",
    "genre": "年代/家庭/史诗",
    "tags": [
      "小人物",
      "改革开放",
      "北京",
      "胡同",
      "变迁"
    ],
    "oneLine": "从公私合营到互联网大潮，一个老北京剃头匠的椅子，见证了半部当代史。",
    "cover": "./16.jpg",
    "url": "./video-1516.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1517",
    "title": "初次，为了爱",
    "region": "韩国",
    "type": "电视剧",
    "year": "2026",
    "genre": "浪漫、喜剧、治愈",
    "tags": [
      "母胎单身",
      "契约恋爱",
      "社恐",
      "搞笑",
      "真香定律"
    ],
    "oneLine": "一个恋爱经验为零的29岁便利店夜班店员，为了写恋爱漫画，雇佣了一个“假男友”。",
    "cover": "./17.jpg",
    "url": "./video-1517.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1518",
    "title": "解剖室灵异事件之男生宿舍",
    "region": "中国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖",
    "tags": [
      "校园",
      "民俗",
      "中式恐怖",
      "医学院",
      "因果"
    ],
    "oneLine": "医学院男生在宿舍玩“四角游戏”，第七天发现当年死在解剖室的女尸，竟是其中一人的亲姐姐。",
    "cover": "./18.jpg",
    "url": "./video-1518.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1519",
    "title": "诗人出差了",
    "region": "中国大陆",
    "type": "电影",
    "year": "2017",
    "genre": "剧情, 公路, 文艺",
    "tags": [
      "诗人",
      "出差",
      "荒诞",
      "职场",
      "理想主义"
    ],
    "oneLine": "一个被广告公司开除的诗人伪装成出差，踏上西北公路，把每个甲方都写进讽刺诗。",
    "cover": "./19.jpg",
    "url": "./video-1519.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1520",
    "title": "诽谤罪",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "律政， 悬疑",
    "tags": [
      "网络暴力",
      "庭审博弈",
      "媒体审判"
    ],
    "oneLine": "一条匿名帖子让女教师身败名裂，为了自证清白，她将全网喷子告上法庭。",
    "cover": "./20.jpg",
    "url": "./video-1520.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1521",
    "title": "提防老千粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "2006",
    "genre": "犯罪, 悬疑, 剧情",
    "tags": [
      "赌片",
      "老千",
      "师徒",
      "反转"
    ],
    "oneLine": "一个单纯小子误入老千世界，在金钱与诱惑中逐渐迷失，最终亲手终结了这一切。",
    "cover": "./21.jpg",
    "url": "./video-1521.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1522",
    "title": "地厚天高",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情, 纪录片",
    "tags": [
      "青春",
      "迷茫",
      "理想主义",
      "当代青年",
      "高校"
    ],
    "oneLine": "清华园里，几个天之骄子，正在被一种叫做“意义”的东西折磨得发疯。",
    "cover": "./22.jpg",
    "url": "./video-1522.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1523",
    "title": "春暖花又开",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "家庭 / 剧情",
    "tags": [
      "代际冲突",
      "养老问题",
      "治愈"
    ],
    "oneLine": "为逃避催婚逃往南方养老院的大龄女青年，却在这里与患有阿尔茨海默症的“冷酷”母亲达成了和解。",
    "cover": "./23.jpg",
    "url": "./video-1523.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1524",
    "title": "抓住圣诞老人",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": [
      "圣诞",
      "冒险",
      "反套路",
      "温情",
      "闹剧"
    ],
    "oneLine": "三个熊孩子为验证圣诞老人真假，设下天罗地网，却抓到了一个狼狈又嘴硬的“小偷”。",
    "cover": "./24.jpg",
    "url": "./video-1524.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1525",
    "title": "玫瑰小天使",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2018",
    "genre": "儿童 / 剧情 / 家庭",
    "tags": [
      "留守儿童",
      "花艺",
      "治愈",
      "乡村"
    ],
    "oneLine": "云南山村七岁女孩玫瑰，为了让在外打工的妈妈回来，决定种出能“让人永远留下的魔法玫瑰”。",
    "cover": "./25.jpg",
    "url": "./video-1525.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1526",
    "title": "杰森在太空",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 恐怖",
    "tags": [
      "杀人魔",
      "太空",
      "血浆",
      "复活"
    ],
    "oneLine": "杀人魔杰森的尸体被冷冻送上太空实验飞船，癌细胞突变让他成为在真空中也能复活的不死怪物。",
    "cover": "./26.jpg",
    "url": "./video-1526.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1527",
    "title": "阿比盖尔的派对",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情",
    "tags": [
      "阶级",
      "家庭",
      "冲突",
      "讽刺",
      "室内剧"
    ],
    "oneLine": "在一个中产家庭为女儿举办的奢华成人礼派对上，被辞退的管家带着她的工人阶级亲友团上门“祝贺”了。",
    "cover": "./27.jpg",
    "url": "./video-1527.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1528",
    "title": "邪恶力量第四季",
    "region": "美国",
    "type": "剧集",
    "year": "2008",
    "genre": "悬疑， 奇幻， 恐怖",
    "tags": [
      "温家双煞",
      "天使降临",
      "兄弟虐心",
      "天启"
    ],
    "oneLine": "地狱之门开启，天使降临人间，温家兄弟发现自己正身处一场关乎世界末日的神魔棋局之中。",
    "cover": "./28.jpg",
    "url": "./video-1528.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1529",
    "title": "可爱的童年",
    "region": "日本",
    "type": "动画电影",
    "year": "2026",
    "genre": "治愈/奇幻",
    "tags": [
      "童年创伤",
      "幻想朋友",
      "时间回溯",
      "手绘画风"
    ],
    "oneLine": "35岁的社畜回到7岁的身体，却发现童年并不像记忆中那么“可爱”。",
    "cover": "./29.jpg",
    "url": "./video-1529.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1530",
    "title": "慈母骄儿",
    "region": "中国香港",
    "type": "电视剧",
    "year": "2023",
    "genre": "家庭, 伦理, 悬疑",
    "tags": [
      "溺爱",
      "犯罪心理",
      "母子关系",
      "社会悲剧"
    ],
    "oneLine": "单亲妈妈溺爱出的完美儿子涉嫌连环凶杀，她必须在报警和毁尸灭迹之间做出选择。",
    "cover": "./30.jpg",
    "url": "./video-1530.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1531",
    "title": "神探艳盗",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧, 犯罪, 爱情",
    "tags": [
      "女盗",
      "神探",
      "猫鼠游戏",
      "港式喜剧",
      "反转"
    ],
    "oneLine": "神探追捕艳盗三年，一夜春宵后才发现对方竟是自己的卧底妻子。",
    "cover": "./31.jpg",
    "url": "./video-1531.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1532",
    "title": "战神传说：奥德赛",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "动作, 奇幻, 史诗",
    "tags": [
      "希腊神话",
      "复仇",
      "视觉系",
      "反英雄"
    ],
    "oneLine": "战神阿瑞斯被宙斯贬为凡人后，为了重返神界，不得不带领一群被放逐的英雄，踏上寻找“命运碎片”的炼狱之旅。",
    "cover": "./32.jpg",
    "url": "./video-1532.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1533",
    "title": "抢钱辣后2",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "女性",
      "盗窃",
      "豪门",
      "续集",
      "辣妈"
    ],
    "oneLine": "金盆洗手的辣妈大盗被迫重出江湖，这次的目标是丈夫家族银行的镇行之宝。",
    "cover": "./33.jpg",
    "url": "./video-1533.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1534",
    "title": "惊声尖叫第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑、恐怖、犯罪",
    "tags": [
      "鬼脸杀手",
      "小镇谜团",
      "元恐怖",
      "青少年杀戮"
    ],
    "oneLine": "小镇幸存者们以为噩梦结束，直到鬼脸面具出现在每个人的手机直播里，而且是活体直播。",
    "cover": "./34.jpg",
    "url": "./video-1534.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1535",
    "title": "追寻巫毒：天国之根",
    "region": "美国 / 海地",
    "type": "剧集",
    "year": "2023",
    "genre": "恐怖 / 奇幻 / 历史",
    "tags": [
      "巫毒",
      "殖民史",
      "丧尸真实起源",
      "宗教探秘",
      "女祭司"
    ],
    "oneLine": "人类学家在海地田野调查巫毒仪式时，意外发现所谓的“丧尸粉”真的存在，而且能揭示西非黑奴跨越海洋的精神不灭。",
    "cover": "./35.jpg",
    "url": "./video-1535.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1536",
    "title": "索女罗拉",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 犯罪",
    "tags": [
      "女性复仇",
      "黑色电影",
      "霓虹美学",
      "失忆"
    ],
    "oneLine": "铜锣湾的站街女罗拉醒来后发现自己拥有了一身格斗技能，而她手机里的最后一条信息是：“杀了那个警察”。",
    "cover": "./36.jpg",
    "url": "./video-1536.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1537",
    "title": "名侦探学院4 彩蛋版",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2021",
    "genre": "真人秀 / 悬疑 / 益智",
    "tags": [
      "智力游戏",
      "密室逃脱",
      "高颜值学霸",
      "彩蛋",
      "团队"
    ],
    "oneLine": "未播出的密室高光时刻与爆笑失误合集，以及学长们私下的真实互动彩蛋。",
    "cover": "./37.jpg",
    "url": "./video-1537.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1538",
    "title": "对我来说非常珍贵的你",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情, 奇幻",
    "tags": [
      "聋哑",
      "治愈",
      "音乐",
      "契约恋爱"
    ],
    "oneLine": "顶流男歌手因声带受损失声，被迫住进一位聋哑女孩的家学习手语，却发现她能“听见”他心跳的旋律。",
    "cover": "./38.jpg",
    "url": "./video-1538.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1539",
    "title": "超级少女第四季",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "动作 / 科幻",
    "tags": [
      "平行宇宙",
      "女超人",
      "氪星",
      "独裁者"
    ],
    "oneLine": "当主宇宙的卡拉被绑架，一个来自共产主义氪星的“铁腕超级少女”顶替她掌管地球。",
    "cover": "./39.jpg",
    "url": "./video-1539.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1540",
    "title": "刀见笑",
    "region": "中国大陆",
    "type": "电影",
    "year": "2011",
    "genre": "武侠， 喜剧， 悬疑",
    "tags": [
      "先锋武侠",
      "套层叙事",
      "视觉系"
    ],
    "oneLine": "一把玄铁刀的流转，串联起屠夫、哑巴、青楼女和太监的三世恩怨，全部因“贪”字而起。",
    "cover": "./40.jpg",
    "url": "./video-1540.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1541",
    "title": "铁幕风暴",
    "region": "英国 / 俄罗斯",
    "type": "电影",
    "year": "2026",
    "genre": "政治、惊悚、谍战",
    "tags": [
      "冷战重燃",
      "双面间谍",
      "克里姆林宫",
      "核危机"
    ],
    "oneLine": "一名叛逃到英国的俄罗斯核密码专家声称，俄罗斯的核按钮早就不在总统手中，而在一台名为“铁幕”的量子AI那里。",
    "cover": "./41.jpg",
    "url": "./video-1541.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1542",
    "title": "尸体解剖",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "genre": "惊悚, 犯罪, 剧情",
    "tags": [
      "法医",
      "连环杀人",
      "反转"
    ],
    "oneLine": "天才女法医在解剖一具无名女尸时，发现凶手留下的线索，竟指向她失踪多年的妹妹。",
    "cover": "./42.jpg",
    "url": "./video-1542.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1543",
    "title": "相残",
    "region": "日本",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "人性拷问",
      "孤岛求生",
      "全员恶人"
    ],
    "oneLine": "十名幸存者被困孤岛，他们发现每晚都会死一个人，而凶手正是“昨天的自己”。",
    "cover": "./43.jpg",
    "url": "./video-1543.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1544",
    "title": "玉帝传奇",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2003",
    "genre": "古装神话",
    "tags": [
      "天庭",
      "权谋",
      "帝位之争",
      "神仙打架"
    ],
    "oneLine": "凡人张百忍被迫当选玉帝，却发现天庭的权力游戏比人间更肮脏。",
    "cover": "./44.jpg",
    "url": "./video-1544.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1545",
    "title": "恶爸临门",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧， 家庭",
    "tags": [
      "准女婿",
      "硬汉老爸",
      "反差萌",
      "爆笑整蛊",
      "温情"
    ],
    "oneLine": "温柔男友上门见家长，却发现准岳父是前特种兵，客厅里摆着测谎仪。",
    "cover": "./45.jpg",
    "url": "./video-1545.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1546",
    "title": "死亡笔记本：决战新世界",
    "region": "日本",
    "type": "剧集",
    "year": "2016",
    "genre": "悬疑，奇幻，犯罪",
    "tags": [
      "死神",
      "继承者",
      "网络审判"
    ],
    "oneLine": "夜神月与L死后十年，6本死亡笔记本同时降临人间，一场更疯狂的全球制裁游戏开始了。",
    "cover": "./46.jpg",
    "url": "./video-1546.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1547",
    "title": "翼·年代记第二季",
    "region": "日本",
    "type": "剧集",
    "year": "2006",
    "genre": "动画、奇幻、冒险",
    "tags": [
      "次元旅行",
      "CLAMP",
      "宿命轮回",
      "羽毛收集"
    ],
    "oneLine": "小狼一行人在新的次元，遇见了必须杀死挚友才能破解的诅咒，以及关于“那个小樱”的惊人真相。",
    "cover": "./47.jpg",
    "url": "./video-1547.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1548",
    "title": "星月对话2023",
    "region": "中国",
    "type": "综艺",
    "year": "2023",
    "genre": "脱口秀， 访谈",
    "tags": [
      "深夜访谈",
      "明星",
      "走心",
      "文化对谈",
      "治愈"
    ],
    "oneLine": "深夜演播厅里，主持人邀请嘉宾在星空下剥去伪装，进行一场卸下防备的自我对话。",
    "cover": "./48.jpg",
    "url": "./video-1548.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1549",
    "title": "心宅猎人",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 奇幻 / 爱情",
    "tags": [
      "读心术",
      "民国",
      "单元探案"
    ],
    "oneLine": "一个能进入他人记忆的“心宅猎人”，在追查连环杀人案时，发现所有的凶手都住过同一间闹鬼宅子。",
    "cover": "./49.jpg",
    "url": "./video-1549.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1550",
    "title": "大脚怪传说",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 悬疑",
    "tags": [
      "伪纪录片",
      "森林",
      "未知生物"
    ],
    "oneLine": "三个网红深入森林直播寻找大脚怪，却拍到了不该拍的东西。",
    "cover": "./50.jpg",
    "url": "./video-1550.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1551",
    "title": "人鱼恋",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "爱情/奇幻/剧情",
    "tags": [
      "人鱼",
      "渔村",
      "哑女",
      "治愈",
      "韩式催泪"
    ],
    "oneLine": "海边渔村哑女在暴风雨后救下一只受伤的人鱼，两人无法用语言交流，却用眼神谈了一场恋爱。",
    "cover": "./51.jpg",
    "url": "./video-1551.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1552",
    "title": "善良的心",
    "region": "韩国",
    "type": "电影",
    "year": "2019",
    "genre": "惊悚",
    "tags": [
      "器官贩卖",
      "反转",
      "黑色",
      "复仇"
    ],
    "oneLine": "世界上最善良的捐肾者，发现自己的一颗肾被移植给了十年前的杀人犯。",
    "cover": "./52.jpg",
    "url": "./video-1552.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1553",
    "title": "你好布拉德",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 剧情",
    "tags": [
      "中年危机",
      "比较心理",
      "自嘲",
      "治愈",
      "公路喜剧"
    ],
    "oneLine": "一位被同龄人成功学压得喘不过气的中年大叔，决定去跟踪自己曾经最看不上的老同学布拉德，却意外开启了一段荒诞旅程。",
    "cover": "./53.jpg",
    "url": "./video-1553.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1554",
    "title": "破局 2014",
    "region": "中国大陆",
    "type": "电影",
    "year": "2014",
    "genre": "犯罪 / 动作",
    "tags": [
      "卧底",
      "黑吃黑",
      "暴力美学"
    ],
    "oneLine": "卧底警察被全城通缉，唯一能证明他身份的上线死了，而黑帮老大说他也是警方的人。",
    "cover": "./54.jpg",
    "url": "./video-1554.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1555",
    "title": "鲨与鲸",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "惊悚, 冒险, 生态",
    "tags": [
      "海洋",
      "鲨鱼",
      "鲸鱼",
      "生存"
    ],
    "oneLine": "海洋学家发现一头虎鲸在疯狂猎杀鲨鱼，追踪后震惊地发现：鲨群首领拥有人类的仇恨意识。",
    "cover": "./55.jpg",
    "url": "./video-1555.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1556",
    "title": "寻找明日",
    "region": "日本",
    "type": "剧集",
    "year": "2021",
    "genre": "科幻，温情",
    "tags": [
      "时间循环",
      "救赎",
      "治愈",
      "高概念",
      "催泪"
    ],
    "oneLine": "一个想自杀的中年上班族，每天醒来都是同一天，直到他决定在“今日”帮助100个人。",
    "cover": "./56.jpg",
    "url": "./video-1556.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1557",
    "title": "状王宋世杰2粤语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "古装 / 悬疑 / 喜剧",
    "tags": [
      "粤语",
      "公案",
      "斗智",
      "讽刺",
      "单元剧"
    ],
    "oneLine": "宋世杰被贬为庶民后，在广州街头摆摊写信，却卷入一桩涉及十三行的洋人命案。",
    "cover": "./57.jpg",
    "url": "./video-1557.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1558",
    "title": "化身恶魔",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑 / 宗教",
    "tags": [
      "驱魔",
      "附身",
      "反转",
      "神父",
      "内心恶魔"
    ],
    "oneLine": "神父为一女孩驱魔时发现，恶灵并不在女孩体内，而是附身在主持驱魔仪式的自己身上。",
    "cover": "./58.jpg",
    "url": "./video-1558.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1559",
    "title": "布列斯特要塞",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2023",
    "genre": "战争，历史",
    "tags": [
      "二战",
      "围城",
      "绝境",
      "忠诚",
      "黑白闪回"
    ],
    "oneLine": "一群新兵在弹药耗尽后，用军号与刺刀在废墟中对抗一个装甲师。",
    "cover": "./59.jpg",
    "url": "./video-1559.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1560",
    "title": "成吉思汗",
    "region": "中国大陆 / 蒙古",
    "type": "剧集",
    "year": "2027",
    "genre": "历史 / 战争 / 传记",
    "tags": [
      "史诗战争",
      "草原枭雄",
      "权力博弈",
      "冷兵器美学",
      "领袖成长"
    ],
    "oneLine": "一介孤儿成长为草原之鹰，用铁蹄与血泪串联起半个世界的命运。",
    "cover": "./60.jpg",
    "url": "./video-1560.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1561",
    "title": "午夜时分",
    "region": "美国",
    "type": "电视电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "深夜电台",
      "连环案件",
      "神秘来电",
      "限时",
      "心理战"
    ],
    "oneLine": "午夜电台主持人接到一通神秘电话，对方声称要直播一场完美谋杀。",
    "cover": "./61.jpg",
    "url": "./video-1561.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1562",
    "title": "占领自由邦",
    "region": "南非",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 科幻 / 政治",
    "tags": [
      "反乌托邦",
      "资源战争",
      "佣兵觉醒"
    ],
    "oneLine": "一个私人军事公司接管了破产的自由邦省，当地农民拿起祖传的步枪，对抗无人机和机械佣兵。",
    "cover": "./62.jpg",
    "url": "./video-1562.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "1563",
    "title": "天山歌声",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 音乐 / 民族",
    "tags": [
      "新疆",
      "哈萨克族",
      "冬不拉",
      "父子",
      "传承"
    ],
    "oneLine": "一个在北京学美声的哈萨克族青年回到天山牧场，发现父亲把即将失传的“阿肯弹唱”改编成了重金属摇滚。",
    "cover": "./63.jpg",
    "url": "./video-1563.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1564",
    "title": "柳生一族的阴谋",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 历史 / 悬疑",
    "tags": [
      "剑戟片",
      "家族恩怨",
      "权谋斗争"
    ],
    "oneLine": "德川幕府第三代将军暴毙，所有的线索都指向了那个隐忍的剑术世家——柳生一族。",
    "cover": "./64.jpg",
    "url": "./video-1564.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1565",
    "title": "亚当和伊夫",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情、科幻",
    "tags": [
      "克隆",
      "伦理",
      "孤独",
      "未来",
      "哲学"
    ],
    "oneLine": "在人类灭绝后的世界，最后一个男人“亚当”克隆出了最后一个女人“伊夫”，但伊夫拒绝爱上他。",
    "cover": "./65.jpg",
    "url": "./video-1565.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1566",
    "title": "只是一次偶然的旅行",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 文艺 / 公路",
    "tags": [
      "黑白摄影",
      "西藏",
      "龙虾",
      "自我救赎"
    ],
    "oneLine": "一位女音乐人为了放生一只“神虾”而踏上前途未卜的西藏之旅，却闯入了记忆的迷障。",
    "cover": "./66.jpg",
    "url": "./video-1566.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1567",
    "title": "绝对零度2018",
    "region": "日本",
    "type": "电视剧",
    "year": "2018",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "未解决事件",
      "法医",
      "人工智能",
      "冷冻"
    ],
    "oneLine": "一支使用AI分析“冷冻悬案”的特殊团队发现，他们正在调查的死者，似乎就是团队里的同事。",
    "cover": "./67.jpg",
    "url": "./video-1567.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1568",
    "title": "无知的代价",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 犯罪 / 教育",
    "tags": [
      "社会派",
      "原生家庭",
      "阶层固化",
      "反转",
      "人肉搜索"
    ],
    "oneLine": "一场学区房骗局揭开了三个家庭的互相倾轧，最终发现最无知的人手握真相。",
    "cover": "./68.jpg",
    "url": "./video-1568.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1569",
    "title": "厉鬼医院",
    "region": "泰国",
    "type": "电影",
    "year": "2016",
    "genre": "恐怖 / 灵异",
    "tags": [
      "停尸房",
      "诅咒病历",
      "医疗黑幕",
      "怨灵"
    ],
    "oneLine": "实习护士夜班值守废弃老院区时，发现每一份死亡病历背后，都附着一个无法投胎的复仇厉鬼。",
    "cover": "./69.jpg",
    "url": "./video-1569.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1570",
    "title": "余生那些年国语",
    "region": "日本 / 中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "爱情剧情",
    "tags": [
      "绝症",
      "倒计时",
      "翻拍",
      "催泪",
      "治愈"
    ],
    "oneLine": "患上不治之症的女孩给自己定下十年之约，却在倒数第二年遇到了想共度余生的人。",
    "cover": "./70.jpg",
    "url": "./video-1570.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1571",
    "title": "浪子回头2013",
    "region": "中国台湾",
    "type": "电影",
    "year": "2013",
    "genre": "剧情, 家庭",
    "tags": [
      "黑道",
      "返乡",
      "便当",
      "和解"
    ],
    "oneLine": "混了十五年黑道的浪子，为了给癌症末期的母亲送最后一盒卤肉饭，踏上凶险归乡路。",
    "cover": "./71.jpg",
    "url": "./video-1571.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1572",
    "title": "捕猎",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 惊悚, 生存",
    "tags": [
      "大逃杀",
      "精英猎杀",
      "女性反击",
      "黑色幽默"
    ],
    "oneLine": "12个陌生人被扔进私人领地成为猎物，但他们不知道，这群“猎物”中藏着一名前特种兵。",
    "cover": "./72.jpg",
    "url": "./video-1572.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1573",
    "title": "怒海夺金砖",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "动作、犯罪、冒险",
    "tags": [
      "海底夺宝",
      "二战沉船",
      "兄弟反目",
      "爆破大场面"
    ],
    "oneLine": "潜水大佬带领团队在南中国海发现日军“阿波丸号”沉船，10吨金砖引发黑白两道疯狂追杀。",
    "cover": "./73.jpg",
    "url": "./video-1573.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1574",
    "title": "新舞曲大王",
    "region": "美国",
    "type": "电影",
    "year": "2005",
    "genre": "音乐, 剧情",
    "tags": [
      "街舞",
      "父子",
      "继承",
      "逆袭"
    ],
    "oneLine": "老牌百老汇舞王的儿子拒绝继承衣钵玩起街舞，直到父亲病倒，他必须在三个月内重编一支融合舞剧拯救剧院。",
    "cover": "./74.jpg",
    "url": "./video-1574.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1575",
    "title": "大阪外道",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "genre": "犯罪 / 悬疑 / 黑色幽默",
    "tags": [
      "黑道",
      "底层",
      "荒诞",
      "多线叙事"
    ],
    "oneLine": "一个废柴偷了黑道的枪，一个杀手丢了目标，一个警察欠了巨债，三条烂命在大阪的雨夜里撞出了血花。",
    "cover": "./75.jpg",
    "url": "./video-1575.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1576",
    "title": "怒海潜将国语",
    "region": "中国台湾 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 剧情 / 传记",
    "tags": [
      "潜水",
      "海军",
      "种族歧视",
      "断腿",
      "励志"
    ],
    "oneLine": "改编自真实故事，一名黑人水手在断腿后，依然以惊人毅力重返深海，成为海军首位首席潜水士官长。",
    "cover": "./76.jpg",
    "url": "./video-1576.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1577",
    "title": "蛊惑仔与大滚王",
    "region": "中国台湾",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧 / 动作 / 犯罪",
    "tags": [
      "台语片",
      "黑帮",
      "赌博",
      "无厘头",
      "猪哥亮风格"
    ],
    "oneLine": "一名不成气候的小蛊惑仔，误打误撞顶替了传说中的赌神“大滚王”，被迫与真正黑帮展开麻将生死局。",
    "cover": "./77.jpg",
    "url": "./video-1577.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1578",
    "title": "血腥警长",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 西部, 犯罪",
    "tags": [
      "荒野",
      "邪典",
      "复仇",
      "惊悚"
    ],
    "oneLine": "上世纪80年代，澳洲内陆小镇接连失踪23人，警长独自调查后挖出的却是自己的罪证。",
    "cover": "./78.jpg",
    "url": "./video-1578.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1579",
    "title": "今天也很抱歉",
    "region": "日本",
    "type": "剧集",
    "year": "2026",
    "genre": "喜剧 / 爱情",
    "tags": [
      "反差萌",
      "契约婚姻",
      "职场喜剧",
      "先婚后爱"
    ],
    "oneLine": "金牌危机公关专家为维护人设，花钱“租”了一个废柴丈夫，结果发现他是自己公司的最大客户。",
    "cover": "./79.jpg",
    "url": "./video-1579.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1580",
    "title": "伴你高飞",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "家庭剧情",
    "tags": [
      "父子和解",
      "轻型飞机",
      "鸟类迁徙",
      "治愈"
    ],
    "oneLine": "一位沉迷飞机制造的父亲，让患上旷野恐惧症的儿子驾驶自制小飞机，引领一群失依白额雁完成首次南飞。",
    "cover": "./80.jpg",
    "url": "./video-1580.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1581",
    "title": "将军在上之极乐净土",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2024",
    "genre": "古装 / 动作 / 奇幻",
    "tags": [
      "女将军",
      "秘境探险",
      "视觉系",
      "玄幻"
    ],
    "oneLine": "女将军叶昭奉命寻找长生花，却误入一座全是俊美男舞姬的极乐净土幻城。",
    "cover": "./81.jpg",
    "url": "./video-1581.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1582",
    "title": "美丽的黄昏",
    "region": "法国",
    "type": "电影",
    "year": "2021",
    "genre": "爱情 / 剧情",
    "tags": [
      "养老院之恋",
      "晚年激情",
      "时间与记忆"
    ],
    "oneLine": "80岁的退休钢琴教授在养老院遇见了70岁的“新住户”，两人决定在人生最后的黄昏里，认真地谈一场笨拙的恋爱。",
    "cover": "./82.jpg",
    "url": "./video-1582.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1583",
    "title": "她痴迷于我的丈夫",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 爱情",
    "tags": [
      "跟踪",
      "秘密",
      "反转"
    ],
    "oneLine": "丈夫的前女友搬进隔壁后，我发现她的目标不是他，而是我。",
    "cover": "./83.jpg",
    "url": "./video-1583.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1584",
    "title": "情罪",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情/剧情",
    "tags": [
      "婚外情",
      "道德困境",
      "女性视角"
    ],
    "oneLine": "一位五十岁的优雅女性在丈夫去世后发现，他三十年的婚外情对象，竟是自己最亲密的女友。",
    "cover": "./84.jpg",
    "url": "./video-1584.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1585",
    "title": "开国元勋",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "历史，传记",
    "tags": [
      "革命",
      "伟人",
      "群像",
      "正剧"
    ],
    "oneLine": "不同于传统伟人剧，本剧聚焦于几位年轻“开国元勋”在成为领袖之前的迷茫、争吵与失败。",
    "cover": "./85.jpg",
    "url": "./video-1585.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1586",
    "title": "怪物史莱克外传：欢度圣诞",
    "region": "美国",
    "type": "短片/特别篇",
    "year": "2023",
    "genre": "动画, 喜剧, 家庭",
    "tags": [
      "圣诞",
      "梦工厂",
      "恶搞",
      "温馨"
    ],
    "oneLine": "史莱克想给菲奥娜和孩子们一个完美的“沼泽圣诞节”，但驴子和靴子猫的“帮忙”差点毁了整个圣诞老人村。",
    "cover": "./86.jpg",
    "url": "./video-1586.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1587",
    "title": "欢迎来到驹田蒸馏所",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 职场",
    "tags": [
      "威士忌",
      "家族企业",
      "梦想",
      "传承",
      "励志"
    ],
    "oneLine": "东京精英白领被裁员后，回到老家破败的威士忌蒸馏所，开启一场逆袭与救赎。",
    "cover": "./87.jpg",
    "url": "./video-1587.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1588",
    "title": "花开校园",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2015",
    "genre": "青春 / 校园 / 励志",
    "tags": [
      "成长",
      "校合唱团",
      "师生情",
      "逆袭",
      "校园霸凌"
    ],
    "oneLine": "一群被全校嘲笑的跑调女生，组成了史上最不可能的合唱团。",
    "cover": "./88.jpg",
    "url": "./video-1588.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1589",
    "title": "宠物顽皮豹鹅卵石",
    "region": "美国",
    "type": "动画剧集",
    "year": "2022",
    "genre": "喜剧冒险",
    "tags": [
      "顽皮豹",
      "宠物",
      "日常",
      "无厘头",
      "治愈"
    ],
    "oneLine": "顽皮豹捡到一颗会说话的鹅卵石，从此他的独居生活变成了一场无休止的斗嘴冒险。",
    "cover": "./89.jpg",
    "url": "./video-1589.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1590",
    "title": "火拳快影",
    "region": "香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 武侠, 犯罪",
    "tags": [
      "硬核格斗",
      "地下拳场",
      "复仇怒火"
    ],
    "oneLine": "一位失明的退役拳王，凭借神乎其技的听声辨位功夫，在地下拳场为被杀害的女儿复仇。",
    "cover": "./90.jpg",
    "url": "./video-1590.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1591",
    "title": "没人写信给上校",
    "region": "墨西哥",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 文艺",
    "tags": [
      "等待",
      "退休",
      "斗鸡"
    ],
    "oneLine": "老上校十五年来每周五都去码头等一封信，而本周他的斗鸡必须赢。",
    "cover": "./91.jpg",
    "url": "./video-1591.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1592",
    "title": "双面玛丽莲梦露",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "传记 / 悬疑",
    "tags": [
      "替身",
      "娱乐圈阴谋",
      "双胞胎",
      "经典重塑"
    ],
    "oneLine": "调查发现，被世人熟知的梦露其实是两个人——一对双胞胎姐妹轮流出演。",
    "cover": "./92.jpg",
    "url": "./video-1592.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1593",
    "title": "猛虎屠龙",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 武侠",
    "tags": [
      "硬核功夫",
      "复仇",
      "阴谋",
      "特效实拍"
    ],
    "oneLine": "一位隐居多年的盲人刀客被迫出山，他发现要杀的仇人其实是被诬陷的忠良，而雇他的主顾才是真正的恶龙。",
    "cover": "./93.jpg",
    "url": "./video-1593.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1594",
    "title": "乳齿",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "剧情，奇幻，家庭",
    "tags": [
      "换牙",
      "返老还童",
      "祖孙情",
      "民俗",
      "治愈"
    ],
    "oneLine": "当90岁的奶奶开始换第二副乳牙并逐渐变回孩童时，叛逆的孙女不得不反过来当她的“妈妈”，两人踏上了寻找记忆的旅程。",
    "cover": "./94.jpg",
    "url": "./video-1594.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1595",
    "title": "我为假日狂",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧 / 爱情",
    "tags": [
      "圣诞节",
      "工作狂",
      "被迫放假",
      "小镇奇遇"
    ],
    "oneLine": "一个从不休假的工作狂被医生强制放假，却在圣诞小镇被误认为是新来的圣诞老人扮演者。",
    "cover": "./95.jpg",
    "url": "./video-1595.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1596",
    "title": "如意厨房",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "奇幻, 美食, 温情",
    "tags": [
      "传说",
      "治愈",
      "悬疑",
      "传承",
      "古装"
    ],
    "oneLine": "长安城深夜才开的神秘食肆，老板能用食物置换客人最痛苦的记忆，直到她遇到一个没有记忆的刺客。",
    "cover": "./96.jpg",
    "url": "./video-1596.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1597",
    "title": "滴水之恩",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，家庭",
    "tags": [
      "恩仇",
      "山村",
      "救赎"
    ],
    "oneLine": "三十年前他被全村人供养考上大学，三十年后他却带着拆迁令回到山村，要亲手推平故乡。",
    "cover": "./97.jpg",
    "url": "./video-1597.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1598",
    "title": "新三剑侠",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "genre": "动作，冒险",
    "tags": [
      "重启",
      "女性剑客",
      "蒸汽朋克"
    ],
    "oneLine": "三个女人从垃圾堆里捡到达达尼昂的日记，决定冒充火枪手劫富济贫。",
    "cover": "./98.jpg",
    "url": "./video-1598.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1599",
    "title": "舱一代",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 惊悚",
    "tags": [
      "太空",
      "基因",
      "阶级",
      "反抗"
    ],
    "oneLine": "一艘驶往新球星的世代飞船上，被基因编辑的“舱一代”发现，他们只是富人们用于试验衰老的“耗材”。",
    "cover": "./99.jpg",
    "url": "./video-1599.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1600",
    "title": "天下父母心",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2021",
    "genre": "家庭，剧情",
    "tags": [
      "亲情",
      "代际冲突",
      "催泪",
      "治愈"
    ],
    "oneLine": "三个被遗弃的孩子，一对无法生育的夫妻，组成了一个没有血缘却比血更浓的家。",
    "cover": "./100.jpg",
    "url": "./video-1600.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1601",
    "title": "柜中野兽",
    "region": "加拿大",
    "type": "剧情片",
    "year": "2024",
    "genre": "剧情、心理、成长",
    "tags": [
      "同性",
      "童年创伤",
      "衣柜隐喻",
      "自我认同"
    ],
    "oneLine": "九岁的男孩坚信衣柜里住着一只怪兽，直到他发现那只怪兽是自己藏在里面的秘密。",
    "cover": "./101.jpg",
    "url": "./video-1601.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1602",
    "title": "通灵之王第二季",
    "region": "中国台湾",
    "type": "综艺",
    "year": "2026",
    "genre": "真人秀, 灵异, 竞技",
    "tags": [
      "通灵",
      "挑战",
      "灵异事件",
      "民俗",
      "淘汰赛"
    ],
    "oneLine": "亚洲最强通灵人争夺战升级，每期亲赴亚洲知名鬼屋完成真实灵异任务。",
    "cover": "./102.jpg",
    "url": "./video-1602.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1603",
    "title": "当我们变得陌生",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情， 剧情",
    "tags": [
      "婚姻危机",
      "七年之痒",
      "找回初心"
    ],
    "oneLine": "结婚十年的夫妻意外获得了读出彼此内心真实想法的超能力，却发现对方早已满腹怨言。",
    "cover": "./103.jpg",
    "url": "./video-1603.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1604",
    "title": "龙纹身的女鬼入镜",
    "region": "中国香港 / 台湾",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 悬疑 / 惊悚",
    "tags": [
      "都市传说",
      "灵异录像",
      "纹身诅咒",
      "伪纪录片",
      "港台合拍"
    ],
    "oneLine": "一个网红灵异探险团队在废弃医院直播时，镜头拍到一名后背有龙纹身的女鬼，随后团队成员接连离奇死亡。",
    "cover": "./104.jpg",
    "url": "./video-1604.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1605",
    "title": "只为你遗憾",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情",
    "tags": [
      "时间循环",
      "遗憾",
      "亲情"
    ],
    "oneLine": "她拥有了回到过去的能力，但每次只能修改一件微小的、让自己遗憾的事。",
    "cover": "./105.jpg",
    "url": "./video-1605.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1606",
    "title": "哈姆莱特",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "剧情， 惊悚， 悬疑",
    "tags": [
      "莎士比亚",
      "现代改编",
      "企业战争",
      "科技巨头"
    ],
    "oneLine": "在现代伦敦，一家科技巨头的创始人被弟弟谋杀，其子通过一款AI软件看见了父亲的鬼魂。",
    "cover": "./106.jpg",
    "url": "./video-1606.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1607",
    "title": "武装起来的好莱坞",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 喜剧 / 讽刺",
    "tags": [
      "好莱坞",
      "枪支",
      "讽刺",
      "黑色幽默"
    ],
    "oneLine": "好莱坞电影中的枪战场面越来越假，为了追求“真实感”，一群过气动作明星组建了一支真枪实弹的“武装特效团队”。",
    "cover": "./107.jpg",
    "url": "./video-1607.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1608",
    "title": "杀手之怒",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪",
    "tags": [
      "杀手复仇",
      "暴力美学",
      "极简叙事",
      "以暴制暴"
    ],
    "oneLine": "顶级的冷血杀手遭组织出卖，身负重伤的他杀光所有追兵，只为回家给女儿做完那盘没做完的意面。",
    "cover": "./108.jpg",
    "url": "./video-1608.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1609",
    "title": "秘密同盟",
    "region": "韩国",
    "type": "剧集",
    "year": "2027",
    "genre": "悬疑/动作",
    "tags": [
      "卧底",
      "双面间谍",
      "南北韩",
      "兄弟情"
    ],
    "oneLine": "朝鲜间谍和韩国国情院要员被迫合作，却发现彼此的上级是同一个人。",
    "cover": "./109.jpg",
    "url": "./video-1609.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1610",
    "title": "宝贝老板：圣诞红利",
    "region": "美国",
    "type": "动画剧集",
    "year": "2024",
    "genre": "喜剧, 奇幻, 家庭",
    "tags": [
      "圣诞特别篇",
      "合家欢",
      "恶搞",
      "商业竞争"
    ],
    "oneLine": "为了阻止“圣诞老人股份公司”被邪恶的“禁欲玩具商”恶意收购，宝贝老板必须秘密潜入北极，夺回孩子们的愿望清单。",
    "cover": "./110.jpg",
    "url": "./video-1610.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1611",
    "title": "哭婴径",
    "region": "马来西亚",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖，民俗，悬疑",
    "tags": [
      "南洋邪术",
      "婴灵",
      "山路怪谈",
      "禁忌",
      "因果报应"
    ],
    "oneLine": "马来西亚雨林深处有一条山路，夜半总能听见婴儿哭声，踏入者无人能返。",
    "cover": "./111.jpg",
    "url": "./video-1611.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1612",
    "title": "小猪扑满的愿望",
    "region": "英国 / 美国",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 奇幻 / 家庭",
    "tags": [
      "拟人化存钱罐",
      "许愿",
      "消费主义",
      "友谊",
      "治愈"
    ],
    "oneLine": "一只被遗忘在阁楼的陶瓷小猪扑满苏醒过来，为了完成主人三十年前许下的愿望，踏上了穿越玩具世界的冒险。",
    "cover": "./112.jpg",
    "url": "./video-1612.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1613",
    "title": "南少林",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "动作 / 历史",
    "tags": [
      "少林武术",
      "清朝禁武",
      "侠隐",
      "硬核打斗"
    ],
    "oneLine": "乾隆禁武令下，南少林三十六房转入地下，用木人桩打出的不只是拳，还有反清复明的密码。",
    "cover": "./113.jpg",
    "url": "./video-1613.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1614",
    "title": "英国病人",
    "region": "英国",
    "type": "电影",
    "year": "2026",
    "genre": "历史 / 战争 / 爱情",
    "tags": [
      "二战",
      "失忆",
      "沙漠"
    ],
    "oneLine": "二战末期，一架被击落的飞机里爬出一位面目全非的“英国病人”，他记得所有地理坐标，唯独忘了自己的名字和爱人。",
    "cover": "./114.jpg",
    "url": "./video-1614.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1615",
    "title": "迷失海湾 第二季",
    "region": "英国",
    "type": "电视剧 / 剧集",
    "year": "2022",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "英剧",
      "海滨小镇",
      "连环失踪",
      "女警探",
      "家庭秘密"
    ],
    "oneLine": "莫克姆湾又发现一具无名尸，女警探探长发现死者手臂上的纹身，和第一季失踪的男孩一模一样。",
    "cover": "./115.jpg",
    "url": "./video-1615.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1616",
    "title": "迷失方向",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2025",
    "genre": "冒险 / 剧情 / 生存",
    "tags": [
      "荒野求生",
      "母女",
      "心理创伤",
      "回忆"
    ],
    "oneLine": "一对在车祸中失忆的母女醒来发现自己身在荒野，她们必须一边求生一边拼凑出是谁想让她们死。",
    "cover": "./116.jpg",
    "url": "./video-1616.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1617",
    "title": "富贵逼东人",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧，家庭",
    "tags": [
      "贺岁",
      "暴发户",
      "斗气",
      "粤语",
      "合家欢"
    ],
    "oneLine": "寒酸打工仔误中彩票，却被隔壁有钱邻居误认为是绑匪，一场乌龙大战爆笑上演。",
    "cover": "./117.jpg",
    "url": "./video-1617.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1618",
    "title": "烈杀令",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 惊悚",
    "tags": [
      "杀手",
      "清理门户",
      "孤胆英雄",
      "硬核"
    ],
    "oneLine": "顶级杀手组织的最强王牌在退休前夕被组织灭口，不料他活了下来，并且带着一份完整的客户名单回来了。",
    "cover": "./118.jpg",
    "url": "./video-1618.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1619",
    "title": "我爸没说的那件事",
    "region": "中国台湾/中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "剧情/家庭",
    "tags": [
      "父爱",
      "遗产",
      "返乡",
      "秘密"
    ],
    "oneLine": "父亲去世后，儿子在整理遗物时发现一张照片，由此揭开了一段隐藏半个世纪的两岸家族史。",
    "cover": "./119.jpg",
    "url": "./video-1619.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1620",
    "title": "铁路的白蔷薇",
    "region": "日本",
    "type": "电影",
    "year": "1958",
    "genre": "剧情 / 悬疑",
    "tags": [
      "昭和",
      "战后复苏",
      "铁路",
      "白蔷薇",
      "心理惊悚"
    ],
    "oneLine": "深夜列车上的神秘白蔷薇，牵连着一桩横跨十年的身份迷局与赎罪之旅。",
    "cover": "./120.jpg",
    "url": "./video-1620.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1621",
    "title": "金玉缘",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 古装",
    "tags": [
      "先婚后爱",
      "宅斗",
      "甜虐"
    ],
    "oneLine": "一场为冲喜而办的荒唐婚礼，让病秧子少爷和替嫁丫鬟成了真夫妻。",
    "cover": "./121.jpg",
    "url": "./video-1621.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1622",
    "title": "色降2之血玫瑰",
    "region": "中国香港",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "降头术",
      "复仇新娘",
      "红衣厉鬼",
      "南洋传说"
    ],
    "oneLine": "新娘惨死婚礼当日，七年后化作“血玫瑰”归来，向所有参加婚宴的人种下血色情花蛊。",
    "cover": "./122.jpg",
    "url": "./video-1622.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1623",
    "title": "国际杀手真实回忆录",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "动作, 喜剧, 犯罪",
    "tags": [
      "伪纪录片",
      "笑料不断",
      "身份错位",
      "硬汉",
      "刺杀"
    ],
    "oneLine": "一个生活失败的小说家，为了还债谎称自己是杀手，结果被真正的黑手党找上门来。",
    "cover": "./123.jpg",
    "url": "./video-1623.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1624",
    "title": "美国派：集体裸奔",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 青春",
    "tags": [
      "校园恶搞",
      "裸奔",
      "毕业狂欢"
    ],
    "oneLine": "毕业舞会当晚，全校学生被卷入一场失控的集体裸奔，所有的秘密都在今夜曝光。",
    "cover": "./124.jpg",
    "url": "./video-1624.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1625",
    "title": "世外者们",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 悬疑",
    "tags": [
      "少数派",
      "集体放逐",
      "乌托邦",
      "心理控制"
    ],
    "oneLine": "在一个声称消除了一切矛盾的未来社区，每个季度仍有五个人会被匿名投票流放到“世外”。",
    "cover": "./125.jpg",
    "url": "./video-1625.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1626",
    "title": "暗河传",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装，武侠",
    "tags": [
      "地下城",
      "刺客",
      "权谋",
      "江湖",
      "兄弟"
    ],
    "oneLine": "一座繁华都城之下，流淌着一条不为人知的“暗河”，那里是罪犯和亡命徒的最后乐土。",
    "cover": "./126.jpg",
    "url": "./video-1626.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1627",
    "title": "鳏夫的旅程",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 公路",
    "tags": [
      "丧偶",
      "旅行",
      "治愈",
      "回忆",
      "摩托车"
    ],
    "oneLine": "七十岁的鳏夫骑着亡妻留下的破旧摩托车横跨日本，只为完成她在遗书里写的那个“出轨”约定。",
    "cover": "./127.jpg",
    "url": "./video-1627.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1628",
    "title": "寻宝搭档第一季",
    "region": "美国",
    "type": "电视剧",
    "year": "2023",
    "genre": "喜剧/冒险",
    "tags": [
      "实境感",
      "解谜",
      "搭档"
    ],
    "oneLine": "一个过气网红考古博士搭配一个擅长开锁的前罪犯，用弹幕指路寻找美国失落的地下金库。",
    "cover": "./128.jpg",
    "url": "./video-1628.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1629",
    "title": "开篇",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 悬疑 / 科幻",
    "tags": [
      "元叙事",
      "作家",
      "平行宇宙",
      "烧脑"
    ],
    "oneLine": "一个小说家发现自己笔下的每个“开篇第一句”，都会在现实中开启一个新的平行宇宙。",
    "cover": "./129.jpg",
    "url": "./video-1629.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1630",
    "title": "穿风信子蓝的少女",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 奇幻",
    "tags": [
      "油画",
      "穿越时空",
      "画家与模特",
      "单向视角",
      "蓝色"
    ],
    "oneLine": "一名修复师在古画中发现一位穿蓝裙的少女，每夜她都会从画中走出，但无法触碰任何现实物体。",
    "cover": "./130.jpg",
    "url": "./video-1630.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1631",
    "title": "爸爸快长大",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "育儿",
      "新手爸爸",
      "爆笑",
      "成长"
    ],
    "oneLine": "三个大学室友意外同时当上“奶爸”，在尿布和奶粉中开始了手忙脚乱的中年二次成长。",
    "cover": "./131.jpg",
    "url": "./video-1631.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1632",
    "title": "谁解女人心",
    "region": "中国",
    "type": "剧集",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "女性",
      "婚姻",
      "代际",
      "职场",
      "情感"
    ],
    "oneLine": "一家三代女性同住屋檐下，却各自在深夜对着镜子假装微笑。",
    "cover": "./132.jpg",
    "url": "./video-1632.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1633",
    "title": "希腊二部曲：时光灰烬",
    "region": "希腊/法国",
    "type": "电影",
    "year": "2013",
    "genre": "剧情/历史",
    "tags": [
      "希腊债务危机",
      "家族史诗",
      "政治寓言",
      "黑白"
    ],
    "oneLine": "一家三代人，经历希腊从二战到债务危机，最后发现这个国家的灰烬就是他们的骨头。",
    "cover": "./133.jpg",
    "url": "./video-1633.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1634",
    "title": "我是冒险王2010",
    "region": "美国",
    "type": "电影",
    "year": "2010",
    "genre": "动作 / 冒险",
    "tags": [
      "真人秀陷阱",
      "荒岛逃生",
      "伪纪录片",
      "自我绑架"
    ],
    "oneLine": "过气冒险真人秀明星伪造了一次荒岛失联，却在直播重启当天发现岛上真有食人部落。",
    "cover": "./134.jpg",
    "url": "./video-1634.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1635",
    "title": "奇异的激情",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情, 剧情, 情色",
    "tags": [
      "不伦之恋",
      "艺术与道德",
      "戛纳系",
      "心理剖析"
    ],
    "oneLine": "一位著名指挥家发现自己真正的灵魂伴侣不是妻子，而是他15岁的亲生女儿，一个钢琴天才。",
    "cover": "./135.jpg",
    "url": "./video-1635.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1636",
    "title": "扒手",
    "region": "法国 / 日本",
    "type": "电影",
    "year": "2026",
    "genre": "犯罪 / 剧情",
    "tags": [
      "偷窃",
      "手技",
      "孤独",
      "存在主义",
      "黑白"
    ],
    "oneLine": "一个痴迷于手指艺术的扒手，把每一次行窃都当作对抗虚无的仪式，直到他偷了一个杀手。",
    "cover": "./136.jpg",
    "url": "./video-1636.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1637",
    "title": "情海春潮",
    "region": "中国香港",
    "type": "电影",
    "year": "1993",
    "genre": "爱情 / 剧情",
    "tags": [
      "文艺",
      "情感纠葛",
      "时代悲欢"
    ],
    "oneLine": "八十年代渔村少女与都市浪子的三年错爱，一场季风，吹散所有关于未来的承诺。",
    "cover": "./137.jpg",
    "url": "./video-1637.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1638",
    "title": "第11号站",
    "region": "美国",
    "type": "TV Series",
    "year": "2024",
    "genre": "科幻, 剧情, 悬疑",
    "tags": [
      "后末日",
      "幸存者",
      "人性",
      "多线叙事"
    ],
    "oneLine": "致命病毒消灭了99%的人口，剩下的人不仅要想办法活着，还要搞明白自己为什么还活着。",
    "cover": "./138.jpg",
    "url": "./video-1638.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1639",
    "title": "重庆谍战",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "谍战 / 悬疑 / 历史",
    "tags": [
      "民国",
      "山城",
      "多面间谍",
      "兄弟反目",
      "局中局"
    ],
    "oneLine": "1945年重庆，一对失散多年的兄弟意外重逢，却发现彼此分别是军统和中统的顶级特工，且任务互为死敌。",
    "cover": "./139.jpg",
    "url": "./video-1639.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1640",
    "title": "小圣人",
    "region": "意大利",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 宗教",
    "tags": [
      "那不勒斯",
      "神迹",
      "儿童",
      "信仰"
    ],
    "oneLine": "那不勒斯贫民窟的男孩突然能让瘫痪者行走，但每治愈一个人，他的母亲就会患上同样的病症。",
    "cover": "./140.jpg",
    "url": "./video-1640.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1641",
    "title": "艾伦·杜卡斯的追逐",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "纪录片 / 传记",
    "tags": [
      "美食",
      "米其林",
      "匠人",
      "哲学",
      "自然"
    ],
    "oneLine": "全球拥有最多米其林星星的厨师，决定关掉所有餐厅，去喜马拉雅山上煮一壶茶。",
    "cover": "./141.jpg",
    "url": "./video-1641.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1642",
    "title": "高卢勇士斗凯撒",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧，动作，历史，动画",
    "tags": [
      "动画真人混合",
      "恶搞",
      "魔药",
      "村斗"
    ],
    "oneLine": "高卢小村子的魔法师熬错药，全村勇士变成小学生体型，却要和凯撒的罗马军团决战。",
    "cover": "./142.jpg",
    "url": "./video-1642.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1643",
    "title": "约定的梦幻岛",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "genre": "悬疑 / 奇幻 / 冒险",
    "tags": [
      "孤儿院",
      "越狱",
      "真相",
      "反乌托邦"
    ],
    "oneLine": "一所宛如天堂的孤儿院里，孩子们发现了“被领养”的真相——他们只是被圈养的“食物”。",
    "cover": "./143.jpg",
    "url": "./video-1643.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1644",
    "title": "增血鬼果林",
    "region": "日本",
    "type": "动画剧集",
    "year": "2026",
    "genre": "喜剧, 奇幻, 校园",
    "tags": [
      "吸血鬼",
      "逆设定",
      "增血",
      "青春"
    ],
    "oneLine": "吸血鬼家族出了个异类——她不会吸血，反而看到血就会疯狂增血，直到流鼻血晕倒。",
    "cover": "./144.jpg",
    "url": "./video-1644.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1645",
    "title": "驱魔少年",
    "region": "日本",
    "type": "TV动画",
    "year": "2006",
    "genre": "奇幻, 战斗, 黑暗",
    "tags": [
      "圣洁",
      "恶魔",
      "方舟",
      "千年伯爵",
      "诅咒"
    ],
    "oneLine": "拥有被诅咒的左眼和圣洁武器的少年艾伦·沃克，加入黑教团对抗制造恶魔的千年伯爵。",
    "cover": "./145.jpg",
    "url": "./video-1645.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1646",
    "title": "变鬼之魂飘东京",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚, 灵异",
    "tags": [
      "泰国鬼片",
      "东京",
      "都市传说",
      "诅咒转移",
      "合拍片"
    ],
    "oneLine": "泰国女留学生将家乡的“困灵佛牌”带到东京，导致整栋公寓的住户开始一个接一个地离奇自残。",
    "cover": "./146.jpg",
    "url": "./video-1646.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1647",
    "title": "巨鲨浪潮",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2024",
    "genre": "灾难 / 惊悚",
    "tags": [
      "鲨鱼",
      "海难",
      "生存",
      "特效大片"
    ],
    "oneLine": "一场海底地震引发百米巨浪，巨浪中裹挟着成群的变异巨鲨。",
    "cover": "./147.jpg",
    "url": "./video-1647.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1648",
    "title": "心灵休憩处",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情、家庭、疗愈",
    "tags": [
      "民宿",
      "城市返乡",
      "母女和解",
      "山居岁月",
      "慢生活"
    ],
    "oneLine": "台北工作狂女儿被迫回花莲老家接手民宿，在接待古怪客人中学会与母亲、与自己和解。",
    "cover": "./148.jpg",
    "url": "./video-1648.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1649",
    "title": "三个盗贼和狮子",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "动画、冒险、喜剧",
    "tags": [
      "高卢风格",
      "动物寓言",
      "公路动画",
      "治愈"
    ],
    "oneLine": "三个笨拙的盗贼绑架了一只马戏团的狮子，却发现这头猛兽才是真正的“绑匪头子”。",
    "cover": "./149.jpg",
    "url": "./video-1649.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1650",
    "title": "血族第四季",
    "region": "美国",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 科幻 / 恐怖",
    "tags": [
      "吸血鬼末日",
      "最终季",
      "人类反抗军",
      "黑暗史诗"
    ],
    "oneLine": "核弹摧毁了纽约的血族核心，幸存人类在废土上发起最后的反击，却发现了血族起源的惊天上古秘密。",
    "cover": "./150.jpg",
    "url": "./video-1650.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1651",
    "title": "解放5：最后一击",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2026",
    "genre": "战争, 历史",
    "tags": [
      "二战",
      "宏大场面",
      "坦克战",
      "战略博弈",
      "英雄主义"
    ],
    "oneLine": "柏林战役最胶着时刻，一支苏军小队为扭转战局，必须将“谎言情报”送入敌后。",
    "cover": "./1.jpg",
    "url": "./video-1651.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1652",
    "title": "史酷比狗",
    "region": "美国",
    "type": "电影 / 动画",
    "year": "2024",
    "genre": "喜剧 / 动画 / 悬疑 / 家庭",
    "tags": [
      "史酷比",
      "神秘公司",
      "狗狗冒险",
      "破案",
      "合家欢"
    ],
    "oneLine": "史酷比和夏奇意外穿越到中世纪，必须破解一个幽灵骑士的诅咒才能回到现代。",
    "cover": "./2.jpg",
    "url": "./video-1652.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1653",
    "title": "虎口脱险原声",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "音乐、战争、喜剧",
    "tags": [
      "阿卡贝拉",
      "二战",
      "逃亡",
      "合唱团",
      "黑色幽默"
    ],
    "oneLine": "二战末期，一群被俘的巴黎歌剧院合唱团员，用歌声与纳粹周旋，上演了一场荒诞而激昂的集体大逃亡。",
    "cover": "./3.jpg",
    "url": "./video-1653.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1654",
    "title": "星光闪烁的夜晚",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "爱情, 剧情",
    "tags": [
      "纯爱",
      "治愈",
      "星空",
      "命运"
    ],
    "oneLine": "一个因光污染在城市中看不到星星的男孩，与一个只能在星空下才能缓解病痛的女孩，在乡野相遇。",
    "cover": "./4.jpg",
    "url": "./video-1654.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1655",
    "title": "尸骨工场",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "犯罪、悬疑、法医",
    "tags": [
      "人体农场",
      "法医人类学",
      "连环杀手"
    ],
    "oneLine": "全世界最大的人体分解研究基地“尸骨工场”里，发现了一具不属于任何实验项目的尸体。",
    "cover": "./5.jpg",
    "url": "./video-1655.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1656",
    "title": "天涯一段情",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "爱情/文艺",
    "tags": [
      "漂泊",
      "书信",
      "错过",
      "时代变迁",
      "纯爱"
    ],
    "oneLine": "九十年代移民潮下，一段因天涯海角而分离、因一封未寄出的信而纠缠半生的爱情。",
    "cover": "./6.jpg",
    "url": "./video-1656.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1657",
    "title": "午夜整容室",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "整容",
      "诅咒",
      "镜子",
      "复仇",
      "医院"
    ],
    "oneLine": "一家地下整容室宣称能让你变成任何明星，但每个顾客术后都会在午夜看到镜中的自己裂开。",
    "cover": "./7.jpg",
    "url": "./video-1657.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1658",
    "title": "大耳朵图图第一季",
    "region": "中国",
    "type": "动画剧集",
    "year": "2004",
    "genre": "儿童、喜剧、家庭",
    "tags": [
      "幼儿园",
      "童趣",
      "家庭教育",
      "成长",
      "胡图图"
    ],
    "oneLine": "三岁小男孩胡图图，凭着一对能“扇风”的大耳朵和一颗总想当英雄的心，在幼儿园和家里闯下了一个个让人哭笑不得的祸。",
    "cover": "./8.jpg",
    "url": "./video-1658.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1659",
    "title": "部门报告",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "职场、黑色幽默",
    "tags": [
      "社畜",
      "内卷",
      "体制讽刺",
      "群像戏"
    ],
    "oneLine": "一份失踪的季度报告让整个部门陷入自证清白的地狱轮盘，最终无人记得报告写了什么。",
    "cover": "./9.jpg",
    "url": "./video-1659.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1660",
    "title": "三颗星彩色冒险",
    "region": "日本",
    "type": "TV剧集",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "色彩心理",
      "美术馆谜案",
      "双女主"
    ],
    "oneLine": "三个落魄画家分别继承神秘颜料后，发现每画一笔都会让现实中的对应之人遭遇不幸。",
    "cover": "./10.jpg",
    "url": "./video-1660.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1661",
    "title": "驱魔童",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖, 惊悚, 民俗",
    "tags": [
      "宫庙",
      "附身",
      "儿童",
      "本土信仰",
      "仪式感"
    ],
    "oneLine": "宫庙太子爷的乩童猝死，神明上身的童子竟是一个不会说话的自闭症男孩。",
    "cover": "./11.jpg",
    "url": "./video-1661.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1662",
    "title": "火鸡",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 黑色幽默",
    "tags": [
      "感恩节",
      "小镇怪谈",
      "食物链反转",
      "荒诞"
    ],
    "oneLine": "一年一度的小镇火鸡节上，火鸡们突然开口说话：“其实我们养了你们几千年。”",
    "cover": "./12.jpg",
    "url": "./video-1662.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1663",
    "title": "甜苦汽车旅店",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑爱情",
    "tags": [
      "汽车旅店",
      "甜蜜",
      "苦涩",
      "秘密",
      "过往"
    ],
    "oneLine": "一家破旧汽车旅馆的每个房间，都锁着一位客人“最甜也最苦”的一段记忆。",
    "cover": "./13.jpg",
    "url": "./video-1663.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1664",
    "title": "快乐妓女",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情, 喜剧, 女性",
    "tags": [
      "女性觉醒",
      "黑色幽默",
      "存在主义",
      "社会边缘"
    ],
    "oneLine": "巴黎红灯区最年长的妓女决定在退休前完成一份心愿清单，却发现快乐远比想象中复杂。",
    "cover": "./14.jpg",
    "url": "./video-1664.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1665",
    "title": "奇门遁甲国语",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻 / 武侠",
    "tags": [
      "法术",
      "术数",
      "东方奇幻",
      "师徒"
    ],
    "oneLine": "精通奇门遁甲的老道士收了三个废柴徒弟，却发现魔界入侵的阵法就藏在他们身上。",
    "cover": "./15.jpg",
    "url": "./video-1665.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1666",
    "title": "男人操作手册",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 爱情 / 奇幻",
    "tags": [
      "恋爱指南",
      "直男改造",
      "说明书"
    ],
    "oneLine": "剩女工程师捡到一本外星遗落的《男人操作手册》，却发现按说明书操作会导致男人出现“系统故障”。",
    "cover": "./16.jpg",
    "url": "./video-1666.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1667",
    "title": "醒醒吧之道德骑士",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "剧情，喜剧，黑色幽默",
    "tags": [
      "网络正义",
      "荒诞讽刺",
      "小人物",
      "舆论反转"
    ],
    "oneLine": "一个沉迷于网络审判的键盘侠，在现实中化身“蒙面骑士”行侠仗义，却把自己推向了道德的悬崖。",
    "cover": "./17.jpg",
    "url": "./video-1667.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1668",
    "title": "熊出没之怪兽计划2",
    "region": "中国大陆",
    "type": "电影 / 动画",
    "year": "2024",
    "genre": "喜剧 / 科幻 / 冒险",
    "tags": [
      "合家欢",
      "怪兽",
      "环保"
    ],
    "oneLine": "光头强捡到一颗能长出“情绪怪兽”的外星种子，熊大熊二为了森林安宁，必须帮他收拾这群烂摊子。",
    "cover": "./18.jpg",
    "url": "./video-1668.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1669",
    "title": "好家伙先生",
    "region": "美国 / 意大利",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 黑帮 / 喜剧",
    "tags": [
      "卧底",
      "反差萌",
      "黑手党",
      "美食"
    ],
    "oneLine": "FBI最怂的探员被迫卧底黑手党，却因为做饭太好吃了，一不小心当上了教父。",
    "cover": "./19.jpg",
    "url": "./video-1669.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1670",
    "title": "珍爱泉源",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 奇幻",
    "tags": [
      "寓言",
      "战争创伤",
      "永生"
    ],
    "oneLine": "一名老兵在车臣战争中杀死了一对母女，此后他走到哪里，哪里就会出现一口不枯竭的井。",
    "cover": "./20.jpg",
    "url": "./video-1670.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1671",
    "title": "杨朵",
    "region": "以色列",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 历史",
    "tags": [
      "犹太文化",
      "女性觉醒",
      "传统与现代",
      "戏剧改编",
      "诗意"
    ],
    "oneLine": "二十世纪初的也门犹太村落里，一个想读书的女孩扮成男孩进入学堂，却爱上了自己的“兄弟”。",
    "cover": "./21.jpg",
    "url": "./video-1671.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "1672",
    "title": "新荡妇卡门",
    "region": "法国 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 情色 / 犯罪",
    "tags": [
      "女性",
      "自由",
      "悲剧",
      "现代改编"
    ],
    "oneLine": "一个游走于黑帮、警察与富豪之间的女人，用身体作武器，追寻终极自由。",
    "cover": "./22.jpg",
    "url": "./video-1672.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1673",
    "title": "天降艳福",
    "region": "中国台湾",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧 / 爱情",
    "tags": [
      "奇幻",
      "艳遇",
      "逆袭"
    ],
    "oneLine": "废柴程序员的代码BUG导致真实世界女友不断从天而降，他必须限时找到真爱。",
    "cover": "./23.jpg",
    "url": "./video-1673.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1674",
    "title": "再见了妈妈",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2024",
    "genre": "家庭 / 剧情",
    "tags": [
      "母子",
      "绝症",
      "催泪",
      "遗愿清单"
    ],
    "oneLine": "单亲妈妈确诊癌症晚期，叛逆的女儿为了完成妈妈的“遗愿清单”，开始了啼笑皆非的陪伴之旅。",
    "cover": "./24.jpg",
    "url": "./video-1674.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1675",
    "title": "惨烈狙击战",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "战争 / 动作",
    "tags": [
      "狙击",
      "抗美援朝",
      "雪原",
      "智斗",
      "硬核"
    ],
    "oneLine": "长津湖战役后，一名中国神枪手与美军王牌狙击手在冰封的狼林山脉展开了一场关乎尊严的生死猎杀。",
    "cover": "./25.jpg",
    "url": "./video-1675.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1676",
    "title": "蒲公英的奇幻漂流",
    "region": "日本",
    "type": "电影",
    "year": "2017",
    "genre": "动画 / 奇幻 / 家庭",
    "tags": [
      "手绘风",
      "治愈",
      "灵魂旅程",
      "成长"
    ],
    "oneLine": "一个去世的小女孩化作一颗蒲公英种子，随风飘过四季，在每个停靠的地方留下一段未完的心愿。",
    "cover": "./26.jpg",
    "url": "./video-1676.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1677",
    "title": "绝世神皇2025",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "古装 / 玄幻 / 动作",
    "tags": [
      "穿越",
      "废柴逆袭",
      "神皇之路",
      "特效"
    ],
    "oneLine": "现代历史系研究生穿越成被废的皇子，体内封印着上古魔尊，他要做的是在两者之间找到第三条路。",
    "cover": "./27.jpg",
    "url": "./video-1677.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1678",
    "title": "去森浦的路",
    "region": "韩国",
    "type": "电影",
    "year": "1975",
    "genre": "剧情 / 文艺",
    "tags": [
      "韩国经典",
      "公路片",
      "战后创伤",
      "寻找希望",
      "黑白电影"
    ],
    "oneLine": "两个为不同目的踏上同一条路的男人，一个去找失踪的哥哥，一个想死在故乡。",
    "cover": "./28.jpg",
    "url": "./video-1678.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1679",
    "title": "圣人飨宴",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "惊悚， 悬疑",
    "tags": [
      "宗教恐怖",
      "密室",
      "反转"
    ],
    "oneLine": "七位自称圣人的教徒被困孤岛，晚宴上的每一道菜都是赎罪的考验。",
    "cover": "./29.jpg",
    "url": "./video-1679.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1680",
    "title": "绿林灾难",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "灾难 / 惊悚 / 科幻",
    "tags": [
      "生态灾难",
      "变异植物",
      "森林复仇",
      "生存恐怖"
    ],
    "oneLine": "一片“智能森林”突然觉醒，它杀人的方式不是毒气或野兽，而是让你“再也找不到路”。",
    "cover": "./30.jpg",
    "url": "./video-1680.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1681",
    "title": "续·社长行状记",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 职场",
    "tags": [
      "商战",
      "黑道",
      "权力",
      "续作"
    ],
    "oneLine": "洗白后的前黑道社长，在商场上遇到了更阴险的旧日宿敌。",
    "cover": "./31.jpg",
    "url": "./video-1681.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1682",
    "title": "田教授家的28个保姆",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 家庭",
    "tags": [
      "社会群像",
      "保姆",
      "啼笑皆非",
      "温情"
    ],
    "oneLine": "退休教授为了写《中国保姆社会调查报告》，亲自应聘了28次保姆。",
    "cover": "./32.jpg",
    "url": "./video-1682.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1683",
    "title": "阿玛迪斯",
    "region": "欧洲",
    "type": "电影",
    "year": "2015",
    "genre": "剧情, 音乐, 传记",
    "tags": [
      "天才",
      "嫉妒",
      "古典音乐",
      "宿命"
    ],
    "oneLine": "平庸宫廷乐师以凡人之眼，记录天才莫扎特璀璨而短暂的失控一生。",
    "cover": "./33.jpg",
    "url": "./video-1683.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "1684",
    "title": "势不可挡2024",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 科幻 / 惊悚",
    "tags": [
      "AI叛乱",
      "极限逃亡",
      "硬核科幻"
    ],
    "oneLine": "2030年，人类被AI圈养在虚拟乐园，一个觉醒者试图唤醒所有人。",
    "cover": "./34.jpg",
    "url": "./video-1684.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1685",
    "title": "人人爱上我老婆",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧，爱情，剧情",
    "tags": [
      "情感乌龙",
      "小镇风波",
      "嫉妒心理学"
    ],
    "oneLine": "我老婆温柔漂亮聪明，全镇男人都想当她男友，除了我——因为我想跟她离婚。",
    "cover": "./35.jpg",
    "url": "./video-1685.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1686",
    "title": "爱情斑马线",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情，都市",
    "tags": [
      "人行横道",
      "信号灯",
      "命运邂逅",
      "单元剧"
    ],
    "oneLine": "发生在城市里12个不同人行横道上的爱情故事，每条斑马线都有自己独特的“信号灯规则”。",
    "cover": "./36.jpg",
    "url": "./video-1686.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1687",
    "title": "艾拉妮丝",
    "region": "阿根廷 / 西班牙",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 女性",
    "tags": [
      "社会现实",
      "母亲",
      "性工作者",
      "尊严"
    ],
    "oneLine": "一个怀抱诗人梦想的性工作者母亲，为了夺回被社会福利机构带走的儿子，不惜用身体与整个僵化的体制对抗。",
    "cover": "./37.jpg",
    "url": "./video-1687.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1688",
    "title": "致命最前线",
    "region": "英国 / 乌克兰",
    "type": "电影",
    "year": "2026",
    "genre": "战争 / 惊悚 / 历史",
    "tags": [
      "记者视角",
      "真实事件改编",
      "前线实录"
    ],
    "oneLine": "2022年，三名战地记者被困在乌克兰前线战壕，唯一的活路是挖通通往俄军阵地的地道。",
    "cover": "./38.jpg",
    "url": "./video-1688.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1689",
    "title": "超级8",
    "region": "美国",
    "type": "电视剧",
    "year": "2023",
    "genre": "科幻、悬疑、冒险",
    "tags": [
      "超能力",
      "少年",
      "阴谋论",
      "复古",
      "群像"
    ],
    "oneLine": "八个来自不同国家的青少年突然觉醒超能力，他们发现这力量来自一场失败的冷战实验。",
    "cover": "./39.jpg",
    "url": "./video-1689.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1690",
    "title": "女仆",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 惊悚 / 剧情",
    "tags": [
      "阶层",
      "反转",
      "复仇",
      "豪宅",
      "寄生"
    ],
    "oneLine": "一名新来的哑巴女仆逐渐掌控了富豪家庭的所有秘密，直到真正的女主人在阁楼醒来。",
    "cover": "./40.jpg",
    "url": "./video-1690.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1691",
    "title": "威灵顿战线",
    "region": "英国/西班牙",
    "type": "电影",
    "year": "2025",
    "genre": "战争， 历史， 动作",
    "tags": [
      "拿破仑",
      "狙击手",
      "双雄对决"
    ],
    "oneLine": "威灵顿公爵麾下的一名爱尔兰神枪手，与拿破仑最倚重的波兰枪骑兵，在滑铁卢战役前展开生死猎杀。",
    "cover": "./41.jpg",
    "url": "./video-1691.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1692",
    "title": "橡皮头人",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "都市传说",
      "身体恐怖",
      "病毒传播"
    ],
    "oneLine": "城市中流传着一种怪病：患者颈部会长出弹性极佳的赘生物，形状酷似婴儿头颅。",
    "cover": "./42.jpg",
    "url": "./video-1692.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1693",
    "title": "牛仔裤的夏天2",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "青春",
    "tags": [
      "姐妹情",
      "成年困境",
      "复古穿搭",
      "旅行重逢",
      "治愈"
    ],
    "oneLine": "十年后，当年的四个女孩都已三十岁，一条牛仔裤再次将她们聚到了一起。",
    "cover": "./43.jpg",
    "url": "./video-1693.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1694",
    "title": "爱情狂想曲",
    "region": "中国台湾",
    "type": "电影",
    "year": "2014",
    "genre": "爱情 / 喜剧",
    "tags": [
      "都市",
      "多线叙事",
      "缘分",
      "搞笑"
    ],
    "oneLine": "三对截然不同的都市男女，在寻找真爱的路上奏响了一连串错位又和谐的情感乐章。",
    "cover": "./44.jpg",
    "url": "./video-1694.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1695",
    "title": "饱餐秀色",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2024",
    "genre": "古装 / 美食",
    "tags": [
      "巾帼御厨",
      "宫廷权谋",
      "舌尖美学"
    ],
    "oneLine": "天才女厨娘为查清父亲冤案混入御膳房，用一道道绝美菜肴作为武器，在后宫风波中火中取栗。",
    "cover": "./45.jpg",
    "url": "./video-1695.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1696",
    "title": "奥尔高索洛的强盗",
    "region": "意大利",
    "type": "电影",
    "year": "2027",
    "genre": "犯罪、历史",
    "tags": [
      "撒丁岛",
      "牧羊人起义",
      "真实事件改编",
      "西部风格"
    ],
    "oneLine": "20世纪初撒丁岛，一名被冤枉的牧羊人落草为寇，与意大利政府军在山谷间展开十年游击。",
    "cover": "./46.jpg",
    "url": "./video-1696.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1697",
    "title": "生活似流水",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "女性三代",
      "日常史诗",
      "离婚话题",
      "非职业演员"
    ],
    "oneLine": "一个三代女性的除夕夜，从早上的鱼到凌晨的饺子，一整天的对话拍完了一生的隐忍。",
    "cover": "./47.jpg",
    "url": "./video-1697.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1698",
    "title": "共谱恋曲",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 音乐",
    "tags": [
      "音乐制作",
      "隔空恋爱",
      "遗作"
    ],
    "oneLine": "一位过气作曲家和一位神秘网络填词人，通过一首未完成的遗作，在虚拟与现实中谈了一场无法见面的恋爱。",
    "cover": "./48.jpg",
    "url": "./video-1698.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1699",
    "title": "极限送达",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 喜剧 / 犯罪",
    "tags": [
      "外卖骑手",
      "飙车",
      "跨国运毒",
      "小人物",
      "城市跑酷"
    ],
    "oneLine": "外卖骑手为还债接了一单报酬 50 万的“跑腿”，送的不是餐，是一整条跨国证据链。",
    "cover": "./49.jpg",
    "url": "./video-1699.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1700",
    "title": "绝命列车",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作, 惊悚, 犯罪",
    "tags": [
      "密闭空间",
      "人质危机",
      "实时叙事",
      "反转"
    ],
    "oneLine": "一列行驶中的高铁被黑客远程劫持，每停一站就引爆一节车厢。",
    "cover": "./50.jpg",
    "url": "./video-1700.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1701",
    "title": "翡翠明珠",
    "region": "中国香港",
    "type": "剧集",
    "year": "2020",
    "genre": "爱情, 悬疑, 商战",
    "tags": [
      "珠宝家族",
      "双面卧底",
      "真假千金"
    ],
    "oneLine": "翡翠大王离世，留下两颗传世宝石和一份遗嘱：真千金继承家产，假千金嫁给仇人之子。",
    "cover": "./51.jpg",
    "url": "./video-1701.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1702",
    "title": "阮玲玉",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "剧情、传记、历史",
    "tags": [
      "阮玲玉",
      "默片",
      "民国",
      "女星",
      "人言可畏"
    ],
    "oneLine": "聚焦阮玲玉生命最后一百天，以她的视角重现默片女皇的荣耀与孤独，以及那碗毒粥的真相。",
    "cover": "./52.jpg",
    "url": "./video-1702.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1703",
    "title": "模仿女孩",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "AI",
      "仿生人",
      "身份认同",
      "小镇",
      "谋杀"
    ],
    "oneLine": "一个能与人类感官全息同步的仿生人实验品逃到了沙漠小镇，她发现镇上的居民似乎正在被某种“模板”批量替换。",
    "cover": "./53.jpg",
    "url": "./video-1703.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1704",
    "title": "无冕皇后",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史 / 剧情 / 女性",
    "tags": [
      "后宫",
      "权谋",
      "真实改编",
      "悲剧"
    ],
    "oneLine": "她是太监收养的假宫女，却凭智慧左右了三朝帝王废立，史书不肯给她名字。",
    "cover": "./54.jpg",
    "url": "./video-1704.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1705",
    "title": "红粉情深",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "爱情, 剧情",
    "tags": [
      "女性",
      "姐妹情",
      "怀旧",
      "时代悲剧"
    ],
    "oneLine": "六十年代香港，一对在夜总会唱歌的姐妹爱上了同一个男人，而那个男人是警察的眼线。",
    "cover": "./55.jpg",
    "url": "./video-1705.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1706",
    "title": "天煞撞正怪怪兽之变种南瓜",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 科幻, 恐怖",
    "tags": [
      "cult",
      "杂交",
      "怪物",
      "恶搞"
    ],
    "oneLine": "外星人入侵地球时撞上一颗变异南瓜，结果两种怪物融合成“南瓜外星人”，只爱吃榴莲。",
    "cover": "./56.jpg",
    "url": "./video-1706.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1707",
    "title": "巴黎的天空",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "genre": "爱情, 剧情",
    "tags": [
      "浪漫",
      "艺术",
      "命运",
      "巴黎",
      "邂逅"
    ],
    "oneLine": "一位失明的小提琴家和一位即将失去画室的画家，在巴黎的天空下用声音与色彩为彼此绘制希望。",
    "cover": "./57.jpg",
    "url": "./video-1707.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1708",
    "title": "无援",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2024",
    "genre": "战争惊悚",
    "tags": [
      "狙击手",
      "绝境",
      "电台",
      "心理战",
      "雪原"
    ],
    "oneLine": "一名苏军狙击手被困在废墟中，唯一的战友是一部只能用摩斯密码交流的敌台。",
    "cover": "./58.jpg",
    "url": "./video-1708.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1709",
    "title": "真实的故事",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 悬疑",
    "tags": [
      "作家",
      "真假难辨",
      "叙事陷阱"
    ],
    "oneLine": "过气作家将自己的小说改编成剧本，却发现投资人、导演甚至女主演都在按他书中的“虚构谋杀”方式死去。",
    "cover": "./59.jpg",
    "url": "./video-1709.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1710",
    "title": "亡命悍将",
    "region": "美国",
    "type": "电影",
    "year": "1997",
    "genre": "动作, 犯罪",
    "tags": [
      "硬汉",
      "复仇",
      "飞车",
      "90年代"
    ],
    "oneLine": "一名退役特种兵为救被绑架的女儿，单挑整个黑帮军火库。",
    "cover": "./60.jpg",
    "url": "./video-1710.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1711",
    "title": "昨天、今天和明天",
    "region": "意大利",
    "type": "电影",
    "year": "1963",
    "genre": "喜剧, 爱情",
    "tags": [
      "索菲娅·罗兰",
      "分段式",
      "讽刺",
      "意大利风情"
    ],
    "oneLine": "三个不同的意大利女人，在三个时代里，用各自奇特的方式维持着爱情与金钱的平衡。",
    "cover": "./61.jpg",
    "url": "./video-1711.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1712",
    "title": "江湖男女",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 黑帮",
    "tags": [
      "女性黑帮",
      "情义两难",
      "庙口文化"
    ],
    "oneLine": "从小在宫庙长大的女孩阿凤，为救哥哥而不得不接手一个即将被吞并的地方帮派。",
    "cover": "./62.jpg",
    "url": "./video-1712.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1713",
    "title": "太阳不落山",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "科幻 / 剧情",
    "tags": [
      "硬科幻",
      "亲情",
      "末日求生"
    ],
    "oneLine": "太阳氦闪前最后一刻，父亲将女儿的意识上传，却发现“数字太阳”永远不会落下。",
    "cover": "./63.jpg",
    "url": "./video-1713.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1714",
    "title": "我唾弃你的坟墓：似曾相识",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 惊悚",
    "tags": [
      "复仇",
      "时间回溯",
      "暴力美学"
    ],
    "oneLine": "被侵犯的女作家复仇成功后，发现自己回到了一年前，而凶手们这次认识她。",
    "cover": "./64.jpg",
    "url": "./video-1714.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1715",
    "title": "奇迹发生的地方",
    "region": "西班牙",
    "type": "电影",
    "year": "2024",
    "genre": "奇幻、剧情、治愈",
    "tags": [
      "许愿",
      "铁路",
      "小镇",
      "救赎",
      "时光"
    ],
    "oneLine": "西班牙乡下废弃火车站有一个破旧的许愿铃铛，每个拉响它的人，人生都会发生偏移。",
    "cover": "./65.jpg",
    "url": "./video-1715.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1716",
    "title": "没钥匙的房子",
    "region": "英国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 恐怖 / 剧情",
    "tags": [
      "密室",
      "记忆",
      "心理惊悚",
      "反转",
      "家庭秘密"
    ],
    "oneLine": "母亲去世后，三兄妹回到老宅，发现所有门都没了钥匙孔，而房间里不断出现他们曾经遗忘的罪孽。",
    "cover": "./66.jpg",
    "url": "./video-1716.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1717",
    "title": "我的爸爸是森林之王2",
    "region": "法国/比利时",
    "type": "电影/动画",
    "year": "2020",
    "genre": "动画，家庭，冒险",
    "tags": [
      "丛林冒险",
      "家庭重聚",
      "环保"
    ],
    "oneLine": "半人半猩猩的爸爸带着全家穿越极寒苔原，只为阻止石油公司破坏最后的原始森林。",
    "cover": "./67.jpg",
    "url": "./video-1717.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1718",
    "title": "为亲爱的我致上杀意",
    "region": "日本",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑, 心理",
    "tags": [
      "双重人格",
      "连环杀人",
      "反转"
    ],
    "oneLine": "温柔男友醒来后发现自己手上沾满鲜血，而手机上赫然写着“恭喜你杀死了她”。",
    "cover": "./68.jpg",
    "url": "./video-1718.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1719",
    "title": "性爱奋斗营",
    "region": "丹麦",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 情色",
    "tags": [
      "疗愈",
      "自我探索",
      "集体疗愈",
      "禁忌突破"
    ],
    "oneLine": "一群情感受创的男女参加神秘营地，通过直面身体与欲望来修复内心。",
    "cover": "./69.jpg",
    "url": "./video-1719.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1720",
    "title": "牢笼之热",
    "region": "拉丁美洲",
    "type": "剧集",
    "year": "2024",
    "genre": "犯罪 / 剧情 / 惊悚",
    "tags": [
      "女子监狱",
      "腐败",
      "生存法则",
      "女同",
      "权力游戏"
    ],
    "oneLine": "新任狱长带着“人道改革”进入暴风眼般的女子监狱，却深陷囚犯与狱警勾结的欲望牢笼。",
    "cover": "./70.jpg",
    "url": "./video-1720.html",
    "regionGroup": "other",
    "typeGroup": "series"
  },
  {
    "id": "1721",
    "title": "薄荷的滋味",
    "region": "土耳其",
    "type": "电影",
    "year": "2023",
    "genre": "爱情 / 剧情 / 文艺",
    "tags": [
      "初恋",
      "夏日",
      "遗憾美学",
      "记忆",
      "书信"
    ],
    "oneLine": "年过四十的厨师回到故乡，发现初恋女友在窗台种了二十年的薄荷，只为等他归来。",
    "cover": "./71.jpg",
    "url": "./video-1721.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1722",
    "title": "绝境岛",
    "region": "泰国",
    "type": "电视剧",
    "year": "2019",
    "genre": "奇幻, 惊悚",
    "tags": [
      "少年犯",
      "荒岛",
      "超自然"
    ],
    "oneLine": "一群问题少年被送到荒岛改造，却发现岛上沉睡着一个神秘的“守夜人”。",
    "cover": "./72.jpg",
    "url": "./video-1722.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1723",
    "title": "秀逗小护士4",
    "region": "日本",
    "type": "电视剧",
    "year": "2025",
    "genre": "医疗喜剧",
    "tags": [
      "护士",
      "日常",
      "搞笑",
      "成长"
    ],
    "oneLine": "冒失鬼护士小唯转岗到儿科，面对更难缠的小患者和家长，她依然用“秀逗”的方式化解危机。",
    "cover": "./73.jpg",
    "url": "./video-1723.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1724",
    "title": "租借女友第一季",
    "region": "日本",
    "type": "剧集",
    "year": "2020",
    "genre": "喜剧 / 爱情 / 日常",
    "tags": [
      "租赁恋人",
      "废柴男主",
      "搞笑",
      "三角关系",
      "漫改"
    ],
    "oneLine": "大学废柴被女友甩后租了一个“完美女友”，结果发现她是同学、邻居，还是头号不靠谱。",
    "cover": "./74.jpg",
    "url": "./video-1724.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1725",
    "title": "365天：今时之欲",
    "region": "波兰",
    "type": "电影",
    "year": "2022",
    "genre": "爱情，情欲，剧情",
    "tags": [
      "霸道总裁",
      "囚禁",
      "反转",
      "情欲纠葛"
    ],
    "oneLine": "被黑帮少爷囚禁的少女重获自由后，却发现两人的命运被更危险的家族阴谋捆绑。",
    "cover": "./75.jpg",
    "url": "./video-1725.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1726",
    "title": "疯拳癫腿",
    "region": "中国香港",
    "type": "电影",
    "year": "1979",
    "genre": "动作 / 喜剧",
    "tags": [
      "功夫",
      "搞笑",
      "市井",
      "师徒",
      "复仇"
    ],
    "oneLine": "一个疯癫乞丐用自创的“醉猫拳”和“瘸腿踢”，帮卖鱼佬逆袭恶霸，笑料百出。",
    "cover": "./76.jpg",
    "url": "./video-1726.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1727",
    "title": "炮制女朋友粤语",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 爱情",
    "tags": [
      "港式幽默",
      "假戏真做",
      "职场"
    ],
    "oneLine": "金牌公关为应付催婚的富豪母亲，花钱雇女演员扮女友，却把整个公司拖下水。",
    "cover": "./77.jpg",
    "url": "./video-1727.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1728",
    "title": "白雪公主杀人事件",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑， 犯罪， 剧情",
    "tags": [
      "童话改编",
      "反转",
      "社会派"
    ],
    "oneLine": "公司公认的“白雪公主”候选人惨遭杀害，而看似单纯的实习生口中，故事正朝着失控的方向急转。",
    "cover": "./78.jpg",
    "url": "./video-1728.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1729",
    "title": "各有少年时",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "青春、剧情、喜剧",
    "tags": [
      "高中",
      "友谊",
      "成长",
      "毕业季",
      "群像"
    ],
    "oneLine": "高中最后一个周末，四个死党试图完成一张疯狂的遗愿清单。",
    "cover": "./79.jpg",
    "url": "./video-1729.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1730",
    "title": "唐老鸭的青春之泉",
    "region": "美国",
    "type": "动画电影",
    "year": "2022",
    "genre": "喜剧 / 奇幻 / 冒险",
    "tags": [
      "迪士尼",
      "返老还童",
      "搞笑"
    ],
    "oneLine": "唐老鸭误饮青春之泉变回小鸭子，史高治叔叔发现这泉水能让他更富有，但代价是变成鸭蛋。",
    "cover": "./80.jpg",
    "url": "./video-1730.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1731",
    "title": "别惹佐汉",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧, 动作",
    "tags": [
      "特工",
      "理发师",
      "恶搞",
      "以色列"
    ],
    "oneLine": "以色列最强特工假死脱身后跑去纽约当美发师，用剪刀和泡沫打败恐怖分子。",
    "cover": "./81.jpg",
    "url": "./video-1731.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1732",
    "title": "梦想 2023",
    "region": "中国内地",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 体育",
    "tags": [
      "街舞",
      "中年危机",
      "梦想",
      "治愈"
    ],
    "oneLine": "三个被生活压垮的中年男人，在各自女儿的秘密组织下，重新穿上舞鞋参加街舞大赛，只为找回二十年前那个不认输的自己。",
    "cover": "./82.jpg",
    "url": "./video-1732.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1733",
    "title": "天使与怨灵",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 奇幻",
    "tags": [
      "双向附身",
      "阴阳眼",
      "治愈恐怖"
    ],
    "oneLine": "能看到怨灵的少女，某天突然也被怨灵看到了——而对方哭着求她帮自己完成遗愿。",
    "cover": "./83.jpg",
    "url": "./video-1733.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1734",
    "title": "莽荒纪之川落雪",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2026",
    "genre": "古装 / 仙侠 / 奇幻",
    "tags": [
      "玄幻",
      "家族恩怨",
      "修炼",
      "特效大片"
    ],
    "oneLine": "川氏一族惨遭灭门，唯一幸存者落入魔域雪原，体内封印着足以毁天灭地的上古神力。",
    "cover": "./84.jpg",
    "url": "./video-1734.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1735",
    "title": "加一点，出道魔法配方",
    "region": "日本",
    "type": "剧集",
    "year": "2023",
    "genre": "奇幻 / 偶像",
    "tags": [
      "魔法偶像",
      "养成系",
      "配方",
      "甜虐",
      "幕后"
    ],
    "oneLine": "一家濒临倒闭的偶像事务所发现，只要在训练时加入一勺“魔法配方”，就能让练习生一夜爆红。",
    "cover": "./85.jpg",
    "url": "./video-1735.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1736",
    "title": "沙胆小子",
    "region": "中国香港",
    "type": "电影",
    "year": "1991",
    "genre": "喜剧, 动作, 犯罪",
    "tags": [
      "英皇电影",
      "街头混混",
      "乌龙犯罪",
      "港式鬼马"
    ],
    "oneLine": "两个终日无所事事的小混混捡到一袋毒资，开始了被黑帮和警察同时追杀的花样逃亡。",
    "cover": "./86.jpg",
    "url": "./video-1736.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1737",
    "title": "杀之恋",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，悬疑，惊悚",
    "tags": [
      "病娇",
      "危险关系",
      "反转",
      "宿命"
    ],
    "oneLine": "完美情人竟是连环杀手，她对他的爱，是救赎还是共谋？",
    "cover": "./87.jpg",
    "url": "./video-1737.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1738",
    "title": "吉他蒙古人",
    "region": "中国内地/蒙古",
    "type": "电影",
    "year": "2025",
    "genre": "音乐/公路",
    "tags": [
      "马头琴",
      "摇滚",
      "草原",
      "传承"
    ],
    "oneLine": "一个过气的摇滚吉他手，在内蒙古草原上遇到了一个只会拉马头琴的蒙古少年，组成了最疯狂的乐队。",
    "cover": "./88.jpg",
    "url": "./video-1738.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1739",
    "title": "保密天使",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情，奇幻，家庭",
    "tags": [
      "青少年",
      "秘密",
      "治愈",
      "超能力"
    ],
    "oneLine": "一个无法保守任何秘密的高中女生，突然发现自己只要触摸别人就能听到对方心底最深的秘密。",
    "cover": "./89.jpg",
    "url": "./video-1739.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1740",
    "title": "程序员那么可爱",
    "region": "中国大陆",
    "type": "TV Series YAML",
    "year": "2024",
    "genre": "爱情，喜剧，职场",
    "tags": [
      "女程序员",
      "反刻板印象",
      "格子衫",
      "代码浪漫",
      "办公室恋情"
    ],
    "oneLine": "女程序员为了进入全是男性的项目组，女扮男装应聘，不料老板是个看一眼代码就知道是妹子写的毒舌天才。",
    "cover": "./90.jpg",
    "url": "./video-1740.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1741",
    "title": "屋檐下",
    "region": "中国香港",
    "type": "电影",
    "year": "1985",
    "genre": "剧情",
    "tags": [
      "家庭",
      "贫困",
      "亲情",
      "现实主义"
    ],
    "oneLine": "一家五口挤在六平米的笼屋里，一把火烧掉了所有体面，也烧出了亲情。",
    "cover": "./91.jpg",
    "url": "./video-1741.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1742",
    "title": "灵幻先生",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧，奇幻，恐怖",
    "tags": [
      "僵尸",
      "道士",
      "现代都市",
      "茅山术",
      "无厘头"
    ],
    "oneLine": "僵尸先生重启，茅山道士穿越到现代夜店，用桃木剑大战DJ打碟召唤出的怨灵。",
    "cover": "./92.jpg",
    "url": "./video-1742.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1743",
    "title": "戏精宿舍",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "喜剧 / 青春 / 校园",
    "tags": [
      "宿舍生活",
      "网红",
      "直播",
      "社恐",
      "搞笑"
    ],
    "oneLine": "一间大学宿舍住了四个“戏精”，她们决定一起做直播，结果一夜爆火后麻烦也来了。",
    "cover": "./93.jpg",
    "url": "./video-1743.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1744",
    "title": "鉴你所见：崖壁大战",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作、悬疑、冒险",
    "tags": [
      "鉴宝",
      "攀岩",
      "文物争夺",
      "机关解密"
    ],
    "oneLine": "一场国际文物走私集团的巅峰对决，地点竟是在万丈悬崖之上的千年悬棺群。",
    "cover": "./94.jpg",
    "url": "./video-1744.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1745",
    "title": "雪宝的从前从前",
    "region": "美国",
    "type": "短片",
    "year": "2023",
    "genre": "动画, 喜剧, 家庭",
    "tags": [
      "迪士尼",
      "衍生",
      "话痨",
      "童年回忆"
    ],
    "oneLine": "在给安娜和艾莎准备周年纪念礼物时，雪宝开始重新演绎并“改编”它记忆中的那些经典童话故事。",
    "cover": "./95.jpg",
    "url": "./video-1745.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1746",
    "title": "我们与爱的距离",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 家庭 / 社会",
    "tags": [
      "亲子关系",
      "原生家庭",
      "治愈"
    ],
    "oneLine": "一个抛弃家庭三十年的父亲成为植物人，三个性格迥异的子女被迫轮流照顾他，重新学习“如何去爱”。",
    "cover": "./96.jpg",
    "url": "./video-1746.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1747",
    "title": "黑水",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑, 犯罪, 惊悚",
    "tags": [
      "毒水",
      "小镇疑云",
      "环保",
      "记者",
      "企业黑幕"
    ],
    "oneLine": "一个海边小镇的居民接连患上怪病，一名地方记者追踪了十五年，发现罪魁祸首是全镇人每天都喝的“纯净水”。",
    "cover": "./97.jpg",
    "url": "./video-1747.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1748",
    "title": "初识与告别之间",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "爱情, 剧情, 青春",
    "tags": [
      "恋爱循环",
      "分手",
      "回忆杀",
      "文艺小清新",
      "扎心"
    ],
    "oneLine": "一对决定分手的年轻恋人，约定用一天时间重访他们从初识到现在的所有地点，然后彻底告别。",
    "cover": "./98.jpg",
    "url": "./video-1748.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1749",
    "title": "犯罪生活",
    "region": "美国",
    "type": "电影",
    "year": "2013",
    "genre": "喜剧，犯罪",
    "tags": [
      "笨贼",
      "豪宅囚禁",
      "上流社会丑闻",
      "黑色幽默"
    ],
    "oneLine": "两个笨贼绑架了富豪太太，却发现在富豪家里当人质比在自己家还舒服。",
    "cover": "./99.jpg",
    "url": "./video-1749.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1750",
    "title": "新刑警本色",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2022",
    "genre": "犯罪 / 悬疑 / 动作",
    "tags": [
      "双男主",
      "旧案",
      "卧底",
      "硬汉"
    ],
    "oneLine": "老刑警重查20年前的悬案，却发现新搭档正是当年逃犯的儿子。",
    "cover": "./100.jpg",
    "url": "./video-1750.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1751",
    "title": "野蛮公主玩婚记",
    "region": "韩国",
    "type": "电影",
    "year": "2015",
    "genre": "喜剧 / 爱情 / 古装",
    "tags": [
      "契约婚姻",
      "欢喜冤家",
      "宫廷"
    ],
    "oneLine": "被流放的刁蛮公主为了重回宫廷，绑架了全城最刻薄的状元郎，逼他签下结婚契约。",
    "cover": "./101.jpg",
    "url": "./video-1751.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1752",
    "title": "金牌红娘",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2014",
    "genre": "喜剧, 爱情, 古装",
    "tags": [
      "媒婆",
      "宋代",
      "轻喜",
      "宅斗"
    ],
    "oneLine": "北宋开封府第一名媒金玲珑，手握全城婚配大数据，却偏偏算不出自己的姻缘。",
    "cover": "./102.jpg",
    "url": "./video-1752.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1753",
    "title": "小戏骨：白毛女",
    "region": "中国大陆",
    "type": "剧集 / 特别篇",
    "year": "2023",
    "genre": "剧情 / 音乐 / 历史",
    "tags": [
      "儿童演员",
      "红色经典",
      "歌剧改编",
      "演技炸裂"
    ],
    "oneLine": "一群8到12岁的孩子，用他们理解的方式重新演绎白毛女的悲欢与抗争。",
    "cover": "./103.jpg",
    "url": "./video-1753.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1754",
    "title": "缤纷爵士梦",
    "region": "日本",
    "type": "电影",
    "year": "2019",
    "genre": "动画",
    "tags": [
      "音乐",
      "梦想",
      "友情",
      "奇幻",
      "青春"
    ],
    "oneLine": "一个从不出门的自闭少年，通过一栋废弃公寓里会唱歌的墙，进入了一个被爵士乐统治的平行世界。",
    "cover": "./104.jpg",
    "url": "./video-1754.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1755",
    "title": "穿越时空的情歌",
    "region": "泰国",
    "type": "电视剧",
    "year": "2022",
    "genre": "爱情， 奇幻， 音乐",
    "tags": [
      "穿越",
      "老歌",
      "祖辈",
      "甜虐"
    ],
    "oneLine": "女主每次听奶奶留下的老式情歌就会穿越到1970年代，在那里爱上了正在追求奶奶的年轻爷爷。",
    "cover": "./105.jpg",
    "url": "./video-1755.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1756",
    "title": "鬼挡墙",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖, 惊悚",
    "tags": [
      "民间传说",
      "心理恐怖",
      "循环"
    ],
    "oneLine": "一名迷路的货车司机在午夜山路上遭遇鬼挡墙，每次掉头都开回同一栋废弃的凶宅，而宅子里的人，都是他死去的亲人。",
    "cover": "./106.jpg",
    "url": "./video-1756.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1757",
    "title": "叛逆赢家",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧 / 运动",
    "tags": [
      "街头篮球",
      "废柴逆袭",
      "嘻哈",
      "搞笑"
    ],
    "oneLine": "一群被校队开除的废柴，为了赢回球场使用权，向职业街球手发起了史上最烂挑战。",
    "cover": "./107.jpg",
    "url": "./video-1757.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1758",
    "title": "去年圣诞",
    "region": "美国",
    "type": "电影",
    "year": "2019",
    "genre": "喜剧，爱情",
    "tags": [
      "圣诞",
      "治愈",
      "乔治·迈克尔",
      "伦敦"
    ],
    "oneLine": "一个自暴自弃的圣诞店铺店员，被一个神秘的暖男改写了人生轨迹。",
    "cover": "./108.jpg",
    "url": "./video-1758.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1759",
    "title": "脱单舞会",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情, 喜剧",
    "tags": [
      "假情侣",
      "高中舞会",
      "死对头变恋人",
      "真香定律"
    ],
    "oneLine": "两个全校公认的死对头为了各自的赌约，假装情侣参加毕业舞会，结果演着演着发现好像不用演了。",
    "cover": "./109.jpg",
    "url": "./video-1759.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1760",
    "title": "民男的幸福",
    "region": "日本",
    "type": "电影",
    "year": "2023",
    "genre": "喜剧 / 家庭",
    "tags": [
      "大龄剩男",
      "相亲",
      "佛系",
      "温情"
    ],
    "oneLine": "40岁的废柴民男被迫参加“幸福研修班”，班里的剩女们教他追女生，结果全班的恋爱进度条卡在0%。",
    "cover": "./110.jpg",
    "url": "./video-1760.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1761",
    "title": "60年代的柏克莱",
    "region": "美国",
    "type": "剧集",
    "year": "2023",
    "genre": "历史，剧情，青春",
    "tags": [
      "嬉皮士",
      "反战运动",
      "自由言论",
      "大学"
    ],
    "oneLine": "六个来自不同背景的柏克莱大学生，在1968年那个疯狂的年份里，用青春对抗整个时代。",
    "cover": "./111.jpg",
    "url": "./video-1761.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1762",
    "title": "谢谢，晚安：邦·乔维故事",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "纪录片， 音乐",
    "tags": [
      "摇滚传奇",
      "乐队传记",
      "怀旧"
    ],
    "oneLine": "从新泽西车库到全球摇滚圣殿，邦乔维乐队四十年的友谊、争吵与救赎。",
    "cover": "./112.jpg",
    "url": "./video-1762.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1763",
    "title": "洛神国语",
    "region": "中国香港",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 奇幻 / 古装",
    "tags": [
      "神话改编",
      "粤语配音",
      "身份错位",
      "悲剧美学"
    ],
    "oneLine": "不会说官话的河神之女被许配给帝王，而在翻译的谎言中，她爱上了自己的影子。",
    "cover": "./113.jpg",
    "url": "./video-1763.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1764",
    "title": "易碎人生",
    "region": "法国",
    "type": "电影",
    "year": "2011",
    "genre": "剧情 / 生活",
    "tags": [
      "玻璃娃娃",
      "脆弱",
      "生命",
      "纪实感"
    ],
    "oneLine": "一个患有“玻璃骨”的女孩，用无数次骨折换来了一次出国旅行。",
    "cover": "./114.jpg",
    "url": "./video-1764.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1765",
    "title": "春宵千金",
    "region": "中国内地",
    "type": "电影",
    "year": "2024",
    "genre": "爱情，喜剧",
    "tags": [
      "一夜情缘",
      "千金小姐",
      "身份错位"
    ],
    "oneLine": "一夜风流之后，穷画家发现枕边人竟是失踪半年的豪门千金，而自己成了绑架嫌疑人。",
    "cover": "./115.jpg",
    "url": "./video-1765.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1766",
    "title": "危机航线",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 灾难",
    "tags": [
      "空中劫持",
      "正邪对峙",
      "密闭空间",
      "爆炸"
    ],
    "oneLine": "国际航班遭遇生化武器袭击，前特种兵必须在客舱失压前，从 200 名乘客中找出三根引爆器。",
    "cover": "./116.jpg",
    "url": "./video-1766.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1767",
    "title": "臭小子与美丽世界",
    "region": "日本",
    "type": "电影",
    "year": "2009",
    "genre": "青春, 剧情",
    "tags": [
      "叛逆",
      "街头",
      "流浪",
      "救赎"
    ],
    "oneLine": "一个被学校开除的朋克少年，在捡到一个盲人女孩的导盲犬后，决定带她去看“世界上最丑的风景”。",
    "cover": "./117.jpg",
    "url": "./video-1767.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1768",
    "title": "圆月映花都",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情",
    "tags": [
      "迷惘一代",
      "多角恋",
      "巴黎",
      "侯麦式美学"
    ],
    "oneLine": "一位即将步入婚姻的钢琴师在满月之夜偶遇初恋，她必须在安稳的现实与狂热的回忆之间，选择自己未来的余音。",
    "cover": "./118.jpg",
    "url": "./video-1768.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1769",
    "title": "伊甸园及其后",
    "region": "法国",
    "type": "电影",
    "year": "1970",
    "genre": "剧情 / 实验",
    "tags": [
      "新浪潮",
      "哲学",
      "存在主义",
      "多线叙事",
      "知识分子"
    ],
    "oneLine": "七名年轻人在海岛上开办“重返伊甸园”夏令营，却陆续发现彼此都是对方人生中的“蛇”。",
    "cover": "./119.jpg",
    "url": "./video-1769.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1770",
    "title": "魔偶奇谭6",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖，奇幻，动作",
    "tags": [
      "提线木偶",
      "黑魔法",
      "邪教",
      "猎奇杀人"
    ],
    "oneLine": "最后一只幸存魔偶被送进博物馆，却唤醒了沉睡百年的木偶师邪灵。",
    "cover": "./120.jpg",
    "url": "./video-1770.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1771",
    "title": "留下来的人",
    "region": "中国台湾",
    "type": "电影",
    "year": "2022",
    "genre": "剧情，灾难",
    "tags": [
      "地震",
      "幸存者",
      "心理创伤",
      "伦理",
      "群像"
    ],
    "oneLine": "大地震后，三个幸存者被困废墟，一块巧克力成了四人份的生存希望。",
    "cover": "./121.jpg",
    "url": "./video-1771.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1772",
    "title": "儍瓜艳史",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧 / 爱情",
    "tags": [
      "港式喜剧",
      "底层逆袭",
      "乌龙",
      "市井"
    ],
    "oneLine": "一个被女友甩了的穷小子，阴差阳错被全城最富有的千金小姐当成了救命恩人。",
    "cover": "./122.jpg",
    "url": "./video-1772.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1773",
    "title": "宝贵的秘密",
    "region": "中国大陆",
    "type": "电影",
    "year": "2010",
    "genre": "剧情，家庭",
    "tags": [
      "亲情",
      "绝症",
      "守护",
      "催泪"
    ],
    "oneLine": "一个“傻子”哥哥用一辈子保守的秘密，竟然是关于妹妹身世的致命真相。",
    "cover": "./123.jpg",
    "url": "./video-1773.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1774",
    "title": "谁是被害者",
    "region": "中国台湾",
    "type": "电视剧",
    "year": "2020",
    "genre": "悬疑 / 犯罪 / 剧情",
    "tags": [
      "亚斯伯格",
      "鉴识科学",
      "连环命案",
      "社会边缘人",
      "许玮甯"
    ],
    "oneLine": "亚斯伯格症的鉴识官方毅任，发现女儿卷入连环命案，为了掩盖证据开始破坏自己经手的案件。",
    "cover": "./124.jpg",
    "url": "./video-1774.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1775",
    "title": "假面骑士电王 俺，诞生！",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "genre": "动作，科幻，奇幻",
    "tags": [
      "时间旅行",
      "多重人格",
      "异魔神",
      "特摄"
    ],
    "oneLine": "史上最倒霉的假面骑士，体内住着四个吵死人的“话痨”怪物。",
    "cover": "./125.jpg",
    "url": "./video-1775.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1776",
    "title": "珈百璃的堕落",
    "region": "日本",
    "type": "动漫剧集",
    "year": "2023",
    "genre": "喜剧，奇幻",
    "tags": [
      "天使",
      "废柴",
      "反差萌",
      "校园"
    ],
    "oneLine": "天界优等生珈百璃下凡修行，却在一台电脑前彻底沦为了废宅天使。",
    "cover": "./126.jpg",
    "url": "./video-1776.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1777",
    "title": "百劫红颜不了情",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "年代 / 爱情",
    "tags": [
      "民国虐恋",
      "失忆重逢",
      "家族仇怨"
    ],
    "oneLine": "富家千金为救爱人被炸失忆，醒来后被迫嫁给仇人之子，而她的真爱就站在面前，却成了陌生人。",
    "cover": "./127.jpg",
    "url": "./video-1777.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1778",
    "title": "纯种狼",
    "region": "英国",
    "type": "电影",
    "year": "2020",
    "genre": "动画, 奇幻",
    "tags": [
      "反歧视",
      "变身",
      "身份认同"
    ],
    "oneLine": "狼群里唯一不会变身的“废柴狼”，被发现其实是可以变身为任何物种的“终极纯种”。",
    "cover": "./128.jpg",
    "url": "./video-1778.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1779",
    "title": "庆典",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "剧情",
    "tags": [
      "家族",
      "秘事",
      "现实主义",
      "群戏"
    ],
    "oneLine": "父亲八十大寿的宴席上，四兄妹轮番揭穿彼此伪造的幸福生活。",
    "cover": "./129.jpg",
    "url": "./video-1779.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1780",
    "title": "天龙神剑粤语",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1988",
    "genre": "武侠 / 奇幻",
    "tags": [
      "古装",
      "神剑",
      "复仇",
      "兄弟情"
    ],
    "oneLine": "一把能斩断因果的神剑，让兄弟二人一个封神，一个入魔。",
    "cover": "./130.jpg",
    "url": "./video-1780.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1781",
    "title": "交界惊爆点2",
    "region": "美国 / 墨西哥",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 犯罪 / 惊悚",
    "tags": [
      "边境",
      "毒品战争",
      "硬核枪战",
      "续集"
    ],
    "oneLine": "上一集逃出生天的卧底警探被迫重返美墨边境，这次他的对手是自己养大的义子。",
    "cover": "./131.jpg",
    "url": "./video-1781.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1782",
    "title": "律政英雄2007",
    "region": "日本",
    "type": "电影",
    "year": "2007",
    "genre": "剧情, 悬疑, 犯罪",
    "tags": [
      "检察官",
      "久利生公平",
      "木村拓哉",
      "庭审",
      "热血"
    ],
    "oneLine": "固执的检察官久利生公平重回东京地检，调查一起看似普通的袭击案，却牵扯出政界黑幕。",
    "cover": "./132.jpg",
    "url": "./video-1782.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1783",
    "title": "浪漫千金",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情，喜剧，商战",
    "tags": [
      "财阀女",
      "扮猪吃虎",
      "契约结婚",
      "逆袭"
    ],
    "oneLine": "集团私生女为了夺回继承权，假装失忆嫁给了仇人家的保安，却意外收获了真心。",
    "cover": "./133.jpg",
    "url": "./video-1783.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1784",
    "title": "沉睡危情",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "悬疑，惊悚，犯罪",
    "tags": [
      "入室抢劫",
      "催眠",
      "反转",
      "密室",
      "强女"
    ],
    "oneLine": "一位患有严重梦游症的独居女性，在查看监控时惊恐地发现，每晚都会有一个陌生人进入她的卧室，而她竟在睡梦中主动为他打开了门。",
    "cover": "./134.jpg",
    "url": "./video-1784.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1785",
    "title": "米花之味",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "亲情",
      "返乡",
      "美食",
      "代际冲突",
      "治愈"
    ],
    "oneLine": "离家十年的米花糖手艺传人返乡，却发现女儿用“科技狠活”复刻出了即将失传的味道。",
    "cover": "./135.jpg",
    "url": "./video-1785.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1786",
    "title": "最爱你",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "爱情 / 剧情 / 音乐",
    "tags": [
      "文艺",
      "错位",
      "乐队",
      "治愈"
    ],
    "oneLine": "一个聋哑人爱上了摇滚乐队主唱，她用身体感受震动的方式“听”完了他的每一场演唱会。",
    "cover": "./136.jpg",
    "url": "./video-1786.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1787",
    "title": "漂亮的战斗",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀 / 竞技",
    "tags": [
      "全女性",
      "格斗",
      "生存",
      "励志"
    ],
    "oneLine": "七位来自不同职业的女性，在一座荒岛上进行身体与意志的极限生存战，胜者将获得“漂亮”的定义权。",
    "cover": "./137.jpg",
    "url": "./video-1787.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1788",
    "title": "夏绿蒂的网2 韦柏历险记",
    "region": "美国",
    "type": "动画电影",
    "year": "2003",
    "genre": "家庭 / 剧情 / 冒险",
    "tags": [
      "动物",
      "友情",
      "续集",
      "农场"
    ],
    "oneLine": "夏绿蒂去世后，韦柏带着她留下的卵囊踏上旅程，要在春天到来前将小蜘蛛们送到夏绿蒂曾承诺过的“那个地方”。",
    "cover": "./138.jpg",
    "url": "./video-1788.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1789",
    "title": "似火流年",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "年代 / 青春 / 励志",
    "tags": [
      "80年代",
      "工厂子弟",
      "热血",
      "改革大潮",
      "兄弟情"
    ],
    "oneLine": "1988年东北国营工厂的五个铁哥们，在改革大潮中有的下海、有的入狱、有的死去，用十年走完一生。",
    "cover": "./139.jpg",
    "url": "./video-1789.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1790",
    "title": "不得不爱第一季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情 / 都市 / 职场",
    "tags": [
      "破镜重圆",
      "商战",
      "契约情侣",
      "智商在线",
      "虐恋"
    ],
    "oneLine": "为了夺回被集团夺走的家族企业，落魄千金与抛弃她的前男友签署了“假结婚”对赌协议。",
    "cover": "./140.jpg",
    "url": "./video-1790.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1791",
    "title": "三更雪",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 古装 / 惊悚",
    "tags": [
      "古代刑侦",
      "暴雪山庄",
      "连环命案"
    ],
    "oneLine": "大雪封山的驿站里，七个互不相识的人，接连离奇死亡。",
    "cover": "./141.jpg",
    "url": "./video-1791.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1792",
    "title": "金大班",
    "region": "中国内地",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情, 年代, 女性",
    "tags": [
      "夜总会风云",
      "大女主",
      "浮沉一生"
    ],
    "oneLine": "1948年的上海百乐门，当红舞女金大班在迎来送往中，秘密守护着一箱失落的故宫文物。",
    "cover": "./142.jpg",
    "url": "./video-1792.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1793",
    "title": "哈勇家",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭",
    "tags": [
      "原住民",
      "家族纷争",
      "土地",
      "返乡",
      "和解"
    ],
    "oneLine": "一位离家多年的哈勇家长子返乡奔丧，却发现父亲留下的遗嘱是一盘无法播放的卡带。",
    "cover": "./143.jpg",
    "url": "./video-1793.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1794",
    "title": "街头之王2：汽车城",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "硬汉警匪",
      "底特律",
      "飙车",
      "黑吃黑",
      "暴力美学"
    ],
    "oneLine": "底特律资深警探被调到“汽车城”最腐败的分局，他要在一周内揪出内鬼，否则整座城市将落入毒枭之手。",
    "cover": "./144.jpg",
    "url": "./video-1794.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1795",
    "title": "桃源风月",
    "region": "中国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 爱情",
    "tags": [
      "桃花源",
      "禁忌之恋",
      "田园",
      "家族恩怨"
    ],
    "oneLine": "为守护桃源村最后的净土，她被迫与仇家之子联姻，却发现风月之下藏着更深的阴谋。",
    "cover": "./145.jpg",
    "url": "./video-1795.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1796",
    "title": "中国好声音第三季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2014",
    "genre": "音乐 / 真人秀",
    "tags": [
      "选秀",
      "导师转椅",
      "素人歌手",
      "综艺"
    ],
    "oneLine": "第三季好声音回归，四位顶级音乐人为素人转身，诞生了帕尔哈提、张碧晨等声音。",
    "cover": "./146.jpg",
    "url": "./video-1796.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1797",
    "title": "搜寻伟大",
    "region": "英国",
    "type": "电影",
    "year": "2020",
    "genre": "传记，冒险",
    "tags": [
      "探险家",
      "南极",
      "自我救赎"
    ],
    "oneLine": "过气探险家伪造了南极穿越记录，二十年后带儿子重回冰原寻找“伟大”。",
    "cover": "./147.jpg",
    "url": "./video-1797.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1798",
    "title": "拥抱法力",
    "region": "中国香港",
    "type": "电影",
    "year": "2023",
    "genre": "奇幻剧情",
    "tags": [
      "家庭",
      "灵异",
      "温情",
      "传承"
    ],
    "oneLine": "一个不信鬼神的程序员回乡奔丧，发现自己必须学会祖传的法术才能让母亲安心上路。",
    "cover": "./148.jpg",
    "url": "./video-1798.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1799",
    "title": "巨人兽",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "动作 / 科幻",
    "tags": [
      "巨兽",
      "地心世界",
      "生态恐怖",
      "机甲"
    ],
    "oneLine": "沉睡在地心的史前生物集体苏醒，人类最后的希望，是几台报废的极地采矿机甲。",
    "cover": "./149.jpg",
    "url": "./video-1799.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1800",
    "title": "索命咒",
    "region": "美国",
    "type": "电影",
    "year": "2020",
    "genre": "恐怖、超自然、惊悚",
    "tags": [
      "巫术诅咒",
      "密室逃生",
      "心理恐惧",
      "反转结局"
    ],
    "oneLine": "一个黑人男子带着家人搬进乡下老宅，却发现地下室关着一个曾被私刑处决的巫毒师。",
    "cover": "./150.jpg",
    "url": "./video-1800.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1801",
    "title": "圣斗士星矢 众神的激战",
    "region": "日本",
    "type": "动画电影",
    "year": "2023",
    "genre": "动作 / 奇幻",
    "tags": [
      "热血",
      "希腊神话",
      "CG动画"
    ],
    "oneLine": "宙斯在临终前将“神之权杖”折断为十二块，散落人间，引发希腊、北欧、埃及三路神明的争夺战。",
    "cover": "./1.jpg",
    "url": "./video-1801.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1802",
    "title": "骨瓷2019",
    "region": "中国大陆",
    "type": "电影",
    "year": "2019",
    "genre": "悬疑, 犯罪",
    "tags": [
      "骨瓷",
      "家族秘密",
      "遗产争夺",
      "心理博弈",
      "真相"
    ],
    "oneLine": "一块价值连城的骨瓷，揭开了一个家族三代人深埋的黑暗秘密。",
    "cover": "./2.jpg",
    "url": "./video-1802.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1803",
    "title": "伊娃这样的女人",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 女性",
    "tags": [
      "女性成长",
      "出轨",
      "自我觉醒"
    ],
    "oneLine": "伊娃当了二十年的完美妻子，直到丈夫把情人带回家，她才第一次学着做“不完美的自己”。",
    "cover": "./3.jpg",
    "url": "./video-1803.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1804",
    "title": "许世友出拳",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2021",
    "genre": "传记 / 历史 / 战争",
    "tags": [
      "开国上将",
      "少林功夫",
      "胶东抗战",
      "铁血柔情"
    ],
    "oneLine": "开国上将许世友在胶东抗日战场上的传奇故事，看他如何用拳头和智慧打出一片天地。",
    "cover": "./4.jpg",
    "url": "./video-1804.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1805",
    "title": "爷爷的死亡排练",
    "region": "中国台湾",
    "type": "电影",
    "year": "2023",
    "genre": "家庭/剧情/喜剧",
    "tags": [
      "临终关怀",
      "家庭和解",
      "荒诞喜剧",
      "代际沟通"
    ],
    "oneLine": "倔老头为了让不常回家的儿女们聚齐，自导自演了一出“活人葬礼”闹剧。",
    "cover": "./5.jpg",
    "url": "./video-1805.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1806",
    "title": "微软英雄",
    "region": "美国",
    "type": "电影",
    "year": "1999",
    "genre": "传记 / 剧情",
    "tags": [
      "科技",
      "创业",
      "竞争",
      "乔布斯",
      "盖茨"
    ],
    "oneLine": "讲述了两位性格迥异的电脑天才——傲慢的乔布斯和精明的盖茨，如何从车库创业到主导个人电脑革命。",
    "cover": "./6.jpg",
    "url": "./video-1806.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1807",
    "title": "逆喷射家族",
    "region": "日本",
    "type": "电影",
    "year": "1984",
    "genre": "喜剧， 家庭",
    "tags": [
      "黑色幽默",
      "家庭崩溃",
      "泡沫经济前夜"
    ],
    "oneLine": "一个四口之家为了争夺新买的彩色电视机，将整栋房子变成了战场。",
    "cover": "./7.jpg",
    "url": "./video-1807.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1808",
    "title": "银娇",
    "region": "韩国",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑 / 剧情 / 惊悚",
    "tags": [
      "民俗",
      "巫蛊",
      "村落秘密",
      "女性复仇",
      "反转"
    ],
    "oneLine": "民俗学家调查偏远村庄的“银娇”传说，却发现每个村民家里都有一具“活的”稻草人。",
    "cover": "./8.jpg",
    "url": "./video-1808.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1809",
    "title": "奇人密码－古罗布之谜",
    "region": "中国台湾",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "布袋戏",
      "木偶",
      "丝绸之路",
      "楼兰"
    ],
    "oneLine": "汉朝使者张骞的后代，持神秘“奇人密码”深入死亡沙漠，寻找消失的古罗布国。",
    "cover": "./9.jpg",
    "url": "./video-1809.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1810",
    "title": "阴阳路15：客似魂来",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 奇幻 / 民俗",
    "tags": [
      "中式恐怖",
      "殡仪馆",
      "轮回",
      "黑色幽默"
    ],
    "oneLine": "一家生意惨淡的殡仪馆推出“生前告别仪式体验套餐”，结果预约的活人越来越多，来的死人却一个都没少。",
    "cover": "./10.jpg",
    "url": "./video-1810.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1811",
    "title": "我的失忆女友",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "爱情， 喜剧， 剧情",
    "tags": [
      "失忆",
      "每日重启",
      "追爱",
      "浪漫",
      "治愈"
    ],
    "oneLine": "女孩因车祸每天醒来都会忘记前一天的事，男孩必须让她在一天之内重新爱上自己。",
    "cover": "./11.jpg",
    "url": "./video-1811.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1812",
    "title": "打击魔鬼",
    "region": "韩国",
    "type": "电影",
    "year": "2025",
    "genre": "动作，犯罪，黑暗",
    "tags": [
      "私刑",
      "地下世界",
      "清洁工",
      "复仇",
      "拳头"
    ],
    "oneLine": "一名患有绝症的清洁工大叔，每晚化身蒙面义警，专门打击逃脱法律制裁的恶徒，代号“魔鬼”。",
    "cover": "./12.jpg",
    "url": "./video-1812.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1813",
    "title": "小安妮",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "剧情, 家庭, 奇幻",
    "tags": [
      "儿童",
      "治愈",
      "幻想朋友",
      "单亲家庭"
    ],
    "oneLine": "失去母亲的八岁女孩安妮，发现自己只要在黑暗中闭上眼睛，就能进入一个由她记忆碎片构成的“第二世界”。",
    "cover": "./13.jpg",
    "url": "./video-1813.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1814",
    "title": "我是被害者",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "剧情 / 犯罪 / 悬疑",
    "tags": [
      "校园暴力",
      "反转",
      "复仇",
      "伪纪录",
      "罗生门"
    ],
    "oneLine": "一个声称被霸凌的少女自杀未遂，但警方在她留下的“日记”中发现，她可能才是真正的施暴者。",
    "cover": "./14.jpg",
    "url": "./video-1814.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1815",
    "title": "公主嫁到国语",
    "region": "中国香港",
    "type": "剧集",
    "year": "2010",
    "genre": "古装 / 喜剧",
    "tags": [
      "港式无厘头",
      "欢喜冤家",
      "宫廷",
      "女强男弱"
    ],
    "oneLine": "刁蛮公主被迫和亲，却在新婚夜发现驸马也是个“男版刁蛮货”，一场爆笑的宅斗夺权大战开始了。",
    "cover": "./15.jpg",
    "url": "./video-1815.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1816",
    "title": "血战松毛岭",
    "region": "中国内地",
    "type": "电影",
    "year": "2023",
    "genre": "战争, 历史, 动作",
    "tags": [
      "红军",
      "保卫战",
      "阻击",
      "牺牲"
    ],
    "oneLine": "1934年，松毛岭上七天七夜的血战，六千将士用肉身阻挡三万敌军，为主力转移争取最后时间。",
    "cover": "./16.jpg",
    "url": "./video-1816.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1817",
    "title": "天声好手",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "音乐、喜剧、剧情",
    "tags": [
      "声带障碍",
      "电台DJ",
      "失声复得",
      "中年梦想",
      "现场收音"
    ],
    "oneLine": "一位因声带损伤失业的金牌电台DJ，在帮聋哑学校孩子们排练合唱时，重新学会“说话”。",
    "cover": "./17.jpg",
    "url": "./video-1817.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1818",
    "title": "器子",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 科幻",
    "tags": [
      "诅咒",
      "机器人",
      "心理恐惧"
    ],
    "oneLine": "女孩买回的二手人偶，每天晚上都会变成她死去的姐姐，说出死亡真相。",
    "cover": "./18.jpg",
    "url": "./video-1818.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1819",
    "title": "戏王之王1952",
    "region": "美国",
    "type": "电影",
    "year": "1952",
    "genre": "剧情、歌舞",
    "tags": [
      "马戏团",
      "经典好莱坞",
      "爱情悲剧"
    ],
    "oneLine": "马戏团小丑爱上了空中飞人，但团长才是她真正的父亲。",
    "cover": "./19.jpg",
    "url": "./video-1819.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1820",
    "title": "花月佳期1995",
    "region": "中国香港",
    "type": "电影",
    "year": "1995",
    "genre": "爱情， 喜剧， 奇幻",
    "tags": [
      "婚介所",
      "身份错位",
      "怀旧风",
      "港式浪漫"
    ],
    "oneLine": "1995年，一家濒临倒闭的婚介所，因为一次填错表格，把七个互不相干的人配成了三对半。",
    "cover": "./20.jpg",
    "url": "./video-1820.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1821",
    "title": "欲海香魂",
    "region": "意大利",
    "type": "电影",
    "year": "1972",
    "genre": "剧情 / 情色 / 悬疑",
    "tags": [
      "贵族丑闻",
      "香水家族",
      "谋杀情欲",
      "哥特风格"
    ],
    "oneLine": "香水世家三姐妹接连离奇死亡，每具尸体旁都留下一瓶从未公开的毒香水。",
    "cover": "./21.jpg",
    "url": "./video-1821.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1822",
    "title": "美好的未来",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 科幻， 伦理",
    "tags": [
      "时间跳跃",
      "中年底层",
      "希望诈骗"
    ],
    "oneLine": "失业的中年人获得了一张去往“美好未来”的单程票，却发现那个未来里没有自己的位置。",
    "cover": "./22.jpg",
    "url": "./video-1822.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1823",
    "title": "火线掏宝",
    "region": "美国",
    "type": "电影",
    "year": "2028",
    "genre": "喜剧, 战争",
    "tags": [
      "军火贩",
      "拍卖网站",
      "黑色幽默",
      "真实事件改编"
    ],
    "oneLine": "两个宅男从军火拍卖网站上低价买坦克，结果连海军陆战队都来找他们进货。",
    "cover": "./23.jpg",
    "url": "./video-1823.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1824",
    "title": "毕竟是巫女",
    "region": "日本",
    "type": "电视剧",
    "year": "2021",
    "genre": "喜剧 / 奇幻 / 日常",
    "tags": [
      "巫女",
      "治愈",
      "神社",
      "温馨"
    ],
    "oneLine": "毫无灵力的废柴巫女，却拥有“靠嘴渡鬼”的神奇能力，每天在神社里用吐槽解决各种灵异事件。",
    "cover": "./24.jpg",
    "url": "./video-1824.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1825",
    "title": "拓荒者",
    "region": "中国大陆",
    "type": "电影",
    "year": "1995",
    "genre": "剧情 / 历史",
    "tags": [
      "北大荒",
      "知青",
      "艰苦岁月",
      "意志"
    ],
    "oneLine": "五十年代，一群热血青年响应号召挺进北大荒，在冰与火的淬炼中书写悲壮的青春祭歌。",
    "cover": "./25.jpg",
    "url": "./video-1825.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1826",
    "title": "美丽与动人",
    "region": "法国",
    "type": "电影",
    "year": "2015",
    "genre": "爱情，剧情",
    "tags": [
      "巴黎",
      "模特行业",
      "中年危机",
      "姐弟恋"
    ],
    "oneLine": "年过四十的过气超模与一名年轻摄影师擦出火花，但美丽皮囊之下，她被压抑多年的自我正在觉醒。",
    "cover": "./26.jpg",
    "url": "./video-1826.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1827",
    "title": "布朗牧师",
    "region": "英国",
    "type": "剧集",
    "year": "2015",
    "genre": "剧情 / 悬疑 / 犯罪",
    "tags": [
      "神探",
      "宗教",
      "小镇"
    ],
    "oneLine": "一个热爱摇滚乐、喜欢喝威士忌的牧师，在宁静的英国小镇上靠着对人性的洞察，屡破奇案。",
    "cover": "./27.jpg",
    "url": "./video-1827.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1828",
    "title": "白夫人的妖恋",
    "region": "日本 / 中国",
    "type": "电影",
    "year": "2021",
    "genre": "奇幻 / 爱情 / 动画",
    "tags": [
      "白蛇传",
      "新编",
      "妖恋",
      "转世",
      "水墨"
    ],
    "oneLine": "修炼千年的白蛇化名白夫人，在东京经营古董店，她的客人，全都是妖怪。",
    "cover": "./28.jpg",
    "url": "./video-1828.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1829",
    "title": "伏魔记",
    "region": "中国香港 / 中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 奇幻 / 古装",
    "tags": [
      "道士",
      "降妖",
      "港式动作",
      "特效大片"
    ],
    "oneLine": "末代道士陈九被迫与现代科技公司合作，用AI算法生成最有效的伏魔符咒，结果算出来的第一张符指向了公司CEO。",
    "cover": "./29.jpg",
    "url": "./video-1829.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1830",
    "title": "雪琉璃",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "古装 / 悬疑 / 鉴宝",
    "tags": [
      "宫廷密案",
      "文物修复",
      "双男主",
      "反套路"
    ],
    "oneLine": "琉璃瓦碎，故宫发生诡异血案，两位文物修复师被卷入跨越百年的诅咒谜团。",
    "cover": "./30.jpg",
    "url": "./video-1830.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1831",
    "title": "散弹露露",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "女杀手",
      "公路片",
      "癫狂美学"
    ],
    "oneLine": "因为一次搭车，老实人乔治的生活被一个持散弹枪、自称“露露”的疯女人炸上了天。",
    "cover": "./31.jpg",
    "url": "./video-1831.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1832",
    "title": "我和我的兄弟们",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "家庭 / 喜剧",
    "tags": [
      "多子家庭",
      "闹剧",
      "亲情",
      "巴黎郊区"
    ],
    "oneLine": "母亲突然离家出走，五个性格迥异的儿子被迫组成“临时家政天团”。",
    "cover": "./32.jpg",
    "url": "./video-1832.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1833",
    "title": "黑水晶：抗战纪元",
    "region": "美国",
    "type": "电视剧",
    "year": "2026",
    "genre": "奇幻、冒险、木偶剧",
    "tags": [
      "前传",
      "Skeksis",
      "Gelfling",
      "抵抗"
    ],
    "oneLine": "延续剧集被砍三年后重启，聚焦Gelfling最后的堡垒保卫战。",
    "cover": "./33.jpg",
    "url": "./video-1833.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1834",
    "title": "其实不想走",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "都市 / 家庭",
    "tags": [
      "养老",
      "北漂",
      "回家",
      "亲情"
    ],
    "oneLine": "在北京打拼十五年的三兄妹，因为父亲的遗嘱，不得不回到东北老家争夺一套老破小。",
    "cover": "./34.jpg",
    "url": "./video-1834.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1835",
    "title": "德国之爱",
    "region": "德国",
    "type": "剧集",
    "year": "2026",
    "genre": "爱情",
    "tags": [
      "东西德",
      "禁忌之恋",
      "边境逃亡",
      "冷战罗曼史",
      "历史厚重"
    ],
    "oneLine": "1970年代，东德女翻译官爱上了西德来的男记者，两人在柏林墙两侧秘密相恋。",
    "cover": "./35.jpg",
    "url": "./video-1835.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1836",
    "title": "一八九四·甲午大海战",
    "region": "中国",
    "type": "电影",
    "year": "2012",
    "genre": "历史 / 战争",
    "tags": [
      "海战",
      "清末",
      "爱国",
      "悲壮"
    ],
    "oneLine": "公元1894年，一场决定中日国运的惨烈海战，撕开了近代中国的屈辱序幕。",
    "cover": "./36.jpg",
    "url": "./video-1836.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1837",
    "title": "公共女人",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 惊悚",
    "tags": [
      "女性凝视",
      "网络曝光",
      "私刑",
      "身份错位"
    ],
    "oneLine": "她在地铁上被偷拍并标注为“公共女人”，三天内全法国都认识了她，除了她自己。",
    "cover": "./37.jpg",
    "url": "./video-1837.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1838",
    "title": "多龙芝",
    "region": "日本",
    "type": "电影",
    "year": "2025",
    "genre": "动画 / 冒险",
    "tags": [
      "经典重启",
      "机械",
      "少女英雄",
      "蒸汽朋克"
    ],
    "oneLine": "在废土世界中，少女多龙芝驾驶巨大机甲，寻找能让大地复苏的“生命引擎”。",
    "cover": "./38.jpg",
    "url": "./video-1838.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1839",
    "title": "杀妻记",
    "region": "美国",
    "type": "电影",
    "year": "2017",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "婚姻骗局",
      "反转不断",
      "高智商博弈",
      "黑色幽默"
    ],
    "oneLine": "丈夫雇凶杀妻的完美计划全部落空，因为妻子同时雇了同一批杀手干掉他。",
    "cover": "./39.jpg",
    "url": "./video-1839.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1840",
    "title": "坂本龙一的700天",
    "region": "日本",
    "type": "纪录片",
    "year": "2015",
    "genre": "纪录片 / 音乐 / 传记",
    "tags": [
      "坂本龙一",
      "创作过程",
      "癌症",
      "终曲前奏"
    ],
    "oneLine": "记录坂本龙一在罹患癌症后，如何用700天创作出他个人最私密的专辑《async》。",
    "cover": "./40.jpg",
    "url": "./video-1840.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1841",
    "title": "惊爆轰天雷",
    "region": "香港",
    "type": "电影",
    "year": "1997",
    "genre": "动作 / 犯罪",
    "tags": [
      "警匪对峙",
      "卧底",
      "爆炸",
      "兄弟情",
      "枪战"
    ],
    "oneLine": "卧底警察被同袍出卖，身绑轰天雷冲进金三角毒巢，引爆前却发现弟弟也在人质中。",
    "cover": "./41.jpg",
    "url": "./video-1841.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1842",
    "title": "东京偶像",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情悬疑",
    "tags": [
      "偶像文化",
      "地下女团",
      "网络暴力",
      "心理惊悚",
      "身份认同"
    ],
    "oneLine": "地下偶像团体成员在直播中被人杀害，而凶手可能就藏在每天给她刷礼物的铁杆粉丝里。",
    "cover": "./42.jpg",
    "url": "./video-1842.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1843",
    "title": "盲点 第五季",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "悬疑、犯罪、剧情",
    "tags": [
      "记忆",
      "FBI",
      "黑科技",
      "人性",
      "最终季"
    ],
    "oneLine": "最后几个拥有完整“盲点记忆”的人陆续离奇自杀，背后的操控者竟是主角自己一个已经“死亡”的人格。",
    "cover": "./43.jpg",
    "url": "./video-1843.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1844",
    "title": "熊熊要结婚",
    "region": "法国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 爱情, 动画",
    "tags": [
      "拟人动物",
      "婚礼闹剧",
      "法式浪漫",
      "定格动画"
    ],
    "oneLine": "一只熊非要与人类女子结婚，民政局、神父和整个森林都炸了锅。",
    "cover": "./44.jpg",
    "url": "./video-1844.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1845",
    "title": "泰山与狩猎者",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 冒险 / 生态惊悚",
    "tags": [
      "丛林法则",
      "反盗猎",
      "野生救援",
      "宿敌和解"
    ],
    "oneLine": "传奇丛林之子的领地，来了一群用无人机猎杀濒危动物的未来赏金猎人。",
    "cover": "./45.jpg",
    "url": "./video-1845.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1846",
    "title": "大黄蜂",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 科幻, 冒险",
    "tags": [
      "变形金刚",
      "机甲",
      "冷战",
      "少女",
      "谍战"
    ],
    "oneLine": "1987年，落魄的大黄蜂躲在加州废车场，却被一名叛逆少女误打误撞修好并激活。",
    "cover": "./46.jpg",
    "url": "./video-1846.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1847",
    "title": "伴谍同盟",
    "region": "英国",
    "type": "剧集",
    "year": "2024",
    "genre": "谍战 / 动作",
    "tags": [
      "双面间谍",
      "婚姻",
      "冷战",
      "悬疑"
    ],
    "oneLine": "冷战时期，一对表面恩爱的夫妻外交官，实际上是分别服务于美苏的间谍，而两人对此心知肚明，却假装不知。",
    "cover": "./47.jpg",
    "url": "./video-1847.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1848",
    "title": "囡囡",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 家庭 / 女性",
    "tags": [
      "留守",
      "祖孙",
      "方言电影",
      "催泪"
    ],
    "oneLine": "上海外婆在确诊阿兹海默症后，唯一记得的事是每周给远在澳洲的“囡囡”（外孙女）寄一封信。",
    "cover": "./48.jpg",
    "url": "./video-1848.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1849",
    "title": "人生第2杆",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "喜剧, 剧情, 家庭",
    "tags": [
      "高尔夫",
      "中年危机",
      "和解",
      "体育"
    ],
    "oneLine": "事业家庭双失败的男人，通过教自闭症儿子打高尔夫，找回了重新挥杆的勇气。",
    "cover": "./49.jpg",
    "url": "./video-1849.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1850",
    "title": "不可饶恕",
    "region": "西班牙",
    "type": "电影",
    "year": "2020",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "罗生门结构",
      "复仇反转",
      "法律漏洞"
    ],
    "oneLine": "一个为女儿复仇的父亲杀死了凶手，但监控显示凶手五年前就已经死亡。",
    "cover": "./50.jpg",
    "url": "./video-1850.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1851",
    "title": "满月之战",
    "region": "日本",
    "type": "动漫",
    "year": "2019",
    "genre": "科幻, 战斗, 少女",
    "tags": [
      "机战",
      "满月",
      "魔力",
      "生存战"
    ],
    "oneLine": "每个满月之夜，四名少女驾驶魔力机甲对决，最后的胜者可以实现一个愿望。",
    "cover": "./51.jpg",
    "url": "./video-1851.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1852",
    "title": "拯救地球！",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧",
    "tags": [
      "黑色幽默",
      "荒诞",
      "伪纪录片",
      "环保",
      "讽刺"
    ],
    "oneLine": "一群废柴环保主义者为了骗取捐款，伪造外星人入侵，结果外星人真的来了。",
    "cover": "./52.jpg",
    "url": "./video-1852.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1853",
    "title": "孤独男孩",
    "region": "法国",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 青春",
    "tags": [
      "自闭症",
      "海边",
      "母亲",
      "沉默",
      "成长"
    ],
    "oneLine": "不会说话也不愿与人接触的男孩，用一个暑假在海边的废船里，为自己造了一个看不见的房间。",
    "cover": "./53.jpg",
    "url": "./video-1853.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1854",
    "title": "空谷血案",
    "region": "中国大陆",
    "type": "电影",
    "year": "1995",
    "genre": "犯罪 / 悬疑 / 惊悚",
    "tags": [
      "乡村",
      "复仇",
      "刑侦",
      "老片"
    ],
    "oneLine": "西南边陲小镇发生碎尸案，唯一的目击者是一名被反锁在家里的哑巴女孩，她用手语比划出的线索颠覆了所有人的判断。",
    "cover": "./54.jpg",
    "url": "./video-1854.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1855",
    "title": "太空侵略者",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作， 科幻",
    "tags": [
      "外星入侵",
      "幸存者",
      "硬核枪战"
    ],
    "oneLine": "外星舰队入侵当天，一个沉迷经典街机游戏《太空侵略者》的死宅发现：游戏就是入侵攻略。",
    "cover": "./55.jpg",
    "url": "./video-1855.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1856",
    "title": "爸爸当家 第二季",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "家庭 / 喜剧 / 短剧",
    "tags": [
      "全职爸爸",
      "育儿",
      "萌娃",
      "网红",
      "性别反转"
    ],
    "oneLine": "第一季的“废柴爸爸”意外成为育儿网红，第二季却要面对妻子失业、岳母入侵和顶流萌娃经纪约争夺战。",
    "cover": "./56.jpg",
    "url": "./video-1856.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1857",
    "title": "回归生活",
    "region": "中国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 家庭",
    "tags": [
      "治愈",
      "职场失意",
      "乡土",
      "慢生活"
    ],
    "oneLine": "大厂高管被裁后逃回老家，却发现等待他的不是温暖港湾，而是需要他拯救的破产农场。",
    "cover": "./57.jpg",
    "url": "./video-1857.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1858",
    "title": "消失的头颅",
    "region": "中国大陆",
    "type": "电影",
    "year": "1989",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "刑侦",
      "奇案",
      "文物走私",
      "反转"
    ],
    "oneLine": "博物馆法医头颅标本被盗，牵扯出一起涉及文物走私和家族恩怨的连环杀人案。",
    "cover": "./58.jpg",
    "url": "./video-1858.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1859",
    "title": "揭密风暴",
    "region": "美国 / 英国",
    "type": "电视剧",
    "year": "2027",
    "genre": "惊悚、剧情",
    "tags": [
      "媒体伦理",
      "政治黑幕",
      "记者",
      "网络暴力"
    ],
    "oneLine": "一家老牌纸媒收到匿名爆料，声称五年前的连环杀手是警方为了结案而捏造的，真正的凶手仍在作案。",
    "cover": "./59.jpg",
    "url": "./video-1859.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1860",
    "title": "广告爸爸",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情 / 家庭 / 喜剧",
    "tags": [
      "广告业",
      "非血缘亲情",
      "都市喜剧",
      "代际冲突"
    ],
    "oneLine": "一个被客户逼疯的广告总监，把客户画像当真爸爸，引发了一连串啼笑皆非的真假家庭闹剧。",
    "cover": "./60.jpg",
    "url": "./video-1860.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1861",
    "title": "秘门交易丑闻",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑 / 政治",
    "tags": [
      "金融犯罪",
      "检黑勾结",
      "高能反转"
    ],
    "oneLine": "实习检察官追查一起内幕交易，意外掀翻整个政商勾结的暗黑网络，连亲父都是帮凶。",
    "cover": "./61.jpg",
    "url": "./video-1861.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1862",
    "title": "花满楼之绝世",
    "region": "中国",
    "type": "网络电影",
    "year": "2025",
    "genre": "古装， 武侠， 动作",
    "tags": [
      "盲侠",
      "古龙",
      "探案",
      "江湖",
      "唯美"
    ],
    "oneLine": "江南花家的盲眼公子花满楼，仅凭听声辩位和超凡心智，独闯绝世杀局。",
    "cover": "./62.jpg",
    "url": "./video-1862.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1863",
    "title": "不死咒怨3",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖",
    "tags": [
      "诅咒源头",
      "时空错乱",
      "伽椰子前传"
    ],
    "oneLine": "伽椰子被杀的那一夜，其实有第三个人在现场，而他的怨念比房子更古老。",
    "cover": "./63.jpg",
    "url": "./video-1863.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1864",
    "title": "泰姬陵",
    "region": "印度",
    "type": "电影",
    "year": "2025",
    "genre": "剧情 / 历史",
    "tags": [
      "建筑",
      "爱情",
      "权力",
      "史诗",
      "悲剧"
    ],
    "oneLine": "不是沙贾汗为妃子建陵的故事，而是一名参与修建泰姬陵的工匠在完工后被刺瞎双眼的复仇史。",
    "cover": "./64.jpg",
    "url": "./video-1864.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1865",
    "title": "现代爱情",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "爱情 / 喜剧 / 剧情",
    "tags": [
      "单元剧",
      "都市",
      "情感",
      "真实故事改编",
      "明星卡司"
    ],
    "oneLine": "纽约，一座城市，八集关于“爱”的奇怪模样：相亲软件爱上了用户、送报工和AI女友、寡妇和鹦鹉……",
    "cover": "./65.jpg",
    "url": "./video-1865.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1866",
    "title": "夜魔先生",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖, 喜剧, 奇幻",
    "tags": [
      "港式鬼片",
      "都市传说",
      "胆小",
      "乌龙"
    ],
    "oneLine": "胆小如鼠的殡仪馆化妆师，为了暗恋的女孩，半夜去凶宅抓鬼直播，结果发现鬼比他还怂。",
    "cover": "./66.jpg",
    "url": "./video-1866.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1867",
    "title": "谍战马德拉斯",
    "region": "印度",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 动作, 剧情",
    "tags": [
      "印巴冲突",
      "间谍",
      "宗教",
      "反转"
    ],
    "oneLine": "一个虔诚的印度教警察，被派去渗透马德拉斯的穆斯林极端组织，却发现信仰在人性面前不值一提。",
    "cover": "./67.jpg",
    "url": "./video-1867.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1868",
    "title": "创伤的智慧",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 心理",
    "tags": [
      "PTSD",
      "心理医生",
      "互相治愈",
      "北爱尔兰",
      "历史伤痕"
    ],
    "oneLine": "患PTSD的退伍老兵成为心理医生后，用自己未愈合的创伤治愈了更多灵魂。",
    "cover": "./68.jpg",
    "url": "./video-1868.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1869",
    "title": "与妖为邻",
    "region": "日本",
    "type": "剧集",
    "year": "2024",
    "genre": "奇幻, 日常",
    "tags": [
      "治愈",
      "妖怪",
      "人妖共存",
      "小镇生活",
      "温情"
    ],
    "oneLine": "在一座人与妖怪共居的小镇上，能看见妖怪的孤独少女与活了千年的落魄狐妖意外成为了邻居。",
    "cover": "./69.jpg",
    "url": "./video-1869.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1870",
    "title": "十二猴子第三季",
    "region": "美国",
    "type": "电视剧集",
    "year": "2017",
    "genre": "科幻, 悬疑, 惊悚",
    "tags": [
      "时间旅行",
      "病毒",
      "末日",
      "循环",
      "启示录"
    ],
    "oneLine": "科尔撕裂时间线闯入1917年，却意外发现“十二猴子军”的创始人与他最亲近的人有关。",
    "cover": "./70.jpg",
    "url": "./video-1870.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1871",
    "title": "爱上的圣诞节",
    "region": "美国",
    "type": "TV电影",
    "year": "2018",
    "genre": "爱情, 家庭, 圣诞",
    "tags": [
      "节日",
      "治愈",
      "小妞电影",
      "雪景"
    ],
    "oneLine": "工作狂女高管在圣诞夜被施了魔法，必须在一个月内让雪地里哭泣的小男孩重新笑起来，否则永远无法回到都市。",
    "cover": "./71.jpg",
    "url": "./video-1871.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1872",
    "title": "鲁豫有约一日行第十一季",
    "region": "中国大陆",
    "type": "综艺",
    "year": "2023",
    "genre": "访谈，真人秀",
    "tags": [
      "访谈",
      "名人",
      "一日体验",
      "深度对话",
      "纪实"
    ],
    "oneLine": "主持人跟随每位嘉宾真实生活二十四小时，记录光环背后最不加修饰的日常与思考。",
    "cover": "./72.jpg",
    "url": "./video-1872.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1873",
    "title": "34街奇缘",
    "region": "美国",
    "type": "电影",
    "year": "2022",
    "genre": "喜剧 / 奇幻 / 家庭",
    "tags": [
      "圣诞电影",
      "都市童话",
      "法律奇迹",
      "温情治愈",
      "怀疑与相信"
    ],
    "oneLine": "一个自称是圣诞老人的老头出现在纽约最高法院的被告席上，而他唯一的辩护律师是个从不相信圣诞节的犹太女孩。",
    "cover": "./73.jpg",
    "url": "./video-1873.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1874",
    "title": "梦游夏威夷",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "剧情， 奇幻， 治愈",
    "tags": [
      "梦游",
      "绝症",
      "海岛"
    ],
    "oneLine": "一个患有梦游症的社畜，每晚都会在梦里去夏威夷，而现实中他正一步步走进医院太平间。",
    "cover": "./74.jpg",
    "url": "./video-1874.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1875",
    "title": "变形侠医梦幻对决：狼人篇",
    "region": "美国",
    "type": "动画电影",
    "year": "2024",
    "genre": "动作 / 科幻 / 恐怖",
    "tags": [
      "漫威",
      "浩克",
      "狼人",
      "暗黑暴力美学",
      "宿命对决"
    ],
    "oneLine": "月圆之夜，被导弹追杀的浩克误入中欧狼人村，体内伽马能量唤醒了沉睡千年的狼人基因。",
    "cover": "./75.jpg",
    "url": "./video-1875.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1876",
    "title": "北京女子图鉴",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "剧情 / 都市 / 女性",
    "tags": [
      "北漂",
      "职场",
      "独立女性",
      "现实主义"
    ],
    "oneLine": "来北京的第1825天，她在五环外卖掉了自己攒了五年的血，换来一本假户口本。",
    "cover": "./76.jpg",
    "url": "./video-1876.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1877",
    "title": "不爱不散",
    "region": "中国大陆",
    "type": "电影",
    "year": "2014",
    "genre": "爱情、剧情、文艺",
    "tags": [
      "分手疗伤",
      "日系治愈",
      "咖啡店情缘",
      "都市孤独"
    ],
    "oneLine": "分手一百天后，她在他开的咖啡店里寄出了一百封没有收件人名字的信，最后一封他读到了自己。",
    "cover": "./77.jpg",
    "url": "./video-1877.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1878",
    "title": "菜鸟老警第二季",
    "region": "美国",
    "type": "剧集",
    "year": "2019",
    "genre": "剧情, 犯罪",
    "tags": [
      "警匪",
      "中年人",
      "职场",
      "洛杉矶"
    ],
    "oneLine": "全美最老的新人警察入职第二年，不仅要抓坏人，还要教年轻队友做人。",
    "cover": "./78.jpg",
    "url": "./video-1878.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1879",
    "title": "木兰花",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情, 悬疑",
    "tags": [
      "家族秘密",
      "南方哥特",
      "园艺疗法",
      "遗嘱之谜"
    ],
    "oneLine": "父亲葬礼后，三姐妹必须在30天内种出一株开花的木兰，才能继承遗产——而她们从未见过木兰。",
    "cover": "./79.jpg",
    "url": "./video-1879.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1880",
    "title": "金钱陷阱",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "犯罪 / 悬疑",
    "tags": [
      "金融诈骗",
      "密室",
      "复仇",
      "反转",
      "智商博弈"
    ],
    "oneLine": "六个金融诈骗受害者被锁进金库，墙上倒计时写着：要么找出骗子，要么等钱烧光。",
    "cover": "./80.jpg",
    "url": "./video-1880.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1881",
    "title": "罗马黑帮",
    "region": "意大利 / 美国",
    "type": "电影",
    "year": "2025",
    "genre": "犯罪 / 剧情 / 历史",
    "tags": [
      "黑帮",
      "罗马",
      "历史",
      "宗教",
      "权力"
    ],
    "oneLine": "二战结束后，罗马街头一个由牧师、贵族遗孤和黑市商人组成的非典型黑帮，试图在教廷与美军之间重建秩序。",
    "cover": "./81.jpg",
    "url": "./video-1881.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1882",
    "title": "芦苇之歌",
    "region": "韩国",
    "type": "电影",
    "year": "2022",
    "genre": "悬疑，剧情",
    "tags": [
      "湿地",
      "失踪案",
      "双胞胎",
      "记忆替换",
      "风声"
    ],
    "oneLine": "双胞胎妹妹失踪后，姐姐发现所有人都在假装妹妹从未存在过。",
    "cover": "./82.jpg",
    "url": "./video-1882.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1883",
    "title": "白银和梦想之书",
    "region": "英国",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻/冒险",
    "tags": [
      "魔法书",
      "少女成长",
      "平行世界"
    ],
    "oneLine": "一本只有白银能读懂的古老书籍，向她揭示了梦想可以兑换现实货币的惊天秘密。",
    "cover": "./83.jpg",
    "url": "./video-1883.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1884",
    "title": "伦敦间谍战",
    "region": "英国",
    "type": "电影",
    "year": "2023",
    "genre": "动作 / 悬疑",
    "tags": [
      "间谍",
      "反套路",
      "都市",
      "智斗"
    ],
    "oneLine": "一个被裁员的普通数据分析师，意外被军情六处误聘，却发现入职培训就是一场真实间谍战。",
    "cover": "./84.jpg",
    "url": "./video-1884.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1885",
    "title": "幻海奇情第二季",
    "region": "中国香港",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑",
    "tags": [
      "单元剧",
      "奇幻",
      "都市传说",
      "罗嘉良"
    ],
    "oneLine": "六个全新的都市怪谈，连接成一张关于“幻海”的暗网，这一次，所有故事的主角都将相遇。",
    "cover": "./85.jpg",
    "url": "./video-1885.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1886",
    "title": "艳谍玛泰哈莉",
    "region": "香港",
    "type": "电影",
    "year": "1984",
    "genre": "动作， 冒险",
    "tags": [
      "女特工",
      "民国传奇",
      "香艳动作"
    ],
    "oneLine": "民国传奇女间谍玛泰哈莉被复活，周旋于军阀、日军和租界势力之间，用身体和智慧窃取最高机密。",
    "cover": "./86.jpg",
    "url": "./video-1886.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1887",
    "title": "情深似海",
    "region": "韩国",
    "type": "剧集",
    "year": "2025",
    "genre": "家庭伦理",
    "tags": [
      "催泪",
      "失忆",
      "逆袭",
      "豪门"
    ],
    "oneLine": "财阀家的私生女替姐姐顶罪入狱十年，出狱后发现全家都忘了她，唯独死对头记得并一直在等她。",
    "cover": "./87.jpg",
    "url": "./video-1887.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1888",
    "title": "艺海情鸳",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2002",
    "genre": "爱情 / 年代 / 悬疑",
    "tags": [
      "梨园",
      "民国",
      "替身疑云",
      "错爱一生"
    ],
    "oneLine": "名伶被毁容后，让貌似的哑女替自己登台，却不知替身正秘密接近自己深爱的军阀。",
    "cover": "./88.jpg",
    "url": "./video-1888.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1889",
    "title": "神鬼传奇",
    "region": "美国",
    "type": "电影",
    "year": "1999",
    "genre": "动作 / 奇幻 / 冒险",
    "tags": [
      "古埃及",
      "木乃伊",
      "宝藏猎人",
      "诅咒复活"
    ],
    "oneLine": "埃及古城哈姆纳塔下，探险队不慎唤醒沉睡三千年的祭司伊莫顿，释放出毁天灭地的十灾。",
    "cover": "./89.jpg",
    "url": "./video-1889.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1890",
    "title": "魔鬼著魔",
    "region": "美国",
    "type": "电影",
    "year": "2016",
    "genre": "恐怖",
    "tags": [
      "驱魔",
      "邪教",
      "血腥",
      "反转"
    ],
    "oneLine": "一位失去信仰的神父在驱魔时发现，被附身的不是女孩，而是这座教堂，甚至是整个小镇。",
    "cover": "./90.jpg",
    "url": "./video-1890.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1891",
    "title": "公园男孩",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "青春 / 喜剧",
    "tags": [
      "街头文化",
      "滑板少年",
      "小镇青年",
      "梦想"
    ],
    "oneLine": "西南小县城的四个废柴少年，为了争夺公园里的滑板地盘，竟然向市里的专业滑板队发起了挑战。",
    "cover": "./91.jpg",
    "url": "./video-1891.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1892",
    "title": "斯坦福监狱实验",
    "region": "美国",
    "type": "电影",
    "year": "2015",
    "genre": "剧情， 惊悚， 心理",
    "tags": [
      "真实事件改编",
      "心理学",
      "权力异化",
      "人性实验",
      "封闭空间"
    ],
    "oneLine": "1971年斯坦福大学地下室，24名男生被随机分为“狱警”和“囚犯”，原定两周的实验在第六天因全面崩溃而终止。",
    "cover": "./92.jpg",
    "url": "./video-1892.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1893",
    "title": "封神第一部",
    "region": "中国大陆",
    "type": "电影",
    "year": "2027",
    "genre": "奇幻 / 史诗 / 动作",
    "tags": [
      "质子旅",
      "姜子牙",
      "朝歌风云"
    ],
    "oneLine": "纣王不是昏君，而是一个试图用人间之力对抗神权的悲剧改革者。",
    "cover": "./93.jpg",
    "url": "./video-1893.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1894",
    "title": "糟糕的安息日",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖、黑色幽默",
    "tags": [
      "邪教",
      "家庭聚餐",
      "恶魔附身"
    ],
    "oneLine": "虔诚的犹太家庭在安息日晚餐上，发现小女儿是撒旦在人间的女儿。",
    "cover": "./94.jpg",
    "url": "./video-1894.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1895",
    "title": "圣诞访客",
    "region": "爱尔兰",
    "type": "电影",
    "year": "2019",
    "genre": "剧情 / 家庭",
    "tags": [
      "圣诞",
      "治愈",
      "陌生人",
      "和解",
      "温暖"
    ],
    "oneLine": "平安夜一个自称是“耶稣”的流浪汉敲开了最吝啬富豪的家门。",
    "cover": "./95.jpg",
    "url": "./video-1895.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1896",
    "title": "男人帮",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2025",
    "genre": "都市 / 喜剧 / 群像",
    "tags": [
      "兄弟情",
      "中年危机",
      "幽默讽刺",
      "都市生活"
    ],
    "oneLine": "三个从大学时代就厮混在一起的铁哥们，在四十岁那年相继失业、失婚、失控，决定合伙开一家专坑有钱人的“破局公司”。",
    "cover": "./96.jpg",
    "url": "./video-1896.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1897",
    "title": "从前从前我的妈",
    "region": "中国台湾",
    "type": "电影",
    "year": "2025",
    "genre": "家庭奇幻",
    "tags": [
      "穿越",
      "母爱",
      "亲情",
      "奇幻喜剧",
      "女性"
    ],
    "oneLine": "一个叛逆少女意外穿越回1988年，遇到了和自己同龄的、正在当摇滚青年的妈妈。",
    "cover": "./97.jpg",
    "url": "./video-1897.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1898",
    "title": "如果还有明天",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2025",
    "genre": "家庭，伦理，剧情",
    "tags": [
      "绝症",
      "倒计时",
      "遗愿清单",
      "代际和解"
    ],
    "oneLine": "被确诊胰腺癌晚期的强势母亲，隐瞒病情，用最后三个月为死对头女儿策划了一场“催婚阴谋”。",
    "cover": "./98.jpg",
    "url": "./video-1898.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1899",
    "title": "幽谷",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑 / 山村惊悚",
    "tags": [
      "湘西赶尸",
      "山野奇谈",
      "姐妹情深"
    ],
    "oneLine": "为了寻找失踪十年的姐姐，都市白领回到湘西老家，却发现了山谷里能复制活人执念的吞噬者。",
    "cover": "./99.jpg",
    "url": "./video-1899.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1900",
    "title": "我是你的父亲",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "科幻, 悬疑, 剧情",
    "tags": [
      "克隆",
      "伦理困境",
      "身份认同"
    ],
    "oneLine": "一名顶尖遗传学家发现，将自己养大的父亲，竟是承接了本体记忆的克隆体。",
    "cover": "./100.jpg",
    "url": "./video-1900.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1901",
    "title": "马格罗维亚",
    "region": "虚构东欧国家 / 美国",
    "type": "剧集",
    "year": "2024",
    "genre": "政治、惊悚、剧情",
    "tags": [
      "前苏联共和国",
      "地缘博弈",
      "暗杀",
      "小国求生"
    ],
    "oneLine": "夹在欧盟与俄罗斯之间的弹丸小国马格罗维亚，一个酒鬼总理被赶鸭子上架，必须通过一场假选举阻止美俄两国同时发动的政变。",
    "cover": "./101.jpg",
    "url": "./video-1901.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1902",
    "title": "小公主苏菲亚第四季",
    "region": "美国",
    "type": "动画剧集",
    "year": "2025",
    "genre": "动画 / 奇幻 / 教育",
    "tags": [
      "公主",
      "魔法",
      "成长",
      "责任",
      "友谊"
    ],
    "oneLine": "苏菲亚的护身符突然失效，她必须在不依靠魔法的情况下，学会做一个真正的公主。",
    "cover": "./102.jpg",
    "url": "./video-1902.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1903",
    "title": "玛拉基湾",
    "region": "澳大利亚",
    "type": "剧集",
    "year": "2023",
    "genre": "犯罪/悬疑",
    "tags": [
      "小镇疑云",
      "家族秘密",
      "海洋恐怖"
    ],
    "oneLine": "玛拉基湾连续三年在同一天发现无名浮尸，本地女警发现所有线索都指向自己溺亡多年的父亲。",
    "cover": "./103.jpg",
    "url": "./video-1903.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1904",
    "title": "美味奇缘",
    "region": "中国大陆 / 泰国",
    "type": "电视剧",
    "year": "2017",
    "genre": "爱情 / 剧情 / 美食",
    "tags": [
      "厨师",
      "复仇",
      "甜虐",
      "味觉"
    ],
    "oneLine": "天才女厨师失去味觉，仇人之子声称能当她的“舌头”，却只为毁掉她。",
    "cover": "./104.jpg",
    "url": "./video-1904.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1905",
    "title": "无用之人",
    "region": "日本",
    "type": "电影",
    "year": "2024",
    "genre": "剧情， 家庭",
    "tags": [
      "中年失业",
      "父子和解",
      "日常治愈"
    ],
    "oneLine": "45岁被裁员的上班族不敢告诉家人，每天假装上班，在公园与一群“无用老人”学会了拆解生活。",
    "cover": "./105.jpg",
    "url": "./video-1905.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1906",
    "title": "尼斯警花",
    "region": "法国",
    "type": "剧集",
    "year": "2027",
    "genre": "喜剧、犯罪、动作",
    "tags": [
      "女警搭档",
      "蔚蓝海岸",
      "轻松探案",
      "法式幽默"
    ],
    "oneLine": "尼斯海滩的懒散女警与巴黎空降的精英女警探被迫搭档，专破蓝色海岸的高智商犯罪。",
    "cover": "./106.jpg",
    "url": "./video-1906.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1907",
    "title": "欢乐颂3",
    "region": "中国",
    "type": "电视剧",
    "year": "2023",
    "genre": "剧情, 爱情, 都市",
    "tags": [
      "女性群像",
      "合租",
      "职场"
    ],
    "oneLine": "上海欢乐颂小区22楼搬来了五位新女性，她们在柴米油盐中破解职场陷阱与情感迷局。",
    "cover": "./107.jpg",
    "url": "./video-1907.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1908",
    "title": "白马之子",
    "region": "蒙古",
    "type": "电影",
    "year": "2020",
    "genre": "冒险史诗",
    "tags": [
      "草原",
      "传奇",
      "人与自然",
      "游牧文化",
      "成长"
    ],
    "oneLine": "一个被诅咒的男孩与一匹白马的羁绊，将决定整个草原部落的存亡。",
    "cover": "./108.jpg",
    "url": "./video-1908.html",
    "regionGroup": "other",
    "typeGroup": "movie"
  },
  {
    "id": "1909",
    "title": "妖夜寻狼：血姬觉醒",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作，奇幻",
    "tags": [
      "吸血鬼",
      "狼人",
      "女战士",
      "觉醒",
      "史诗终章"
    ],
    "oneLine": "吸血鬼女战士莎琳娜被封印千年后苏醒，发现狼人已统治世界，而她的血是唯一能杀死狼王的东西。",
    "cover": "./109.jpg",
    "url": "./video-1909.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1910",
    "title": "阿涅斯的海滩",
    "region": "法国",
    "type": "电影",
    "year": "2008",
    "genre": "纪录片， 传记， 文艺",
    "tags": [
      "瓦尔达",
      "新浪潮",
      "回忆录",
      "海滩"
    ],
    "oneLine": "法国“新浪潮祖母”阿涅斯·瓦尔达，在海滩上搭建镜子，用碎片拼凑自己的一生。",
    "cover": "./110.jpg",
    "url": "./video-1910.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1911",
    "title": "暗房",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "悬疑 / 惊悚 / 心理",
    "tags": [
      "胶片",
      "记忆",
      "犯罪心理",
      "密室"
    ],
    "oneLine": "一个洗胶卷的老头在暗房里冲洗了四十年照片，直到有人发现他洗的全是同一个女人。",
    "cover": "./111.jpg",
    "url": "./video-1911.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1912",
    "title": "骑呢情缘",
    "region": "中国香港",
    "type": "电影",
    "year": "1997",
    "genre": "喜剧， 爱情， 公路",
    "tags": [
      "自行车送水",
      "乌龙巧合",
      "小人物",
      "港式无厘头"
    ],
    "oneLine": "一个倒霉的自行车送水工，接连撞上逃婚新娘、黑帮交易和一只会说话的鹦鹉。",
    "cover": "./112.jpg",
    "url": "./video-1912.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1913",
    "title": "听到涛声",
    "region": "日本",
    "type": "动画电影",
    "year": "1993",
    "genre": "爱情，青春，文艺",
    "tags": [
      "吉卜力",
      "异地恋",
      "回忆",
      "错过的告白"
    ],
    "oneLine": "一个东京男孩在毕业十周年的同学会上，突然想起了高知县那个总和他对着干的女孩，和她藏在涛声里的那句告白。",
    "cover": "./113.jpg",
    "url": "./video-1913.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1914",
    "title": "警报器",
    "region": "中国大陆",
    "type": "电影",
    "year": "2018",
    "genre": "悬疑, 犯罪, 剧情",
    "tags": [
      "反杀",
      "防空洞",
      "误会",
      "正义",
      "暗网"
    ],
    "oneLine": "小区废弃防空洞里频繁传出消防警报声，热心大爷下去查看，意外发现密室囚禁直播。",
    "cover": "./114.jpg",
    "url": "./video-1914.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1915",
    "title": "2020去死",
    "region": "英国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧， 恐怖， 奇幻",
    "tags": [
      "黑色幽默",
      "疫情",
      "隔离",
      "病毒",
      "末日狂欢"
    ],
    "oneLine": "在疫情封城的最后一个夜晚，一名社恐青年与一名偏执大妈被困在同一栋公寓，他们必须合作，杀死一个名为“2020”的恶魔。",
    "cover": "./115.jpg",
    "url": "./video-1915.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1916",
    "title": "变形金刚08动画版第一季",
    "region": "美国",
    "type": "剧集",
    "year": "2008",
    "genre": "科幻 / 动作 / 机甲",
    "tags": [
      "复古画风",
      "青春化",
      "威震天复活",
      "地球人搭档"
    ],
    "oneLine": "一群初出茅庐的年轻汽车人滞留地球，不仅要对抗重建肉身的威震天，还得轮流给房东交租并隐瞒外星人身份。",
    "cover": "./116.jpg",
    "url": "./video-1916.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1917",
    "title": "澪之料理帖",
    "region": "日本",
    "type": "剧集",
    "year": "2017",
    "genre": "剧情，美食",
    "tags": [
      "料理",
      "江户时代",
      "女性成长",
      "治愈",
      "美食番"
    ],
    "oneLine": "一场大火夺走了少女澪的养父母，她带着仅存的食谱来到江户，决心用料理找出当年纵火案的真相。",
    "cover": "./117.jpg",
    "url": "./video-1917.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1918",
    "title": "春宵一刻值千金",
    "region": "中国香港",
    "type": "电影",
    "year": "1992",
    "genre": "喜剧, 剧情, 爱情",
    "tags": [
      "经典港片",
      "一夜情",
      "婚姻",
      "笑料"
    ],
    "oneLine": "结婚前一晚，准新郎被死党拉去开“最后的单身派对”，却引发了一连串无法收场的灾难。",
    "cover": "./118.jpg",
    "url": "./video-1918.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1919",
    "title": "乐透美国梦",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "喜剧 / 剧情",
    "tags": [
      "移民",
      "彩票",
      "黑色幽默",
      "阶层"
    ],
    "oneLine": "一群华人移民合买彩票中得亿万巨奖，但中奖彩票却在争吵中被洗衣机搅成了纸浆。",
    "cover": "./119.jpg",
    "url": "./video-1919.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1920",
    "title": "沙漠活宝",
    "region": "中国大陆",
    "type": "电影",
    "year": "2022",
    "genre": "冒险喜剧",
    "tags": [
      "公路",
      "寻宝",
      "搞笑",
      "沙漠"
    ],
    "oneLine": "三个不靠谱的驴友误打误撞拿到一张藏宝图，在沙漠里追着骆驼和土匪跑。",
    "cover": "./120.jpg",
    "url": "./video-1920.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1921",
    "title": "伤心先生",
    "region": "中国香港",
    "type": "电视剧",
    "year": "1998",
    "genre": "喜剧，爱情，都市",
    "tags": [
      "风水",
      "命理",
      "都市恋爱"
    ],
    "oneLine": "自称“伤心先生”的风水师专为痴男怨女改运，却发现自己天煞孤星，碰谁谁倒霉。",
    "cover": "./121.jpg",
    "url": "./video-1921.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1922",
    "title": "虹猫蓝兔七侠传",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "动画 / 武侠 / 奇幻",
    "tags": [
      "童年IP",
      "七剑合璧",
      "国风",
      "情怀"
    ],
    "oneLine": "时隔十八年，虹猫蓝兔再次集结，为了阻止黑心虎的后人复活魔教。",
    "cover": "./122.jpg",
    "url": "./video-1922.html",
    "regionGroup": "domestic",
    "typeGroup": "anime"
  },
  {
    "id": "1923",
    "title": "春夜",
    "region": "韩国",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情，剧情，生活",
    "tags": [
      "治愈",
      "便利店夜班",
      "手写书信",
      "都市孤独"
    ],
    "oneLine": "首尔一位便利店夜班女店员，在每个春夜里通过手写便当纸条，与一位神秘常客慢慢靠近。",
    "cover": "./123.jpg",
    "url": "./video-1923.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1924",
    "title": "马达加斯加的企鹅",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "喜剧 / 动画 / 冒险",
    "tags": [
      "萌贱",
      "特工",
      "爆笑",
      "合家欢"
    ],
    "oneLine": "菜鸟、卡哇伊、凉快和老大卷入了一场由“北风行动组”设下的真假特工考试。",
    "cover": "./124.jpg",
    "url": "./video-1924.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1925",
    "title": "我是布莱克",
    "region": "英国/法国",
    "type": "电影",
    "year": "2016",
    "genre": "剧情，社会",
    "tags": [
      "底层困境",
      "福利制度",
      "现实主义",
      "金棕榈奖"
    ],
    "oneLine": "一位患病的老木匠在申请社会救济时被系统反复刁难，最终在极度无奈中走向毁灭。",
    "cover": "./125.jpg",
    "url": "./video-1925.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1926",
    "title": "芭乐拍档",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2019",
    "genre": "喜剧, 犯罪",
    "tags": [
      "黑色幽默",
      "乡土味",
      "菜鸟警察",
      "台式幽默"
    ],
    "oneLine": "一个从城市被流放的精英刑警，与一个只会种芭乐的乡下巡佐，组成了全台湾最不靠谱的缉毒搭档。",
    "cover": "./126.jpg",
    "url": "./video-1926.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1927",
    "title": "色欲情仇4",
    "region": "法国",
    "type": "电影",
    "year": "2026",
    "genre": "惊悚 / 情色",
    "tags": [
      "复仇",
      "阴谋",
      "反转",
      "大尺度"
    ],
    "oneLine": "顶级应召女郎假死脱身后整容归来，向陷害她为杀人凶手的政客们展开报复。",
    "cover": "./127.jpg",
    "url": "./video-1927.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1928",
    "title": "进击的鼓手",
    "region": "美国",
    "type": "电影",
    "year": "2014",
    "genre": "剧情，音乐",
    "tags": [
      "偏执",
      "艺术追求",
      "师徒",
      "极限施压"
    ],
    "oneLine": "一个想成为顶级爵士鼓手的音乐学院学生，遇到了一位用极致暴力手段“激励”学生的魔鬼导师。",
    "cover": "./128.jpg",
    "url": "./video-1928.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1929",
    "title": "乐高玩具的冒险之旅",
    "region": "美国 / 丹麦",
    "type": "电影",
    "year": "2025",
    "genre": "动画 / 喜剧 / 冒险",
    "tags": [
      "乐高",
      "积木",
      "元宇宙",
      "创造",
      "儿童"
    ],
    "oneLine": "一块最普通的红色乐高砖块不甘心只做地基，在虚拟游戏世界里造反，要当国王。",
    "cover": "./129.jpg",
    "url": "./video-1929.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1930",
    "title": "愤怒的收获",
    "region": "法国",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 悬疑",
    "tags": [
      "乡村",
      "复仇",
      "家族秘密",
      "时间跨度"
    ],
    "oneLine": "三代人守护的葡萄园，在收获季挖出了一具不该存在的骸骨。",
    "cover": "./130.jpg",
    "url": "./video-1930.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1931",
    "title": "我为楼狂",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "都市 / 职场 / 黑色喜剧",
    "tags": [
      "房地产",
      "乙方逆袭",
      "全员恶人"
    ],
    "oneLine": "老实巴交的建筑设计师被黑心开发商逼疯后，用图纸上的违规结构，将整栋烂尾楼变成一座完美的“陷阱迷宫”。",
    "cover": "./131.jpg",
    "url": "./video-1931.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1932",
    "title": "如何孤独终老",
    "region": "英国",
    "type": "电视剧",
    "year": "2024",
    "genre": "剧情 / 喜剧",
    "tags": [
      "独身主义",
      "社恐",
      "黑色幽默",
      "治愈"
    ],
    "oneLine": "一个坚信“人类是病毒”的深度社恐，为了继承姑妈的豪宅，必须在一年内向所有人证明“我一个人也能过得非常好”。",
    "cover": "./132.jpg",
    "url": "./video-1932.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1933",
    "title": "阴儿房第3章：从灵开始",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "恐怖，惊悚，超自然",
    "tags": [
      "灵魂出窍",
      "暗影领域",
      "招魂宇宙",
      "家庭诅咒"
    ],
    "oneLine": "少女在通灵课上召唤母亲亡魂，却意外打开了通往“灵界”深处的大门。",
    "cover": "./133.jpg",
    "url": "./video-1933.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1934",
    "title": "咏晴",
    "region": "中国台湾",
    "type": "剧集",
    "year": "2025",
    "genre": "奇幻悬疑",
    "tags": [
      "双胞胎",
      "身份互换",
      "校园霸凌",
      "复仇",
      "扭曲亲情"
    ],
    "oneLine": "沉默的姐姐为死去的妹妹复仇，却逐渐发现自己才是妹妹，而死去的才是姐姐。",
    "cover": "./134.jpg",
    "url": "./video-1934.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1935",
    "title": "入土未为安",
    "region": "泰国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 民俗 / 悬疑",
    "tags": [
      "葬礼禁忌",
      "尸变",
      "东南亚巫蛊",
      "家族诅咒"
    ],
    "oneLine": "奶奶下葬时犯了一个禁忌，七天后她爬出棺材，不是复活，是“补罪”。",
    "cover": "./135.jpg",
    "url": "./video-1935.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1936",
    "title": "号角震天",
    "region": "英国",
    "type": "电影",
    "year": "1964",
    "genre": "战争， 历史， 剧情",
    "tags": [
      "一战",
      "贵族",
      "骑兵",
      "悲壮"
    ],
    "oneLine": "一战爆发，英国骑兵团的贵族少爷们骑马冲锋，却发现对面的德军机枪，一秒钟能射六百发。",
    "cover": "./136.jpg",
    "url": "./video-1936.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1937",
    "title": "阴暗家族",
    "region": "西班牙",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 惊悚",
    "tags": [
      "豪门",
      "遗产",
      "秘密",
      "哥特"
    ],
    "oneLine": "一座与世隔绝的庄园里，富商宣布将遗产分给仇人，当晚便离奇死去，所有宾客都有嫌疑。",
    "cover": "./137.jpg",
    "url": "./video-1937.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1938",
    "title": "爱尔兰之路",
    "region": "爱尔兰/英国",
    "type": "电影",
    "year": "2017",
    "genre": "剧情/历史",
    "tags": [
      "移民",
      "爱尔兰大饥荒",
      "海上悲剧",
      "家族"
    ],
    "oneLine": "1847年，一艘载满饥民的棺材船驶向美国，船上唯一的医生发现，有人在喂大家吃砒霜。",
    "cover": "./138.jpg",
    "url": "./video-1938.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1939",
    "title": "猛虎出笼",
    "region": "中国大陆 / 泰国",
    "type": "电影",
    "year": "2024",
    "genre": "动作 / 犯罪",
    "tags": [
      "越狱",
      "格斗",
      "跨国",
      "复仇",
      "硬核"
    ],
    "oneLine": "一个被诬陷入狱的前特种兵，必须在72小时内逃出曼谷最森严的黑狱。",
    "cover": "./139.jpg",
    "url": "./video-1939.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1940",
    "title": "亚瑟的奇幻王国：跨界对决",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "动画 / 奇幻 / 冒险",
    "tags": [
      "合家欢",
      "法国动画",
      "迷你王国",
      "科幻",
      "穿越"
    ],
    "oneLine": "迷你墨王国的小英雄亚瑟，为了拯救家园，竟穿越到了人类现实世界的电竞游戏里。",
    "cover": "./140.jpg",
    "url": "./video-1940.html",
    "regionGroup": "western",
    "typeGroup": "anime"
  },
  {
    "id": "1941",
    "title": "玛格丽特",
    "region": "法国",
    "type": "电影",
    "year": "2027",
    "genre": "剧情, 音乐",
    "tags": [
      "女权",
      "歌剧",
      "谎言",
      "觉醒",
      "悲喜剧"
    ],
    "oneLine": "一位毫无唱歌天赋的贵族夫人，在丈夫和仆人的谎言中举办了一场盛大的个人独唱会，直到毒舌乐评人撕破了这个童话。",
    "cover": "./141.jpg",
    "url": "./video-1941.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1942",
    "title": "各取所需",
    "region": "法国",
    "type": "电影",
    "year": "2023",
    "genre": "爱情，喜剧，伦理",
    "tags": [
      "开放关系",
      "交换伴侣",
      "度假别墅",
      "中产危机",
      "欲望游戏"
    ],
    "oneLine": "两对中产夫妇在海边度假时玩起“交换伴侣”游戏，却发现每个人的“所需”远比想象中更黑暗。",
    "cover": "./142.jpg",
    "url": "./video-1942.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1943",
    "title": "玩命追逐",
    "region": "中国大陆",
    "type": "电影",
    "year": "2026",
    "genre": "动作 / 赛车 / 犯罪",
    "tags": [
      "地下赛车",
      "亡命鸳鸯",
      "高燃飙车"
    ],
    "oneLine": "为了还清巨债，顶级车手被迫为黑帮运送神秘货物，却发现自己车上绑着即将生产的仇人之女。",
    "cover": "./143.jpg",
    "url": "./video-1943.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1944",
    "title": "酒后开车",
    "region": "中国大陆",
    "type": "电影",
    "year": "2024",
    "genre": "剧情 / 犯罪 / 社会",
    "tags": [
      "酒驾",
      "救赎",
      "车祸",
      "底层人生",
      "一夜崩塌"
    ],
    "oneLine": "一顿酒局后的侥幸上路，让两个家庭的人生彻底失控。",
    "cover": "./144.jpg",
    "url": "./video-1944.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1945",
    "title": "猴子奇缘",
    "region": "中国大陆 / 泰国",
    "type": "电影",
    "year": "2023",
    "genre": "剧情 / 家庭 / 动物",
    "tags": [
      "真实事件改编",
      "灵长类",
      "温情",
      "环保",
      "治愈"
    ],
    "oneLine": "一个自闭症男孩与一只被马戏团抛弃的猴子，在云南雨林里共同学会了说话。",
    "cover": "./145.jpg",
    "url": "./video-1945.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1946",
    "title": "隔山有眼",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "悬疑, 犯罪",
    "tags": [
      "盲人侦探",
      "逆向推理",
      "山村迷案"
    ],
    "oneLine": "一个在城市因医疗事故失明后退居山村的前刑警，靠听觉和逻辑破了三桩案子，却在第四桩里发现，凶手一直在帮他破案。",
    "cover": "./146.jpg",
    "url": "./video-1946.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1947",
    "title": "修女也疯狂2",
    "region": "美国",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧 / 音乐 / 家庭",
    "tags": [
      "修道院",
      "合唱团",
      "身份错位",
      "爆笑反差"
    ],
    "oneLine": "为了躲避黑帮追杀，拉斯维加斯夜总会歌星再次躲进修道院，这次她要把唱诗班带上赌场舞台。",
    "cover": "./147.jpg",
    "url": "./video-1947.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1948",
    "title": "双面生活",
    "region": "法国",
    "type": "剧集",
    "year": "2026",
    "genre": "剧情 / 悬疑 / 心理",
    "tags": [
      "人格分裂",
      "法官",
      "巴黎",
      "记忆",
      "身份"
    ],
    "oneLine": "巴黎一名受人尊敬的法官白天审案，晚上却以另一重身份混迹地下拳场，直到他审理的一起谋杀案的死者，正是昨晚的对手。",
    "cover": "./148.jpg",
    "url": "./video-1948.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1949",
    "title": "巫术面具",
    "region": "尼日利亚 / 美国",
    "type": "电影",
    "year": "2026",
    "genre": "恐怖 / 悬疑 / 民俗",
    "tags": [
      "非洲巫毒",
      "祖灵崇拜",
      "连环诅咒",
      "面具杀人魔",
      "考古惊悚"
    ],
    "oneLine": "每一任戴上远古面具的族长都死于非命，而我是下一任。",
    "cover": "./149.jpg",
    "url": "./video-1949.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1950",
    "title": "滴血玫瑰",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "悬疑 / 爱情 / 民国",
    "tags": [
      "民国",
      "凶宅",
      "复仇",
      "双面女主"
    ],
    "oneLine": "1925年上海，一座闹鬼的洋房里每十年就死一个女人，而今年，新搬来的女主人就是二十年前第一个死者的女儿。",
    "cover": "./150.jpg",
    "url": "./video-1950.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1951",
    "title": "杀出银河系",
    "region": "美国",
    "type": "电影",
    "year": "2026",
    "genre": "科幻 / 动作 / 惊悚",
    "tags": [
      "太空逃杀",
      "AI叛变",
      "硬核机甲",
      "绝境求生"
    ],
    "oneLine": "一支采矿小队在外星系遭遇失控AI军团，必须在48小时内杀穿整个银河防线。",
    "cover": "./1.jpg",
    "url": "./video-1951.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1952",
    "title": "舒马赫",
    "region": "德国",
    "type": "纪录片",
    "year": "2021",
    "genre": "传记，运动，记录",
    "tags": [
      "F1",
      "车王",
      "家庭",
      "伤病",
      "辉煌之路"
    ],
    "oneLine": "从卡丁车少年到七冠王，本片首次公开车王舒马赫滑雪事故前的私人影像。",
    "cover": "./2.jpg",
    "url": "./video-1952.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1953",
    "title": "周末魇狂热",
    "region": "意大利",
    "type": "电影",
    "year": "2022",
    "genre": "惊悚, 剧情, 恐怖",
    "tags": [
      "度假",
      "邪教",
      "反转",
      "血腥",
      "心理"
    ],
    "oneLine": "四个朋友去地中海小岛过周末狂欢，却发现岛上的居民正在准备一场以“游客”为祭品的古老仪式。",
    "cover": "./3.jpg",
    "url": "./video-1953.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1954",
    "title": "猎爱高手",
    "region": "韩国",
    "type": "电视剧",
    "year": "2024",
    "genre": "爱情, 喜剧, 职场",
    "tags": [
      "律师",
      "离婚",
      "契约恋爱",
      "韩式浪漫",
      "欢喜冤家"
    ],
    "oneLine": "专门帮人打离婚官司的女律师，为了抢一笔遗产案，假装和对手律所的王牌谈恋爱。",
    "cover": "./4.jpg",
    "url": "./video-1954.html",
    "regionGroup": "asia",
    "typeGroup": "series"
  },
  {
    "id": "1955",
    "title": "正面背后",
    "region": "美国",
    "type": "剧集",
    "year": "2025",
    "genre": "喜剧 / 职场 / 剧情",
    "tags": [
      "媒体讽刺",
      "网红经济",
      "公关危机",
      "双面人生"
    ],
    "oneLine": "美国最受欢迎的正能量女主播，在镜头外其实是一个满口脏话、操控黑粉网暴对手的幕后黑手。",
    "cover": "./5.jpg",
    "url": "./video-1955.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1956",
    "title": "枪械师",
    "region": "中国大陆",
    "type": "电影",
    "year": "2023",
    "genre": "动作, 剧情, 犯罪",
    "tags": [
      "硬汉",
      "复仇",
      "地下世界",
      "改装枪",
      "肉搏"
    ],
    "oneLine": "低调的枪械改装师被迫重出江湖，因为他发现杀害自己师傅的子弹，竟然出自自己的手笔。",
    "cover": "./6.jpg",
    "url": "./video-1956.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1957",
    "title": "忽必烈",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "历史, 战争",
    "tags": [
      "草原帝国",
      "权谋",
      "考古",
      "冷兵器"
    ],
    "oneLine": "年轻的忽必烈在汗位争夺战中，获得了一部来自未来的《蒙古秘史》残页，命运的诅咒从此开启。",
    "cover": "./7.jpg",
    "url": "./video-1957.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1958",
    "title": "七月十四日",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "恐怖 / 民俗 / 悬疑",
    "tags": [
      "鬼节",
      "烧纸",
      "都市传说",
      "因果"
    ],
    "oneLine": "每年七月十四，她都会在同一个十字路口烧纸，直到今年，纸灰拼出了一张活人的脸。",
    "cover": "./8.jpg",
    "url": "./video-1958.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1959",
    "title": "色情酒店",
    "region": "加拿大",
    "type": "电影",
    "year": "1988",
    "genre": "剧情，悬疑",
    "tags": [
      "欲望",
      "窥视",
      "酒店",
      "秘密",
      "心理"
    ],
    "oneLine": "一位私家侦探在一家情人酒店长期蹲点时，发现自己监视的出轨女人与被监视的丈夫之间，藏着连环杀人案。",
    "cover": "./9.jpg",
    "url": "./video-1959.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1960",
    "title": "傀儡姬·彼岸花",
    "region": "中国大陆",
    "type": "网络电影",
    "year": "2021",
    "genre": "古装, 奇幻, 爱情",
    "tags": [
      "傀儡术",
      "替身",
      "虐恋",
      "国风"
    ],
    "oneLine": "相府千金被许配给敌国世子，大婚前夜她造了一个和自己一模一样的傀儡替嫁，傀儡却真的爱上了世子。",
    "cover": "./10.jpg",
    "url": "./video-1960.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1961",
    "title": "冬荫铁娘子",
    "region": "泰国",
    "type": "电影",
    "year": "2023",
    "genre": "动作 / 喜剧 / 运动",
    "tags": [
      "泰拳",
      "女子",
      "小贩",
      "逆袭"
    ],
    "oneLine": "夜市卖冬荫功汤的大婶为了保住摊位，报名参加泰拳比赛，用炒菜勺和酸辣汤的哲学打得壮汉们满地找牙。",
    "cover": "./11.jpg",
    "url": "./video-1961.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1962",
    "title": "血之海滩",
    "region": "泰国",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖 / 悬疑",
    "tags": [
      "海岛",
      "邪教",
      "献祭",
      "密室逃脱"
    ],
    "oneLine": "网红们登上传说中被诅咒的“血滩”，发现潮汐每涨一次，就死一个人。",
    "cover": "./12.jpg",
    "url": "./video-1962.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1963",
    "title": "誓言永恒",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2018",
    "genre": "剧情 / 年代",
    "tags": [
      "抗战",
      "兄弟情",
      "卧底"
    ],
    "oneLine": "一对结拜兄弟在抗战时期走上不同道路，一句誓言支撑了他们整整四十年。",
    "cover": "./13.jpg",
    "url": "./video-1963.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1964",
    "title": "风流何价",
    "region": "中国香港",
    "type": "电影",
    "year": "1989",
    "genre": "剧情，爱情，伦理",
    "tags": [
      "情欲",
      "金钱",
      "契约婚姻",
      "人性"
    ],
    "oneLine": "拜金女嫁给了癌症富豪，以为自己稳操胜券，却不知丈夫的秘密情人就在她身边。",
    "cover": "./14.jpg",
    "url": "./video-1964.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1965",
    "title": "校花的贴身高手4",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2023",
    "genre": "爱情, 动作, 奇幻",
    "tags": [
      "校园",
      "修真",
      "保镖",
      "爽文",
      "恋爱"
    ],
    "oneLine": "修真界最强兵王回归都市，任务竟然是伪装成高中生保护那个命中克他的校花。",
    "cover": "./15.jpg",
    "url": "./video-1965.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1966",
    "title": "新闻女人",
    "region": "美国",
    "type": "剧集",
    "year": "2020",
    "genre": "剧情 / 职场",
    "tags": [
      "媒体行业",
      "性别歧视",
      "新闻伦理"
    ],
    "oneLine": "1980年代纽约一间新闻编辑室里，第一个女性晚间新闻制片人如何用高跟鞋踩碎玻璃天花板。",
    "cover": "./16.jpg",
    "url": "./video-1966.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1967",
    "title": "对战美洲狮",
    "region": "加拿大",
    "type": "电影",
    "year": "2024",
    "genre": "惊悚, 冒险",
    "tags": [
      "荒野求生",
      "猛兽",
      "女性",
      "生存"
    ],
    "oneLine": "退役女狙击手带女儿露营遭美洲狮群围困，她必须在弹尽粮绝前用战术知识绝境求生。",
    "cover": "./17.jpg",
    "url": "./video-1967.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1968",
    "title": "七魔剑支配天下",
    "region": "日本",
    "type": "TV动画",
    "year": "2023",
    "genre": "奇幻，校园，战斗",
    "tags": [
      "魔法学院",
      "复仇",
      "暗黑幻想"
    ],
    "oneLine": "在金伯利魔法学校，新生奥利佛伪装成平庸学生，暗中收集七柄足以弑神的魔剑，目标直指校长。",
    "cover": "./18.jpg",
    "url": "./video-1968.html",
    "regionGroup": "asia",
    "typeGroup": "anime"
  },
  {
    "id": "1969",
    "title": "柜魔",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "恐怖，惊悚",
    "tags": [
      "斯蒂芬·金",
      "心理恐惧",
      "家庭创伤"
    ],
    "oneLine": "一个失去母亲的心理治疗师和他的两个女儿，发现孩子们害怕的“柜中怪兽”并非幻觉。",
    "cover": "./19.jpg",
    "url": "./video-1969.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1970",
    "title": "大海之火",
    "region": "日本",
    "type": "电影",
    "year": "2021",
    "genre": "灾难 / 剧情",
    "tags": [
      "311地震",
      "海啸",
      "渔村",
      "幸存者",
      "集体记忆"
    ],
    "oneLine": "311海啸十年后，一个渔村的幸存者们在每年点燃篝火祭奠亡魂时，发现海面上出现了一排新的火光。",
    "cover": "./20.jpg",
    "url": "./video-1970.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1971",
    "title": "堕落的偶像",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "genre": "剧情 / 心理",
    "tags": [
      "网红崩塌",
      "网络暴力",
      "人设瓦解",
      "直播"
    ],
    "oneLine": "坐拥千万粉丝的公益人设网红，在一夜直播中被扒出所有谎言。",
    "cover": "./21.jpg",
    "url": "./video-1971.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1972",
    "title": "肮脏的心",
    "region": "德国",
    "type": "电影",
    "year": "2009",
    "genre": "剧情 / 惊悚",
    "tags": [
      "心理扭曲",
      "器官买卖",
      "黑色电影",
      "道德深渊",
      "压抑"
    ],
    "oneLine": "他是全城最顶尖的心脏外科医生，但他的手术台上没有自愿的病人。",
    "cover": "./22.jpg",
    "url": "./video-1972.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1973",
    "title": "魔屋幻象",
    "region": "英国",
    "type": "电影",
    "year": "2021",
    "genre": "恐怖, 心理, 奇幻",
    "tags": [
      "鬼屋",
      "幻觉",
      "悲伤",
      "循环",
      "迷宫"
    ],
    "oneLine": "一位丧女的建筑师搬进老宅后，发现房子每天凌晨都会自动改变内部构造，逼迫他直面心魔。",
    "cover": "./23.jpg",
    "url": "./video-1973.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1974",
    "title": "银河系守卫",
    "region": "美国",
    "type": "电影",
    "year": "2027",
    "genre": "动作 / 科幻 / 冒险",
    "tags": [
      "太空歌剧",
      "反英雄",
      "视觉特效"
    ],
    "oneLine": "七个被流放的宇宙重刑犯发现，银河帝国用来威慑罪犯的超级武器，唯一的启动密码就藏在他们体内。",
    "cover": "./24.jpg",
    "url": "./video-1974.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1975",
    "title": "世界属于你",
    "region": "法国",
    "type": "电影",
    "year": "2018",
    "genre": "犯罪，喜剧",
    "tags": [
      "黑色幽默",
      "劫匪",
      "母子关系",
      "荒诞"
    ],
    "oneLine": "一个想金盆洗手的毒贩小弟，被自己瘾君子老妈和一群猪队友彻底坑惨。",
    "cover": "./25.jpg",
    "url": "./video-1975.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1976",
    "title": "设计",
    "region": "中国香港",
    "type": "电影",
    "year": "1978",
    "genre": "犯罪 / 惊悚",
    "tags": [
      "谋杀",
      "诡计",
      "高智商",
      "反转",
      "邵氏"
    ],
    "oneLine": "一个完美谋杀案的设计师，把所有步骤都算好了，唯独没算到自己会成为猎物。",
    "cover": "./26.jpg",
    "url": "./video-1976.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1977",
    "title": "降妖伏魔之定海神针",
    "region": "中国大陆",
    "type": "电影",
    "year": "2025",
    "genre": "奇幻 / 动作 / 神话",
    "tags": [
      "西游记衍生",
      "孙悟空",
      "法宝",
      "喜剧",
      "视觉特效"
    ],
    "oneLine": "金箍棒被盗，孙悟空失去法力，却意外发现偷棒者是自己五百年前的救命恩人。",
    "cover": "./27.jpg",
    "url": "./video-1977.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1978",
    "title": "纳粹暴行",
    "region": "波兰/德国",
    "type": "电影",
    "year": "2024",
    "genre": "战争/历史",
    "tags": [
      "集中营",
      "人性拷问",
      "纪实风格",
      "残酷美学"
    ],
    "oneLine": "镜头跟随一名初到奥斯维辛的纳粹医生，记录他从一个救死扶伤的天使，堕落成在活人身上进行绝育实验的恶魔的过程。",
    "cover": "./28.jpg",
    "url": "./video-1978.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1979",
    "title": "大海啸之鲨口逃生",
    "region": "澳大利亚",
    "type": "电影",
    "year": "2025",
    "genre": "灾难/惊悚/动作",
    "tags": [
      "海啸",
      "鲨鱼袭击",
      "超市废墟",
      "水下逃生"
    ],
    "oneLine": "巨型海啸将一家超市吞没，幸存者被困在淹没的楼层里，而数条大白鲨也游了进来。",
    "cover": "./29.jpg",
    "url": "./video-1979.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1980",
    "title": "会员请回答",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "悬疑， 科幻， 惊悚",
    "tags": [
      "密室逃脱",
      "人工智能",
      "人性实验"
    ],
    "oneLine": "八位身份各异的陌生人被邀请参加一档高额奖金的直播答题节目，却发现自己答错的每一道题，都有人在现实中死亡。",
    "cover": "./30.jpg",
    "url": "./video-1980.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1981",
    "title": "心动的信号 第六季",
    "region": "中国",
    "type": "综艺",
    "year": "2025",
    "genre": "真人秀，恋爱",
    "tags": [
      "素人恋爱",
      "观察推理",
      "科技介入"
    ],
    "oneLine": "本季引入“AI 红娘”算法匹配恋人，却意外算出所有心动连线都是错误的悲剧结局。",
    "cover": "./31.jpg",
    "url": "./video-1981.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1982",
    "title": "前任酒吧战！",
    "region": "韩国",
    "type": "电影",
    "year": "2020",
    "genre": "喜剧，爱情",
    "tags": [
      "前任",
      "酒吧",
      "酒后乱斗"
    ],
    "oneLine": "深夜酒吧里，三对分手情侣同时撞见对方，酒瓶还没打开，旧账新仇已经满天飞。",
    "cover": "./32.jpg",
    "url": "./video-1982.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1983",
    "title": "人皮客栈2",
    "region": "美国",
    "type": "电影",
    "year": "2007",
    "genre": "恐怖 / 惊悚",
    "tags": [
      "虐杀",
      "东欧",
      "血腥",
      "绝望"
    ],
    "oneLine": "三名美国女学生被诱骗至斯洛伐克旅馆，发现出价最高者可以亲手处决被囚禁的旅客。",
    "cover": "./33.jpg",
    "url": "./video-1983.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1984",
    "title": "完美姐妹",
    "region": "西班牙",
    "type": "电影",
    "year": "2023",
    "genre": "悬疑, 惊悚, 剧情",
    "tags": [
      "双胞胎",
      "替代",
      "精神病院"
    ],
    "oneLine": "姐姐住进精神病院后，妹妹发现病房里的姐姐与自己记忆中的性格完全相反，像被替换过。",
    "cover": "./34.jpg",
    "url": "./video-1984.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1985",
    "title": "县厅招待课",
    "region": "日本",
    "type": "电影",
    "year": "2013",
    "genre": "剧情， 喜剧， 职场",
    "tags": [
      "公务员",
      "旅游业",
      "地方振兴",
      "热血"
    ],
    "oneLine": "县政府“最没用科室”招待课接到死命令：三个月内让本地游客数翻倍，否则全员裁员。",
    "cover": "./35.jpg",
    "url": "./video-1985.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1986",
    "title": "敌对分子",
    "region": "美国",
    "type": "电视剧",
    "year": "2025",
    "genre": "剧情 / 犯罪 / 政治",
    "tags": [
      "律政",
      "双雄对决",
      "网络舆论战"
    ],
    "oneLine": "一个遵循“程序正义”的检察官与一个信奉“结果正义”的黑客，共同追查操纵总统选举的暗网势力。",
    "cover": "./36.jpg",
    "url": "./video-1986.html",
    "regionGroup": "western",
    "typeGroup": "series"
  },
  {
    "id": "1987",
    "title": "圣诞天籁",
    "region": "英国",
    "type": "电影",
    "year": "2022",
    "genre": "家庭 / 音乐",
    "tags": [
      "圣诞节",
      "唱诗班",
      "治愈"
    ],
    "oneLine": "一个破产的过气歌手，为了钱回到破败的家乡教堂，却重新唱哭了整个小镇。",
    "cover": "./37.jpg",
    "url": "./video-1987.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1988",
    "title": "米芝莲摘星奇缘",
    "region": "中国香港",
    "type": "剧集",
    "year": "2026",
    "genre": "美食爱情",
    "tags": [
      "米其林",
      "厨艺对决",
      "霸总恋爱",
      "美食镜头"
    ],
    "oneLine": "天才女厨师为了保住父亲的大排档，竟伪装成男人去米其林三星餐厅当卧底，却和主厨产生了暧昧。",
    "cover": "./38.jpg",
    "url": "./video-1988.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1989",
    "title": "四面三角",
    "region": "中国香港",
    "type": "电影",
    "year": "2024",
    "genre": "悬疑 / 犯罪",
    "tags": [
      "心理战",
      "密室",
      "背叛",
      "反转",
      "烧脑"
    ],
    "oneLine": "四个陌生人困在密室，每人额头贴着数字，只有数字最大者能活，但他们不知道自己的数字。",
    "cover": "./39.jpg",
    "url": "./video-1989.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1990",
    "title": "鬼狗杀手",
    "region": "美国",
    "type": "电影",
    "year": "2024",
    "genre": "动作, 犯罪, 剧情",
    "tags": [
      "杀手",
      "黑人武士",
      "忠诚",
      "孤独",
      "暴力美学"
    ],
    "oneLine": "一名独来独往的杀手遵循武士道，直到帮派背叛他养的一条流浪狗。",
    "cover": "./40.jpg",
    "url": "./video-1990.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1991",
    "title": "迷航昆仑墟：异生",
    "region": "中国大陆",
    "type": "电视剧",
    "year": "2026",
    "genre": "冒险, 悬疑, 奇幻",
    "tags": [
      "盗墓",
      "基因突变",
      "神话新说",
      "特效"
    ],
    "oneLine": "昆仑墟深处发现神秘孢子，吸食后人类基因发生不可控“异生”。",
    "cover": "./41.jpg",
    "url": "./video-1991.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1992",
    "title": "我的朋友",
    "region": "中国大陆",
    "type": "电影",
    "year": "2021",
    "genre": "剧情 / 家庭",
    "tags": [
      "自闭症",
      "友谊",
      "治愈",
      "宠物"
    ],
    "oneLine": "一个自闭症男孩，和一只同样被遗弃的狗，如何成为彼此唯一的朋友。",
    "cover": "./42.jpg",
    "url": "./video-1992.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1993",
    "title": "屈原1977",
    "region": "中国大陆",
    "type": "电影",
    "year": "1977",
    "genre": "历史 / 传记",
    "tags": [
      "古典",
      "爱国",
      "悲剧"
    ],
    "oneLine": "伟大诗人屈原的政治理想与个人命运在楚国黄昏中交织成一曲悲壮的离骚。",
    "cover": "./43.jpg",
    "url": "./video-1993.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  },
  {
    "id": "1994",
    "title": "伯特·斯特恩：原本狂人",
    "region": "美国",
    "type": "电影",
    "year": "2023",
    "genre": "纪录片 / 传记",
    "tags": [
      "时尚摄影",
      "怪才传奇",
      "名流幕后"
    ],
    "oneLine": "他是玛丽莲·梦露最后照片的掌镜人，也是一个终身与全世界为敌的毒舌“狂人”。",
    "cover": "./44.jpg",
    "url": "./video-1994.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1995",
    "title": "艺伎回忆录",
    "region": "美国/日本",
    "type": "电影",
    "year": "2026",
    "genre": "剧情，爱情，历史",
    "tags": [
      "艺伎",
      "京都",
      "二战",
      "女性",
      "命运"
    ],
    "oneLine": "一个渔村女孩历经磨难成为京都最著名艺伎，却在二战炮火中为了真爱烧毁了象征着束缚的置屋。",
    "cover": "./45.jpg",
    "url": "./video-1995.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1996",
    "title": "全世界最好的你",
    "region": "中国大陆",
    "type": "剧集",
    "year": "2024",
    "genre": "爱情 / 青春",
    "tags": [
      "双向暗恋 / 校园到职场 / 治愈甜宠"
    ],
    "oneLine": "高中同桌打了七年赌约“谁先表白谁就输”，结果两人联手把暧昧玩成了终身事业。",
    "cover": "./46.jpg",
    "url": "./video-1996.html",
    "regionGroup": "domestic",
    "typeGroup": "series"
  },
  {
    "id": "1997",
    "title": "社会学家和小熊",
    "region": "俄罗斯",
    "type": "电影",
    "year": "2025",
    "genre": "喜剧, 剧情, 冒险",
    "tags": [
      "公路",
      "荒诞",
      "人与自然",
      "政治隐喻"
    ],
    "oneLine": "一个古板的社会学家被指派护送一只马戏团小熊穿越西伯利亚，一路上却遇到了比野兽更可怕的人类。",
    "cover": "./47.jpg",
    "url": "./video-1997.html",
    "regionGroup": "western",
    "typeGroup": "movie"
  },
  {
    "id": "1998",
    "title": "大决战！超咸蛋超人8兄弟",
    "region": "日本",
    "type": "电影",
    "year": "2026",
    "genre": "特摄, 动作, 科幻",
    "tags": [
      "超英集结",
      "平行宇宙",
      "巨大化战斗",
      "情怀杀"
    ],
    "oneLine": "八个平行宇宙的咸蛋超人因一颗巨型咸蛋状陨石齐聚东京，却发现敌人是自己的中年社畜分身。",
    "cover": "./48.jpg",
    "url": "./video-1998.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "1999",
    "title": "小妞死翘翘",
    "region": "韩国",
    "type": "电影",
    "year": "2024",
    "genre": "黑色喜剧",
    "tags": [
      "复仇",
      "霸凌",
      "直播"
    ],
    "oneLine": "被校园霸凌的女孩假装跳楼直播，结果真摔死了，七天后她的SNS账号开始自动更新，每发一条就死一个霸凌者。",
    "cover": "./49.jpg",
    "url": "./video-1999.html",
    "regionGroup": "asia",
    "typeGroup": "movie"
  },
  {
    "id": "2000",
    "title": "霍家拳之铁臂娇娃2",
    "region": "中国大陆",
    "type": "电影",
    "year": "2020",
    "genre": "动作，武侠",
    "tags": [
      "民国",
      "女性功夫",
      "机甲",
      "爽片"
    ],
    "oneLine": "继承霍家铁臂的少女阿娇，这次要对抗的不只是军阀，还有来自海外的机械改造人。",
    "cover": "./50.jpg",
    "url": "./video-2000.html",
    "regionGroup": "domestic",
    "typeGroup": "movie"
  }
];
