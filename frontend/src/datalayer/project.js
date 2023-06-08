import axios from 'axios';
// import qs from 'qs';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const apiUrl = process.env.BACKEND_URL;

export const getProjectSlugs = async () => {

  const res = await axios.get(`${apiUrl}/projects`, {
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': process.env.BACKEND_URL,
    }
  });
  const rawSlugs = res.data;
  
  const slugs = rawSlugs.map((rawSlug) => {
    return rawSlug.slug;
  });
  
  return slugs;
};

export const getProjectBySlug = async (slug) => {
  if (slug == '') {
    return ''
  }
   console.log(`${apiUrl}/projects/${slug} ------------ datalayer`);
  const res = await axios.get(`${apiUrl}/projects/${slug}`, {
    headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': process.env.BACKEND_URL,
    }
  });
  const rawActions = res.data;
  return rawActions;
};

