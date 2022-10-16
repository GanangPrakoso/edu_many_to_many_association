**SQ: ASSOCIATION MANY TO MANY**

```json
[
  {
    "id": 1,
    "name": "Harry Potter 1",
    "duration": 160,
    "release_date": "2001-12-19T00:00:00.000Z",
    "cover_url": "https://static.wikia.nocookie.net/warner-bros-entertainment/images/0/0e/Philostone.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Actors": [
      {
        "id": 3,
        "name": "Daniel Radclief",
        "MovieActor": {
          "role": "Harry Potter",
          "actor_id": 3,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 4,
        "name": "Emma Watson",
        "MovieActor": {
          "role": "Harmonie Granger",
          "actor_id": 4,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 5,
        "name": "Rupert Grint",
        "MovieActor": {
          "role": "Ron Weasley",
          "actor_id": 5,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      }
    ]
  }
]
```

**GET ID FROM JUNCTION TABLE**

```json
[
  {
    "id": 1,
    "name": "Harry Potter 1",
    "duration": 160,
    "release_date": "2001-12-19T00:00:00.000Z",
    "cover_url": "https://static.wikia.nocookie.net/warner-bros-entertainment/images/0/0e/Philostone.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Actors": [
      {
        "id": 3,
        "name": "Daniel Radclief",
        "MovieActor": {
          "id": 1,
          "role": "Harry Potter",
          "actor_id": 3,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 4,
        "name": "Emma Watson",
        "MovieActor": {
          "id": 2,
          "role": "Harmonie Granger",
          "actor_id": 4,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 5,
        "name": "Rupert Grint",
        "MovieActor": {
          "id": 3,
          "role": "Ron Weasley",
          "actor_id": 5,
          "movie_id": 1,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      }
    ]
  }
]
```

### CASE 1 (DOUBLE DATA FOREIGN KEY)

> Coba cek **/movies** film **Split**. Tentang dissociative identity disorder
> adanya dua atau lebih status kepribadian yang berbeda dimainkan oleh satu orang di film ini.

<img width="200" src="http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg"/>

```json
[
  {
    "id": 3,
    "name": "Split",
    "duration": 120,
    "release_date": "2017-02-05T00:00:00.000Z",
    "cover_url": "http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Actors": [
      {
        "id": 2,
        "name": "James Mcavoy",
        "MovieActor": {
          "id": 7,
          "role": "Patricia",
          "actor_id": 2,
          "movie_id": 3,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 1,
        "name": "Bruce Wills",
        "MovieActor": {
          "id": 8,
          "role": "Cameo - David Dunn",
          "actor_id": 1,
          "movie_id": 3,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      }
    ]
  }
]
```

**SQ: ASSOCIATION DOUBLE ONE TO MANY**

```json
[
  {
    "id": 3,
    "name": "Split",
    "duration": 120,
    "release_date": "2017-02-05T00:00:00.000Z",
    "cover_url": "http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "MovieActors": [
      {
        "id": 5,
        "role": "Dennis",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 6,
        "role": "Hedwig",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 7,
        "role": "Patricia",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 8,
        "role": "Cameo - David Dunn",
        "actor_id": 1,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 1,
          "name": "Bruce Wills"
        }
      }
    ]
  }
]
```

**Rename Keyname Table (alias)**

```json
[
  {
    "id": 3,
    "name": "Split",
    "duration": 120,
    "release_date": "2017-02-05T00:00:00.000Z",
    "cover_url": "http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Roles": [
      {
        "id": 5,
        "role": "Dennis",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 6,
        "role": "Hedwig",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 7,
        "role": "Patricia",
        "actor_id": 2,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 2,
          "name": "James Mcavoy"
        }
      },
      {
        "id": 8,
        "role": "Cameo - David Dunn",
        "actor_id": 1,
        "movie_id": 3,
        "createdAt": "2022-06-26T16:21:56.277Z",
        "updatedAt": "2022-06-26T16:21:56.277Z",
        "Actor": {
          "id": 1,
          "name": "Bruce Wills"
        }
      }
    ]
  }
]
```

---

**SQ: ASSOCIATION SUPER MANY TO MANY**

menggabungkan cara double one-to-many & many-to-many (ini overkill).

but, something might happen like this..

