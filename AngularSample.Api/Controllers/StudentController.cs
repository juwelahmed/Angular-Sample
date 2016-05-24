using AngularSample.Api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Xml.Linq;

namespace AngularSample.Api.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class StudentController : ApiController
    {
        XElement _db;
        string _dbPath;
        public StudentController()
        {
            _dbPath = string.Format("{0}{1}", AppDomain.CurrentDomain.BaseDirectory, "studentdb.xml");
            var fileExist = File.Exists(_dbPath);
            if (fileExist)
            {
                _db = XElement.Load(_dbPath);
            }
            else
            {
                _db = new XElement("root",
                    new XElement("students"));
                _db.Save(_dbPath);
            }
        }
        // GET api/student
        public IHttpActionResult Get()
        {
            var students = _db.Elements("students").Elements("student")
                .Select(x => new Student
                {
                    Id = Convert.ToInt32(x.Element("id").Value),
                    Name = x.Element("name").Value,
                    Address = x.Element("address").Value,
                    EnrollDate = Convert.ToDateTime(x.Element("enrollDate").Value),
                    Email = x.Element("email").Value
                }).ToList();

            return Ok(students);
        }

        // GET api/student/5
        public IHttpActionResult Get(int id)
        {
            var student = _db.Elements("students").Elements("student")
                .Where(x => Convert.ToInt32(x.Element("id").Value) == id)
                .Select(x => new Student
                {
                    Id = Convert.ToInt32(x.Element("id").Value),
                    Name = x.Element("name").Value,
                    Address = x.Element("address").Value,
                    EnrollDate = Convert.ToDateTime(x.Element("enrollDate").Value),
                    Email = x.Element("email").Value
                }).FirstOrDefault();

            return Ok(student);
        }

        // POST api/student
        public IHttpActionResult Post([FromBody]Student student)
        {
            if (student == null)
            {
                return BadRequest();
            }

            var id = _db.Elements("students").Elements("student").ToList().Count + 1;

            XElement element = new XElement("student",
                new XElement("id", id),
                new XElement("name", student.Name),
                new XElement("email", student.Email),
                new XElement("enrollDate", student.EnrollDate),
                new XElement("address", student.Address));

            _db.Elements("students").LastOrDefault().Add(element);
            _db.Save(_dbPath);

            return Created<Student>(Request.RequestUri + id.ToString(), student);
        }

        // PUT api/student/5
        public IHttpActionResult Put(int id, [FromBody]Student student)
        {
            if (student == null)
            {
                return BadRequest();
            }

            var updateTo = _db.Elements("students")
                .Elements("student")
                .Where(x => Convert.ToInt32(x.Element("id").Value) == id)
                .First();

            updateTo.SetElementValue("name", student.Name);
            updateTo.SetElementValue("email", student.Email);
            updateTo.SetElementValue("enrollDate", student.EnrollDate);
            updateTo.SetElementValue("address", student.Address);

            _db.Save(_dbPath);

            return Ok(updateTo);
        }

        // DELETE api/student/5
        public IHttpActionResult Delete(int id)
        {
            var item = _db.Elements("students")
                .Elements("student")
                .Where(x => Convert.ToInt32(x.Element("id").Value) == id)
                .FirstOrDefault();

            if(item == null)
            {
                return BadRequest();
            }

            item.Remove();
            _db.Save(_dbPath);

            return Ok();
        }
    }
}
