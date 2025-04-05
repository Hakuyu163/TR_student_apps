const startTimeInput = document.getElementById('start-time');
const endTimeInput = document.getElementById('end-time');
const hourlyWageInput = document.getElementById('hourly-wage');
const calculateButton = document.getElementById('calculate');
const workingHoursInput = document.getElementById('working-hours');
const salaryInput = document.getElementById('salary');

calculateButton.addEventListener('click', () => {
  const startTime = startTimeInput.value;
  const endTime = endTimeInput.value;
  const hourlyWage = parseFloat(hourlyWageInput.value);

  if (!startTime || !endTime) {
    alert('出勤時刻と退勤時刻を入力してください。');
    return;
  }

  const workingHours = calculateWorkingHours(startTime, endTime);
  const salary = workingHours * hourlyWage;

  workingHoursInput.value = workingHours.toFixed(2);
  salaryInput.value = salary;
});

function calculateWorkingHours(startTime, endTime) {
  const startDate = new Date(`2023-10-27T${startTime}`);
  const endDate = new Date(`2023-10-27T${endTime}`);

  if (endDate < startDate) {
    endDate.setDate(endDate.getDate() + 1);
  }

  const diff = endDate.getTime() - startDate.getTime();
  return diff / (1000 * 60 * 60);
}