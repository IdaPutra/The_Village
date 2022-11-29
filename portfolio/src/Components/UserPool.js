
import{CognitoUserPool}from "amazon-cognito-identity-js";

const poolData={
    UserPoolId: "us-east-1_dkrauJkv0",
    ClientId: "5qe96uq2jktsk5emaa5r1gm3vj"

}

export default new CognitoUserPool(poolData);