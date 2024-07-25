package com.lulamile.firstSpringBootApp.controller;

import com.lulamile.firstSpringBootApp.entity.Address;
import com.lulamile.firstSpringBootApp.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AddressController {
    @Autowired
    private AddressService addressService;
    @CrossOrigin
    @PostMapping(value = "/save-address", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public Address saveAddress(@RequestBody Address address){return addressService.saveAddress(address);}
    @CrossOrigin
    @GetMapping("/get-addresses")
    public List<Address> fetchAddresses(){return addressService.fetchAddresses();}
    @CrossOrigin
    @GetMapping("/get-address/{id}")
    public Address fetchAddressById(@PathVariable("id") int addressId){return addressService.fetchAddressById(addressId);}
    @DeleteMapping("/delete-address/{id}")
    public String deleteAddress(@PathVariable("id") int addressId){return addressService.deleteAddress(addressId);}
    @PutMapping("/update-address/{id}")
    public Address updateAddress(@PathVariable("id") int addressId,@RequestBody Address address){return addressService.updateAddress(addressId,address);}
}
