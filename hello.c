#include <stdio.h>
#include <math.h>


int main() {
    
double num1, num2, num3, num4, num5, num6, num7, total, stock, Savings;
double  final;

printf("Enter your Total Mounthly Income: ");
scanf("%lf", &num1);

printf("Enter Total Amount Invested in all Stock, Mutual funds: ");
scanf("%lf", &num2);

printf("Enter Total Amount Spent on Food & Grocery, Utilities, Entertainment, Personal care, Education: ");
scanf("%lf", &num3);

printf("Enter Amount of Home Rent (if not applicable, please enter 0): ");
scanf("%lf", &num4);

printf("Enter Total Amount Spent on Loan, Insurence & Emi's (if not applicable, please enter 0): ");
scanf("%lf", &num5);

printf("Enter Total Amount Invested in Saving, FD: ");
scanf("%lf", &num6);

printf("Enter Other Expences: ");
scanf("%lf", &num7);


total = num2 + num3 + num4 + num5 + num7;
final = (total / num1) * 100;
Savings = num1 - total;

 if (final < 40) {
        printf("Low risk: %.2lf%% of income spent on expenses.\n", final);
    } else if (final < 80) {
        printf("Medium risk: %.2lf%% of income spent on expenses.\n", final);
    } else {
        printf("High risk: %.2lf%% of income spent on expenses.\n\n", final);
    }

stock = (num2 / num1) * 100;

if (stock > 25) {
        printf("You should Invest upto 25%% on Stocks or Mutual Funds of your total income, But you are Investing %.2lf%% of income.\n\n", stock);
    }
    else
    {
        printf("You should Invest atleast 15%% of your total income on Stocks or Mutual Funds, We recommend to Invest in BSE SENSEX.*\n");
    }
    

    printf("Your Savings are %.2lf", Savings);

return 0;

}