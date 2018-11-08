import getTargetingEstimateInfo from './api/overnight/getTargetingEstimateInfo';
import findTaskList from './api/overnight/findTaskList';
import addTask from './api/overnight/addTask';

getTargetingEstimateInfo({
  good: 1
}).then(res => {
  const info = res.data;
  info.adzoneInfoList.map(adzone => {
    adzone.conflictDetailinfos.forEach(e => {});
  });
});

