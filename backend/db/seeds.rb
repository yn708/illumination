# 既存のデータを削除
Author.destroy_all
FamousQuote.destroy_all

# 著者の作成
einstein = Author.create!(name: "アルベルト・アインシュタイン", birth_year: "1879", death_year: "1955", profession: "理論物理学者")
roosevelt = Author.create!(name: "エレノア・ルーズベルト", birth_year: "1884", death_year: "1962", profession: "ファーストレディ、人権活動家")
schweitzer = Author.create!(name: "アルバート・シュヴァイツァー", birth_year: "1875", death_year: "1965", profession: "神学者、哲学者、医者、オルガニスト、音楽学者")
gandhi = Author.create!(name: "マハトマ・ガンジー", birth_year: "1869", death_year: "1948", profession: "弁護士、宗教家、政治指導者")
franklin = Author.create!(name: "ベンジャミン・フランクリン", birth_year: "1706", death_year: "1790", profession: "政治家、外交官、科学者、発明家")
curie = Author.create!(name: "マリー・キュリー", birth_year: "1867", death_year: "1934", profession: "物理学者、化学者")
mandela = Author.create!(name: "ネルソン・マンデラ", birth_year: "1918", death_year: "2013", profession: "政治家、反アパルトヘイト革命家")
keller = Author.create!(name: "ヘレン・ケラー", birth_year: "1880", death_year: "1968", profession: "作家、政治活動家、講演者")
lincoln = Author.create!(name: "エイブラハム・リンカーン", birth_year: "1809", death_year: "1865", profession: "政治家、弁護士")
twain = Author.create!(name: "マーク・トウェイン", birth_year: "1835", death_year: "1910", profession: "作家、ユーモリスト")
caesar = Author.create!(name: "ユリウス・カエサル", birth_year: "紀元前100", death_year: "紀元前44", profession: "政治家、軍人、文筆家")
nietzsche = Author.create!(name: "フリードリヒ・ニーチェ", birth_year: "1844", death_year: "1900", profession: "哲学者")
frank = Author.create!(name: "アンネ・フランク", birth_year: "1929", death_year: "1945", profession: "ユダヤ系ドイツ人の少女")
goethe = Author.create!(name: "ヨハン・ヴォルフガング・フォン・ゲーテ", birth_year: "1749", death_year: "1832", profession: "詩人、劇作家、小説家")
seneca = Author.create!(name: "セネカ", birth_year: "紀元前1頃", death_year: "紀元後65", profession: "政治家、哲学者、詩人")
plato = Author.create!(name: "プラトン", birth_year: "紀元前427", death_year: "紀元前347", profession: "哲学者")
baudelaire = Author.create!(name: "シャルル・ボードレール", birth_year: "1821", death_year: "1867", profession: "詩人、評論家")
schopenhauer = Author.create!(name: "アルトゥル・ショーペンハウアー", birth_year: "1788", death_year: "1860", profession: "哲学者")
rodin = Author.create!(name: "オーギュスト・ロダン", birth_year: "1840", death_year: "1917", profession: "彫刻家")
ruskin = Author.create!(name: "ジョン・ラスキン", birth_year: "1819", death_year: "1900", profession: "美術評論家、社会思想家")
welty = Author.create!(name: "ユードラ・ウェルティ", birth_year: "1909", death_year: "2001", profession: "女性作家")
disney = Author.create!(name: "ウォルト・ディズニー", birth_year: "1901", death_year: "1966", profession: "米国のエンターテイナー、実業家")

original = Author.create!(name: "original")


# 名言の作成
# アルベルト・アインシュタイン
FamousQuote.create!(text: "想像力は知識よりも重要である。", quotable: einstein)
FamousQuote.create!(text: "常識とは18歳までに身につけた偏見のコレクションでしかない。", quotable: einstein)
FamousQuote.create!(text: "人の価値は、その人が得たものではなく、与えたもので決まる。", quotable: einstein)
FamousQuote.create!(text: "重要なのは、質問をすることをやめないことだ。", quotable: einstein)
FamousQuote.create!(text: "誰もが天才です。しかし、魚を木登りの能力で判断すれば、魚は一生自分が愚かだと思い込んでしまうでしょう。", quotable: einstein)

