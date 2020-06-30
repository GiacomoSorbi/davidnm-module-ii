import { companies } from "../constants";


//SEARCH
//Get Companies From Json File
export const searchCompany = async searchBox => {

    //Get Entered Data
    let fits = companies.filter(company => {
      const regex = new RegExp(`^${searchBox}`, 'gi');
      return company.Company_Name.match(regex);
    });
  
    if (searchBox.length === 0) {
      fits = [];
      document.getElementById('companyList').innerHTML = '';
    }
  
    outputHtml(fits);
  };
  
  // show results in HTML
  const outputHtml = fits => {
    if (fits.length > 0) {
        fits=fits.slice(0, 5);
      const html = fits.map(
          fit => `
       <div class="row">
       <a href="./shares.html?share=${fit.Company_Name}">${fit.Company_Name} (${fit.ICB_Industry})</a>
     </div>
       `
        )
        .join('');
      document.getElementById('companyList').innerHTML = '';
      document.getElementById('companyList').innerHTML = html;
    }
  };
  

