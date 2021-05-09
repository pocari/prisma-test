setup
```
npm install
```

setup mysql
```
docker-comopse up
```

setup schema
```
echo 'DATABASE_URL="mysql://root:@127.0.0.1:23306/prisma-sample?charset=utf8mb4"' > .env
npx prisma migrate dev --name init
```

run sample
```
npx ts-node index.ts
```