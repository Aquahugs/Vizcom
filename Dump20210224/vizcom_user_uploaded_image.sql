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
-- Table structure for table `user_uploaded_image`
--

DROP TABLE IF EXISTS `user_uploaded_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_uploaded_image` (
  `user_uploaded_image_id` int NOT NULL AUTO_INCREMENT,
  `image_uri` varchar(200) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `is_sketch_to_render` varchar(45) NOT NULL,
  `upload_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uuid` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_uploaded_image_id`),
  KEY `fk_u_uui_id_idx` (`uuid`),
  CONSTRAINT `fk_u_uui_id` FOREIGN KEY (`uuid`) REFERENCES `user` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_uploaded_image`
--

LOCK TABLES `user_uploaded_image` WRITE;
/*!40000 ALTER TABLE `user_uploaded_image` DISABLE KEYS */;
INSERT INTO `user_uploaded_image` VALUES (1,'https://storage.googleapis.com/generated-images/file-1595440849448.png','description','0','2021-02-15 17:07:20','0ez0TBUnFCW1SXai1xq0hCFSg2O2'),(2,'https://storage.googleapis.com/generated-images/file-1595440849490.png','description','0','2021-02-15 17:07:20','0ez0TBUnFCW1SXai1xq0hCFSg2O2'),(3,'https://storage.googleapis.com/generated-images/file-1595440849485.png','description','0','2021-02-15 17:07:20','0ez0TBUnFCW1SXai1xq0hCFSg2O2'),(4,'https://storage.googleapis.com/generated-images/file-1595443083274.png','description','0','2021-02-15 17:07:20','0ez0TBUnFCW1SXai1xq0hCFSg2O2');
/*!40000 ALTER TABLE `user_uploaded_image` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-24 18:16:57
