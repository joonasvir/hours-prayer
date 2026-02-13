// Liturgical Prayer Texts and Schedule
const PRAYERS = [
    {
        name: 'Lauds',
        subtitle: 'Morning Prayer',
        time: '6:00 AM',
        hour: 6,
        text: `<p><strong>O Lord, open my lips,</strong><br>
And my mouth shall declare Your praise.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p>From the rising of the sun to its setting,<br>
The name of the Lord is to be praised.</p>

<p>This is the day which the Lord has made;<br>
Let us rejoice and be glad in it.</p>

<p><strong>Psalm 63: Morning Prayer</strong></p>

<p>O God, You are my God; I seek You earnestly;<br>
My soul thirsts for You; my flesh faints for You,<br>
As in a dry and weary land where there is no water.</p>

<p>So I have looked upon You in the sanctuary,<br>
Beholding Your power and glory.<br>
Because Your steadfast love is better than life,<br>
My lips will praise You.</p>

<p>So I will bless You as long as I live;<br>
In Your name I will lift up my hands.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Morning Prayer</strong></p>

<p>Lord God, as the day begins, I offer You my heart and mind.<br>
Guide my thoughts, words, and actions today.<br>
May I walk in Your presence and serve You faithfully.<br>
Grant me strength for today's tasks and grace for today's trials.<br>
Let Your light shine through me to others.<br>
In Jesus' name, Amen.</p>`
    },
    {
        name: 'Terce',
        subtitle: 'Third Hour',
        time: '9:00 AM',
        hour: 9,
        text: `<p><strong>Come, Holy Spirit, fill the hearts of Your faithful,</strong><br>
And kindle in them the fire of Your love.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Psalm 119:105</strong></p>

<p>Your word is a lamp to my feet<br>
And a light to my path.</p>

<p>I will bless the Lord at all times;<br>
His praise shall continually be in my mouth.<br>
My soul makes its boast in the Lord;<br>
Let the humble hear and be glad.</p>

<p>Oh, magnify the Lord with me,<br>
And let us exalt His name together!</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Prayer at the Third Hour</strong></p>

<p>O Holy Spirit, You who descended upon the Apostles at the third hour,<br>
Come and renew the face of the earth.<br>
Grant me wisdom for my work,<br>
Patience in my trials,<br>
And love in my interactions.<br>
May this morning be fruitful and pleasing to You.<br>
Through Christ our Lord, Amen.</p>`
    },
    {
        name: 'Sext',
        subtitle: 'Midday Prayer',
        time: '12:00 PM',
        hour: 12,
        text: `<p><strong>O God, come to my assistance;</strong><br>
O Lord, make haste to help me.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Psalm 121: The Guardian of Israel</strong></p>

<p>I lift up my eyes to the hills—<br>
From where does my help come?<br>
My help comes from the Lord,<br>
Who made heaven and earth.</p>

<p>He will not let your foot be moved;<br>
He who keeps you will not slumber.<br>
Behold, He who keeps Israel<br>
Will neither slumber nor sleep.</p>

<p>The Lord is your keeper;<br>
The Lord is your shade on your right hand.<br>
The sun shall not strike you by day,<br>
Nor the moon by night.</p>

<p>The Lord will keep you from all evil;<br>
He will keep your life.<br>
The Lord will keep your going out and your coming in<br>
From this time forth and forevermore.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Midday Prayer</strong></p>

<p>Lord Jesus, at this midday hour,<br>
I pause to remember Your presence.<br>
Refresh my spirit and renew my strength.<br>
Help me to complete this day with faithfulness and joy.<br>
Bless my afternoon work and guide my steps.<br>
In Your holy name, Amen.</p>`
    },
    {
        name: 'None',
        subtitle: 'Ninth Hour',
        time: '3:00 PM',
        hour: 15,
        text: `<p><strong>At the ninth hour, Jesus cried out with a loud voice,</strong><br>
"My God, My God, why have You forsaken Me?"</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Psalm 51: Create in Me a Clean Heart</strong></p>

<p>Have mercy on me, O God, according to Your steadfast love;<br>
According to Your abundant mercy blot out my transgressions.<br>
Wash me thoroughly from my iniquity,<br>
And cleanse me from my sin!</p>

<p>Create in me a clean heart, O God,<br>
And renew a right spirit within me.<br>
Cast me not away from Your presence,<br>
And take not Your Holy Spirit from me.</p>

<p>Restore to me the joy of Your salvation,<br>
And uphold me with a willing spirit.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Prayer at the Ninth Hour</strong></p>

<p>Lord Jesus Christ, at this hour You gave up Your spirit on the cross,<br>
Mortifying the deceptions of my body and soul.<br>
Grant me grace to die to sin and live for righteousness.<br>
Help me to finish this day well,<br>
Seeking Your will in all things.<br>
By Your precious blood, have mercy on me. Amen.</p>`
    },
    {
        name: 'Vespers',
        subtitle: 'Evening Prayer',
        time: '6:00 PM',
        hour: 18,
        text: `<p><strong>O God, come to my assistance;</strong><br>
O Lord, make haste to help me.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Psalm 141: An Evening Prayer</strong></p>

<p>Let my prayer be counted as incense before You,<br>
And the lifting up of my hands as the evening sacrifice!</p>

<p>Set a guard, O Lord, over my mouth;<br>
Keep watch over the door of my lips!<br>
Do not let my heart incline to any evil,<br>
To busy myself with wicked deeds.</p>

<p>But my eyes are toward You, O God, my Lord;<br>
In You I seek refuge; leave me not defenseless!</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Magnificat</strong></p>

<p>My soul magnifies the Lord,<br>
And my spirit rejoices in God my Savior,<br>
For He has looked on the humble estate of His servant.<br>
For behold, from now on all generations will call me blessed;</p>

<p>For He who is mighty has done great things for me,<br>
And holy is His name.<br>
And His mercy is for those who fear Him<br>
From generation to generation.</p>

<p><strong>Evening Prayer</strong></p>

<p>Lord, as evening falls, I thank You for this day.<br>
For Your protection, provision, and guidance, I give thanks.<br>
Forgive me for any ways I have failed You today.<br>
Grant me peaceful rest and prepare me for tomorrow.<br>
Watch over me and all those I love through the night.<br>
In Jesus' name, Amen.</p>`
    },
    {
        name: 'Compline',
        subtitle: 'Night Prayer',
        time: '9:00 PM',
        hour: 21,
        text: `<p><strong>May the Lord almighty grant us a peaceful night and a perfect end.</strong><br>
Amen.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Examination of Conscience</strong></p>

<p>Brethren, be sober-minded; be watchful.<br>
Your adversary the devil prowls around like a roaring lion,<br>
Seeking someone to devour.</p>

<p>But You, O Lord, have mercy on us.<br>
Thanks be to God.</p>

<p><strong>Psalm 91: Under God's Protection</strong></p>

<p>He who dwells in the shelter of the Most High<br>
Will abide in the shadow of the Almighty.<br>
I will say to the Lord, "My refuge and my fortress,<br>
My God, in whom I trust."</p>

<p>For He will deliver you from the snare of the fowler<br>
And from the deadly pestilence.<br>
He will cover you with His pinions,<br>
And under His wings you will find refuge.</p>

<p>You will not fear the terror of the night,<br>
Nor the arrow that flies by day,<br>
Nor the pestilence that stalks in darkness,<br>
Nor the destruction that wastes at noonday.</p>

<p><em>Glory to the Father, and to the Son, and to the Holy Spirit,<br>
As it was in the beginning, is now, and ever shall be, world without end. Amen.</em></p>

<p><strong>Nunc Dimittis</strong></p>

<p>Lord, now let Your servant depart in peace,<br>
According to Your word;<br>
For my eyes have seen Your salvation<br>
Which You have prepared in the presence of all peoples.</p>

<p><strong>Night Prayer</strong></p>

<p>Into Your hands, O Lord, I commend my spirit.<br>
You have redeemed me, O Lord, faithful God.<br>
Keep me as the apple of Your eye;<br>
Hide me in the shadow of Your wings.</p>

<p>Visit this place, O Lord, and drive far from it all snares of the enemy;<br>
Let Your holy angels dwell with us to preserve us in peace;<br>
And let Your blessing be upon us always.<br>
Through Christ our Lord. Amen.</p>

<p>May the almighty and merciful Lord,<br>
The Father, the Son, and the Holy Spirit,<br>
Bless us and keep us. Amen.</p>`
    }
];