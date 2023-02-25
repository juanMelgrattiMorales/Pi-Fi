import { DynamoDB } from "aws-sdk";

const docClient = new DynamoDB.DocumentClient();

export const handler = async (event: any): Promise<any> => {
    const guild = JSON.parse(event.body);
    const params: DynamoDB.DocumentClient.PutItemInput = {
        TableName: "guilds",
        Item: guild
    };
    await docClient.put(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: "Nuevo gremio creado" })
    };
    return response;
};
