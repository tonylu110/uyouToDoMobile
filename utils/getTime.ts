import moment from 'moment';

function getTime(time: number) {
  const nowTime = moment().format('YYYY-MM-DD');
  const useTime = moment(time).format('YYYY-MM-DD');

  if (nowTime === useTime) {
    return moment(time).format('hh:mm A');
  } else {
    return moment(time).format('YYYY-MM-DD hh:mm A');
  }
}

export default getTime;
