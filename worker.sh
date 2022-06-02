curl -LO https://download.cuberite.org/linux-x86_64/Cuberite.tar.gz
tar xvf Cuberite.tar.gz

echo "[WebAdmin]
Ports=$CUBERITE_WEBADMIN_PORT
Enabled=1

[User:admin]
Password=$CUBERITE_WEBADMIN_PASSWORD" >> webadmin.ini

./Cuberite
