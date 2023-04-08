Deployment: controll the pods if some of them failed it'll create a new one ALSO 
    with Deployment we can controll the deploys to update the app apiVersion
    * I we remove the deploy, it removes the pods labelled

    * Update deployments:
        k rollout restart deployment DEPLOYMENT_NAME
    * To get the service from outside: minikube service --url posts-srv
        or localhost/minikube ip:NodePort



As i am using docker driver fo minikube I need to open the terminal to access to the service, example
    minikube service post-srv