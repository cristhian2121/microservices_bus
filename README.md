## Create a Pod

- We need to create a configuration file
- To run this pod we can type: `kubectl apply -f file_name.yaml`

## Deployments

A deployment is a brunch of pods what are deployed togheter like replicates.
for create a deployment we must to run `kubectl apply -f deployment_name.yaml`

![deployments](https://matthewpalmer.net/kubernetes-app-developer/articles/kubernetes-deployment-static.png)

Deployment: controll the pods if some of them failed it'll create a new one ALSO
with Deployment we can controll the deploys to update the app apiVersion \* I we remove the deploy, it removes the pods labelled

    * Update deployments:
        k rollout restart deployment DEPLOYMENT_NAME
    * To get the service from outside: minikube service --url posts-srv
        or localhost/minikube ip:NodePort

As i am using docker driver fo minikube I need to open the terminal to access to the service, example
minikube service post-srv

Note: important verify if minikube is running other way running
minikube start --driver=docker

**Load balancer**: Receives the trafic from the internet and it trafic is passed to
the **ingress controller** to distribute among the pods

## Ingress Controller

production‑grade Ingress controller (daemon) that runs alongside NGINX Open Source or NGINX Plus instances in a Kubernetes environmen. It is a load balancer that is used into to the node, [see more here](https://kubernetes.github.io/ingress-nginx/how-it-works/). To add this functionality to minikube run: `minikube addons enable ingress`

## Usefull command line

- `k get pods` : return the pods
- `k get deployments` : return the deployments
- `k describe deployment DEPLOYMENT_NAME` : Shows s configuration about deployment
- `k delete deployment DEPLOYMENT_NAME` : Deployment named DEPLOYMENT_NAME is deleted
- `k rollout restart deployment DEPLOYMENT_NAME` : restarts deployment and updates configuration
- `kubectl apply -f file_name.yaml` : apply some kubernetes configuration
- `k logs -f POD_NAME`: show pod logs