```js
[
{
    "id": 3,
    "name": "Split", (YANG DICARI SPLIT)
    "duration": 120,
    "release_date": "2017-02-05T00:00:00.000Z",
    "cover_url": "http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Actors": [
        {
            "id": 1,
            "name": "Bruce Wills",
            "MovieActors": [
                {
                    "id": 4,
                    "role": "John McClane", (ini film DIE HARD)
                    "actor_id": 1,
                    "movie_id": 2,
                    "createdAt": "2022-06-26T16:21:56.277Z",
                    "updatedAt": "2022-06-26T16:21:56.277Z"
                },
                {
                    "id": 8,
                    "role": "Cameo - David Dunn",  (ini film SPLIT)
                    "actor_id": 1,
                    "movie_id": 3,
                    "createdAt": "2022-06-26T16:21:56.277Z",
                    "updatedAt": "2022-06-26T16:21:56.277Z"
                }
            ],
            "MovieActor": {
                "id": 8,
                "role": "Cameo - David Dunn",
                "actor_id": 1,
                "movie_id": 3,
                "createdAt": "2022-06-26T16:21:56.277Z",
                "updatedAt": "2022-06-26T16:21:56.277Z"
            }
        },
        {
            "id": 2,
            "name": "James Mcavoy",
            "MovieActors": [
                {
                    "id": 5,
                    "role": "Dennis",
                    "actor_id": 2,
                    "movie_id": 3,
                    "createdAt": "2022-06-26T16:21:56.277Z",
                    "updatedAt": "2022-06-26T16:21:56.277Z"
                },
                {
                    "id": 6,
                    "role": "Hedwig",
                    "actor_id": 2,
                    "movie_id": 3,
                    "createdAt": "2022-06-26T16:21:56.277Z",
                    "updatedAt": "2022-06-26T16:21:56.277Z"
                },
                {
                    "id": 7,
                    "role": "Patricia",
                    "actor_id": 2,
                    "movie_id": 3,
                    "createdAt": "2022-06-26T16:21:56.277Z",
                    "updatedAt": "2022-06-26T16:21:56.277Z"
                }
            ],
            "MovieActor": {
                "id": 5,
                "role": "Dennis",
                "actor_id": 2,
                "movie_id": 3,
                "createdAt": "2022-06-26T16:21:56.277Z",
                "updatedAt": "2022-06-26T16:21:56.277Z"
            }
        }
    ]
}
]
```

### CASE 2 (SUPER MANY TO MANY OVERKILL, RECURSIVE, SLOW)

**SQ: use the association method as needed**

```json
[
  {
    "id": 3,
    "name": "Split",
    "duration": 120,
    "release_date": "2017-02-05T00:00:00.000Z",
    "cover_url": "http://assets.kompasiana.com/items/album/2021/07/20/split-devianart-co-60f6936cb13fde452f3cc682.jpg",
    "createdAt": "2022-06-26T16:21:56.252Z",
    "updatedAt": "2022-06-26T16:21:56.252Z",
    "Actors": [
      {
        "id": 2,
        "name": "James Mcavoy",
        "gender": "male",
        "birth_date": "1979-04-21T00:00:00.000Z",
        "profile_image": "https://static.wikia.nocookie.net/disneyfanon/images/f/f4/James_McAvoy.jpg",
        "createdAt": "2022-06-26T16:21:56.268Z",
        "updatedAt": "2022-06-26T16:21:56.268Z",
        "MovieActor": {
          "id": 7,
          "role": "Patricia",
          "actor_id": 2,
          "movie_id": 3,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      },
      {
        "id": 1,
        "name": "Bruce Wills",
        "gender": "male",
        "birth_date": "1955-03-19T00:00:00.000Z",
        "profile_image": "https://static.wikia.nocookie.net/orville/images/b/bc/Bruce_Willis.jpg",
        "createdAt": "2022-06-26T16:21:56.268Z",
        "updatedAt": "2022-06-26T16:21:56.268Z",
        "MovieActor": {
          "id": 8,
          "role": "Cameo - David Dunn",
          "actor_id": 1,
          "movie_id": 3,
          "createdAt": "2022-06-26T16:21:56.277Z",
          "updatedAt": "2022-06-26T16:21:56.277Z"
        }
      }
    ]
  }
]
```
