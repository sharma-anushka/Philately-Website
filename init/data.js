const productListings = [
    {
        date: "27.11.2017",
        name: "Mahabharat",
        denomination: "Rs. 430",
        type: "Miniature Sheet",
        theme: "Epic, Story",
        image: {
            filename: "271117mahabharatms1.jpg",
            url: "https://www.indianphilately.net/images/271117mahabharatms1.jpg",
        },
    },
    {
        date: "31.05.2017",
        name: "Eminent Writers - Prof. Balwant Gargi, Krishan Chander, Bhisham Sahni, Pandit Shrilal Shukla, K. V. Puttappa",
        denomination: "Rs. 50",
        type: "Miniature Sheet",
        theme: "Personality, Writer, Dramatist, Theatre Director, Novelist, Short Story Writer, Academic, Screen Writer, Playwright, Actor, Critic, Thinker.",
        image: {
            filename: "310517eminentwritersms.jpg",
            url: "https://www.indianphilately.net/images/310517eminentwritersms.jpg",
        },
    },
    {
        date: "29.07.2016",
        name: "Tadoba Andhari National Park",
        denomination: "Rs. 30",
        type: "Miniature Sheet",
        theme: "Wild Life, National Park, Tiger, Wild Animal, Panthera tigris, International Tiger's Day",
        image: {
            filename: "290716TAnationalparkms.jpg",
            url: "https://www.indianphilately.net/images/290716TAnationalparkms.jpg",
        },
    },
    {
        date: "28.11.2014",
        name: "India - Slovenia Joint Issue",
        denomination: "Rs. 30",
        type: "Miniature Sheet",
        theme: "Joint Issue, Children's Day, Child, Painting, Family, Grandparents",
        image: {
            filename: "281114indiasloveniajointissuems.jpg",
            url: "https://www.indianphilately.net/images/281114indiasloveniajointissuems.jpg",
        },
    },
    {
        date: "28.06.2004",
        name: "The Great Trigonometrical Survey",
        denomination: "Rs. 15",
        type: "Miniature Sheet",
        theme: "Personality, Measurement, Survey, Mathematics",
        image: {
            filename: "28062004Trigo_ms.jpg",
            url: "https://www.indianphilately.net/images/trigo_ms.jpg",
        },
    },
    {
        date: "01.10.2015",
        name: "Mahant Avaidyanath",
        denomination: "Rs. 5",
        type: "Commemorative",
        theme: "Personality, Spiritual Leader, Chief Priest, Politician",
        image: {
            filename: "011015mahantavaidyanath.jpg",
            url: "https://www.indianphilately.net/images/011015mahantavaidyanath.jpg",
        },
    },
    {
        date: "08.01.2018",
        name: "ICAR-Central Plantation Crops Research Institute",
        denomination: "Rs. 15",
        type: "Commemorative",
        theme: "Coconut Research, Crop, Plantation",
        image: {
            filename: "080118icarcpc2.jpg",
            url: "https://www.indianphilately.net/images/080118icarcpc2.jpg",
        },
    },
    {
        date: "10.02.2017",
        name: "Head Gears of India",
        denomination: "Rs. 160",
        type: "Miniature Sheet",
        theme: "Head Gear, Tepi (Brokpa Tribe), Rajasthani Turban, Puneri Turban, Naga Hat, Mysore Peta, Mithila Turban, Karakul Cap, Japi Cap, Hornbill Warrior Cap, Himachali Cap, Haryanvi Turban, Gujarati Turban, Gonda - Ladakhi Cap, Dastar, Bison Horn Maria Tribal Cap, Angami Tribal Cap",
        image: {
            filename: "100217headgearsms.jpg",
            url: "https://www.indianphilately.net/images/100217headgearsms.jpg",
        },
    },
    {
        date: "03.11.2017",
        name: "Indian Cuisine",
        denomination: "Rs. 5",
        type: "Commemorative",
        theme: "Cuisine, Food, Bhog Prasad, Temple Prasad, Sweet, Chhappan Bhog",
        image: {
            filename: "031117chappanbhog.jpg",
            url: "https://www.indianphilately.net/images/031117chappanbhog.jpg",
        },
    },
    {
        date: "08.03.2016",
        name: "India - UN Joint Issue, Women HeforShe",
        denomination: "Rs. 30",
        type: "Se-tenant (Pair)",
        theme: "Joint issue, Women, Women's Day, Gender Equality, Youth movement",
        image: {
            filename: "080316indiaunwomenheforshepair.jpg",
            url: "https://www.indianphilately.net/images/080316indiaunwomenheforshepair.jpg",
        },
    },
    {
        date: "10.09.2015",
        name: "10th World Hindi Conference",
        denomination: "Rs. 5",
        type: "Commemorative",
        theme: "Conference, Language, Hindi, Globe, Peacock, Emblem",
        image: {
            filename: "10091510thworldhindiconference.jpg",
            url: "https://www.indianphilately.net/images/10091510thworldhindiconference.jpg",
        },
    },
    {
        date: "03.12.2015",
        name: "Zoological Survey of India",
        denomination: "Rs. 25",
        type: "Commemorative",
        theme: "Zoology, Animal, Wildlife, Survey",
        image: {
            filename: "zoologicalsurveyofindia031215a.jpg",
            url: "https://www.indianphilately.net/images/zoologicalsurveyofindia031215a.jpg",
        },
    },
    {
        date: "03.05.2013",
        name: "100 Years of Indian Cinema",
        denomination: "Rs.45",
        type: "Miniature Sheet",
        theme: "Personality, Cinema",
        image: {
            filename: "indiancinemams02.jpg",
            url: "https://www.indianphilately.net/images/indiancinemams02.jpg",
        },
    },
    {
        date: "26.08.2016",
        name: "Indian Metal Crafts",
        denomination: "Rs. 90",
        type: "Miniature Sheet",
        theme: "Handicraft, Metal, Iron Surahi (Pitcher), Bronze Nataraja (Depiction of the God Shiva performing divine dance), Copper Pandan (Container used to store betel leaf, betel nut, dry tobacco, lime etc.), Brass Incense Burner, Silver Spouted Lota (Spherical water vessel) and Gold Gajalakshmi Lamp (Lamp with motif of Lakshmi, the deity of wealth)",
        image: {
            filename: "260816indianmetalcraftsms.jpg",
            url: "https://www.indianphilately.net/images/260816indianmetalcraftsms.jpg",
        },
    },
    {
        date: "05.08.2016",
        name: "Olympic Games Rio 2016",
        denomination: "Rs. 80",
        type: "Sheetlet",
        theme: "Olympics Games, Emblem, Olympic Rings, Boxing",
        image: {
            filename: "050816olympicssh6.jpg",
            url: "https://www.indianphilately.net/images/050816olympicssh6.jpg",
        },
    },
];

module.exports = {data : productListings};