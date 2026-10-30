'use strict';
/* ---------- 界面文案（全中文） ---------- */
const UI={
 home:'主屏幕',now:'现在',swipeUp:'上滑以解锁',enterPass:'输入密码',emergency:'紧急',cancel:'取消',delete:'删除',
 app_maps:'地图',app_instagram:'Instagram',app_photos:'照片',app_mail:'邮件',app_calendar:'日历',app_clock:'时钟',
 app_notes:'备忘录',app_weather:'天气',app_settings:'设置',app_phone:'电话',app_safari:'Safari',app_wechat:'微信',app_music:'音乐',app_tetris:'俄罗斯方块',
 allDay:'全天',beijing:'北京',mostlySunny:'多云转晴',hiLo:'最高21° 最低9°',search:'搜索',folders:'文件夹',pinned:'置顶',notesSec:'备忘录',
 nNotes:'{0} 个备忘录',yesterday:'昨天',noEvents:'无事件',today:'今天',calendars:'日历',inbox:'收件箱',edit:'编辑',
 alarm:'闹钟',alarmLabel:'闹钟',sleepWake:'就寝 | 起床',noAlarm:'无闹钟',setUp:'设置',other:'其他',worldClock:'世界时钟',stopwatch:'秒表',timer:'计时器',
 all:'全部',missed:'未接',recents:'最近通话',mobile:'手机',favorites:'个人收藏',contacts:'通讯录',keypad:'键盘',voicemail:'语音信箱',
 chats:'微信',friends:'通讯录',discover:'发现',me:'我',photo:'[图片]',voiceMsg:'[语音]',
 searchWeb:'搜索或输入网站名称',recentSearches:'最近搜索',clear:'清除',privacyReport:'隐私报告',
 mailboxes:'邮箱',updatedNow:'刚刚更新',toMe:'收件人：我 ›',
 library:'图库',select:'选择',nPhotos:'{0} 张照片',years:'年',months:'月',allPhotos:'所有照片',
 posts:'帖子',followers:'粉丝',following:'关注',followingBtn:'正在关注 ˅',message:'发消息',
 songs:'歌曲',play:'播放',shuffle:'随机播放',listenNow:'立即收听',browse:'浏览',radio:'电台',
 currentLoc:'当前位置',walkMin:'步行 {0} 分钟',favorite:'收藏',share:'分享',moreInfo:'更多信息',info:'信息',noInfo:'无更多信息',searchMaps:'搜索地图',recentsMap:'最近查看',add:'添加',
 wxSummary:'预计今天下午以晴为主。阵风风速最高 4 米/秒。',tenDay:'10 天天气预报',uv:'紫外线指数',moderate:'中等',sunset:'日落',sunrise:'日出',
 acct:'Apple 账户、iCloud、媒体与购买项目',airplane:'飞行模式',on:'打开',cellular:'蜂窝网络',battery:'电池',general:'通用',access:'辅助功能',camera:'相机',
 wallpaper:'墙纸',notif:'通知',sound:'声音与触感',focus:'专注模式',screenTime:'屏幕使用时间',faceid:'面容 ID 与密码',privacy:'隐私与安全性',
 dailyAvg:'日均',hm:'{0} 小时 {1} 分钟',mOnly:'{0} 分钟',upPct:'较上周上升 {0}%',mostUsed:'最常使用',pickups:'拿起次数',firstPickup:'首次拿起',avgPickups:'日均',firstUsed:'拿起后首次使用',
 remind:'提醒我',message2:'信息',decline:'拒绝',accept:'接听',speaker:'扬声器',mute:'静音',addCall:'添加通话',endCall:'结束',calling:'正在呼叫…',callEnded:'通话结束',
 noAnswer:'无人接听',missedCall:'未接来电',slideAnswer:'滑动来接听',reels:'Reels',back:'返回',done:'完成',close:'关闭',
 tetrisScore:'得分',tetrisLevel:'等级',tetrisLines:'消行',tetrisOver:'游戏结束',tetrisRestart:'再来一局',tetrisPause:'已暂停',
 igReelsTip:'轻点播放',likedBy:'❤ {0} 赞',origAudio:'♫ 原声',
};
function t(k,...a){let s=UI[k]||k;a.forEach((v,i)=>{s=s.split('{'+i+'}').join(v)});return s}

