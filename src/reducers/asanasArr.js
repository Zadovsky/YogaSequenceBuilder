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
        ru: "Уттхита Триконасана",
        en: "Utthita triconasana",
      },
      asanaImg: "/img/utrikonasana.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Паривритта триконасана",
        en: "Parivrtta trikonasana",
      },
      asanaImg: "/img/ptrikonasana.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 3",
        en: "Virabhadrasana 3",
      },
      asanaImg: "/img/vira3.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 1",
        en: "Virabhadrasana 1",
      },
      asanaImg: "/img/vira1.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Вирабхадрасана 2",
        en: "Virabhadrasana 2",
      },
      asanaImg: "/img/vira2.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Прасарита Падоттанасана",
        en: "Prasarita Padottanasana",
      },
      asanaImg: "/img/prasarita.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Врикшасана",
        en: "Vrikshasana",
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
        ru: "Бхуджапидасана",
        en: "Bhujapidasana",
      },
      asanaImg: "/img/bhudzh.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Пашчимоттанасана",
        en: "Pashchimottanasana",
      },
      asanaImg: "/img/paschimot.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Уттанасана",
        en: "Uttanasana",
      },
      asanaImg: "/img/uttan.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Падахастасана",
        en: "Padahastasana",
      },
      asanaImg: "/img/padah.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Аштанга намаскарасана",
        en: "Ashtanga namaskarasana",
      },
      asanaImg: "/img/ashtanga.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Урдхва мукха шванасана",
        en: "Urdhva mukha svanasana",
      },
      asanaImg: "/img/updog.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Адхо мукха шванасана",
        en: "Adho mukha svanasana",
      },
      asanaImg: "/img/downdog.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Уттхита паршваконасана",
        en: "Utthita parsvakonasana",
      },
      asanaImg: "/img/uparshvakon.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Паривритта паршваконасана",
        en: "Parivrtta parsvakonasana",
      },
      asanaImg: "/img/pparshvakon.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Уткатасана",
        en: "Utkatasana",
      },
      asanaImg: "/img/utka.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Паршвоттанасана",
        en: "Parshvattonasana",
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
        ru: "Cкандасана",
        en: "Scandasana",
      },
      asanaImg: "/img/scand.jpg",
      groupId: "stand",
    },
    {
      asanaName: {
        ru: "Самаконасана",
        en: "Samakonasana",
      },
      asanaImg: "/img/samakon.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Уттхита хаста падангуштхасана",
        en: "Utthita hasta padangusthasana",
      },
      asanaImg: "/img/uhpadangushth.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Гарудасана",
        en: "Garudasana",
      },
      asanaImg: "/img/garuda.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Ардха чандрасана",
        en: "Ardha chandrasana",
      },
      asanaImg: "/img/ardhachandra.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Натараджасана",
        en: "Natarajasana",
      },
      asanaImg: "/img/nataraj.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Ардха баддха падмоттанасана",
        en: "Aardha baddha padmottanasana",
      },
      asanaImg: "/img/abpadmo.jpg",
      groupId: "balance",
    },
    {
      asanaName: {
        ru: "Аштавакрасана",
        en: "Ashtavakrasana",
      },
      asanaImg: "/img/ashtavakr.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Маюрасана",
        en: "Maurasana",
      },
      asanaImg: "/img/maur.jpg",
      groupId: "handbalance",
    },
    {
      asanaName: {
        ru: "Ашва санчаланасана",
        en: "Ashva sanchalanasana",
      },
      asanaImg: "/img/ashvasanch.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Уттхан приштхасана",
        en: "Utthan pristhasana",
      },
      asanaImg: "/img/utthanp.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Паригхасана",
        en: "Parighasana",
      },
      asanaImg: "/img/parigh.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Уштрасана",
        en: "Ushtrasana",
      },
      asanaImg: "/img/ushtr.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Хануманасана",
        en: "Hanumanasana",
      },
      asanaImg: "/img/hanuman.jpg",
      groupId: "knees",
    },
    {
      asanaName: {
        ru: "Мандукасана",
        en: "Mandukasana",
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
        ru: "Маричиасана",
        en: "Marichyasana",
      },
      asanaImg: "/img/marichy.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Агни cтамбхасана",
        en: "Agnistambhana",
      },
      asanaImg: "/img/agnistambh.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Падмасана",
        en: "Padmasana",
      },
      asanaImg: "/img/padma.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Гомукхасана",
        en: "Gomukhasana",
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
        ru: "Раджакапотасана",
        en: "Rajakapotasana",
      },
      asanaImg: "/img/rajakap.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Курмасана",
        en: "Kurmasana",
      },
      asanaImg: "/img/kurma.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Ардха баддха падма пашчимоттанасана",
        en: "Ardha baddha padma paschimottanasana",
      },
      asanaImg: "/img/ardhabaddhapadmap.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Джану ширшасана",
        en: "Janu sirsasana",
      },
      asanaImg: "/img/janus.jpg",
      groupId: "forwardfold",
    },
    {
      asanaName: {
        ru: "Паривритта джану ширшасана",
        en: "Parivrtta janu sirsasana",
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
        ru: "Урдхва дханурасана",
        en: "Urdhva dhanurasana",
      },
      asanaImg: "/img/udhanur.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Сетубандха сарвангасана",
        en: "Setu bandha sarvangasana",
      },
      asanaImg: "/img/setubandhasarvang.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Сахаджа пурвоттанасана",
        en: "Sahaja purvottanasana",
      },
      asanaImg: "/img/spurvottan.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Пурвоттанасана",
        en: "Purvottanasana",
      },
      asanaImg: "/img/purvottan.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Матсиасана",
        en: "Matsyasana",
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
        ru: "Марджариасана",
        en: "Marjariasana",
      },
      asanaImg: "/img/marjari.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Супта падангуштхасана",
        en: "Supta padangusthasana",
      },
      asanaImg: "/img/spadangyshth.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Паванамуктасана",
        en: "Pavanamuktasana",
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
        ru: "Васиштхасана",
        en: "Vasisthasana",
      },
      asanaImg: "/img/vasisth.jpg",
      groupId: "plank",
    },
    {
      asanaName: {
        ru: "Кумбхакасана",
        en: "Kumbhakasana",
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
        ru: "Парипурна навасана",
        en: "Paripurna navasana",
      },
      asanaImg: "/img/paripurnanav.jpg",
      groupId: "sit",
    },
    {
      asanaName: {
        ru: "Шалабхасана",
        en: "Shalabhasana",
      },
      asanaImg: "/img/shalabh.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Дханурасана",
        en: "Dhanurasana",
      },
      asanaImg: "/img/dhanur.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Ардха бхуджангасана",
        en: "Ardha bhujangasana",
      },
      asanaImg: "/img/abhujang.jpg",
      groupId: "backbend",
    },
    {
      asanaName: {
        ru: "Бхуджангасана",
        en: "Bhujangasana",
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
        ru: "Супта матсиендрасана",
        en: "Supta matsyendrasana",
      },
      asanaImg: "/img/suptamatsy.jpg",
      groupId: "lie",
    },
    {
      asanaName: {
        ru: "Ширшасана",
        en: "Shirshasana",
      },
      asanaImg: "/img/shirsh.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Пинча маюрасана",
        en: "Pincha mayurasana",
      },
      asanaImg: "/img/pinchamayur.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Адхо мукха врикшасана",
        en: "Adho mukha vrksasana",
      },
      asanaImg: "/img/amvrks.jpg",
      groupId: "invert",
    },
    {
      asanaName: {
        ru: "Сарвангасана",
        en: "Sarvangasana",
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
        ru: "Карнапидасана",
        en: "Karnapidasana",
      },
      asanaImg: "/img/karnapid.jpg",
      groupId: "invert",
    },
  ],
};

export function asanasArrReducer(state = initialState, action) {
  return state;
}