# エレノア・ルーズベルト
FamousQuote.create!(text: "あなたの心が正しいと思うことをしなさい。どっちにしたって批判されるのだから。", quotable: roosevelt)
FamousQuote.create!(text: "未来は美しい夢を信じる人のためにあります。", quotable: roosevelt)
FamousQuote.create!(text: "人生は生きることが大事なのです。いつも好奇心を持ち続けることです。どんな理由があっても決して人生に背を向けてはいけません。", quotable: roosevelt)
FamousQuote.create!(text: "どんな関係においても大切なことは、何を受け取ったかではなく、何を与えたかです。", quotable: roosevelt)
FamousQuote.create!(text: "自分にはできないかも知れないという恐れに真正面から立ち向かうたびに、あなたは強さと自信と経験を勝ち取るのです。だから、できないと思うことに挑戦してごらんなさい。", quotable: roosevelt)
FamousQuote.create!(text: "自分自身に負けない限り、それは敗北ではないのです。", quotable: roosevelt)
FamousQuote.create!(text: "人の生き方を一番よく表すのは、言葉ではありません。それは、その人の選択なのです。わたしたちの選択とは、つまるところ、わたしたちの責任なのです。", quotable: roosevelt)
FamousQuote.create!(text: "世界でもっとも不幸な人間というのは、せっかくの時間を何に使ったらよいかわからなくて、いたずらに一日を迎え一日を送る人間の事を指すのでしょう。", quotable: roosevelt)
FamousQuote.create!(text: "自分に対して素直になれない人は、世界中の誰に対しても素直になれない。", quotable: roosevelt)

# アルバート・シュヴァイツァー
FamousQuote.create!(text: "成功は幸福のカギではない。幸福が成功のカギなのだ。自分のやっていることを愛しているなら、きっと成功するだろう。", quotable: schweitzer)
FamousQuote.create!(text: "人生には心の避難所が2つある。音楽と猫である", quotable: schweitzer)
FamousQuote.create!(text: "認められるまでは、嘲笑される。これは真理の常である。", quotable: schweitzer)
FamousQuote.create!(text: "世界中どこであろうと、振り返ればあなたを必要とする人がいる。", quotable: schweitzer)

# マハトマ・ガンジー
FamousQuote.create!(text: "もし、過ちを犯す自由がないのならば、自由を持つ価値はない", quotable: gandhi)
FamousQuote.create!(text: "世界の変化を望むなら、あなた自身がその変化にならなければならない。", quotable: gandhi)
FamousQuote.create!(text: "弱さの中にこそ、力が宿る。", quotable: gandhi)
FamousQuote.create!(text: "自分の信念に従って生きる勇気を持つことが、本当の幸せだ。", quotable: gandhi)
FamousQuote.create!(text: "あなたの夢は何か、あなたが目的とするものは何か、それさえしっかり持っているならば、必ずや道は開かれるだろう。", quotable: gandhi)

# ベンジャミン・フランクリン
FamousQuote.create!(text: "時は金なり。", quotable: franklin)
FamousQuote.create!(text: "明日のことを言うのは愚かだ。今日を賢明に過ごしなさい。", quotable: franklin)
FamousQuote.create!(text: "自由を手に入れたいなら、人の奴隷になってはいけない。", quotable: franklin)

# マリー・キュリー
FamousQuote.create!(text: "人生に恐れるものは何もない。理解すべきものがあるだけだ。", quotable: curie)
FamousQuote.create!(text: "科学において道は一つではない。", quotable: curie)
FamousQuote.create!(text: "我々は皆、変化を恐れています。しかし、変化こそが人生です。", quotable: curie)

# ネルソン・マンデラ
FamousQuote.create!(text: "教育は、世界を変える最も強力な武器である。", quotable: mandela)
FamousQuote.create!(text: "勝者とは、立ち上がる回数が一番多い人のことだ。", quotable: mandela)
FamousQuote.create!(text: "自由とは、他人の自由を奪わないことである。", quotable: mandela)

# ヘレン・ケラー
FamousQuote.create!(text: "一人では何もできないが、みんなで力を合わせれば大きなことができる。", quotable: keller)
FamousQuote.create!(text: "人生は勇気ある冒険か、それとも何もないかのどちらかです。", quotable: keller)
FamousQuote.create!(text: "最も美しい世界は、心の中にある。", quotable: keller)

