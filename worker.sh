curl -LO https://download.cuberite.org/linux-x86_64/Cuberite.tar.gz
tar xvf Cuberite.tar.gz

echo "[WebAdmin]
Ports=echo ${$CUBERITE_WEBADMIN_PORT:-8080}
Enabled=1

[User:admin]
Password=$CUBERITE_WEBADMIN_PASSWORD" >> webadmin.ini

./Cuberite
