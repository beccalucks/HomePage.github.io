//This first function is to set up the page to respond appropriately to the News API call.
//articles and title are built-in parameters for this API. I logged the articles to the console,
//to ensure they were coming through as separate lists for each hashtag.
//As I discuss at length in my documentation, I am disapointed by the quality of the results pulled in by
//the keyword endpoint from the NewsAPI.
  var processResponse = function(response) {
    var topic = response.articles;
      console.log(topic);
        for(i = 0; i < topic.length; i++) {
            var title = topic[i].title;
            var title_para = document.createElement("p");
            var a = document.createElement("a");
            var linkText = document.createTextNode(title);

            a.appendChild(linkText);
            a.href = topic[i].url;
            a.id = "title_link";
            title_para.append(a);

            //have to append so the function resets itself if another hashtag is chosen

            var news_box = document.querySelector("#news_box");
            news_box.append(title_para);
          }
        }

//and here, below, is my api Key and generic equation for calling article data from the
//News API via keyword:
var doNewsSearch = function(keyword) {
   var url = "https://newsapi.org/v2/everything?" +
        "q=" + keyword + "&" +
        "from=2017-12-25&" +
        "sortBy=popularity&" +
        "apiKey=88c9a2af41cc4d4bb6b1181f9e2965b3";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);
  //xhttp.setRequestHeader('Content-Type', 'application/json');

  xhttp.addEventListener("load", function(){
            console.log(this.response);
            var response = JSON.parse(this.response);
            processResponse(response);
        });
  xhttp.send();
  console.log(keyword);
  var existingNewsList = document.getElementById("title_link");
      console.log(existingNewsList);
        if(existingNewsList) {
            existingNewsList.remove();
                  }
                    }

//this function started just to display the individual tweet lists, and gradually became the
//host for numerous smaller functions to pull graphs in from plot.ly and run each News Search function.

function hashtag_dropdown() {
  var hash_list = document.getElementById("hash_list");
  var selected_text = hash_list.options[hash_list.selectedIndex].text;
      document.getElementById("yourpick").value = selected_text;
  var existing_list = document.querySelector("iframe[id^=twitter-widget");
      console.log(existing_list);
        if(existing_list) {
            existing_list.remove();
              var link = document.createElement("a");
                link.id = "tweetlist";
                link.setAttribute("data-width", "400");
                link.setAttribute("data-height", "400");
                link.setAttribute("data-partner", "tweetdeck");
                document.getElementById("tweetlistholder").appendChild(link);
                  }

  if (selected_text === "#BlackLivesMatter") {
    var dataForPie = [{
      values: [16, 58, 24],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #BlackLivesMatter",
      height: 400, //This might be the reason that the charts would not flex, even having flex properties and being called in a media query.
      width: 470, //However, the only way I was able to make the height consistent was to have a fixed number. A percentage will be different each time because a different number of articles loads from the api depending on the keyword.
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [50, 54],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar);
    var list = document.getElementById("tweetlist");
      list.href = "https://twitter.com/TagBattleLists/lists/blacklivesmatter1?ref_src=twsrc%5Etfw"; //I made these lists myself. I created an anonymous twitter account, because although some of the movements I included in this comparison line up mostly with my views, there are some I certainly do not condone!
      list.className = "twitter-timeline";
      twttr.widgets.load();
    var keyword = "Police";
      doNewsSearch(keyword);
  }
  else if (selected_text === "#AllLivesMatter") {
    var dataForPie = [{
      values: [0, 0, 0],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #AllLivesMatter",
      height: 400,
      width: 470,
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [4, 1],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar);
    var list = document.getElementById("tweetlist");
    list.href = "https://twitter.com/TagBattleLists/lists/alllivesmatter1?ref_src=twsrc%5Etfw";
    list.className = "twitter-timeline";
    twttr.widgets.load();
    var keyword = "Police";
    doNewsSearch(keyword);

  }
  else if (selected_text === "#WaterIsLife") {
    var dataForPie = [{
      values: [0, 100, 0],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #WaterIsLife",
      height: 400,
      width: 470,
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [138, 4],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar);
    var list = document.getElementById("tweetlist");
    list.href = "https://twitter.com/TagBattleLists/lists/waterislife?ref_src=twsrc%5Etfw";
    list.className = "twitter-timeline";
    twttr.widgets.load();
    var keyword = "Water";
    doNewsSearch(keyword);
  }
  else if (selected_text === "#MeToo") {
    var dataForPie = [{
      values: [6, 79, 26],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #MeToo",
      height: 400,
      width: 470,
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [292, 296],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar); //Plot.ly provides sample code and examples for differnt types of visualisations.
    var list = document.getElementById("tweetlist");
    list.href = "https://twitter.com/TagBattleLists/lists/metoo?ref_src=twsrc%5Etfw";
    list.className = "twitter-timeline";
    twttr.widgets.load();
    var keyword = "Sexual Assault";
    doNewsSearch(keyword);

  }
  else if (selected_text === "#MakeAmericaGreatAgain") {
    var dataForPie = [{
      values: [0, 100, 0],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #MakeAmericaGreatAgain",
      height: 400,
      width: 470,
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [1, 4],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar);
    var list = document.getElementById("tweetlist");
    list.href = "https://twitter.com/TagBattleLists/lists/makeamericagreatagain?ref_src=twsrc%5Etfw";
    list.className = "twitter-timeline";
    twttr.widgets.load();
    var keyword = "Trump";
    doNewsSearch(keyword);

  }
  else if (selected_text === "#LoveTrumpsHate") {
    var dataForPie = [{
      values: [0, 0, 0],
      labels: ["Tweets with Images", "Tweets with Links", "Tweets with Mentions"],
      type: "pie"
    }];
    var layoutForPie = {
      title: "Twitter Analysis for #LoveTrumpsHate",
      height: 400,
      width: 470,
    };
        Plotly.newPlot("plotlyPieDiv", dataForPie, layoutForPie);
    var dataForBar = [{
      x: ["Retweets per Hour", "Tweets per Hour"],
      y: [4, 1],
      marker: {color: ["rgba(204,204,204,1)", "rgba(222,45,38,0.8)"]},
      type: "bar"
    }];
    var layoutForBar = {
      title: "In a Given 60 Minutes...",
      height: 400,
      width: 270,
    }
        Plotly.newPlot("plotlyBarDiv", dataForBar, layoutForBar);
    var list = document.getElementById("tweetlist");
    list.href = "https://twitter.com/TagBattleLists/lists/lovetrumpshate?ref_src=twsrc%5Etfw";
    list.className = "twitter-timeline";
    twttr.widgets.load();
    var keyword = "Trump";
    doNewsSearch(keyword);
  }
}