# エイブラハム・リンカーン
FamousQuote.create!(text: "私は遅くは歩くが、決して後戻りはしない。", quotable: lincoln)
FamousQuote.create!(text: "友を作る最善の方法は、自分が友となることだ。", quotable: lincoln)

# マーク・トウェイン
FamousQuote.create!(text: "20年後、あなたはやったことよりも、やらなかったことを後悔するだろう。", quotable: twain)
FamousQuote.create!(text: "正しいことをするのに適切な時期などない。今がその時だ。", quotable: twain)

# ユリウス・カエサル
FamousQuote.create!(text: "経験することはすべてにおける教師である。", quotable: caesar)

# フリードリヒ・ニーチェ
FamousQuote.create!(text: "目的を忘れてしまうこと。これは愚かな人間にもっともありがちなことだ。", quotable: nietzsche)

# アンネ・フランク
FamousQuote.create!(text: "思い出の方がドレスより大事。", quotable: frank)

# ヨハン・ヴォルフガング・フォン・ゲーテ
FamousQuote.create!(text: "人間は努力する限り過ちを犯すものだ。", quotable: goethe)

# セネカ
FamousQuote.create!(text: "あなたが生きていればいるほど、どうやって生きていくのか、学び続けるんだよ。", quotable: seneca)

# プラトン
FamousQuote.create!(text: "親切にしなさい。あなたが会う人はみんな、厳しい闘いをしているのだから。", quotable: plato)

# シャルル・ボードレール
FamousQuote.create!(text: "他人の感受性を軽蔑してはいけない。感受性はその人の才能なのだ。", quotable: baudelaire)

# アルトゥル・ショーペンハウアー
FamousQuote.create!(text: "我々は、他の人たちと同じようになろうとして、自分自身の4分の3を喪失してしまう。", quotable: schopenhauer)

# オーギュスト・ロダン
FamousQuote.create!(text: "忍耐もまた行動の一つの形態だ。", quotable: rodin)

# ジョン・ラスキン
FamousQuote.create!(text: "一人の人間の歴史において、もっとも重要なことは、その人が何を目的としたかということである。", quotable: ruskin)

# ユードラ・ウェルティ
FamousQuote.create!(text: "どんなに時間がかかっても、そんなの問題じゃない。大切なのは目標をもつこと。", quotable: welty)

# ウォルト・ディズニー
FamousQuote.create!(text: "夢見ることができれば、それは実現できる。", quotable: disney)


# オリジナルの名言
FamousQuote.create!(text: "今日の小さな一歩が、明日の大きな飛躍につながる。", quotable: original)
FamousQuote.create!(text: "失敗は成功の礎。諦めずに前進し続けよう。", quotable: original)
FamousQuote.create!(text: "他人と比べるのではなく、昨日の自分と比べよう。", quotable: original)
FamousQuote.create!(text: "真の豊かさは、物質的なものではなく、心の中にある。", quotable: original)
FamousQuote.create!(text: "困難は、私たちを強くするための宇宙からの贈り物。", quotable: original)
FamousQuote.create!(text: "変化を恐れるよりも、変化しないことを恐れよ。", quotable: original)
FamousQuote.create!(text: "自分の限界を決めるのは、他人ではなく自分自身だ。", quotable: original)
FamousQuote.create!(text: "本当の自由とは、自分の行動に責任を持つことから始まる。", quotable: original)
FamousQuote.create!(text: "幸せは目的地ではなく、旅そのものの中にある。", quotable: original)
FamousQuote.create!(text: "他人の成功を喜べる人こそ、真の強さを持っている。", quotable: original)
FamousQuote.create!(text: "最も価値ある学びは、自分自身を知ることから始まる。", quotable: original)
FamousQuote.create!(text: "心の声に耳を傾けることは、最も難しく、最も大切な対話だ。", quotable: original)
FamousQuote.create!(text: "今この瞬間に感謝することで、未来はより輝かしいものになる。", quotable: original)
FamousQuote.create!(text: "真の勇気とは、恐れを感じながらもそれに立ち向かうことだ。", quotable: original)
FamousQuote.create!(text: "多様性を受け入れることは、自分自身の成長への扉を開くことだ。", quotable: original)
