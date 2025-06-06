FROM maven:3.9.9-sapmachine-21

WORKDIR /backend

COPY . .

EXPOSE 8080

RUN mvn clean install

CMD ["mvn", "spring-boot:run"]