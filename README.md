# Instagram APIs

IG-API that leverages the Instagram Graph API (for backend usage)

## Installation

Download package.json and npm install or download the whole repo. 



## Usage

Navigate to /configuration/config.js and fill in the variables: graph_api_id, graph_api_secret

```bash
npm start
```

Now the Express server will be running on localhost:1337. Navigate to that address and login using FB/IG. Check terminal for the Access Token and Instagram ID. Copy + paste into app/routes.js into variable "accessToken" and "igID" respectively. Restart the server.

Using Insomnia or any API testing tool:

1. **GET** /instagram/metadata/:username (note: this only works on business + creator Instagram accounts)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  {
    "business_discovery": { 
      "name": "Nike", // name of the IG account (real name field) 
      "followers_count": 118078142, // follower count
      "follows_count": 138, // following count
      "media_count": 767, // media count
      "id": "17841400602400210" // their IG ID
    },
    "id": "17841407391222597" // your own IG ID (that you are requesting to search from)
  }
  ```

2. **GET** /instagram/media (shows 5 recent comments on each media)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  {
  "data": [
    {
      "media_url": "", 
      "comments_count": 23,
      "comments": {
        "data": [
          {
            "timestamp": "2020-07-21T21:31:18+0000",
            "text": "That's not even that big?",
            "id": "" // comment id
          },
          {
            "timestamp": "2020-07-21T21:18:02+0000",
            "text": "the oatmeal cookie at my school could dent the metal trays",
            "id": ""
          },
          {
            "timestamp": "2020-07-21T21:17:38+0000",
            "text": "i love cookies",
            "id": ""
          },
          {
            "timestamp": "2020-07-21T21:13:38+0000",
            "text": "Those are the subway cookies",
            "id": ""
          },
          {
            "timestamp": "2020-07-21T21:11:00+0000",
            "text": "😭😭",
            "id": ""
          }
        ],
        "paging": {
          "cursors": {
            "after": ""
          },
          "next": ""
        }
      },
      "id": "" // media id
    }
    ...
  ```
    
3. **GET** /instagram/stories 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  {
    "data": [] // all the story ids will be stored here
  }
  ```
  
4. **GET** /instagram/stories/:storyid

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  
  ```

