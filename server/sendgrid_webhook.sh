function localtunnel {
  lt -s n1zq1l9SRH --port 5000
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done