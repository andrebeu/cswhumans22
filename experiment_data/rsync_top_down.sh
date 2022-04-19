csw_dir="/Users/abeukers/wd/csw/cswBehavioral"
exp_data_path="${csw_dir}/experiment_data/"

printf "rsync from VM to local\n"
rsync -r -vam "psiturk-abeukers.princeton.edu:~/csw/*" ${exp_data_path}

# copy database from experiment folder to global 
last_exp_folder=$(ls -1 ${exp_data_path} | tail -n 2 | head -n 1)
printf "last experiment folder found: \n${last_exp_folder}\n"

printf "\nconfirm update global database with database in ${last_exp_folder}"
read confirm

cp "${exp_data_path}/${last_exp_folder}/csw_mturk_spring19.db" "../csw_mturk_spring19.db"


