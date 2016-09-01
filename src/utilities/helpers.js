import axios from 'axios';



const fishyGiphy = {
  showRandom : function(){
    return axios.get('http://localhost:3000/giphy');
  },

  saveThis : function(data){
    console.log("saving", data);
    const fetchSettings = {
      method: 'POST',
      body: JSON.stringify(data),
    }
    return fetch("https://feedingfishy.firebaseio.com/savedGif.json", fetchSettings).then((response) => {
      return {response};
    }
  )
},
  viewAll : function(){
    return fetch("https://feedingfishy.firebaseio.com/savedGif.json").then((response) => {
      return response.json();
    })
  },
  delete : function(firebaseId){
    const fetchSettings = {
      method: 'DELETE'
    }
    return fetch("https://feedingfishy.firebaseio.com/savedGif/"+ firebaseId + '.json', fetchSettings).then((response) => {
      return response.json();
    })
  }

}

export default fishyGiphy;