5. **GET** /instagram/insights/:mediaid

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  {
    "data": [
      {
        "name": "impressions",
        "period": "lifetime",
        "values": [
          {
            "value": 16834 
          }
        ],
        "title": "Impressions",
        "description": "Total number of times the media object has been seen",
        "id": ""
      },
      {
        "name": "engagement",
        "period": "lifetime",
        "values": [
          {
            "value": 3901 
          }
        ],
        "title": "Engagement",
        "description": "Total number of likes and comments on the media object",
        "id": ""
      },
      {
        "name": "reach",
        "period": "lifetime",
        "values": [
          {
            "value": 16155
          }
        ],
        "title": "Reach",
        "description": "Total number of unique accounts that have seen the media object",
        "id": ""
      },
      {
        "name": "saved",
        "period": "lifetime",
        "values": [
          {
            "value": 384
          }
        ],
        "title": "Saved",
        "description": "Total number of unique accounts that have saved the media object",
        "id": ""
      }
    ]
}
  ```
  
6. **GET** /instagram/audience (insights for the audience)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):
  ```
  {
    "data": [
      {
        "name": "audience_city",
        "period": "lifetime",
        "values": [
          {
            "value": {
              "Manchester, England": 268,
              "Philadelphia, Pennsylvania": 366,
              "Sydney, New South Wales": 919,
              "London, England": 1107,
              "Atlanta, Georgia": 251,
              "Calgary, Alberta": 366,
              "Perth, Western Australia": 366,
              "Montreal, Quebec": 315,
              "Austin, Texas": 296,
              "Phoenix, Arizona": 456,
              "Dublin, Dublin": 238,
              "Pune, Maharashtra": 243,
              "San Jose, California": 298,
              "Karachi, Sindh": 288,
              "Chicago, Illinois": 544,
              "Jakarta, Jakarta": 351,
              "Melbourne, Victoria": 920,
              "Delhi, Delhi": 707,
              "Kuala Lumpur, Kuala Lumpur": 241,
              "Los Angeles, California": 1056,
              "Las Vegas, Nevada": 317,
              "Lahore, Punjab": 262,
              "Brisbane, Queensland": 568,
              "Adelaide, South Australia": 252,
              "Edmonton, Alberta": 360,
              "Dallas, Texas": 316,
              "Denver, Colorado": 272,
              "Vancouver, British Columbia": 236,
              "Orlando, Florida": 252,
              "Birmingham, England": 266,
              "Chennai, Tamil Nadu": 336,
              "Ottawa, Ontario": 349,
              "Toronto, Ontario": 867,
              "San Antonio, Texas": 453,
              "Houston, Texas": 598,
              "Auckland, Auckland Region": 350,
              "New York, New York": 1970,
              "Dubai, Dubai": 274,
              "Santiago, Santiago Metropolitan Region": 348,
              "Mumbai, Maharashtra": 849,
              "Bangalore, Karnataka": 490,
              "Singapore, Singapore": 1372,
              "Hyderabad, Telangana": 246,
              "Miami, Florida": 314,
              "San Diego, California": 455
            },
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Audience City",
        "description": "The cities of this profile's followers",
        "id": ""
      },
      {
        "name": "audience_country",
        "period": "lifetime",
        "values": [
          {
            "value": {
              "RS": 251,
              "NO": 612,
              "DE": 2388,
              "HK": 209,
              "FI": 298,
              "BE": 368,
              "PT": 313,
              "DK": 342,
              "HR": 235,
              "FR": 722,
              "NZ": 877,
              "SA": 388,
              "BR": 868,
              "SE": 807,
              "MA": 233,
              "SG": 1374,
              "DZ": 208,
              "ID": 928,
              "GB": 9276,
              "IE": 655,
              "CA": 7300,
              "US": 58435,
              "EG": 307,
              "IL": 206,
              "AE": 460,
              "CH": 282,
              "IN": 5512,
              "ZA": 803,
              "IQ": 199,
              "CL": 641,
              "GR": 270,
              "MX": 843,
              "IT": 1014,
              "CO": 363,
              "MY": 1094,
              "ES": 666,
              "AR": 690,
              "AT": 357,
              "AU": 4342,
              "PH": 849,
              "PK": 958,
              "PL": 418,
              "RO": 518,
              "TR": 386,
              "NL": 1574
            },
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Audience Country",
        "description": "The countries of this profile's followers",
        "id": ""
      },
      {
        "name": "audience_gender_age",
        "period": "lifetime",
        "values": [
          {
            "value": {
              "U.13-17": 375,
              "U.55-64": 13,
              "M.55-64": 331,
              "U.35-44": 69,
              "F.45-54": 2661,
              "M.35-44": 2517,
              "M.18-24": 17898,
              "F.25-34": 16511,
              "U.65+": 41,
              "U.18-24": 765,
              "M.25-34": 11390,
              "U.45-54": 55,
              "F.65+": 612,
              "F.13-17": 13409,
              "F.55-64": 592,
              "M.65+": 433,
              "M.13-17": 3925,
              "F.35-44": 4474,
              "U.25-34": 327,
              "M.45-54": 1227,
              "F.18-24": 38328
            },
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Gender and Age",
        "description": "The gender and age distribution of this profile's followers",
        "id": ""
      },
      {
        "name": "audience_locale",
        "period": "lifetime",
        "values": [
          {
            "value": {
              "el_GR": 212,
              "ru_RU": 355,
              "it_IT": 924,
              "pl_PL": 418,
              "ro_RO": 413,
              "tr_TR": 336,
              "hi_IN": 76,
              "id_ID": 538,
              "pt_BR": 857,
              "th_TH": 58,
              "ja_JP": 34,
              "en_PI": 82,
              "he_IL": 88,
              "fr_FR": 1299,
              "cs_CZ": 134,
              "hu_HU": 171,
              "de_DE": 2548,
              "ms_MY": 177,
              "nb_NO": 478,
              "zh_TW": 54,
              "sk_SK": 102,
              "es_ES": 1095,
              "nl_NL": 1462,
              "es_LA": 3163,
              "fr_CA": 195,
              "nl_BE": 58,
              "sq_AL": 66,
              "sv_SE": 690,
              "fa_IR": 42,
              "da_DK": 288,
              "sr_RS": 156,
              "bg_BG": 94,
              "vi_VN": 88,
              "fi_FI": 221,
              "hr_HR": 281,
              "ar_AR": 651,
              "en_GB": 19804,
              "ko_KR": 45,
              "et_EE": 47,
              "en_US": 77142,
              "lv_LV": 42,
              "lt_LT": 52,
              "sl_SI": 85,
              "zh_CN": 92,
              "pt_PT": 296
            },
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Location",
        "description": "The locales by country codes of this profile's followers",
        "id": ""
      }
    ]
}
  ```
  
7. **GET** /instagram/profile (profile insights, w/ pagination)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "data": [
      {
        "name": "email_contacts",
        "period": "day",
        "values": [
          {
            "value": 0,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 0,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Email Contacts",
        "description": "Total number of taps on the email link in this profile",
        "id": "17841407391222597\/insights\/email_contacts\/day"
      },
      {
        "name": "get_directions_clicks",
        "period": "day",
        "values": [
          {
            "value": 0,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 0,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Get Directions Clicks",
        "description": "Total number of taps on the directions link in this profile",
        "id": ""
      },
      {
        "name": "impressions",
        "period": "day",
        "values": [
          {
            "value": 1171050,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 689639,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Impressions",
        "description": "Total number of times the Business Account's media objects have been viewed",
        "id": ""
      },
      {
        "name": "profile_views",
        "period": "day",
        "values": [
          {
            "value": 1992,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 1287,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Profile Views",
        "description": "Total number of users who have viewed the Business Account's profile within the specified period",
        "id": ""
      },
      {
        "name": "reach",
        "period": "day",
        "values": [
          {
            "value": 908093,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 569010,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Reach",
        "description": "Total number of times the Business Account's media objects have been uniquely viewed",
        "id": ""
      },
      {
        "name": "website_clicks",
        "period": "day",
        "values": [
          {
            "value": 103,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 33,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Website Clicks",
        "description": "Total number of taps on the website link in this profile",
        "id": ""
      }
    ],
    "paging": {
      "previous": "https:\/\/graph.facebook.com\/v7.0\/17841407391222597\/...",
      "next": "https:\/\/graph.facebook.com\/v7.0\/17841407391222597\/..."
    }
}
  ```
  
8. **GET** /instagram/followers (number of followers in the last 24h)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "data": [
      {
        "name": "follower_count",
        "period": "day",
        "values": [
          {
            "value": 264,
            "end_time": "2020-07-22T07:00:00+0000"
          },
          {
            "value": 177,
            "end_time": "2020-07-23T07:00:00+0000"
          }
        ],
        "title": "Follower Count",
        "description": "Total number of unique accounts following this profile",
        "id": "17841407391222597\/insights\/follower_count\/day"
      }
    ],
    "paging": {
      "previous": "https:\/\/graph.facebook.com\/v7.0\/17841407391222597\/insights?access_token=EAAJ8AMvFSQ0BABO4mo7ALktx3XRqC4ZAOpTjHI595Y6p00VEYM5ZBVKZCYafxuE6Al67ZCYXRCwyVx81fRQOsyR7BKOpLZA4ANZBEtMXFI4JyZAzqbEK4irappJYEAQlDcuG81W94wTZAXZBm6zs5EHaVm7bqKZAwL18KbZBT0ZCLGzuiwZDZD&metric=follower_count&period=day&since=1595194353&until=1595367153",
      "next": "https:\/\/graph.facebook.com\/v7.0\/17841407391222597\/insights?access_token=EAAJ8AMvFSQ0BABO4mo7ALktx3XRqC4ZAOpTjHI595Y6p00VEYM5ZBVKZCYafxuE6Al67ZCYXRCwyVx81fRQOsyR7BKOpLZA4ANZBEtMXFI4JyZAzqbEK4irappJYEAQlDcuG81W94wTZAXZBm6zs5EHaVm7bqKZAwL18KbZBT0ZCLGzuiwZDZD&metric=follower_count&period=day&since=1595539955&until=1595712755"
    }
}
  ```

9. **GET** /instagram/comments/:mediaid (use /instagram/media to get the ID of a media object, then use it here as mediaid, shows replies to comments as well)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "data": [
      {
        "timestamp": "2020-07-23T20:51:39+0000",
        "like_count": 0,
        "username": "lucyrollaa",
        "text": "im from the uk and we don’t do this, we did it in primary but i don’t think many seniors do",
        "id": "" // these are comment ids
      },
      {
        "timestamp": "2020-07-23T20:03:42+0000",
        "like_count": 0,
        "username": "_pandaki_",
        "text": "For the us: It's like frats, don't say you didn't assume that...",
        "id": ""
      },
      {
        "timestamp": "2020-07-23T19:41:43+0000",
        "like_count": 0,
        "username": "shnyss",
        "text": "Aaah, i knew this from enid blyton's books tho",
        "id": ""
      },
      ...
      ]
    }
  ```

10. **GET** /instagram/comments/replies/:commentid (use /instagram/comments/:mediaid to find a commentid, and use it here)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "data": [
      {
        "timestamp": "2020-07-22T18:14:52+0000",
        "text": "",
        "id": ""
      },
      {
        "timestamp": "2020-07-22T18:10:31+0000",
        "text": "",
        "id": ""
      },
      {
        "timestamp": "2020-07-22T18:08:17+0000",
        "text": "",
        "id": ""
      },
      {
        "timestamp": "2020-07-22T17:56:20+0000",
        "text": "",
        "id": ""
      },
      {
        "timestamp": "2020-07-22T15:26:20+0000",
        "text": "",
        "id": ""
      }
    ]
  }
  ```
  
11. **DELETE** /instagram/comments/:commentid

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "success": true
  }
  ```
  
12. **POST** /instagram/comments/:commentid

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response (JSON):

  ```
  {
    "id": "18143337886070908" // comment id
  }

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