/* ---------- 日期时间 ---------- */
const LOCALE='zh-CN';
const _fc={};const _f=o=>{const k=JSON.stringify(o);return _fc[k]||(_fc[k]=new Intl.DateTimeFormat(LOCALE,o))};
const _d=(y,m,d,h=12,mi=0)=>new Date(y,m-1,d,h,mi);
const pad=n=>String(n).padStart(2,'0');
const NOW=new Date();
const TODAY={y:NOW.getFullYear(),m:NOW.getMonth()+1,d:NOW.getDate()};
function fmtTime(min){min=((Math.round(min)%1440)+1440)%1440;return _f({hour:'numeric',minute:'2-digit'}).format(_d(2026,10,17,Math.floor(min/60),min%60))}
const fmtFull=(y,m,d)=>_f({year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(_d(y,m,d));
const fmtYMD=(y,m,d)=>_f({year:'numeric',month:'long',day:'numeric'}).format(_d(y,m,d));
const fmtMD=(m,d)=>_f({month:'long',day:'numeric'}).format(_d(2026,m,d));
const fmtYM=(y,m)=>_f({year:'numeric',month:'long'}).format(_d(y,m,1));
const fmtMonth=m=>fmtYM(2026,m);
const fmtYear=y=>_f({year:'numeric'}).format(_d(y,6,1));
const fmtNum=(y,m,d)=>`${y}年${m}月${d}日`;
const wdLong=(y,m,d)=>_f({weekday:'long'}).format(_d(y,m,d));
const wdNarrow=()=>[1,2,3,4,5,6,0].map(i=>_f({weekday:'narrow'}).format(_d(2026,10,18+((i+6)%7))));
const fmtLockDate=()=>_f({month:'long',day:'numeric',weekday:'long'}).format(_d(TODAY.y,TODAY.m,TODAY.d));
const fmtHour=h=>_f({hour:'numeric'}).format(_d(2026,10,17,h,0));
function ampm(min){return fmtTime(min)}
function alarmParts(h,mi){const ps=_f({hour:'numeric',minute:'2-digit'}).formatToParts(_d(2026,10,17,h,mi));const di=ps.findIndex(p=>p.type==='dayPeriod');const dp=di>=0?ps[di].value:'';const tm=ps.filter(p=>p.type!=='dayPeriod').map(p=>p.value).join('').trim();const hi=ps.findIndex(p=>p.type==='hour');return{dp,tm,before:di>=0&&di<hi}}
function parseLabel(l){let m=l.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);if(m)return{y:+m[1],m:+m[2],d:+m[3]};return null}
function fmtLabel(l,full){if(l==='今天')return full?fmtFull(TODAY.y,TODAY.m,TODAY.d):t('today');if(l==='昨天')return t('yesterday');const p=parseLabel(l);if(!p)return l;if(p.y===TODAY.y&&p.m===TODAY.m&&p.d===TODAY.d)return full?fmtFull(p.y,p.m,p.d):t('today');if(full)return fmtFull(p.y,p.m,p.d);return p.y===TODAY.y?fmtMD(p.m,p.d):fmtYMD(p.y,p.m,p.d)}
/* 黑瞎子生日：每年 1 月 23 日，动态倒计时 */
function bdayCountdown(){const n=new Date();let y=n.getFullYear();const t=new Date(y,0,23,0,0,0);if(t.getTime()<n.getTime())y+=1;const target=new Date(y,0,23,0,0,0);const diff=Math.ceil((target-new Date(n.getFullYear(),n.getMonth(),n.getDate()))/864e5);return{days:diff,date:fmtMD(1,23),label:'小心火烛🎂'}}
