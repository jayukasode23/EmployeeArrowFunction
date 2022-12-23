const IS_ABSENT=0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck==IS_ABSENT)
    {
        console.log("EMPLOYEE IS ABSENT.");
    }
    else
    {
        console.log("EMPLOYEE IS PRESENT.");
    }

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOUR=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;
{
    function getWorkingHours(empCheck)
    {
        switch(empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOUR;
            default:
                return 0;
        }
    }
    function calcDailyWage(empHrs)
    {
        return empHrs * WAGE_PER_HOUR;
    }
    {
        let empHrs=0;
        let totalEmpHrs=0;
        let totalWorkingDays=0;
        let empDailyWageArr=new Array();
        let empDailyWageMap=new Map();
        let empDailyHrsMap=new Map();
    while(totalEmpHrs<= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
        {
            totalWorkingDays++;
            let empCheck=Math.floor(Math.random() * 10) % 3;
            let empHrs=getWorkingHours(empCheck);
            totalEmpHrs += empHrs;;
            empDailyWageArr.push(calcDailyWage(empHrs));
            empDailyHrsMap.set(totalWorkingDays,empHrs);
            empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
        }
        let empWage = calcDailyWage(totalEmpHrs);
        console.log("UC6 - Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + empWage);

        //Array Helper Functions
        //UC 7A - Calc total Wage using Array forEach traversal or reduce method
        let totEmpWage=0;
        function sum(dailyWage)
        {
            totEmpWage += dailyWage;
        }
        empDailyWageArr.forEach(sum);
        console.log("\nUC7A - Total Days: " + totalWorkingDays + "\nTotal Hours: " + totalEmpHrs +"\nEmployee Wage: " + totEmpWage);

        function totalWages(totalWage,dailyWage){
            return totalWage + dailyWage;
        }
        console.log("UC7A - Emp Wage With Reduce: "+empDailyWageArr.reduce(totalWages,0));

        //UC 7B - Show the Day along with Daily Wage using Array map
        let dailyCntr = 0;
        function mapDayWithWage(dailyWage){
            dailyCntr++;
            return dailyCntr + " = " + dailyWage;
        }
        let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
        console.log("\nUC7B - Daily Wage Map");
        console.log(mapDayWithWageArr);

        //UC 7C-Show Days When Full Time Wage of 160 Were Earned
        function fulltimeWage(dailyWage) {
            return dailyWage.includes("160");
        }
        let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
        console.log("\nUC7C - Daily Wage Filter When Fulltime Wage Earned");
        console.log(fullDayWageArr);

        //UC 7D - Find The First Occurrence When Full Time Wage Was Earned Usinf Find Function 
        function findFulltimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        console.log("\nUC 7D - First Time Fulltime Wage Was Earned On Day: "+ mapDayWithWageArr.find(findFulltimeWage));

        //UC 7E - Check if Every Element of Fulltime Wage is truely holding Fulltime Wage
        function isAllFulltimeWage(dailyWage){
            return dailyWage.includes("160");
        }
        console.log("\nUC 7E - Check All Element Have Full Time Wage: "+fullDayWageArr.every(isAllFulltimeWage));

        //UC 7F - Check if there is any Part Time Wage
        function isAnyPartTimeWage(dailyWage){
            return dailyWage.includes("80");
        }
        console.log("\nUC 7F - Check If Any Part Time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

        //UC 7G - Find The Number Of Days The Employee Worked
        function totalDaysWorked(numOfDays,dailyWage){
            if(dailyWage > 0) return numOfDays+1;
            return numOfDays;
        }
        console.log("\nUC 7G - Number Of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));
    }
}