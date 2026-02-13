// Liturgical Prayer Texts

const PRAYERS = {
    lauds: {
        name: 'Lauds',
        latin: 'Laudes Matutinae',
        time: '6:00 AM',
        description: 'Morning Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.'
            },
            {
                title: 'Psalm',
                verses: [
                    'This is the day the Lord has made; let us rejoice and be glad.',
                    'Give thanks to the Lord, for he is good; his love endures forever.',
                    'The Lord is my strength and my song; he has become my salvation.'
                ]
            },
            {
                title: 'Canticle of Zechariah',
                text: 'Blessed be the Lord, the God of Israel; he has come to his people and set them free. He has raised up for us a mighty savior, born of the house of his servant David.'
            },
            {
                title: 'Intercessions',
                text: 'Let us pray: O God, who makes the dawn shine with new light, grant that as we begin this day, we may walk in your presence and offer you worthy service. Through Christ our Lord. Amen.'
            }
        ]
    },
    terce: {
        name: 'Terce',
        latin: 'Tertia',
        time: '9:00 AM',
        description: 'Third Hour - Mid-Morning Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit.'
            },
            {
                title: 'Hymn',
                text: 'Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Send forth your Spirit and they shall be created, and you shall renew the face of the earth.'
            },
            {
                title: 'Psalm',
                verses: [
                    'I lift up my eyes to the mountains—where does my help come from?',
                    'My help comes from the Lord, the Maker of heaven and earth.',
                    'The Lord will keep you from all harm—he will watch over your life.'
                ]
            },
            {
                title: 'Prayer',
                text: 'Lord God, at this third hour you poured out the Holy Spirit upon the apostles. Grant that same Spirit to sanctify us and renew us throughout this day. Through Christ our Lord. Amen.'
            }
        ]
    },
    sext: {
        name: 'Sext',
        latin: 'Sexta',
        time: '12:00 PM',
        description: 'Sixth Hour - Midday Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit.'
            },
            {
                title: 'Psalm',
                verses: [
                    'The Lord is my shepherd, I shall not want.',
                    'He makes me lie down in green pastures; he leads me beside still waters.',
                    'He restores my soul. He leads me in right paths for his name\'s sake.'
                ]
            },
            {
                title: 'Reading',
                text: 'Whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him.'
            },
            {
                title: 'Prayer',
                text: 'Almighty God, as the sun reaches its zenith, sustain us with your strength. May our work give you glory and serve the good of all. Through Christ our Lord. Amen.'
            }
        ]
    },
    none: {
        name: 'None',
        latin: 'Nona',
        time: '3:00 PM',
        description: 'Ninth Hour - Mid-Afternoon Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit.'
            },
            {
                title: 'Remembrance',
                text: 'At this hour, Christ gave up his spirit on the cross. We remember his perfect sacrifice and infinite love for humanity.'
            },
            {
                title: 'Psalm',
                verses: [
                    'Into your hands I commend my spirit; you have redeemed me, O Lord, faithful God.',
                    'I trust in the Lord. Let me be glad and rejoice in your mercy.',
                    'My times are in your hands; deliver me from my enemies and persecutors.'
                ]
            },
            {
                title: 'Prayer',
                text: 'Lord Jesus Christ, at this hour you hung upon the cross. May your sacrifice sanctify this day and all our works. Grant us perseverance until evening. Amen.'
            }
        ]
    },
    vespers: {
        name: 'Vespers',
        latin: 'Vesperae',
        time: '6:00 PM',
        description: 'Evening Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit.'
            },
            {
                title: 'Evening Hymn',
                text: 'O radiant Light, O Sun divine of God the Father\'s deathless face. O image of the light sublime that fills the heavenly dwelling place.'
            },
            {
                title: 'Psalm',
                verses: [
                    'Bless the Lord, O my soul; O Lord my God, you are very great.',
                    'You are clothed with honor and majesty, wrapped in light as with a garment.',
                    'You make darkness, and it is night, when all the animals of the forest come creeping out.'
                ]
            },
            {
                title: 'Canticle of Mary',
                text: 'My soul magnifies the Lord, and my spirit rejoices in God my Savior. For he has looked with favor on the lowliness of his servant. Surely, from now on all generations will call me blessed.'
            },
            {
                title: 'Prayer',
                text: 'O God, as this day draws to a close, we thank you for your blessings. Watch over us through the night and bring us safely to a new day. Through Christ our Lord. Amen.'
            }
        ]
    },
    compline: {
        name: 'Compline',
        latin: 'Completorium',
        time: '9:00 PM',
        description: 'Night Prayer',
        content: [
            {
                title: 'Opening',
                text: 'O God, come to my assistance. O Lord, make haste to help me. Glory be to the Father, and to the Son, and to the Holy Spirit.'
            },
            {
                title: 'Examination of Conscience',
                text: 'Let us examine our conscience in silence and contrition, recalling the mercies and graces of this day, and any ways we have fallen short of love.'
            },
            {
                title: 'Psalm',
                verses: [
                    'In peace I will lie down and sleep, for you alone, O Lord, make me dwell in safety.',
                    'Into your hands I commend my spirit; you have redeemed me, O Lord, faithful God.',
                    'Keep me as the apple of your eye; hide me in the shadow of your wings.'
                ]
            },
            {
                title: 'Canticle of Simeon',
                text: 'Lord, now let your servant go in peace; your word has been fulfilled. My own eyes have seen the salvation which you have prepared in the sight of every people.'
            },
            {
                title: 'Night Prayer',
                text: 'May the all-powerful Lord grant us a restful night and a peaceful death. Amen.'
            },
            {
                title: 'Marian Antiphon',
                text: 'Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us.'
            }
        ]
    }
};

const HOURS_SCHEDULE = [
    { id: 'lauds', hour: 6, minute: 0 },
    { id: 'terce', hour: 9, minute: 0 },
    { id: 'sext', hour: 12, minute: 0 },
    { id: 'none', hour: 15, minute: 0 },
    { id: 'vespers', hour: 18, minute: 0 },
    { id: 'compline', hour: 21, minute: 0 }
];