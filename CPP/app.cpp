#include <bits/stdc++.h>
#include<iostream>
#include<fstream>
#include<string>
#include<vector>

using namespace std;

class Data{
    public:
    vector<string> address_data;

    Data(vector<string> defaultData){
        address_data = defaultData;
    }

    void viewdata(){
        for(auto i :address_data)
            cout<<i<<endl;
    }
    string Spaceremove(string s){
        s.erase(remove(s.begin(), s.end(),' '),s.end());
        return s;
    }

    vector<vector<string>> getData(){
            string lastName,firstName,mname,nick,houseNo,streetAddress,city,state,zip;
            string lName,fName,middleName,nickName,HNo,streetAdd,city_name,state_name,zipCode;
                vector<vector<string>> Final;
             for(auto row: address_data){
                lastName = (row.substr(0, 15));
                lName = Spaceremove(lastName);

                firstName=(row.substr(15,15));
                fName = Spaceremove(firstName);

                mname=(row.substr(30,15));
                middleName = Spaceremove(mname);

                nick=(row.substr(45,10));
                nickName = Spaceremove(nick);

                houseNo = (row.substr(55,5));
                HNo = Spaceremove(houseNo);

                streetAddress = (row.substr(60,20));
                streetAdd = Spaceremove(streetAddress);

                city = (row.substr(80,15));
                city_name = Spaceremove(city);

                state = (row.substr(95,15));
                state_name = Spaceremove(state);

                zip = (row.substr(110,6));
                zipCode = Spaceremove(zip);

                string name=fName+" "+ lName;
                string address1= HNo + " " + streetAdd;
                string address2 = city_name + ", " + state_name + " "+ zipCode;

                vector<string> dump;
                dump.push_back(name);
                dump.push_back(address1);
                dump.push_back(address2);
                Final.push_back(dump);
                
        }

        return Final;
    }

    void env_format(){
        vector<vector<string>> read = getData();
        for(vector<string> vac : read){
            for(int a =0;a<vac.size();a++){

                cout << vac[a];
                if(a!=2){
                    cout<<",";
                }
                cout<<endl;
            }
           
        }

    }

    void fixed_format()
    {
        vector<vector<string>> res = getData();
        string sec;
        for(vector<string> vec : res)
        {
            int ke=0;
            for(ke=0;ke<vec.size();ke++)
            {
                sec = vec[ke];
                int len=0;
                switch (ke)
                {
                case 0:
                    cout<< sec<< " ";
                    len = sec.length();
                    for(int i=0;i<30-sec.length();i++){
                        cout<<" ";
                    }
                    break;
                case 1:
                    cout<< sec<< " ";
                    len = sec.length();
                    for(int i=0;i<25-sec.length();i++){
                        cout<<" ";
                    }
                    break;
                   
                case 2:
                    cout<< sec<< " ";
                    len = sec.length();
                    for(int i=0;i<36-sec.length();i++){
                        cout<<" ";
                    }
                    break;
                    
                
                }
        }
        cout<<endl;
    }
    }

    void fixed_format_csv()
    {
        cout<<"Fixed CSV";
        cout<<endl;
        vector<vector<string>> read = getData();
        for(vector<string> vac : read){
            for(int a =0;a<vac.size();a++){

                cout << vac[a];
                if(a!=2){
                    cout<<",";
                }
                
            }
           
        }

    }
};

vector <string> readFile(const string& fileName){
    ifstream source;
    source.open(fileName);
    vector <string> lines;
    string line;
    while(getline(source, line))
    {
        lines.push_back(line);
    }
     return lines;
}
int main(int argc, char ** argv)
{
    vector <string> fileData;

    if(argv[1]){
    string inputFile(argv[2]);
     fileData = readFile(inputFile);
    }
    string format=" ";
    

    if(argv[3]){
        format = argv[4];
    }
    

    // // Check vector
    Data d1(fileData);
    // d1.viewdata();

    if(format=="envelope"){
        d1.env_format();
    }
    else if (format=="fixed_length"){
        d1.fixed_format();
    }
    else{
    d1.fixed_format_csv();
    }

   
return 0;
}