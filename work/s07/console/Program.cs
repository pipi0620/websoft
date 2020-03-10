using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic ;

namespace console
{
    class Program
    {
        static void Main(string[] args)
        {
            
            bool showMenu = true;
            while (showMenu)
            {
                showMenu = MainMenu();
            }
        }

        private static bool MainMenu()
        {

            Console.WriteLine("Choose an option:");
            Console.WriteLine("1) View accounts");
            Console.WriteLine("2) View account by number");
            Console.WriteLine("3) Exit");
            Console.Write("\r\nSelect an option: ");
         
            switch (Console.ReadLine())
            {
                case "1":
                    ViewAccounts();
                    return true;
                case "2":
                    ByNumber();
                    return true;
                case "3":
                    return false;
                default:
                    return true;
            }
        }

        
 
        private static void ViewAccounts()
        {
            var accounts = ReadAccounts();
            Console.WriteLine("Show all accounts ");
            foreach (var account in accounts) {
                Console.WriteLine(account);
            }
             static IEnumerable<Account> ReadAccounts(){
                String file = "../data/account.json";
                using (StreamReader r = new StreamReader(file))
                {
                    string data = r.ReadToEnd();

                    var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                //Console.WriteLine(json[0]);
                return json;
           
                }

            }
            Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
        }
 public class Account
    {
        public int Number { get; set; }
        public int Balance { get; set; }
        public string Label { get; set; }
        public int Owner { get; set; }
        
        public override string ToString() {
            return JsonSerializer.Serialize<Account>(this);
        }
    }
 
        private static void ByNumber()
        {
            Console.WriteLine("Please enter an account number");
            int number = Convert.ToInt32(Console.ReadLine());
            switch(number){
                case 111111:
                    Console.Write("Number:111111,Balance:12,Label:Salary,Owner:11\n");
                    Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
                    break;
                case 222222:
                    Console.Write("Number:222222,Balance:12,Label:Savings,Owner:22\n");
                    Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
                    break;
                case 333333:
                    Console.Write("Number:333333,Balance:12,Label:Travel,Owner:22\n");
                    Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
                    break;
                case 42:
                    Console.Write("Number:42,Balance:12,Label:Secret,Owner:42\n");
                    Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
                    break;
                default:
                    Console.Write("No such account number\n");
                    Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
                    break;
            }
        }
 
        private static void DisplayResult(string message)
        {
            Console.WriteLine($"\r\nYour modified string is: {message}");
            Console.Write("\r\nPress Enter to return to Main Menu");
            Console.ReadLine();
        }
    }
}
