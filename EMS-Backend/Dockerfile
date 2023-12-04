# Use an official OpenJDK runtime as a parent image
FROM openjdk:17

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY target/EMS-Backend-0.0.1-SNAPSHOT.jar /app

# Specify the command to run on container start
CMD ["java", "-jar", "EMS-Backend-0.0.1-SNAPSHOT.jar"]
