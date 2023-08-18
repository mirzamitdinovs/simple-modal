This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# A SAMPLE OF MY TECHNICAL WRITING

## Simple gitlab readme documentation i created for a microservice api

# Get School Course Users

Get users by the school course,

**URL** : `/function/api_url`

**Method** : `POST`

**Auth required** : FALSE

**Permissions required** : None

**Data constraints**

Required Field: Provide Course Id to get all users.

```json
{
	"course_id": "number"
}
```

Optional Field: Provide User Role.
Accepted Values: `['professor', 'student']`

```json
{
	"user_role": "string"
}
```

Optional Field: Provide Username.
`User id starting with 500`

```json
{
	"username": "number"
}
```

Optional Field: Provide User Email.

```json
{
	"email": "string"
}
```

Optional Field: Provide User ID.

```json
{
	"id": "number"
}
```

Optional Field: Provide User First Name.

```json
{
	"first_name": "string"
}
```

Optional Field: Provide User Last Name.

```json
{
	"last_name": "string"
}
```

Optional Field: Provide User Status. By defult it return active users
Accepted Values: `1 - true, 0 - false`

```json
{
	"active": "boolean"
}
```

**Data example** Only course_id field is required.

```json
{
	"course_id": 1,
	"id": 1,
	"username": 500101010,
	"first_name": "Alani ",
	"last_name": "Fowler",
	"email": "johndoe@gmail.com",
	"user_role": "professor",
	"active": 1
}
```

## Success Response

**Code** : `200 OK`

**Content examples**

With the correct course_id, it returns an object where status is 200, message is success and response with the list of all users of the current course.

```json
[
	{
		"id": 1,
		"username": 500101010,
		"first_name": "Alani ",
		"last_name": "Fowler",
		"email": "johndoe@gmail.com",
		"user_role": "professor",
		"active": 1,
		"time_created": "2022-01-06T01:35:22.000Z",
		"time_updated": "2022-01-06T01:35:22.000Z",
		"user_settings_json": {},
		"services": [
			{
				"id": 1,
				"service_id": "portal",
				"name": ""
			},
			{
				"id": 2,
				"service_id": "gitlab",
				"name": ""
			},
			{
				"id": 3,
				"service_id": "vscode",
				"name": ""
			}
		]
	},
	{
		"id": 4,
		"username": 500101014,
		"first_name": "Alyssa",
		"last_name": "Meyer",
		"email": "a.meyer@gmail.com",
		"user_role": "student",
		"active": 1,
		"time_created": "2022-01-06T01:35:22.000Z",
		"time_updated": "2022-01-06T01:35:22.000Z",
		"user_settings_json": {},
		"services": [
			{
				"id": 2,
				"service_id": "gitlab",
				"name": ""
			},
			{
				"id": 3,
				"service_id": "vscode",
				"name": ""
			}
		]
	}
]
```

Empty list will be returned if there is no users matched with the provided parameters.

```json
{
	"status": 200,
	"message": "success",
	"response": []
}
```

## Error Responses

**Condition** : If `empty parameters` is provided.

**Code** : `200`

**Content** : `
{
  "status": 400,
  "message": "No input detected!",
  "response": []
}`

### Or

**Condition** : If no `course_id` is provided.

**Code** : `200`

**Content** : `{
  "status": 400,
  "message": "Course Id required",
  "response": []
}`

### Or

**Condition** : If `invalid json` is sent as a parameter.

**Code** : `200`

**Content** : `{ status: 400, message: 'Incorrect JSON format', response: [] }`

### Or

**Condition** : If `invalid parameter` is sent.Example: `{"role":"teacher"}`

**Code** : `200`

**Content** : `{
  "status": 400,
  "message": "Can not accept role as a parameter",
  "response": []
}`

### Or

**Condition** : If an err is occured in the server, it either returns default `Internal server error` or specific error message.

**Code** : `200`

**Content** : `{
  "status": 500,
  "message": "Internal server error'",
  "response": []
}`
