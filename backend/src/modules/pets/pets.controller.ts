import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
  Query,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PetService } from "./services/pet.service";
import { CreatePetDto, UpdatePetDto } from "./dto/pet.dto";

@Controller("pets")
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  @UseGuards(AuthGuard("jwt"))
  findAll(
    @Req() req: any,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("search") search?: string,
  ) {
    return this.petService.findAll(req.user.id, page, limit, search);
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string, @Req() req: any) {
    return this.petService.findOne(id, req.user.id);
  }

  @Post()
  @UseGuards(AuthGuard("jwt"))
  create(@Body() createPetDto: CreatePetDto, @Req() req: any) {
    return this.petService.create(createPetDto, req.user.id);
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  update(
    @Param("id") id: string,
    @Body() updatePetDto: UpdatePetDto,
    @Req() req: any,
  ) {
    return this.petService.update(id, updatePetDto, req.user.id);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string, @Req() req: any) {
    return this.petService.remove(id, req.user.id);
  }
}
