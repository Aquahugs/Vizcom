-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
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
  PRIMARY KEY (`collection_image_id`),
  KEY `uuid_idx` (`uuid`),
  KEY `user_upload_id_idx` (`user_uploaded_image_id`),
  KEY `generated_image_id_idx` (`generated_image_id`),
  CONSTRAINT `fk_gi_ci_id` FOREIGN KEY (`generated_image_id`) REFERENCES `generated_image` (`generated_image_id`),
  CONSTRAINT `fk_u_ci_id` FOREIGN KEY (`uuid`) REFERENCES `user` (`uuid`),
  CONSTRAINT `fk_uui_ci_id` FOREIGN KEY (`user_uploaded_image_id`) REFERENCES `user_uploaded_image` (`user_uploaded_image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection_image`
--

LOCK TABLES `collection_image` WRITE;
/*!40000 ALTER TABLE `collection_image` DISABLE KEYS */;
INSERT INTO `collection_image` VALUES (1,'2021-02-10 11:27:06','9hRzb2ZXtBhrovvMIROk3hvZBZp2',13,NULL),(2,'2021-02-10 11:37:16','9hRzb2ZXtBhrovvMIROk3hvZBZp2',19,NULL),(3,'2021-02-10 11:37:16','9hRzb2ZXtBhrovvMIROk3hvZBZp2',20,NULL),(4,'2021-02-10 11:37:16','9hRzb2ZXtBhrovvMIROk3hvZBZp2',21,NULL),(5,'2021-02-10 11:37:16','9hRzb2ZXtBhrovvMIROk3hvZBZp2',22,NULL),(6,'2021-02-10 11:37:16','9hRzb2ZXtBhrovvMIROk3hvZBZp2',23,NULL),(7,'2021-02-15 17:11:37','9hRzb2ZXtBhrovvMIROk3hvZBZp2',NULL,1),(8,'2021-02-15 17:11:37','9hRzb2ZXtBhrovvMIROk3hvZBZp2',NULL,2),(9,'2021-02-15 17:11:37','9hRzb2ZXtBhrovvMIROk3hvZBZp2',NULL,3),(10,'2021-02-15 17:11:37','9hRzb2ZXtBhrovvMIROk3hvZBZp2',NULL,4),(11,'2021-02-15 17:11:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',19,NULL),(12,'2021-02-15 17:11:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',20,NULL),(13,'2021-02-15 17:11:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',21,NULL),(14,'2021-02-15 17:11:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',22,NULL),(15,'2021-02-15 17:11:48','9hRzb2ZXtBhrovvMIROk3hvZBZp2',23,NULL);
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

-- Dump completed on 2021-02-24 18:16:58
