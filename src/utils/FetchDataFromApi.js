import Axios from 'axios';

export async function getStudents() {
  return await Axios.get('http://192.168.1.111:3000/students/334322')
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export async function postImage(imageData) {
  const data = {
    base64: imageData,
  };
  return await Axios.post('http://192.168.1.111:3000/images', data, null)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}

export async function postAnswer(data) {
  return await Axios.post('http://192.168.1.111:3000/answers', data, null)
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}
export async function getResults(examNo, studentNo) {
  return await Axios.get(
    'http://192.168.1.111:3000/exams/' + examNo + '/' + studentNo,
    null,
    null,
  )
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}
export async function getAllResults(examNo) {
  return await Axios.get(
    'http://192.168.1.111:3000/exams/' + examNo,
    null,
    null,
  )
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      return err;
    });
}
