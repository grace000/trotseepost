import axios from 'axios'

const Helper = {
	
	runVideoQuery: function() {
    return axios.get("/videos");
  },
}

export default Helper;