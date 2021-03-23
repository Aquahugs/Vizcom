-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: vizcom
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collection_image`
--

DROP TABLE IF EXISTS `collection_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection_image` (
  `collection_image_id` int NOT NULL AUTO_INCREMENT,
  `collected_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `uuid` varchar(45) NOT NULL,
  `generated_image_id` int DEFAULT NULL,
  `user_uploaded_image_id` int DEFAULT NULL,
  `image_uri` varchar(150) NOT NULL,
  PRIMARY KEY (`collection_image_id`),
  KEY `uuid_idx` (`uuid`),
  KEY `user_upload_id_idx` (`user_uploaded_image_id`),
  KEY `generated_image_id_idx` (`generated_image_id`),
  CONSTRAINT `fk_gi_ci_id` FOREIGN KEY (`generated_image_id`) REFERENCES `generated_image` (`generated_image_id`),
  CONSTRAINT `fk_u_ci_id` FOREIGN KEY (`uuid`) REFERENCES `user` (`uuid`),
  CONSTRAINT `fk_uui_ci_id` FOREIGN KEY (`user_uploaded_image_id`) REFERENCES `user_uploaded_image` (`user_uploaded_image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection_image`
--

LOCK TABLES `collection_image` WRITE;
/*!40000 ALTER TABLE `collection_image` DISABLE KEYS */;
INSERT INTO `collection_image` VALUES (16,'2021-02-27 11:38:15','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11093,NULL,'https://storage.googleapis.com/generated-images/file-1598039298295.png'),(38,'2021-03-08 23:05:21','9hRzb2ZXtBhrovvMIROk3hvZBZp2',7654,NULL,'https://storage.googleapis.com/generated-images/file-1595617759876.png'),(40,'2021-03-08 23:10:33','9hRzb2ZXtBhrovvMIROk3hvZBZp2',15988,NULL,'https://storage.googleapis.com/generated-images/file-1598899509350.png'),(41,'2021-03-08 23:20:33','9hRzb2ZXtBhrovvMIROk3hvZBZp2',2933,NULL,'https://storage.googleapis.com/generated-images/file-1595529679126.png'),(54,'2021-03-08 23:53:45','9hRzb2ZXtBhrovvMIROk3hvZBZp2',2750,NULL,'https://storage.googleapis.com/generated-images/file-1595527691115.png'),(55,'2021-03-08 23:55:00','9hRzb2ZXtBhrovvMIROk3hvZBZp2',21170,NULL,'https://storage.googleapis.com/generated-images/file-1599173324466.png'),(60,'2021-03-09 09:36:58','9hRzb2ZXtBhrovvMIROk3hvZBZp2',19919,NULL,'https://storage.googleapis.com/generated-images/file-1599169328034.png'),(61,'2021-03-09 09:40:42','9hRzb2ZXtBhrovvMIROk3hvZBZp2',9043,NULL,'https://storage.googleapis.com/generated-images/file-1595626630486.png'),(62,'2021-03-09 09:41:09','9hRzb2ZXtBhrovvMIROk3hvZBZp2',23899,NULL,'https://storage.googleapis.com/generated-images/file-1599184621028.png'),(63,'2021-03-09 09:41:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',15801,NULL,'https://storage.googleapis.com/generated-images/file-1598492625535.png'),(65,'2021-03-14 21:37:27','9hRzb2ZXtBhrovvMIROk3hvZBZp2',17291,NULL,'https://storage.googleapis.com/generated-images/file-1598902952613.png'),(66,'2021-03-14 21:38:01','9hRzb2ZXtBhrovvMIROk3hvZBZp2',7210,NULL,'https://storage.googleapis.com/generated-images/file-1595615533783.png'),(67,'2021-03-14 21:46:42','9hRzb2ZXtBhrovvMIROk3hvZBZp2',10221,NULL,'https://storage.googleapis.com/generated-images/file-1595645872016.png'),(68,'2021-03-14 21:47:00','9hRzb2ZXtBhrovvMIROk3hvZBZp2',3919,NULL,'https://storage.googleapis.com/generated-images/file-1595559334565.png'),(69,'2021-03-15 20:05:44','9hRzb2ZXtBhrovvMIROk3hvZBZp2',21899,NULL,'https://storage.googleapis.com/generated-images/file-1599175116509.png'),(70,'2021-03-15 20:47:27','9hRzb2ZXtBhrovvMIROk3hvZBZp2',5420,NULL,'https://storage.googleapis.com/generated-images/file-1595568555113.png'),(71,'2021-03-15 20:48:55','9hRzb2ZXtBhrovvMIROk3hvZBZp2',4740,NULL,'https://storage.googleapis.com/generated-images/file-1595564622186.png'),(72,'2021-03-15 21:25:09','9hRzb2ZXtBhrovvMIROk3hvZBZp2',23836,NULL,'https://storage.googleapis.com/generated-images/file-1599184338378.png'),(73,'2021-03-15 21:26:22','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11826,NULL,'https://storage.googleapis.com/generated-images/file-1598058666138.png'),(74,'2021-03-15 21:26:24','9hRzb2ZXtBhrovvMIROk3hvZBZp2',17452,NULL,'https://storage.googleapis.com/generated-images/file-1598903135591.png'),(75,'2021-03-15 21:29:51','9hRzb2ZXtBhrovvMIROk3hvZBZp2',2887,NULL,'https://storage.googleapis.com/generated-images/file-1595529679185.png'),(76,'2021-03-15 21:30:55','9hRzb2ZXtBhrovvMIROk3hvZBZp2',19571,NULL,'https://storage.googleapis.com/generated-images/file-1599104685798.png'),(77,'2021-03-15 21:31:00','9hRzb2ZXtBhrovvMIROk3hvZBZp2',23460,NULL,'https://storage.googleapis.com/generated-images/file-1599182791513.png'),(78,'2021-03-21 13:24:51','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11093,NULL,'https://storage.googleapis.com/generated-images/file-1598039298295.png'),(79,'2021-03-21 13:25:58','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11093,NULL,'https://storage.googleapis.com/generated-images/file-1598039298295.png'),(80,'2021-03-21 13:26:03','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11093,NULL,'https://storage.googleapis.com/generated-images/file-1598039298295.png'),(81,'2021-03-21 13:28:45','9hRzb2ZXtBhrovvMIROk3hvZBZp2',15989,NULL,'https://storage.googleapis.com/generated-images/file-1598899509366.png'),(82,'2021-03-21 14:17:15','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11093,NULL,'https://storage.googleapis.com/generated-images/file-1598039298295.png'),(83,'2021-03-22 20:25:19','9hRzb2ZXtBhrovvMIROk3hvZBZp2',17947,NULL,'https://storage.googleapis.com/generated-images/file-1599100022860.png'),(84,'2021-03-22 21:41:53','9hRzb2ZXtBhrovvMIROk3hvZBZp2',11732,NULL,'https://storage.googleapis.com/generated-images/file-1598057763421.png');
/*!40000 ALTER TABLE `collection_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-23 17:12:20
