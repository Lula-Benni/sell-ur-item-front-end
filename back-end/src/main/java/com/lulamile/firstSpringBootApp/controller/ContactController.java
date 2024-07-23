package com.lulamile.firstSpringBootApp.controller;

import com.lulamile.firstSpringBootApp.entity.Contact;
import com.lulamile.firstSpringBootApp.entity.Profile;
import com.lulamile.firstSpringBootApp.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;
    @PostMapping("/save-contact")
    public Contact saveContact(@RequestBody Contact contact){return contactService.saveContact(contact);}
    @GetMapping("/get-contact")
    public List<Contact> fetchContacts(){return contactService.fetchContacts();}
    @GetMapping("/get-contact/{id}")
    public Contact fetchContactById(@PathVariable("id") int contactId){return contactService.fetchContactById(contactId);}
    @DeleteMapping("/delete-contact/{id}")
    public String deleteContact(@PathVariable("id") int contactId){return contactService.deleteContact(contactId);}
    @PutMapping("/update-contact/{id}")
    public Contact updateContact(@PathVariable("id") int contactId,@RequestBody Contact contact){return contactService.updateContact(contactId,contact);}
    @GetMapping("/get-contact/email/{email}")
    public Contact fetchContactByEmail(@PathVariable("email") String email){
        return contactService.fetchContactByEmail(email);
    }
}
