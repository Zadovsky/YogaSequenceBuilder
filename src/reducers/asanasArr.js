const initialState = {
  groups: [
    { id: "stand", name: { ru: "Стоя", en: "Stand" } },
    { id: "balance", name: { ru: "Балансы", en: "Balance" } },
    { id: "handbalance", name: { ru: "Балансы на руках", en: "Hand balance" } },
    { id: "sit", name: { ru: "Сидя", en: "Sitting" } },
    { id: "forwardfold", name: { ru: "Наклоны", en: "Forward fold" } },
    { id: "backbend", name: { ru: "Прогибы", en: "Backbend" } },
    { id: "knees", name: { ru: "На коленях", en: "On the knees" } },
    { id: "lie", name: { ru: "Лежа", en: "Lying" } },
    { id: "plank", name: { ru: "Планки", en: "Plank" } },
    { id: "invert", name: { ru: "Перевернутые", en: "Inverted" } },
  ],
  arr: [
    {
      asanaName: {
        ru: "Тадасана",
        en: "Tadasana",
      },
      asanaImg: "/img/tadasana.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Уттхита трико­насана",
        en: "Utthita trico­nasana",
      },
      asanaImg: "/img/utrikonasana.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Пари­вритта трико­насана",
        en: "Pari­vrtta triko­nasana",
      },
      asanaImg: "/img/ptrikonasana.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Вирабха­драсана 3",
        en: "Virabha­drasana 3",
      },
      asanaImg: "/img/vira3.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Вирабха­драсана 1",
        en: "Virabha­drasana 1",
      },
      asanaImg: "/img/vira1.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Вирабха­драсана 2",
        en: "Virabha­drasana 2",
      },
      asanaImg: "/img/vira2.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Прасарита падот­танасана",
        en: "Prasarita padot­tanasana",
      },
      asanaImg: "/img/prasarita.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Врик­шасана",
        en: "Vrik­shasana",
      },
      asanaImg: "/img/vrikshasana.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Лоласана",
        en: "Lolasana",
      },
      asanaImg: "/img/lola.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Бакасана",
        en: "Bakasana",
      },
      asanaImg: "/img/bak.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Бхуджа­пидасана",
        en: "Bhuja­pidasana",
      },
      asanaImg: "/img/bhudzh.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Паш­чи­мот­тан­асана",
        en: "Pash­chi­mot­tan­asana",
      },
      asanaImg: "/img/paschimot.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Уттан­асана",
        en: "Uttan­asana",
      },
      asanaImg: "/img/uttan.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Пада­хастасана",
        en: "Pada­hastasana",
      },
      asanaImg: "/img/padah.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Аштанга намаскар­асана",
        en: "Ashtanga namaskar­asana",
      },
      asanaImg: "/img/ashtanga.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Урдхва мукха шван­асана",
        en: "Urdhva mukha svan­asana",
      },
      asanaImg: "/img/updog.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Адхо мукха шван­асана",
        en: "Adho mukha svan­asana",
      },
      asanaImg: "/img/downdog.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Уттхита паршва­конасана",
        en: "Utthita parsva­konasana",
      },
      asanaImg: "/img/uparshvakon.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Пари­вритта паршва­конасана",
        en: "Pari­vrtta parsva­konasana",
      },
      asanaImg: "/img/pparshvakon.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Утка­тасана",
        en: "Utka­tasana",
      },
      asanaImg: "/img/utka.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Паршвот­танасана",
        en: "Parshvat­tonasana",
      },
      asanaImg: "/img/parshvat.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Утката конасана",
        en: "Utkata konasana",
      },
      asanaImg: "/img/utkatakon.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Маласана",
        en: "Malasana",
      },
      asanaImg: "/img/mal.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Сканд­асана",
        en: "Scand­asana",
      },
      asanaImg: "/img/scand.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Сама­кон­асана",
        en: "Sama­kon­asana",
      },
      asanaImg: "/img/samakon.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Уттхита хаста падан­гушт­хасана",
        en: "Utthita hasta padan­gust­hasana",
      },
      asanaImg: "/img/uhpadangushth.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Гару­дасана",
        en: "Garu­dasana",
      },
      asanaImg: "/img/garuda.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Ардха чан­дра­сана",
        en: "Ardha chan­dra­sana",
      },
      asanaImg: "/img/ardhachandra.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Натарадж­асана",
        en: "Nataraj­asana",
      },
      asanaImg: "/img/nataraj.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Ардха баддха падмот­танасана",
        en: "Aardha baddha padmot­tanasana",
      },
      asanaImg: "/img/abpadmo.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Аштавакр­асана",
        en: "Ashtavakr­asana",
      },
      asanaImg: "/img/ashtavakr.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Маюр­асана",
        en: "Maur­asana",
      },
      asanaImg: "/img/maur.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Ашва санчалан­асана",
        en: "Ashva sanchalan­asana",
      },
      asanaImg: "/img/ashvasanch.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Уттхан пришт­хасана",
        en: "Utthan prist­hasana",
      },
      asanaImg: "/img/utthanp.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Париг­хасана",
        en: "Parig­hasana",
      },
      asanaImg: "/img/parigh.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Уш­трасана",
        en: "Ush­trasana",
      },
      asanaImg: "/img/ushtr.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Хануман­асана",
        en: "Hanuman­asana",
      },
      asanaImg: "/img/hanuman.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Манду­касана",
        en: "Mandu­kasana",
      },
      asanaImg: "/img/manduk.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Баласана",
        en: "Balasana",
      },
      asanaImg: "/img/bal.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Баддха конасана",
        en: "Baddha Konasana",
      },
      asanaImg: "/img/baddhakon.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Маричи­асана",
        en: "Marichy­asana",
      },
      asanaImg: "/img/marichy.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Агни стамб­хасана",
        en: "Agni­stamb­hasana",
      },
      asanaImg: "/img/agnistambh.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Пад­масана",
        en: "Pad­masana",
      },
      asanaImg: "/img/padma.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Гомук­хасана",
        en: "Gomuk­hasana",
      },
      asanaImg: "/img/gomukh.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Супта вирасана",
        en: "Supta virasana",
      },
      asanaImg: "/img/suptavira.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Вирасана",
        en: "Virasana",
      },
      asanaImg: "/img/virasana.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Раджа­капо­тасана",
        en: "Raja­kapo­tasana",
      },
      asanaImg: "/img/rajakap.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Кур­масана",
        en: "Kur­masana",
      },
      asanaImg: "/img/kurma.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Ардха баддха падма паш­чи­­мот­тан­асана",
        en: "Ardha baddha padma pas­chi­­mot­tan­asana",
      },
      asanaImg: "/img/ardhabaddhapadmap.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Джану шир­шасана",
        en: "Janu sir­sasana",
      },
      asanaImg: "/img/janus.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Пари­вритта джану шир­шасана",
        en: "Pari­vrtta janu sir­sasana",
      },
      asanaImg: "/img/pjanus.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Упавишта конасана",
        en: "Upavistha konasana",
      },
      asanaImg: "/img/upavishtakon.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Урдхва дхану­расана",
        en: "Urdhva dhanu­rasana",
      },
      asanaImg: "/img/udhanur.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Сету­бандха сарван­гасана",
        en: "Setu bandha sarvan­gasana",
      },
      asanaImg: "/img/setubandhasarvang.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Сахаджа пурвот­танасана",
        en: "Sahaja purvot­tanasana",
      },
      asanaImg: "/img/spurvottan.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Пурвот­танасана",
        en: "Purvot­tanasana",
      },
      asanaImg: "/img/purvottan.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Матси­асана",
        en: "Matsy­asana",
      },
      asanaImg: "/img/matsy.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Уттана шишасана",
        en: "Uttana shishosana",
      },
      asanaImg: "/img/uttanashish.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Марджа­ри­асана",
        en: "Marja­ri­asana",
      },
      asanaImg: "/img/marjari.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Супта падангуш­т­хасана",
        en: "Supta padangus­t­hasana",
      },
      asanaImg: "/img/spadangyshth.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Павана­муктасана",
        en: "Pavana­muktasana",
      },
      asanaImg: "/img/pavanam.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Ананда баласана",
        en: "Ananda balasana",
      },
      asanaImg: "/img/anandabal.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Васиштх­асана",
        en: "Vasisth­asana",
      },
      asanaImg: "/img/vasisth.jpg",
      groupId: "plank",
    },
    {
      asanaName: {
        ru: "Кумбхак­асана",
        en: "Kumbhak­asana",
      },
      asanaImg: "/img/kumbhak.jpg",
      groupId: "plank",
    },
    {
      asanaName: {
        ru: "Чатуранга дандасана",
        en: "Chaturanga dandasana",
      },
      asanaImg: "/img/chaturanga.jpg",
      groupId: "plank",
    },
    {
      asanaName: {
        ru: "Ардха навасана",
        en: "Ardha navasana",
      },
      asanaImg: "/img/ardhanav.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Пари­пурна навасана",
        en: "Pari­purna navasana",
      },
      asanaImg: "/img/paripurnanav.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Шалаб­хасана",
        en: "Shalab­hasana",
      },
      asanaImg: "/img/shalabh.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Дхану­расана",
        en: "Dhanu­rasana",
      },
      asanaImg: "/img/dhanur.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Ардха бхуджанг­асана",
        en: "Ardha bhujang­asana",
      },
      asanaImg: "/img/abhujang.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Бхуджанг­асана",
        en: "Bhujang­asana",
      },
      asanaImg: "/img/bhujang.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Урдхва прасарита падасана",
        en: "Urdhva prasarita padasana",
      },
      asanaImg: "/img/uprasaritap.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Супта матсиен­драсана",
        en: "Supta matsyen­drasana",
      },
      asanaImg: "/img/suptamatsy.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Шир­шасана",
        en: "Shir­shasana",
      },
      asanaImg: "/img/shirsh.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Пинча маю­расана",
        en: "Pincha mayu­rasana",
      },
      asanaImg: "/img/pinchamayur.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Адхо мукха врик­шасана",
        en: "Adho mukha vrks­asana",
      },
      asanaImg: "/img/amvrks.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Сарван­гасана",
        en: "Sarvan­gasana",
      },
      asanaImg: "/img/sarvang.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Халасана",
        en: "Halasana",
      },
      asanaImg: "/img/hal.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Карна­пидасана",
        en: "Karna­pidasana",
      },
      asanaImg: "/img/karnapid.jpg",
      groupId: "invert",
    },
  ],
};

export function asanasArrReducer(state = initialState, action) {
  return state;
}
